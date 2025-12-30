import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Eco Cat Litter Blog | Tips, Guides & Comparisons',
  description: 'Expert advice on eco-friendly cat litter: switching guides, odor control tips, health considerations, and product comparisons to help you choose the best sustainable litter.',
  keywords: [
    'cat litter tips',
    'eco-friendly cat litter guide',
    'natural cat litter advice',
    'cat litter comparison',
    'sustainable pet care blog'
  ],
  openGraph: {
    title: 'Eco Cat Litter Blog | Tips, Guides & Comparisons',
    description: 'Expert advice on eco-friendly cat litter: switching guides, odor control tips, and product comparisons.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Eco Cat Litters',
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
