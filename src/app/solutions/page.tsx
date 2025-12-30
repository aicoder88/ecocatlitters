import { Metadata } from 'next';
import SolutionsContent from './SolutionsContent';

export const metadata: Metadata = {
  title: '8 Best Eco-Friendly Cat Litter Types | Complete Comparison Guide 2025',
  description: 'Compare all 8 types of eco-friendly cat litter: bamboo, wood, corn, wheat, paper, grass, walnut, and tofu. Find the best sustainable litter for your cat.',
  keywords: [
    'eco friendly cat litter',
    'best natural cat litter',
    'sustainable cat litter comparison',
    'biodegradable cat litter types',
    'plant based cat litter',
    'bamboo cat litter',
    'corn cat litter',
    'wood pellet cat litter',
    'wheat cat litter',
    'walnut shell cat litter',
    'paper cat litter',
    'grass cat litter',
    'tofu cat litter',
    'clay litter alternatives',
    'environmentally friendly cat litter'
  ],
  openGraph: {
    title: 'Compare 8 Types of Eco-Friendly Cat Litter',
    description: 'Find the perfect sustainable cat litter: bamboo, wood, corn, wheat, paper, grass, walnut, or tofu. Complete comparison guide.',
    type: 'article',
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
