import { Metadata } from 'next';
import TakeActionContent from './TakeActionContent';

export const metadata: Metadata = {
  title: 'Take Action for Sustainable Cat Care | 6 Steps to Help',
  description: 'Make a difference for the environment as a cat owner. Six actionable steps to reduce your cat\'s environmental footprint and help create a sustainable future.',
  keywords: [
    'sustainable cat care',
    'eco friendly pet owner',
    'reduce pet environmental impact',
    'green cat ownership',
    'environmentally responsible pet care',
    'cat litter environmental impact',
    'sustainable pet products',
    'eco conscious cat owner',
    'green pet parenting',
    'reduce cat carbon footprint'
  ],
  openGraph: {
    title: 'Take Action for Sustainable Cat Care',
    description: 'Six practical steps every cat owner can take to reduce their environmental impact and create a greener future.',
    type: 'article',
  },
};

export default function TakeActionPage() {
  return <TakeActionContent />;
}
