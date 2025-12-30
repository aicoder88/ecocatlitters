import { Metadata } from 'next';
import ArticleContent from './ArticleContent';

export const metadata: Metadata = {
  title: 'Cat Litter Smell Solutions That Actually Work | Odor Control Tips',
  description: 'Struggling with litter box odors? Science-backed solutions for cat litter smell including product recommendations, routine tips, and eco-friendly approaches.',
  keywords: [
    'cat litter smell',
    'litter box odor control',
    'cat litter odor eliminator',
    'how to reduce cat litter smell',
    'cat litter deodorizer',
    'litter box smell solutions'
  ],
  openGraph: {
    title: 'Cat Litter Smell Solutions That Actually Work',
    description: 'Science-backed solutions for cat litter odor control that really work.',
    type: 'article',
    publishedTime: '2024-12-22',
  },
};

export default function OdorControlPage() {
  return <ArticleContent />;
}
