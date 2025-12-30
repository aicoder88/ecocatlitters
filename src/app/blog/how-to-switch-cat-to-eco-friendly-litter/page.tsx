import { Metadata } from 'next';
import ArticleContent from './ArticleContent';

export const metadata: Metadata = {
  title: 'How to Switch Your Cat to Eco-Friendly Litter (Step-by-Step Guide)',
  description: 'Complete guide to transitioning your cat from clay to eco-friendly litter. Learn the gradual mixing method, avoid litter box rejection, and make the switch stress-free.',
  keywords: [
    'switch cat litter',
    'transition cat to new litter',
    'change cat litter type',
    'eco-friendly litter switch',
    'cat litter transition guide',
    'clay to natural litter'
  ],
  openGraph: {
    title: 'How to Switch Your Cat to Eco-Friendly Litter',
    description: 'Complete guide to transitioning your cat from clay to eco-friendly litter without stress.',
    type: 'article',
    publishedTime: '2024-12-28',
  },
};

export default function SwitchingGuidePage() {
  return <ArticleContent />;
}
