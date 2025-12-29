'use client';

import styled from 'styled-components';
import Image from 'next/image';
import ActionButton from '@/components/ui/ActionButton';
import ImpactCounter from '@/components/ui/ImpactCounter';

const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.forestGreen} 0%, 
    ${({ theme }) => theme.colors.leafGreen} 50%,
    ${({ theme }) => theme.colors.mossGreen} 100%);
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: url('/grid-pattern.svg') repeat;
  opacity: 0.1;
`;

const Container = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Content = styled.div``;

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

const Headline = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  span {
    color: ${({ theme }) => theme.colors.sunrise};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const Subheadline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.paleGreen};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 540px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 0 auto ${({ theme }) => theme.spacing.xl};
  }
`;

const CTAGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.white}10;
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.white}20;
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroOverlay />
      <Container>
        <Content>
          <Eyebrow>🌍 Environmental Crisis</Eyebrow>
          <Headline>
            2 Million Tons of Cat Litter<br />
            <span>End Up in Landfills</span><br />
            Every Year
          </Headline>
          <Subheadline>
            Traditional clay litter is strip-mined, non-biodegradable, and takes 
            centuries to decompose. It&apos;s time to make a different choice.
          </Subheadline>
          <CTAGroup>
            <ActionButton href="/the-problem" variant="urgent">
              See the Crisis →
            </ActionButton>
            <ActionButton href="/solutions" variant="secondary">
              Find Solutions
            </ActionButton>
          </CTAGroup>
        </Content>
        
        <StatsGrid>
          <ImpactCounter 
            endValue={2} 
            unit="M tons" 
            label="Landfill Waste" 
            subtext="Cat litter annually"
          />
          <ImpactCounter 
            endValue={8} 
            unit="B lbs" 
            label="Clay Mined" 
            subtext="Destroying ecosystems"
          />
          <ImpactCounter 
            endValue={500} 
            label="Years to Decompose" 
            subtext="For clay litter"
          />
          <ImpactCounter 
            endValue={85} 
            unit="%" 
            label="Cat Owners" 
            subtext="Want eco options"
          />
        </StatsGrid>
      </Container>
    </HeroSection>
  );
}
