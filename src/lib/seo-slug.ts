/**
 * Utility functions for generating and parsing SEO-friendly URLs
 */

export function slugify(text: string): string {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove non-word characters except hyphens and spaces
    .replace(/[\s_]+/g, '-')   // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '');  // Remove leading and trailing hyphens
}

/**
 * Truncates a slug to a target maximum length without breaking words in half.
 */
export function truncateSlug(slug: string, maxLen: number = 40): string {
  if (!slug || slug.length <= maxLen) return slug;
  const truncated = slug.substring(0, maxLen);
  const lastHyphen = truncated.lastIndexOf('-');
  if (lastHyphen > 10) {
    return truncated.substring(0, lastHyphen).replace(/-+$/, '');
  }
  return truncated.replace(/-+$/, '');
}

/**
 * Returns SEO-friendly URL slug for a post combining title slug and ID
 * Example: "future-of-ai-recruitment-6a06beba5b1125696becb1c9"
 */
export function getPostSlug(post: { title?: string; slug?: string; id: string }, maxBaseLen: number = 40): string {
  if (!post) return '';
  let baseSlug = post.slug || slugify(post.title || '');
  if (!baseSlug) return post.id;
  
  baseSlug = truncateSlug(baseSlug, maxBaseLen);

  // If post.id is a 24-character hex ID and not already included in baseSlug
  if (/^[a-fA-F0-9]{24}$/.test(post.id) && !baseSlug.endsWith(post.id)) {
    return `${baseSlug}-${post.id}`;
  }
  return baseSlug;
}

/**
 * Extracts underlying post ID from param (handles both legacy 24-char hex ID and SEO slug-ID hybrid)
 */
export function extractPostId(param: string): string {
  if (!param) return '';
  // Check if param ends with 24-character hex Mongo ID
  const hexMatch = param.match(/([a-fA-F0-9]{24})$/);
  if (hexMatch) {
    return hexMatch[1];
  }
  return param;
}
