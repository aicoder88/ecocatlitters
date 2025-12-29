'use client';

import styled from 'styled-components';
import Link from 'next/link';
import CertificationBadge from '@/components/ui/CertificationBadge';
import ActionButton from '@/components/ui/ActionButton';

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.forestGreen} 0%, 
    ${({ theme }) => theme.colors.leafGreen} 100%);
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Eyebrow = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.sunrise};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.paleGreen};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const SolutionCard = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  display: block;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CardIcon = styled.div`
  font-size: 3rem;
  flex-shrink: 0;
`;

const CardContent = styled.div``;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const BadgeRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

const ProsCons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const ProList = styled.ul`
  list-style: none;
  
  li {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.forestGreen};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    
    &::before {
      content: '✓ ';
    }
  }
`;

const ConList = styled.ul`
  list-style: none;
  
  li {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    
    &::before {
      content: '△ ';
    }
  }
`;

const FeaturedSection = styled.section`
  background: ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
`;

const FeaturedCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedLabel = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.sunrise};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeaturedTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeaturedDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureList = styled.ul`
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  li {
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.charcoal};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    padding-left: ${({ theme }) => theme.spacing.lg};
    position: relative;
    
    &::before {
      content: '🌿';
      position: absolute;
      left: 0;
    }
  }
`;

export default function SolutionsPage() {
  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <Eyebrow>🌱 Sustainable Alternatives</Eyebrow>
          <Title>Eco-Friendly Cat Litter Options</Title>
          <Subtitle>
            Discover sustainable alternatives that protect our planet without 
            compromising on performance. Every option here is better than clay.
          </Subtitle>
        </Container>
      </HeroSection>
      
      <Section>
        <Container>
          <SectionTitle>Compare Sustainable Options</SectionTitle>
          <SolutionsGrid>
            <SolutionCard href="/solutions/bamboo">
              <CardHeader>
                <CardIcon>🎋</CardIcon>
                <CardContent>
                  <CardTitle>Bamboo Litter</CardTitle>
                  <CardDescription>
                    Made from one of the fastest-growing plants on Earth. Naturally 
                    antibacterial and incredibly absorbent.
                  </CardDescription>
                  <BadgeRow>
                    <CertificationBadge icon="♻️" label="Biodegradable" size="small" />
                    <CertificationBadge icon="🌿" label="Renewable" size="small" />
                  </BadgeRow>
                </CardContent>
              </CardHeader>
              <ProsCons>
                <ProList>
                  <li>Ultra-fast growing</li>
                  <li>Natural odor control</li>
                  <li>Low dust</li>
                </ProList>
                <ConList>
                  <li>Higher price point</li>
                  <li>Limited availability</li>
                </ConList>
              </ProsCons>
            </SolutionCard>
            
            <SolutionCard href="/solutions/wood">
              <CardHeader>
                <CardIcon>🪵</CardIcon>
                <CardContent>
                  <CardTitle>Wood & Pine Litter</CardTitle>
                  <CardDescription>
                    Reclaimed wood and sustainable pine pellets offer excellent 
                    absorption and natural pine scent.
                  </CardDescription>
                  <BadgeRow>
                    <CertificationBadge icon="🌲" label="FSC Certified" size="small" />
                    <CertificationBadge icon="♻️" label="Compostable" size="small" />
                  </BadgeRow>
                </CardContent>
              </CardHeader>
              <ProsCons>
                <ProList>
                  <li>Natural pine scent</li>
                  <li>Highly absorbent</li>
                  <li>Often cheapest eco option</li>
                </ProList>
                <ConList>
                  <li>Some cats don&apos;t like texture</li>
                  <li>Tracking possible</li>
                </ConList>
              </ProsCons>
            </SolutionCard>
            
            <SolutionCard href="/solutions/corn">
              <CardHeader>
                <CardIcon>🌽</CardIcon>
                <CardContent>
                  <CardTitle>Corn & Wheat Litter</CardTitle>
                  <CardDescription>
                    Agricultural byproducts that would otherwise go to waste. 
                    Clumps well and flushable in most cases.
                  </CardDescription>
                  <BadgeRow>
                    <CertificationBadge icon="🌾" label="Agricultural" size="small" />
                    <CertificationBadge icon="🚽" label="Flushable" size="small" />
                  </BadgeRow>
                </CardContent>
              </CardHeader>
              <ProsCons>
                <ProList>
                  <li>Often flushable</li>
                  <li>Good clumping</li>
                  <li>Soft on paws</li>
                </ProList>
                <ConList>
                  <li>Can attract bugs</li>
                  <li>Mold risk if wet</li>
                </ConList>
              </ProsCons>
            </SolutionCard>
            
            <SolutionCard href="/solutions/paper">
              <CardHeader>
                <CardIcon>📄</CardIcon>
                <CardContent>
                  <CardTitle>Recycled Paper Litter</CardTitle>
                  <CardDescription>
                    Made from recycled newspapers and other paper products. 
                    Extremely low dust and gentle.
                  </CardDescription>
                  <BadgeRow>
                    <CertificationBadge icon="♻️" label="Recycled" size="small" />
                    <CertificationBadge icon="💨" label="Dust-Free" size="small" />
                  </BadgeRow>
                </CardContent>
              </CardHeader>
              <ProsCons>
                <ProList>
                  <li>Virtually no dust</li>
                  <li>Great for sensitive cats</li>
                  <li>Lightweight</li>
                </ProList>
                <ConList>
                  <li>Less odor control</li>
                  <li>Doesn&apos;t clump</li>
                </ConList>
              </ProsCons>
            </SolutionCard>
          </SolutionsGrid>
        </Container>
      </Section>
      
      <FeaturedSection id="featured">
        <Container>
          <FeaturedCard>
            <div>
              <FeaturedLabel>🏆 Editor&apos;s Choice</FeaturedLabel>
              <FeaturedTitle>Purrify Activated Carbon Additive</FeaturedTitle>
              <FeaturedDesc>
                Not a replacement litter, but a game-changer for any litter. Purrify&apos;s 
                activated carbon technology captures and neutralizes odors at the molecular 
                level—making any eco-friendly litter perform even better.
              </FeaturedDesc>
              <FeatureList>
                <li>Works with any litter type</li>
                <li>100% natural activated carbon</li>
                <li>Extends litter life by 50%</li>
                <li>Carbon-negative production</li>
                <li>Made in Canada</li>
              </FeatureList>
              <ActionButton 
                href="https://purrify.ca/products?utm_source=ecocatlitters&utm_medium=solutions-featured" 
                external
              >
                Try Purrify →
              </ActionButton>
            </div>
            <div>
              <BadgeRow style={{ justifyContent: 'center', marginBottom: '2rem' }}>
                <CertificationBadge icon="🌿" label="Natural" size="large" />
                <CertificationBadge icon="🐱" label="Cat-Safe" size="large" />
                <CertificationBadge icon="🇨🇦" label="Canadian" size="large" />
              </BadgeRow>
              <ActionButton 
                href="https://purrify.ca/learn/science?utm_source=ecocatlitters&utm_medium=solutions" 
                variant="secondary"
                external
              >
                How It Works →
              </ActionButton>
            </div>
          </FeaturedCard>
        </Container>
      </FeaturedSection>
    </PageWrapper>
  );
}
