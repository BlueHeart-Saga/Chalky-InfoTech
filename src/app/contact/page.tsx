import type { Metadata } from 'next';
import SectionNavbar from '@/components/SectionNavbar';
import ContactHero from '@/sections/contact/ContactHero';
import ContactForm from '@/sections/contact/ContactForm';
import OfficeLocations from '@/sections/contact/OfficeLocations';
import ContactMap from '@/sections/contact/ContactMap';
import ContactTeam from '@/sections/contact/ContactTeam';
import ContactFAQ from '@/sections/contact/ContactFAQ';

export const metadata: Metadata = {
  title: 'Contact Us | Chalky Infotech',
  description: 'Get in touch with Chalky Infotech. We have offices in London and Chennai to support your global tech recruitment needs.',
};

export default function ContactPage() {
  const sections = [
    { label: 'Top', id: 'hero' },
    { label: 'Message Us', id: 'contact' },
    { label: 'Our Offices', id: 'offices' },
    { label: 'Global Map', id: 'map' },
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

      <section id="map">
        <ContactMap />
      </section>

      <section id="team">
        <ContactTeam />
      </section>

      <section id="faq">
        <ContactFAQ />
      </section>
    </div>
  );
}
