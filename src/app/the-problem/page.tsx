'use client';

import styled from 'styled-components';
import StatCard from '@/components/ui/StatCard';
import ActionButton from '@/components/ui/ActionButton';

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.charcoal} 0%, 
    ${({ theme }) => theme.colors.crisis}20 100%);
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
  background: ${({ theme }) => theme.colors.crisis};
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  span {
    color: ${({ theme }) => theme.colors.crisis};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightGray};
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
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContentBlock = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.forestGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const HighlightTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HighlightText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  opacity: 0.9;
  line-height: 1.6;
`;

const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

export default function TheProblemPage() {
  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <Eyebrow>⚠️ Environmental Emergency</Eyebrow>
          <Title>
            The <span>Dirty Truth</span> About Cat Litter
          </Title>
          <Subtitle>
            Behind every bag of traditional cat litter lies a trail of environmental 
            destruction that most cat owners never see.
          </Subtitle>
        </Container>
      </HeroSection>
      
      <Section>
        <Container>
          <SectionTitle>The Scale of the Crisis</SectionTitle>
          <StatsGrid>
            <StatCard 
              stat="2M+"
              label="Tons to Landfills Annually"
              description="In the US alone, over 2 million tons of cat litter ends up in landfills every single year. None of it decomposes."
              variant="crisis"
            />
            <StatCard 
              stat="8B"
              label="Pounds of Clay Mined"
              description="Sodium bentonite clay mining destroys ecosystems and leaves permanent scars on the landscape."
              variant="crisis"
            />
            <StatCard 
              stat="500"
              label="Years to Break Down"
              description="Traditional clay litter sits in landfills for centuries, leaching chemicals into groundwater."
              variant="crisis"
            />
          </StatsGrid>
        </Container>
      </Section>
      
      <Section>
        <Container>
          <ContentBlock>
            <SectionTitle>Strip Mining: The Hidden Cost</SectionTitle>
            <Paragraph>
              The bentonite clay used in most cat litters doesn&apos;t come from a factory—it&apos;s 
              strip-mined from the earth. This process involves removing entire layers of 
              topsoil, destroying habitats, and creating massive open pits that scar the 
              landscape for generations.
            </Paragraph>
            <Paragraph>
              Mining operations consume enormous amounts of water and energy, release 
              particulate matter into the air, and disrupt local ecosystems. The wildlife 
              that once called these areas home? Displaced or destroyed.
            </Paragraph>
            
            <HighlightBox>
              <HighlightTitle>🔬 The Carbon Connection</HighlightTitle>
              <HighlightText>
                Eco-friendly alternatives like activated carbon-based products such as{' '}
                <a href="https://purrify.ca/learn/how-it-works?utm_source=ecocatlitters&utm_medium=the-problem" 
                   target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  Purrify
                </a>{' '}
                don&apos;t just reduce environmental impact—they actually capture and neutralize 
                odors at the molecular level while using sustainable materials.
              </HighlightText>
            </HighlightBox>
            
            <Paragraph>
              And then there&apos;s the transportation. Heavy bags of clay litter are shipped 
              across the country, burning fossil fuels every mile of the way. When you 
              add up the mining, processing, packaging, and shipping, the carbon footprint 
              is staggering.
            </Paragraph>
          </ContentBlock>
        </Container>
      </Section>
      
      <Section>
        <Container>
          <SectionTitle>What Ends Up in Landfills</SectionTitle>
          <StatsGrid>
            <StatCard 
              stat="34%"
              label="Higher Carbon Footprint"
              description="Compared to sustainable alternatives, clay litter generates significantly more greenhouse gas emissions."
              source="Environmental Science & Technology"
              variant="crisis"
            />
            <StatCard 
              stat="0%"
              label="Recyclable"
              description="Traditional clay litter cannot be recycled, composted, or reused in any meaningful way."
              variant="crisis"
            />
            <StatCard 
              stat="Forever"
              label="Chemicals in Soil"
              description="Sodium bentonite and silica can leach into groundwater, affecting local water supplies."
              variant="crisis"
            />
          </StatsGrid>
        </Container>
      </Section>
      
      <CTASection>
        <Container>
          <CTATitle>Ready to Be Part of the Solution?</CTATitle>
          <CTAButtons>
            <ActionButton href="/solutions">
              Explore Alternatives →
            </ActionButton>
            <ActionButton 
              href="https://purrify.ca/products?utm_source=ecocatlitters&utm_medium=the-problem-cta" 
              variant="secondary"
              external
            >
              Try Purrify
            </ActionButton>
          </CTAButtons>
        </Container>
      </CTASection>
    </PageWrapper>
  );
}
