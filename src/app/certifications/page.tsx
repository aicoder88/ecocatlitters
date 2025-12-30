import { Metadata } from 'next';
import CertificationsContent from './CertificationsContent';

export const metadata: Metadata = {
  title: 'Eco-Certifications for Cat Litter | What Labels Really Mean',
  description: 'Learn what biodegradable, compostable, FSC certified, and other eco-labels mean for cat litter. Spot greenwashing and choose truly sustainable options.',
  keywords: [
    'eco certified cat litter',
    'biodegradable cat litter certification',
    'FSC certified cat litter',
    'compostable cat litter',
    'sustainable cat litter labels',
    'greenwashing cat litter',
    'eco friendly cat litter guide',
    'natural cat litter certifications',
    'flushable cat litter safe',
    'renewable cat litter materials'
  ],
  openGraph: {
    title: 'Understanding Eco-Certifications for Cat Litter',
    description: 'Learn what environmental labels mean and how to spot greenwashing when choosing sustainable cat litter.',
    type: 'article',
  },
};

export default function CertificationsPage() {
  return <CertificationsContent />;
}
