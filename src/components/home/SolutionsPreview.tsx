'use client';

import styled from 'styled-components';
import Link from 'next/link';
import CertificationBadge from '@/components/ui/CertificationBadge';
import ActionButton from '@/components/ui/ActionButton';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.forestGreen};
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
  color: ${({ theme }) => theme.colors.mintGreen};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => theme.spacing.md} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.paleGreen};
  line-height: 1.6;
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SolutionCard = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const SolutionIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SolutionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SolutionDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.5;
`;

const FeaturedSection = styled.div`
  background: ${({ theme }) => theme.colors.white}10;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FeaturedContent = styled.div``;

const FeaturedLabel = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.sunrise};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeaturedTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeaturedDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.paleGreen};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const BadgeRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

export default function SolutionsPreview() {
  return (
    <Section>
      <Container>
        <SectionHeader>
          <Eyebrow>🌱 Better Alternatives Exist</Eyebrow>
          <Title>Eco-Friendly Litter That Actually Works</Title>
          <Subtitle>
            Discover sustainable options that are better for the planet 
            AND your cat. No compromises required.
          </Subtitle>
        </SectionHeader>
        
        <SolutionsGrid>
          <SolutionCard href="/solutions/bamboo">
            <SolutionIcon>🎋</SolutionIcon>
            <SolutionTitle>Bamboo</SolutionTitle>
            <SolutionDesc>Fast-growing, biodegradable, naturally odor-fighting</SolutionDesc>
          </SolutionCard>
          
          <SolutionCard href="/solutions/wood">
            <SolutionIcon>🪵</SolutionIcon>
            <SolutionTitle>Wood & Pine</SolutionTitle>
            <SolutionDesc>Sustainable forestry, excellent absorption</SolutionDesc>
          </SolutionCard>
          
          <SolutionCard href="/solutions/corn">
            <SolutionIcon>🌽</SolutionIcon>
            <SolutionTitle>Corn & Wheat</SolutionTitle>
            <SolutionDesc>Agricultural byproducts, fully compostable</SolutionDesc>
          </SolutionCard>
          
          <SolutionCard href="/solutions/paper">
            <SolutionIcon>📄</SolutionIcon>
            <SolutionTitle>Recycled Paper</SolutionTitle>
            <SolutionDesc>Dust-free, recycled content, gentle</SolutionDesc>
          </SolutionCard>
        </SolutionsGrid>
        
        <FeaturedSection id="featured">
          <FeaturedContent>
            <FeaturedLabel>🏆 Our Top Pick</FeaturedLabel>
            <FeaturedTitle>Purrify: Carbon-Negative Odor Control</FeaturedTitle>
            <FeaturedDesc>
              Activated carbon technology that actually captures and neutralizes 
              odors at the molecular level. Made with sustainable materials and 
              designed for the eco-conscious cat parent.
            </FeaturedDesc>
            <BadgeRow>
              <CertificationBadge icon="🌿" label="Natural" size="small" />
              <CertificationBadge icon="♻️" label="Sustainable" size="small" />
              <CertificationBadge icon="🐱" label="Cat-Safe" size="small" />
            </BadgeRow>
            <ActionButton 
              href="https://purrify.ca/products?utm_source=ecocatlitters&utm_medium=featured" 
              external
            >
              Explore Purrify →
            </ActionButton>
          </FeaturedContent>
          <div style={{ textAlign: 'center' }}>
            <ActionButton 
              href="https://purrify.ca/learn/science?utm_source=ecocatlitters" 
              variant="secondary"
              external
            >
              How It Works →
            </ActionButton>
          </div>
        </FeaturedSection>
      </Container>
    </Section>
  );
}
