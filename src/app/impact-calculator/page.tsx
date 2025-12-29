'use client';

import styled from 'styled-components';
import { useState } from 'react';
import ActionButton from '@/components/ui/ActionButton';

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.forestGreen} 0%, 
    ${({ theme }) => theme.colors.mossGreen} 100%);
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.paleGreen};
  line-height: 1.6;
`;

const CalculatorSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: ${({ theme }) => theme.colors.offWhite};
`;

const CalculatorCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Label = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Hint = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const InputRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const NumberInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.forestGreen};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.body};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.forestGreen};
  }
`;

const ResultsSection = styled.div<{ $show: boolean }>`
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding-top: ${({ theme }) => theme.spacing['2xl']};
  border-top: 2px solid ${({ theme }) => theme.colors.lightGray};
  display: ${({ $show }) => ($show ? 'block' : 'none')};
`;

const ResultsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ResultCard = styled.div<{ $variant: 'crisis' | 'solution' }>`
  background: ${({ theme, $variant }) => 
    $variant === 'crisis' ? theme.colors.crisis + '10' : theme.colors.mintGreen + '20'};
  border-left: 4px solid ${({ theme, $variant }) => 
    $variant === 'crisis' ? theme.colors.crisis : theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
`;

const ResultNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const ResultLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const ImpactMessage = styled.div`
  background: ${({ theme }) => theme.colors.forestGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ImpactTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ImpactText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  opacity: 0.9;
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export default function ImpactCalculatorPage() {
  const [cats, setCats] = useState(1);
  const [currentLitter, setCurrentLitter] = useState('clay');
  const [showResults, setShowResults] = useState(false);
  
  // Calculation factors (simplified for demonstration)
  const calculateImpact = () => {
    const poundsPerCatPerYear = 180; // average litter usage
    const totalPounds = cats * poundsPerCatPerYear;
    
    const clayCarbon = totalPounds * 0.8; // lbs CO2 per lb litter
    const ecoCarbon = totalPounds * 0.3;
    const carbonSaved = clayCarbon - ecoCarbon;
    
    const treesEquivalent = Math.round(carbonSaved / 48); // 48 lbs CO2 per tree per year
    
    return {
      currentWaste: totalPounds,
      carbonSaved: Math.round(carbonSaved),
      treesEquivalent,
      yearsOfImpact: 10,
      tenYearWaste: totalPounds * 10,
    };
  };
  
  const results = calculateImpact();
  
  const handleCalculate = () => {
    setShowResults(true);
  };

  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <Title>🌍 Environmental Impact Calculator</Title>
          <Subtitle>
            See the real difference you can make by switching to eco-friendly cat litter. 
            Every choice matters.
          </Subtitle>
        </Container>
      </HeroSection>
      
      <CalculatorSection>
        <Container>
          <CalculatorCard>
            <FormGroup>
              <Label>
                How many cats do you have?
                <Hint>Enter the number of cats in your household</Hint>
              </Label>
              <NumberInput 
                type="number" 
                min="1" 
                max="20" 
                value={cats}
                onChange={(e) => setCats(parseInt(e.target.value) || 1)}
              />
            </FormGroup>
            
            <FormGroup>
              <Label>
                What type of litter do you currently use?
                <Hint>Select your current litter type</Hint>
              </Label>
              <Select 
                value={currentLitter}
                onChange={(e) => setCurrentLitter(e.target.value)}
              >
                <option value="clay">Traditional Clay Litter</option>
                <option value="clumping-clay">Clumping Clay Litter</option>
                <option value="crystal">Crystal/Silica Litter</option>
                <option value="eco">Already Using Eco-Friendly</option>
              </Select>
            </FormGroup>
            
            <ActionButton onClick={handleCalculate}>
              Calculate My Impact →
            </ActionButton>
            
            <ResultsSection $show={showResults}>
              <ResultsTitle>Your Environmental Impact</ResultsTitle>
              
              <ResultsGrid>
                <ResultCard $variant="crisis">
                  <ResultNumber>{results.currentWaste} lbs</ResultNumber>
                  <ResultLabel>Landfill waste per year</ResultLabel>
                </ResultCard>
                <ResultCard $variant="solution">
                  <ResultNumber>{results.carbonSaved} lbs</ResultNumber>
                  <ResultLabel>CO2 you could save annually</ResultLabel>
                </ResultCard>
                <ResultCard $variant="solution">
                  <ResultNumber>{results.treesEquivalent}</ResultNumber>
                  <ResultLabel>Trees worth of CO2 offset</ResultLabel>
                </ResultCard>
              </ResultsGrid>
              
              <ImpactMessage>
                <ImpactTitle>🌱 Over 10 Years, You Could Prevent:</ImpactTitle>
                <ImpactText>
                  {results.tenYearWaste.toLocaleString()} lbs of non-biodegradable waste 
                  from sitting in landfills for the next 500+ years.
                </ImpactText>
              </ImpactMessage>
              
              <CTASection>
                <CTAText>
                  Ready to make the switch? Start with odor control that actually works.
                </CTAText>
                <ActionButton 
                  href="https://purrify.ca/products?utm_source=ecocatlitters&utm_medium=calculator" 
                  external
                >
                  Try Purrify Risk-Free →
                </ActionButton>
              </CTASection>
            </ResultsSection>
          </CalculatorCard>
        </Container>
      </CalculatorSection>
    </PageWrapper>
  );
}
