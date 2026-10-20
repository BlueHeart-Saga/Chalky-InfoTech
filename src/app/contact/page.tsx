import type { Metadata } from 'next';
<<<<<<< HEAD
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
=======
>>>>>>> 19b30351825669220f16cf1773baa29f5cbba76d
import SectionNavbar from '@/components/SectionNavbar';
import ContactHero from '@/sections/contact/ContactHero';
import ContactForm from '@/sections/contact/ContactForm';
import OfficeLocations from '@/sections/contact/OfficeLocations';
import ContactMap from '@/sections/contact/ContactMap';
import ContactTeam from '@/sections/contact/ContactTeam';
import ContactFAQ from '@/sections/contact/ContactFAQ';
import CTASection from '@/components/CTASection';

import { buildPageMetadataWithImage, SEO_IMAGE_CONFIG } from '@/lib/seo-images';

<<<<<<< HEAD
// Lazy load below-the-fold team grid (same pattern as About page)
const TeamGrid = dynamic(() => import('@/sections/about/TeamGrid'), { ssr: true });

export const metadata = buildPageMetadataWithImage({
  title: 'Contact Us | IT Recruitment Agency',
  description:
    'Get in touch with Chalky Infotech. We have offices in London and Chennai to support your global tech recruitment needs and workforce scaling.',
  keywords: [
    'contact IT recruitment agency',
    'Chalky Infotech contact',
    'tech recruitment London',
    'IT staffing Chennai',
    'global workforce solutions contact',
  ],
  url: '/contact',
  path: SEO_IMAGE_CONFIG.contact.path,
  alt: SEO_IMAGE_CONFIG.contact.alt,
});

const SectionFallback = () => (
  <div className="w-full h-[400px] bg-[#7A1F5C] animate-pulse flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin" />
  </div>
);

=======
export const metadata = buildPageMetadataWithImage({
  title: 'Contact Us | IT Recruitment Agency',
  description: 'Get in touch with Chalky Infotech. We have offices in London and Chennai to support your global tech recruitment needs and workforce scaling.',
  keywords: ['contact IT recruitment agency', 'Chalky Infotech contact', 'tech recruitment London', 'IT staffing Chennai', 'global workforce solutions contact'],
  url: '/contact',
  path: SEO_IMAGE_CONFIG.contact.path,
  alt: SEO_IMAGE_CONFIG.contact.alt
});

>>>>>>> 19b30351825669220f16cf1773baa29f5cbba76d
export default function ContactPage() {
  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Message Us', id: 'contact' },
    { label: 'Our Offices', id: 'offices' },
    // { label: 'Global Map', id: 'map' },
    { label: 'Key Contacts', id: 'team' },
<<<<<<< HEAD
    { label: 'Our People', id: 'people' },
    { label: 'FAQ', id: 'faq' },
=======
    { label: 'FAQ', id: 'faq' }
>>>>>>> 19b30351825669220f16cf1773baa29f5cbba76d
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <SectionNavbar sections={sections} />

      <section id="hero">
        <ContactHero />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <section id="offices">
        <OfficeLocations />
      </section>

      {/* <section id="map">
        <ContactMap />
      </section> */}

      <section id="team">
        <ContactTeam />
      </section>

<<<<<<< HEAD
      <Suspense fallback={<SectionFallback />}>
        <section id="people">
          <TeamGrid waveColor="#FFFFFF" />
        </section>
      </Suspense>

=======
>>>>>>> 19b30351825669220f16cf1773baa29f5cbba76d
      <section id="faq">
        <ContactFAQ />
      </section>

      <section id="cta">
        <CTASection
          title="Ready to Connect with Our Team?"
          subtitle="Whether you're hiring top talent or searching for your next role, Chalky Infotech is here to make it happen."
          primaryLabel="Start a Conversation"
          primaryHref="#contact"
          secondaryLabel="Explore Services"
          secondaryHref="/services"
        />
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 19b30351825669220f16cf1773baa29f5cbba76d
