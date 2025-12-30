import { Metadata } from 'next';
import BambooContent from './BambooContent';

export const metadata: Metadata = {
  title: 'Bamboo Cat Litter | Complete Guide to Sustainable Cat Litter',
  description: 'Everything about bamboo cat litter: the fastest-growing renewable resource for eco-friendly cat care. Benefits, pros & cons, switching tips, and brand comparisons.',
  keywords: [
    'bamboo cat litter',
    'bamboo litter for cats',
    'eco friendly bamboo litter',
    'sustainable bamboo cat litter',
    'bamboo clumping litter',
    'natural bamboo litter',
    'biodegradable bamboo litter',
    'best bamboo cat litter',
    'bamboo litter review',
    'bamboo vs clay litter'
  ],
  openGraph: {
    title: 'Bamboo Cat Litter: The Complete Guide',
    description: 'Bamboo is Earth\'s fastest-growing plant. Discover how it\'s revolutionizing eco-friendly cat care.',
    type: 'article',
  },
};

export default function BambooLitterPage() {
  return <BambooContent />;
}
