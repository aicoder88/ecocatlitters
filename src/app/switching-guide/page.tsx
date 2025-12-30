import { Metadata } from 'next';
import SwitchingGuideContent from './SwitchingGuideContent';

export const metadata: Metadata = {
  title: 'How to Switch Cat Litter | 4-Week Transition Guide',
  description: 'Step-by-step guide to switching your cat from clay litter to eco-friendly alternatives. Week-by-week transition plan, troubleshooting tips, and best practices.',
  keywords: [
    'how to switch cat litter',
    'cat litter transition',
    'changing cat litter brands',
    'introduce new cat litter',
    'cat litter switch guide',
    'cat rejecting new litter',
    'transition to natural cat litter',
    'cat litter box problems',
    'eco friendly cat litter switch',
    'gradual litter change cat'
  ],
  openGraph: {
    title: 'How to Successfully Switch Your Cat\'s Litter',
    description: 'A proven 4-week transition plan to help your cat accept eco-friendly litter. Step-by-step guide with troubleshooting tips.',
    type: 'article',
  },
};

export default function SwitchingGuidePage() {
  return <SwitchingGuideContent />;
}
