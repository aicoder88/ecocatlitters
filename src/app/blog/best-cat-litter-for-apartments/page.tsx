import { Metadata } from 'next';
import ArticleContent from './ArticleContent';

export const metadata: Metadata = {
  title: 'Best Cat Litter for Apartments: Odor Control in Small Spaces',
  description: 'Living in an apartment with cats? Discover which eco-friendly litters offer the best odor control, lowest dust, and easiest disposal for small space living.',
  keywords: [
    'best cat litter for apartments',
    'apartment cat litter',
    'low odor cat litter',
    'flushable cat litter apartment',
    'cat litter small space',
    'cat litter odor control'
  ],
  openGraph: {
    title: 'Best Cat Litter for Apartments: Odor Control in Small Spaces',
    description: 'Which eco-friendly litters work best for apartment living? Our guide covers odor control and disposal.',
    type: 'article',
    publishedTime: '2024-12-26',
  },
};

export default function ApartmentLitterPage() {
  return <ArticleContent />;
}
