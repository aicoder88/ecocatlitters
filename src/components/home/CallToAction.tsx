'use client';

import styled from 'styled-components';
import ActionButton from '@/components/ui/ActionButton';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.charcoal} 0%, 
    ${({ theme }) => theme.colors.darkGray} 100%);
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  span {
    color: ${({ theme }) => theme.colors.sunrise};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const CTAGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding-top: ${({ theme }) => theme.spacing['2xl']};
  border-top: 1px solid ${({ theme }) => theme.colors.darkGray};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.mintGreen};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export default function CallToAction() {
  return (
    <Section>
      <Container>
        <Title>
          Ready to Make a <span>Difference</span>?
        </Title>
        <Subtitle>
          Every litter box is an opportunity. Discover sustainable options
          and join thousands of cat parents making the switch to eco-friendly.
        </Subtitle>
        <CTAGroup>
          <ActionButton href="/solutions" variant="urgent">
            Explore Litter Types
          </ActionButton>
          <ActionButton
            href="https://www.purrify.ca/products/trial-size?utm_source=ecocatlitters"
            variant="light"
            external
          >
            Try Purrify Free
          </ActionButton>
        </CTAGroup>
        
        <StatRow>
          <Stat>
            <StatNumber>15,000+</StatNumber>
            <StatLabel>Cat Parents Switched</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>50+ tons</StatNumber>
            <StatLabel>Landfill Waste Prevented</StatLabel>
          </Stat>
          <Stat>
            <StatNumber>1,200+</StatNumber>
            <StatLabel>Trees Worth of CO2 Saved</StatLabel>
          </Stat>
        </StatRow>
      </Container>
    </Section>
  );
}
