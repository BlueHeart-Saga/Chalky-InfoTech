// Base API configuration

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net";
const COMPANY_ID = process.env.NEXT_PUBLIC_COMPANY_ID || "CK-666713";

const API_PREFIX = "/api";

class ApiService {
  private baseUrl: string;
  private companyId: string;
  private cache: Map<string, any>;
  private pendingRequests: Map<string, Promise<any>>;

  constructor() {
    this.baseUrl = API_BASE_URL.replace(/\/$/, "");
    this.companyId = COMPANY_ID;
    this.cache = new Map();
    this.pendingRequests = new Map();
  }

  // Helper for API calls
  async fetchApi(endpoint: string, options: any = {}) {
    const url = `${this.baseUrl}${API_PREFIX}${endpoint}`;
    const cacheKey = `${url}:${options.method || "GET"}:${options.body || ""}`;

    // return cached data
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // return pending request
    if (this.pendingRequests.has(cacheKey)) {
      return this.pendingRequests.get(cacheKey);
    }

    const requestPromise = fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      next: { revalidate: 60 } // Next.js specific caching, revalidate every 60s
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.detail || `API error: ${response.status}`);
        }

        const data = await response.json();

        this.cache.set(cacheKey, data);
        this.pendingRequests.delete(cacheKey);

        return data;
      })
      .catch((err) => {
        this.pendingRequests.delete(cacheKey);
        if (options.throwError) throw err;
        return null;
      });

    this.pendingRequests.set(cacheKey, requestPromise);

    return requestPromise;
  }

  // Public endpoints (no auth required)
  async getSections() {
    return this.fetchApi(`/public/${this.companyId}/sections`);
  }

  async getCategories(sectionSlug: string) {
    return this.fetchApi(
      `/public/${this.companyId}/categories?section_slug=${sectionSlug}`,
    );
  }

  async getContent(params: any = {}) {
    const queryParams = new URLSearchParams({
      skip: params.skip || 0,
      limit: params.limit || 20,
      ...(params.section_slug && { section_slug: params.section_slug }),
      ...(params.category_slug && { category_slug: params.category_slug }),
    }).toString();

    return this.fetchApi(`/public/${this.companyId}/content?${queryParams}`);
  }

  async getContentById(contentId: string) {
    return this.fetchApi(`/public/content/${contentId}`);
  }

  // Get all content in a category with pagination
  async getAllContentByCategory(sectionSlug: string, categorySlug: string, limit = 50) {
    let allItems: any[] = [];
    let skip = 0;
    const pageSize = 20;

    while (true) {
      const response = await this.getContent({
        section_slug: sectionSlug,
        category_slug: categorySlug,
        skip,
        limit: pageSize,
      });

      if (!response || !response.items || response.items.length === 0) {
        break;
      }

      allItems = [...allItems, ...response.items];

      if (response.items.length < pageSize || allItems.length >= limit) {
        break;
      }

      skip += pageSize;
    }

    return allItems.slice(0, limit);
  }

  // Get complete site structure with sections, categories, and posts
  async getFullSiteStructure() {
    try {
      const sectionsRes = await this.getSections();

      if (!sectionsRes || !sectionsRes.sections) {
        return [];
      }
      const sections = sectionsRes.sections || [];

      const result = await Promise.all(
        sections.map(async (section: any) => {
          try {
            const categoriesRes = await this.getCategories(section.slug);
            if (!categoriesRes) {
              return {
                ...section,
                categories: [],
              };
            }
            const categories = categoriesRes.categories || [];

            const categoryData = await Promise.all(
              categories.map(async (category: any) => {
                try {
                  const contentRes = await this.getContent({
                    section_slug: section.slug,
                    category_slug: category.slug,
                    limit: 10,
                  });

                  if (!contentRes) {
                    return {
                      ...category,
                      section_slug: section.slug,
                      posts: [],
                    };
                  }

                  const posts = (contentRes.items || []).map((item: any) =>
                    this.transformContent(item, section, category),
                  );

                  return {
                    ...category,
                    section_slug: section.slug,
                    posts,
                  };
                } catch {
                  return {
                    ...category,
                    section_slug: section.slug,
                    posts: [],
                  };
                }
              }),
            );

            return {
              ...section,
              categories: categoryData,
            };
          } catch {
            return {
              ...section,
              categories: [],
            };
          }
        }),
      );

      return result;
    } catch (err) {
      console.error("Error fetching site structure:", err);
      throw err;
    }
  }

  // Get all posts across all categories
  async getAllPosts(limit = 100) {
    try {
      const structure = await this.getFullSiteStructure();
      const allPosts: any[] = [];

      structure.forEach((section: any) => {
        section.categories.forEach((category: any) => {
          category.posts.forEach((post: any) => {
            allPosts.push({
              ...post,
              section: {
                slug: section.slug,
                name: section.name,
              },
              category: {
                slug: category.slug,
                name: category.name,
              },
            });
          });
        });
      });

      return allPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
    } catch (err) {
      console.error("Error fetching all posts:", err);
      return [];
    }
  }

  // Get posts for a specific section
  async getSectionPosts(sectionSlug: string, limit = 100) {
    try {
      const categories = await this.getCategories(sectionSlug);
      let allPosts: any[] = [];

      for (const category of categories.categories || []) {
        try {
          const posts = await this.getAllContentByCategory(
            sectionSlug,
            category.slug,
            20,
          );

          const transformed = posts.map((post) =>
            this.transformContent(post, { slug: sectionSlug }, category),
          );

          allPosts = [...allPosts, ...transformed];
        } catch (err) {
          console.error(
            `Error fetching posts for category ${category.slug}:`,
            err,
          );
        }
      }

      return allPosts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, limit);
    } catch (err) {
      console.error(`Error fetching section posts for ${sectionSlug}:`, err);
      return [];
    }
  }

  // Transform backend content to match frontend expected format
  transformContent(backendContent: any, section: any = null, category: any = null) {
    const renderedContent = this.renderBlocks(backendContent.blocks);
    const computedReadTime = Math.max(
      1,
      Math.ceil((renderedContent || "").trim().split(/\s+/).length / 200),
    );

    let formattedDate = "";
    try {
      const dateVal = backendContent.published_at || backendContent.created_at;
      const d = new Date(dateVal);
      if (dateVal && !isNaN(d.getTime())) {
        formattedDate = d.toISOString().split("T")[0];
      } else {
        formattedDate = new Date().toISOString().split("T")[0];
      }
    } catch (e) {
      formattedDate = new Date().toISOString().split("T")[0];
    }

    return {
      id: backendContent.id,
      title: backendContent.title,
      section: section
        ? { name: section.name, slug: section.slug }
        : {
            name: backendContent.section_name,
            slug: backendContent.section_slug,
          },
      category: category
        ? { name: category.name, slug: category.slug }
        : {
            name: backendContent.category_name,
            slug: backendContent.category_slug,
          },
      excerpt: backendContent.subtitle || this.extractExcerpt(backendContent.blocks),
      image: backendContent.cover_image_id
        ? `${this.baseUrl}${API_PREFIX}/images/${backendContent.cover_image_id}`
        : null,
      content: renderedContent,
      date: formattedDate,
      author: backendContent.author?.name || "Chalky Infotech Team",
      readTime: backendContent.stats?.read_time || computedReadTime,
      tags: backendContent.tags || [],
      views: backendContent.stats?.views || 0,
      likes: backendContent.stats?.likes || 0,
      comments: backendContent.stats?.comments || 0,
      featured: backendContent.settings?.is_featured || false,
    };
  }

  extractExcerpt(blocks: any[]) {
    if (!blocks || blocks.length === 0) return "";
    const textBlock = blocks.find((b: any) =>
      ["text", "heading", "subheading"].includes(b.type),
    );

    if (textBlock?.data?.value) {
      const text = textBlock.data.value.replace(/[#*`]/g, "").trim();
      return text.length > 150 ? text.substring(0, 150) + "..." : text;
    }

    return "Read more about this topic...";
  }

  renderBlocks(blocks: any[]) {
    if (!blocks || blocks.length === 0) return "";

    return blocks
      .map((block: any) => {
        switch (block.type) {
          case "heading":
            return `# ${block.data.value}`;
          case "subheading":
            return `## ${block.data.value}`;
          case "text":
            return block.data.value;
          case "quote":
            return `> ${block.data.value}`;
          case "list":
          case "bullet-list":
            return block.data.items?.map((item: string) => `- ${item}`).join("\n");
          case "numbered-list":
            return block.data.items
              ?.map((item: string, i: number) => `${i + 1}. ${item}`)
              .join("\n");
          case "image":
            return `![${block.data.alt || "image"}](${this.baseUrl}${API_PREFIX}/images/${block.data.file_id})`;
          case "video":
          case "embed":
            return block.data.url;
          case "document": {
            const docUrl = block.data.file_id
              ? `${this.baseUrl}${API_PREFIX}/documents/${block.data.file_id}`
              : block.data.url;
            return `[📁 Download ${block.data.title || "Document"}](${docUrl})`;
          }
          default:
            return "";
        }
      })
      .join("\n\n");
  }
}

export const api = new ApiService();
export default api;
