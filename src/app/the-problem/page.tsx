import { Metadata } from 'next';
import TheProblemContent from './TheProblemContent';

export const metadata: Metadata = {
  title: 'The Problem with Clay Cat Litter | Environmental Impact & Strip Mining',
  description: 'Discover the hidden environmental cost of traditional clay cat litter: strip mining, landfill waste, carbon emissions, and pollution. Learn why 2+ million tons end up in landfills yearly.',
  keywords: [
    'clay cat litter environmental impact',
    'cat litter pollution',
    'bentonite clay mining',
    'cat litter landfill',
    'eco friendly cat litter',
    'sustainable cat litter alternatives',
    'clay litter problems',
    'cat litter carbon footprint',
    'strip mining cat litter',
    'silica dust cat litter'
  ],
  openGraph: {
    title: 'The Dirty Truth About Clay Cat Litter',
    description: '2+ million tons of cat litter go to landfills every year. Learn about the environmental crisis and what you can do.',
    type: 'article',
  },
};

export default function TheProblemPage() {
  return <TheProblemContent />;
}
