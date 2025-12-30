import { Metadata } from 'next';
import ArticleContent from './ArticleContent';

export const metadata: Metadata = {
  title: 'Is Eco-Friendly Cat Litter Safe for Kittens? Safety Guide',
  description: 'What you need to know about natural litter safety for kittens. Learn which eco-friendly litters are safest, which to avoid, and when to switch litter types.',
  keywords: [
    'kitten safe litter',
    'eco friendly litter kittens',
    'natural cat litter kittens',
    'safe cat litter for kittens',
    'kitten litter recommendations',
    'non-toxic cat litter'
  ],
  openGraph: {
    title: 'Is Eco-Friendly Cat Litter Safe for Kittens?',
    description: 'What you need to know about natural litter safety for kittens.',
    type: 'article',
    publishedTime: '2024-12-24',
  },
};

export default function KittenSafetyPage() {
  return <ArticleContent />;
}
