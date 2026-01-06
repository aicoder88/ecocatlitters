'use client';

import styled from 'styled-components';
import CertificationBadge from '@/components/ui/CertificationBadge';
import ActionButton from '@/components/ui/ActionButton';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: linear-gradient(180deg,
    ${({ theme }) => theme.colors.paleGreen}20 0%,
    ${({ theme }) => theme.colors.white} 100%);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const FeaturedCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContentSection = styled.div`
  padding: ${({ theme }) => theme.spacing['3xl']};
`;

const Label = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.leafGreen};
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

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.leafGreen};
    font-weight: 700;
    font-size: 1.1em;
  }
`;

const BadgeRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CTAGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

const VisualSection = styled.div`
  background: linear-gradient(135deg,
    ${({ theme }) => theme.colors.forestGreen} 0%,
    ${({ theme }) => theme.colors.leafGreen} 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
`;

const BrandName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const BrandTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.paleGreen};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Stars = styled.div`
  color: ${({ theme }) => theme.colors.sunrise};
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Rating = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.paleGreen};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.6;
  max-width: 300px;

  &::before {
    content: '"';
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.mintGreen};
    display: block;
    margin-bottom: -${({ theme }) => theme.spacing.sm};
  }
`;

const QuoteAuthor = styled.cite`
  display: block;
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-style: normal;
  color: ${({ theme }) => theme.colors.mintGreen};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export default function FeaturedBrand() {
  return (
    <Section>
      <Container>
        <FeaturedCard>
          <ContentSection>
            <Label>Featured Eco-Friendly Brand</Label>
            <Title>Enhance Any Litter with Natural Odor Control</Title>
            <Description>
              Already switched to eco-friendly litter? Boost its performance with
              Purrify—100% natural activated carbon from coconut shells that traps
              odors at the molecular level. Works with bamboo, wood, corn, or any
              litter you choose.
            </Description>

            <FeatureList>
              <FeatureItem>Made from renewable coconut shell carbon</FeatureItem>
              <FeatureItem>Traps ammonia, not just masks it</FeatureItem>
              <FeatureItem>Works with ANY eco-friendly litter type</FeatureItem>
              <FeatureItem>Extends time between complete litter changes</FeatureItem>
              <FeatureItem>No fragrances or chemicals added</FeatureItem>
            </FeatureList>

            <BadgeRow>
              <CertificationBadge icon="🥥" label="Coconut Carbon" size="small" />
              <CertificationBadge icon="🌱" label="100% Natural" size="small" />
              <CertificationBadge icon="🐱" label="Cat-Safe" size="small" />
            </BadgeRow>

            <CTAGroup>
              <ActionButton
                href="https://www.purrify.ca/products/trial-size?utm_source=ecocatlitters&utm_medium=featured&utm_campaign=satellite"
                variant="primary"
                external
              >
                Try Purrify →
              </ActionButton>
              <ActionButton
                href="https://www.purrify.ca/learn/how-it-works?utm_source=ecocatlitters&utm_medium=featured&utm_campaign=satellite"
                variant="secondary"
                external
              >
                How It Works
              </ActionButton>
            </CTAGroup>
          </ContentSection>

          <VisualSection>
            <BrandName>Purrify</BrandName>
            <BrandTagline>Activated Carbon Litter Additive</BrandTagline>
            <Stars>★★★★★</Stars>
            <Rating>4.9/5 from verified buyers</Rating>
            <Quote>
              Switched to bamboo litter and added Purrify—zero smell, zero guilt.
              Finally an eco-friendly solution that actually works!
              <QuoteAuthor>— Eco-conscious cat parent</QuoteAuthor>
            </Quote>
          </VisualSection>
        </FeaturedCard>
      </Container>
    </Section>
  );
}
