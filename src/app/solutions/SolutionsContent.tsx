'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ArticleSchema from '@/components/seo/ArticleSchema';
import LitterComparisonTable from '@/components/comparison/LitterComparisonTable';

const Hero = styled.section`
  background: linear-gradient(135deg,
    ${({ theme }) => theme.colors.forestGreen} 0%,
    ${({ theme }) => theme.colors.charcoal} 100%);
  color: white;
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.paleGreen};
  line-height: 1.6;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
`;

const Intro = styled.section`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
`;

const IntroTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const IntroText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1.8;
`;

const CategorySection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const CategoryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid ${({ theme }) => theme.colors.forestGreen};
`;

const LitterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const LitterCard = styled(Link)`
  display: block;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

const CardHeader = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  padding: ${({ theme }) => theme.spacing.lg};
  color: white;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const CardTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.9;
`;

const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const MetaTag = styled.span<{ $variant: 'good' | 'moderate' | 'neutral' }>`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'good':
        return `background: ${theme.colors.paleGreen}; color: ${theme.colors.forestGreen};`;
      case 'moderate':
        return `background: #FEF3C7; color: #92400E;`;
      default:
        return `background: ${theme.colors.lightGray}; color: ${theme.colors.charcoal};`;
    }
  }}
`;

const CardArrow = styled.div`
  color: ${({ theme }) => theme.colors.forestGreen};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const ComparisonSection = styled.section`
  background: ${({ theme }) => theme.colors.offWhite};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  margin: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const ComparisonTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ComparisonCard = styled.div`
  background: white;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
`;

const ComparisonQuestion = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ComparisonAnswer = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;

  a {
    color: ${({ theme }) => theme.colors.forestGreen};
    font-weight: 600;
    &:hover { text-decoration: underline; }
  }
`;

