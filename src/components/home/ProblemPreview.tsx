'use client';

import styled from 'styled-components';
import StatCard from '@/components/ui/StatCard';
import ActionButton from '@/components/ui/ActionButton';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.offWhite};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']};
`;

const Eyebrow = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.crisis};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.charcoal};
  margin: ${({ theme }) => theme.spacing.md} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
`;

export default function ProblemPreview() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <Eyebrow>⚠️ The Hidden Cost</Eyebrow>
          <Title>Your Cat&apos;s Litter Has a Dirty Secret</Title>
          <Subtitle>
            Most cat owners don&apos;t realize the environmental devastation caused by 
            conventional cat litter. Here&apos;s what the industry doesn&apos;t tell you.
          </Subtitle>
        </SectionHeader>
        
        <StatsGrid>
          <StatCard 
            stat="10,000+"
            label="Acres Strip-Mined"
            description="Every year, massive swaths of land are destroyed to extract clay for cat litter. These ecosystems never fully recover."
            source="EPA Mining Reports"
            variant="crisis"
          />
          <StatCard 
            stat="34%"
            label="Higher Carbon Footprint"
            description="Clay litter production and transport generates significantly more CO2 than sustainable alternatives."
            source="Environmental Science Journal"
            variant="crisis"
          />
          <StatCard 
            stat="$0"
            label="Recycling Value"
            description="Traditional clay litter cannot be recycled, composted, or repurposed. It's a one-way trip to the landfill."
            source="Waste Management Data"
            variant="crisis"
          />
        </StatsGrid>
        
        <CTAWrapper>
          <ActionButton href="/the-problem">
            Understand the Full Impact →
          </ActionButton>
        </CTAWrapper>
      </Container>
    </Section>
  );
}
