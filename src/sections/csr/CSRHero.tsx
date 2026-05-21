'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Leaf, ArrowRight, ArrowDown } from 'lucide-react';
import PageHero from '@/components/PageHero';

export default function CSRHero() {
  return (
    <PageHero
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'CSR Report' },
      ]}
      badge="Corporate Social Responsibility"
      title="Our Commitment to"
      titleHighlight="People, Planet & Purpose"
      subtitle="At Chalky Infotech, we believe responsible business is not a checkbox — it is the foundation of how we operate. Explore our full commitments to sustainability, inclusion, community, and ethical governance."
      ctaLabel="Our Pillars"
      ctaHref="#pillars"
      secondaryLabel="Contact Us"
      secondaryHref="/contact"
      imageAlt="Chalky Infotech CSR – People, Planet & Purpose"
      imageSrc="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
    />
  );
}