const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.forestGreen};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  color: white;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: white;
  color: ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 700;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default function SolutionsContent() {
  return (
    <>
      <ArticleSchema
        title="Eco-Friendly Cat Litter Types: Complete Guide"
        description="Explore all eco-friendly cat litter options including bamboo, wood, corn, paper, walnut, wheat, grass, and tofu. Find the perfect sustainable choice for your cat."
        url="https://ecocatlitters.com/solutions"
        datePublished="2024-01-15"
        dateModified="2024-12-01"
      />

      <Hero>
        <HeroContent>
          <Title>Eco-Friendly Cat Litter Options</Title>
          <Subtitle>
            Eight sustainable alternatives to clay, each with unique benefits.
            Find the perfect match for your cat and your values.
          </Subtitle>
        </HeroContent>
      </Hero>

      <Main>
        <Intro>
          <IntroTitle>Beyond Clay: A World of Options</IntroTitle>
          <IntroText>
            Traditional clay litter is strip-mined, non-biodegradable, and sits in landfills
            for generations. The good news? There are now eight major categories of
            eco-friendly alternatives, each made from renewable, sustainable materials.
            From wood pellets to grass fibers, there&apos;s an option for every cat and every
            household.
          </IntroText>
        </Intro>

        <ComparisonSection>
          <ComparisonTitle>Quick Comparison: All 8 Eco-Friendly Litter Types</ComparisonTitle>
          <LitterComparisonTable />
        </ComparisonSection>

        <CategorySection>
          <CategoryTitle>Plant-Fiber Litters</CategoryTitle>
          <LitterGrid>
            <LitterCard href="/litter-types/bamboo">
              <CardHeader $color="#2D5016">
                <CardTitle>Bamboo Litter</CardTitle>
                <CardTagline>Earth&apos;s fastest-growing resource</CardTagline>
              </CardHeader>
              <CardBody>
                <CardDescription>
                  Made from the world&apos;s most renewable plant, bamboo litter offers excellent
                  absorption and virtually no dust. Carbon-negative from cultivation to disposal.
                </CardDescription>
                <CardMeta>
                  <MetaTag $variant="good">Low Dust</MetaTag>
                  <MetaTag $variant="good">Clumping</MetaTag>
                  <MetaTag $variant="good">Biodegradable</MetaTag>
                </CardMeta>
                <CardArrow>Read full guide →</CardArrow>
              </CardBody>
            </LitterCard>

            <LitterCard href="/litter-types/grass">
              <CardHeader $color="#38A169">
                <CardTitle>Grass Litter</CardTitle>
                <CardTagline>The newest innovation</CardTagline>
              </CardHeader>
              <CardBody>
                <CardDescription>
                  Made from grass seed fibers, this newcomer offers exceptional clumping
                  and odor control. Cats seem to love it instinctively—high acceptance rates.
                </CardDescription>
                <CardMeta>
                  <MetaTag $variant="good">Excellent Clumping</MetaTag>
                  <MetaTag $variant="good">Cats Love It</MetaTag>
                  <MetaTag $variant="moderate">Premium Price</MetaTag>
                </CardMeta>
                <CardArrow>Read full guide →</CardArrow>
              </CardBody>
            </LitterCard>

            <LitterCard href="/litter-types/paper">
              <CardHeader $color="#718096">
                <CardTitle>Paper Litter</CardTitle>
                <CardTagline>The gentlest choice</CardTagline>
              </CardHeader>
              <CardBody>
                <CardDescription>
                  Made from recycled newspapers and cardboard. Virtually dust-free and
                  extra soft—the veterinarian&apos;s choice for post-surgery recovery.
                </CardDescription>
                <CardMeta>
                  <MetaTag $variant="good">Zero Dust</MetaTag>
                  <MetaTag $variant="good">Vet Recommended</MetaTag>
                  <MetaTag $variant="moderate">Moderate Odor Control</MetaTag>
                </CardMeta>
                <CardArrow>Read full guide →</CardArrow>
              </CardBody>
            </LitterCard>
          </LitterGrid>
        </CategorySection>

        <CategorySection>
          <CategoryTitle>Wood-Based Litters</CategoryTitle>
          <LitterGrid>
            <LitterCard href="/litter-types/wood">
              <CardHeader $color="#8B4513">
                <CardTitle>Wood Litter</CardTitle>
                <CardTagline>Pine, cedar & sawdust options</CardTagline>
              </CardHeader>
              <CardBody>
                <CardDescription>
                  Made from lumber industry byproducts, wood litter offers natural odor
                  control from pine oils. Often the most affordable eco-option available.
                </CardDescription>
                <CardMeta>
                  <MetaTag $variant="good">Budget Friendly</MetaTag>
                  <MetaTag $variant="good">Great Odor Control</MetaTag>
                  <MetaTag $variant="neutral">Pellet Form</MetaTag>
                </CardMeta>
                <CardArrow>Read full guide →</CardArrow>
              </CardBody>
            </LitterCard>

            <LitterCard href="/litter-types/walnut">
              <CardHeader $color="#6B5344">
                <CardTitle>Walnut Litter</CardTitle>
                <CardTagline>Nature&apos;s odor fighter</CardTagline>
              </CardHeader>
              <CardBody>
                <CardDescription>
                  Crushed walnut shells provide some of the best natural odor control
                  available. Dark color hides stains. Firm clumps for easy scooping.
                </CardDescription>
                <CardMeta>
                  <MetaTag $variant="good">Excellent Odor Control</MetaTag>
                  <MetaTag $variant="good">Strong Clumps</MetaTag>
                  <MetaTag $variant="moderate">Not for Nut Allergies</MetaTag>
                </CardMeta>
                <CardArrow>Read full guide →</CardArrow>
              </CardBody>
            </LitterCard>
          </LitterGrid>
        </CategorySection>

        <CategorySection>
          <CategoryTitle>Grain-Based Litters</CategoryTitle>
          <LitterGrid>
            <LitterCard href="/litter-types/corn">
              <CardHeader $color="#D69E2E">
                <CardTitle>Corn Litter</CardTitle>
                <CardTagline>Natural clumping power</CardTagline>
              </CardHeader>
              <CardBody>
                <CardDescription>
                  Whole-kernel corn creates excellent clumping from natural starches.
                  Texture closest to clay—cats transition easily. Flushable and safe.
                </CardDescription>
                <CardMeta>
                  <MetaTag $variant="good">Excellent Clumping</MetaTag>
                  <MetaTag $variant="good">Easy Transition</MetaTag>
                  <MetaTag $variant="good">Flushable</MetaTag>
                </CardMeta>
                <CardArrow>Read full guide →</CardArrow>
              </CardBody>
            </LitterCard>

            <LitterCard href="/litter-types/wheat">
              <CardHeader $color="#C6A962">
                <CardTitle>Wheat Litter</CardTitle>
                <CardTagline>Enzyme-powered performance</CardTagline>
              </CardHeader>
              <CardBody>
                <CardDescription>
                  Natural wheat enzymes break down odor-causing compounds at the molecular
                  level. Continues working over time for sustained freshness.
                </CardDescription>
                <CardMeta>
                  <MetaTag $variant="good">Enzymatic Odor Control</MetaTag>
                  <MetaTag $variant="good">Excellent Clumping</MetaTag>
                  <MetaTag $variant="moderate">Contains Gluten</MetaTag>
                </CardMeta>
                <CardArrow>Read full guide →</CardArrow>
              </CardBody>
            </LitterCard>

            <LitterCard href="/litter-types/tofu">
              <CardHeader $color="#A0AEC0">
                <CardTitle>Tofu Litter</CardTitle>
                <CardTagline>The Asian sensation</CardTagline>
              </CardHeader>
              <CardBody>
                <CardDescription>
                  Made from soy fiber (okara), this litter is hugely popular across Asia.
                  Unique pellet form reduces tracking. Dissolves easily for flushing.
                </CardDescription>
                <CardMeta>
                  <MetaTag $variant="good">Very Flushable</MetaTag>
                  <MetaTag $variant="good">Low Tracking</MetaTag>
                  <MetaTag $variant="good">Safe for Kittens</MetaTag>
                </CardMeta>
                <CardArrow>Read full guide →</CardArrow>
              </CardBody>
            </LitterCard>
          </LitterGrid>
        </CategorySection>

        <ComparisonSection>
          <ComparisonTitle>Quick Decision Guide</ComparisonTitle>
          <ComparisonGrid>
            <ComparisonCard>
              <ComparisonQuestion>Best odor control?</ComparisonQuestion>
              <ComparisonAnswer>
                <Link href="/litter-types/walnut">Walnut</Link> and{' '}
                <Link href="/litter-types/wood">wood</Link> litters excel at
                natural odor neutralization.
              </ComparisonAnswer>
            </ComparisonCard>
            <ComparisonCard>
              <ComparisonQuestion>Easiest transition from clay?</ComparisonQuestion>
              <ComparisonAnswer>
                <Link href="/litter-types/corn">Corn</Link>,{' '}
                <Link href="/litter-types/wheat">wheat</Link>, and{' '}
                <Link href="/litter-types/grass">grass</Link> have the most
                familiar textures.
              </ComparisonAnswer>
            </ComparisonCard>
            <ComparisonCard>
              <ComparisonQuestion>Most flushable?</ComparisonQuestion>
              <ComparisonAnswer>
                <Link href="/litter-types/tofu">Tofu</Link> dissolves best,
                followed by <Link href="/litter-types/corn">corn</Link> and{' '}
                <Link href="/litter-types/wheat">wheat</Link>.
              </ComparisonAnswer>
            </ComparisonCard>
            <ComparisonCard>
              <ComparisonQuestion>Best for allergies?</ComparisonQuestion>
              <ComparisonAnswer>
                <Link href="/litter-types/paper">Paper</Link> and{' '}
                <Link href="/litter-types/bamboo">bamboo</Link> are virtually
                dust-free and hypoallergenic.
              </ComparisonAnswer>
            </ComparisonCard>
            <ComparisonCard>
              <ComparisonQuestion>Most affordable?</ComparisonQuestion>
              <ComparisonAnswer>
                <Link href="/litter-types/wood">Wood pellets</Link> are often
                the cheapest option, especially when bought as horse bedding.
              </ComparisonAnswer>
            </ComparisonCard>
            <ComparisonCard>
              <ComparisonQuestion>Best for picky cats?</ComparisonQuestion>
              <ComparisonAnswer>
                <Link href="/litter-types/grass">Grass litter</Link> has the
                highest acceptance rate among cats who reject other alternatives.
              </ComparisonAnswer>
            </ComparisonCard>
          </ComparisonGrid>
        </ComparisonSection>

        <CTASection>
          <CTATitle>Ready to Make the Switch?</CTATitle>
          <CTAText>
            Our step-by-step transition guide helps you switch your cat to eco-friendly
            litter without any drama. Pro tip: Adding{' '}
            <a href="https://purrify.ca/purr/products?utm_source=ecocatlitters" style={{ color: 'inherit', textDecoration: 'underline' }}>
              Purrify activated carbon
            </a>{' '}
            to your new litter helps with odor control during the transition.
          </CTAText>
          <CTAButton href="/switching-guide">Read the Switching Guide</CTAButton>
        </CTASection>
      </Main>
    </>
  );
}
