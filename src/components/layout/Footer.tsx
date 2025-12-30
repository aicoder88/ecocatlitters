'use client';

import styled from 'styled-components';
import Link from 'next/link';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.charcoal};
  color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  padding-bottom: ${({ theme }) => theme.spacing['2xl']};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const BrandSection = styled.div``;

const BrandName = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  span {
    color: ${({ theme }) => theme.colors.sunrise};
  }
`;

const BrandTagline = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  line-height: 1.6;
  max-width: 300px;
`;

const LinkSection = styled.div``;

const LinkTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FooterLink = styled(Link)`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.mintGreen};
  }
`;


const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const EcoStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  span {
    color: ${({ theme }) => theme.colors.mintGreen};
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <TopSection>
          <BrandSection>
            <BrandName>
              eco<span>cat</span>litters
            </BrandName>
            <BrandTagline>
              Fighting for a planet where our cats can breathe easy. 
              Every litter box choice matters.
            </BrandTagline>
          </BrandSection>
          
          <LinkSection>
            <LinkTitle>Learn</LinkTitle>
            <FooterLink href="/the-problem">The Problem</FooterLink>
            <FooterLink href="/solutions">Litter Types</FooterLink>
            <FooterLink href="/certifications">Certifications</FooterLink>
            <FooterLink href="/switching-guide">Switching Guide</FooterLink>
          </LinkSection>

          <LinkSection>
            <LinkTitle>Litter Types</LinkTitle>
            <FooterLink href="/litter-types/bamboo">Bamboo</FooterLink>
            <FooterLink href="/litter-types/wood">Wood & Pine</FooterLink>
            <FooterLink href="/litter-types/corn">Corn</FooterLink>
            <FooterLink href="/litter-types/walnut">Walnut Shell</FooterLink>
          </LinkSection>
          
          <LinkSection>
            <LinkTitle>More Types</LinkTitle>
            <FooterLink href="/litter-types/wheat">Wheat</FooterLink>
            <FooterLink href="/litter-types/paper">Paper</FooterLink>
            <FooterLink href="/litter-types/grass">Grass</FooterLink>
            <FooterLink href="/litter-types/tofu">Tofu</FooterLink>
          </LinkSection>
        </TopSection>
        
        <BottomSection>
          <Copyright>
            © {new Date().getFullYear()} EcoCatLitters. For the planet. For our cats.
          </Copyright>
          <EcoStats>
            <div><span>🌱</span> Carbon-aware site</div>
            <div><span>♻️</span> Green hosted</div>
          </EcoStats>
        </BottomSection>
      </Container>
    </FooterWrapper>
  );
}
