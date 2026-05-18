'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Block {
  title: string;
  desc: string;
  image: string;
  barColor: string;
  blobStyle: React.CSSProperties;
  align: 'left' | 'right';
  titleCase: 'upper' | 'normal';
}

const blocks: Block[] = [
  {
    title: 'OUR VISION',
    desc: 'At Chalky Infotech, we envision becoming a globally trusted technology recruitment and workforce solutions partner. We support organizations through continuous innovation, scalable hiring strategies, and long-term talent acquisition methodologies that bridge the gap between human potential and enterprise success.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    barColor: '#D4A3A3',
    blobStyle: { borderRadius: '50% 45% 55% 50% / 50% 50% 45% 55%' },
    align: 'left',
    titleCase: 'upper',
  },
  {
    title: 'Our Mission',
    desc: 'Our mission is to empower businesses by connecting them with exceptional technology professionals. Through our consultative approach to recruitment, deep market intelligence, and scalable workforce solutions, we strive to accelerate digital transformation and drive measurable, long-lasting business impact for all our partners.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    barColor: '#C2DDE5',
    blobStyle: { borderRadius: '50% 55% 45% 50% / 45% 50% 55% 50%' },
    align: 'right',
    titleCase: 'normal',
  },
  {
    title: 'Client Relationship',
    desc: 'We go beyond traditional recruitment by building trusted, strategic partnerships. By deeply understanding your organizational goals, technology landscape, and unique workforce challenges, we deliver tailored hiring outcomes that align perfectly with your corporate culture and long-term growth objectives.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
    barColor: '#B5C2B7',
    blobStyle: { borderRadius: '50%' },
    align: 'left',
    titleCase: 'normal',
  },
  {
    title: 'Skilled Workforce',
    desc: 'We specialize in assembling future-ready technical teams across cloud computing, DevOps, artificial intelligence, and software engineering. Our rigorous selection process ensures every candidate possesses the exact skills and agility required to thrive in modern, fast-paced digital environments.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
    barColor: '#DBCB89',
    blobStyle: { borderRadius: '55% 45% 40% 60% / 50% 55% 45% 50%' },
    align: 'right',
    titleCase: 'normal',
  },
];

export default function MissionVision() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('mv-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('.mv-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .mv-card {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .mv-card.mv-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .mv-image-wrap {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .mv-image-wrap:hover {
          transform: scale(1.04);
        }
        .mv-image-wrap img {
          transition: transform 0.5s ease !important;
        }
        .mv-image-wrap:hover img {
          transform: scale(1.06) !important;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="bg-[#f5f0e8]  overflow-hidden"
        aria-label="Vision Mission Values"
      >
        <div className="flex flex-col" style={{ gap: '0px' }}>
          {blocks.map((block, index) => {
            const isLeft = block.align === 'left';

            return (
              <div
                key={index}
                className="mv-card relative w-full"
                style={{
                  paddingTop: '48px',
                  paddingBottom: '48px',
                  transitionDelay: `${index * 0.12}s`,
                }}
              >
                {/* Full-width pastel accent bar behind the image side */}
                <div
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{
                    backgroundColor: block.barColor,
                    height: '62%',
                    width: '44%',
                    left: isLeft ? 0 : 'auto',
                    right: isLeft ? 'auto' : 0,
                    zIndex: 0,
                    borderRadius: isLeft
                      ? '0 8px 8px 0'
                      : '8px 0 0 8px',
                  }}
                />

                {/* Content row */}
                <div
                  className="max-w-6xl mx-auto px-6 lg:px-12 relative"
                  style={{ zIndex: 1 }}
                >
                  <div
                    className={`flex flex-col ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center gap-6 md:gap-10`}
                  >
                    {/* ── Image Column ── */}
                    <div className="w-full md:w-[42%] flex justify-center">
                      <div
                        className="mv-image-wrap relative overflow-hidden shadow-xl"
                        style={{
                          width: 'clamp(200px, 28vw, 320px)',
                          height: 'clamp(200px, 28vw, 320px)',
                          ...block.blobStyle,
                        }}
                      >
                        <Image
                          src={block.image}
                          alt={block.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    {/* ── Text Column ── */}
                    <div
                      className={`w-full md:w-[58%] ${
                        isLeft ? 'md:text-left' : 'md:text-center'
                      } text-center`}
                    >
                      <div
                        className={
                          isLeft
                            ? 'md:pl-8 lg:pl-14'
                            : 'md:pr-8 lg:pr-14 md:pl-4'
                        }
                      >
                        <h2
                          className="font-semibold text-[#1a1a1a] mb-4"
                          style={{
                            fontSize: 'clamp(1.75rem, 3.5vw, 2.6rem)',
                            letterSpacing: block.titleCase === 'upper' ? '0.04em' : '-0.01em',
                            lineHeight: 1.1,
                            textTransform: block.titleCase === 'upper' ? 'uppercase' : 'none',
                          }}
                        >
                          {block.title}
                        </h2>
                        <p
                          className="text-[#555555] leading-relaxed"
                          style={{
                            fontSize: 'clamp(0.875rem, 1.4vw, 1rem)',
                            lineHeight: 1.8,
                            maxWidth: isLeft ? '520px' : '560px',
                            margin: isLeft ? '0' : '0 auto',
                          }}
                        >
                          {block.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
