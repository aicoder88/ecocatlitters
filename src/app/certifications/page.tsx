'use client';

import styled from 'styled-components';
import CertificationBadge from '@/components/ui/CertificationBadge';

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.paleGreen};
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CertCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`;

const CertHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CertIcon = styled.div`
  font-size: 2.5rem;
`;

const CertTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.forestGreen};
`;

const CertDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const WhatToLookFor = styled.div`
  background: ${({ theme }) => theme.colors.mintGreen}10;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const WhatToLookForTitle = styled.strong`
  display: block;
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export default function CertificationsPage() {
  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <Title>🏷️ Understanding Eco-Certifications</Title>
          <Subtitle>
            Learn what environmental labels really mean and how to spot greenwashing.
          </Subtitle>
        </Container>
      </HeroSection>
      
      <Section>
        <Container>
          <SectionTitle>Common Certifications Explained</SectionTitle>
          <CertGrid>
            <CertCard>
              <CertHeader>
                <CertIcon>🌿</CertIcon>
                <CertTitle>Biodegradable</CertTitle>
              </CertHeader>
              <CertDescription>
                Products that break down naturally through biological processes. 
                For cat litter, this typically means plant-based materials that 
                decompose within months, not centuries.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                Specific timeframe for decomposition (e.g., &quot;breaks down in 6 months&quot;). 
                Beware vague claims without timeframes.
              </WhatToLookFor>
            </CertCard>
            
            <CertCard>
              <CertHeader>
                <CertIcon>🌲</CertIcon>
                <CertTitle>FSC Certified</CertTitle>
              </CertHeader>
              <CertDescription>
                Forest Stewardship Council certification means wood products come 
                from responsibly managed forests that provide environmental, social, 
                and economic benefits.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                The official FSC logo with a checkmark tree symbol. Multiple certification 
                levels exist (FSC 100%, FSC Mix, FSC Recycled).
              </WhatToLookFor>
            </CertCard>
            
            <CertCard>
              <CertHeader>
                <CertIcon>♻️</CertIcon>
                <CertTitle>Compostable</CertTitle>
              </CertHeader>
              <CertDescription>
                Compostable litter can be added to a compost pile and will break 
                down into nutrient-rich soil. Note: Cat waste should NOT be composted 
                for food gardens due to potential pathogens.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                ASTM D6400 or EN 13432 standards for industrial composting. 
                &quot;Home compostable&quot; is even better.
              </WhatToLookFor>
            </CertCard>
            
            <CertCard>
              <CertHeader>
                <CertIcon>🚽</CertIcon>
                <CertTitle>Flushable</CertTitle>
              </CertHeader>
              <CertDescription>
                Some natural litters claim to be flushable, meaning they can be 
                safely disposed of in the toilet. However, local regulations vary 
                and some municipalities prohibit flushing any cat litter.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                Check local regulations first. Only flush small amounts at a time. 
                Never flush if you have a septic system.
              </WhatToLookFor>
            </CertCard>
            
            <CertCard>
              <CertHeader>
                <CertIcon>🌾</CertIcon>
                <CertTitle>Made from Renewable Resources</CertTitle>
              </CertHeader>
              <CertDescription>
                Products made from plants that can be regrown, like bamboo, corn, 
                wheat, or sustainably harvested wood. Contrast with clay, which is 
                mined and takes millions of years to form.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                Specific ingredient sourcing information. &quot;Made with renewable resources&quot; 
                should specify what percentage and which materials.
              </WhatToLookFor>
            </CertCard>
            
            <CertCard>
              <CertHeader>
                <CertIcon>💨</CertIcon>
                <CertTitle>Low/No Dust</CertTitle>
              </CertHeader>
              <CertDescription>
                Important for cats (and humans) with respiratory sensitivities. 
                Clay litter is particularly dusty; many natural alternatives 
                produce significantly less dust.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                &quot;99% dust-free&quot; claims with testing data. Paper and some wood 
                litters tend to be lowest dust.
              </WhatToLookFor>
            </CertCard>
          </CertGrid>
        </Container>
      </Section>
    </PageWrapper>
  );
}
