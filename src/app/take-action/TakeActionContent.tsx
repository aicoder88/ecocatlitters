'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ActionButton from '@/components/ui/ActionButton';

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.sunrise} 0%, 
    ${({ theme }) => theme.colors.sunriseLight} 100%);
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
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
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  
  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.offWhite};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
`;

const ActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ActionCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const ActionIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ActionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ActionDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ImpactStat = styled.div`
  background: ${({ theme }) => theme.colors.mintGreen}20;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.forestGreen};
`;

const ResourcesSection = styled.section`
  background: ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
`;

const ResourcesTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ResourceCard = styled(Link)`
  background: ${({ theme }) => theme.colors.white}10;
  border: 1px solid ${({ theme }) => theme.colors.white}30;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.white}20;
    transform: translateY(-4px);
  }
`;

const ResourceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ResourceDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.paleGreen};
`;

const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.charcoal};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export default function TakeActionContent() {
  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <Title>🌍 Take Action Today</Title>
          <Subtitle>
            Every small change adds up. Here&apos;s how you can be part of the solution 
            and help protect our planet for future generations.
          </Subtitle>
        </Container>
      </HeroSection>
      
      <Section>
        <Container>
          <SectionTitle>Start Here: 6 Actions That Matter</SectionTitle>
          <SectionSubtitle>
            From easy first steps to bigger commitments—every action counts.
          </SectionSubtitle>
          <ActionsGrid>
            <ActionCard>
              <ActionIcon>🔄</ActionIcon>
              <ActionTitle>Switch Your Litter</ActionTitle>
              <ActionDescription>
                The single biggest impact you can make. Replace clay litter with 
                a sustainable alternative.
              </ActionDescription>
              <ImpactStat>Saves 180+ lbs landfill waste/year</ImpactStat>
            </ActionCard>
            
            <ActionCard>
              <ActionIcon>📢</ActionIcon>
              <ActionTitle>Spread the Word</ActionTitle>
              <ActionDescription>
                Share what you&apos;ve learned with other cat parents. Most don&apos;t 
                know about the environmental impact.
              </ActionDescription>
              <ImpactStat>Multiplies your impact 10x</ImpactStat>
            </ActionCard>
            
            <ActionCard>
              <ActionIcon>🏪</ActionIcon>
              <ActionTitle>Request Eco Options</ActionTitle>
              <ActionDescription>
                Ask your local pet store to stock sustainable litter options. 
                Consumer demand drives change.
              </ActionDescription>
              <ImpactStat>Influences local availability</ImpactStat>
            </ActionCard>
            
            <ActionCard>
              <ActionIcon>✍️</ActionIcon>
              <ActionTitle>Contact Brands</ActionTitle>
              <ActionDescription>
                Write to major cat litter brands asking about their 
                sustainability plans.
              </ActionDescription>
              <ImpactStat>Corporate pressure works</ImpactStat>
            </ActionCard>
            
            <ActionCard>
              <ActionIcon>♻️</ActionIcon>
              <ActionTitle>Proper Disposal</ActionTitle>
              <ActionDescription>
                Use biodegradable bags and research composting options 
                in your area (for non-clumping).
              </ActionDescription>
              <ImpactStat>Reduces plastic waste</ImpactStat>
            </ActionCard>
            
            <ActionCard>
              <ActionIcon>📚</ActionIcon>
              <ActionTitle>Learn the Differences</ActionTitle>
              <ActionDescription>
                Not all eco litters are equal. Read our guides to understand
                which type fits your needs best.
              </ActionDescription>
              <ImpactStat>Knowledge is power</ImpactStat>
            </ActionCard>
          </ActionsGrid>
        </Container>
      </Section>
      
      <ResourcesSection>
        <Container>
          <ResourcesTitle>Explore Eco-Friendly Options</ResourcesTitle>
          <ResourcesGrid>
            <ResourceCard href="/solutions">
              <ResourceTitle>Compare All 8 Litter Types →</ResourceTitle>
              <ResourceDescription>
                Side-by-side comparison of bamboo, wood, corn, wheat, paper,
                grass, walnut, and tofu litters.
              </ResourceDescription>
            </ResourceCard>

            <ResourceCard href="/switching-guide">
              <ResourceTitle>How to Switch Litters →</ResourceTitle>
              <ResourceDescription>
                Step-by-step 4-week transition guide to help your cat accept
                eco-friendly litter.
              </ResourceDescription>
            </ResourceCard>

            <ResourceCard href="/the-problem">
              <ResourceTitle>Why Clay Litter is Harmful →</ResourceTitle>
              <ResourceDescription>
                The environmental impact of strip mining and landfill waste
                from traditional cat litter.
              </ResourceDescription>
            </ResourceCard>

            <ResourceCard href="/certifications">
              <ResourceTitle>Eco-Certifications Explained →</ResourceTitle>
              <ResourceDescription>
                Learn what biodegradable, compostable, and FSC certified
                actually mean for cat litter.
              </ResourceDescription>
            </ResourceCard>
          </ResourcesGrid>
        </Container>
      </ResourcesSection>

      <CTASection>
        <Container>
          <CTATitle>Ready to Make Your First Switch?</CTATitle>
          <CTAText>
            Join thousands of cat parents who&apos;ve already made the change.
            Start with{' '}
            <a href="https://www.purrify.ca/products?utm_source=ecocatlitters" style={{ color: '#74C69D' }}>
              Purrify
            </a>
            —it works with any litter and eliminates odors naturally.
          </CTAText>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <ActionButton
              href="https://www.purrify.ca/products/trial-size?utm_source=ecocatlitters"
              external
            >
              Try Purrify Risk-Free →
            </ActionButton>
            <ActionButton href="/solutions" variant="light">
              Explore Litter Types
            </ActionButton>
          </div>
        </Container>
      </CTASection>
    </PageWrapper>
  );
}
