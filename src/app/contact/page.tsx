import type { Metadata } from 'next';
import SectionNavbar from '@/components/SectionNavbar';
import ContactHero from '@/sections/contact/ContactHero';
import ContactForm from '@/sections/contact/ContactForm';
import OfficeLocations from '@/sections/contact/OfficeLocations';
import ContactMap from '@/sections/contact/ContactMap';
import ContactTeam from '@/sections/contact/ContactTeam';
import ContactFAQ from '@/sections/contact/ContactFAQ';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Contact Chalky Infotech | IT Recruitment Agency in UK & India',
  description: 'Get in touch with Chalky Infotech. We have offices in London and Chennai to support your global tech recruitment needs and workforce scaling.',
  keywords: ['contact IT recruitment agency', 'Chalky Infotech contact', 'tech recruitment London', 'IT staffing Chennai', 'global workforce solutions contact'],
  openGraph: {
    title: 'Contact Chalky Infotech | IT Recruitment Agency',
    description: 'Get in touch with Chalky Infotech. Offices in London and Chennai to support global tech recruitment needs.',
    locale: 'en_GB',
  },
  other: {
    'geo.region': 'GB',
    'geo.placename': 'United Kingdom',
    'language': 'en-GB'
  }
};

export default function ContactPage() {
  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Message Us', id: 'contact' },
    { label: 'Our Offices', id: 'offices' },
    // { label: 'Global Map', id: 'map' },
    { label: 'Key Contacts', id: 'team' },
    { label: 'FAQ', id: 'faq' }
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
}
