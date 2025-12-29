import Hero from '@/components/home/Hero';
import ProblemPreview from '@/components/home/ProblemPreview';
import SolutionsPreview from '@/components/home/SolutionsPreview';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemPreview />
      <SolutionsPreview />
      <CallToAction />
    </>
  );
}
