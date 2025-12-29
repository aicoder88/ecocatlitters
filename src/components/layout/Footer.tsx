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

const ExternalLink = styled.a`
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
            <FooterLink href="/the-problem">The Crisis</FooterLink>
            <FooterLink href="/solutions">Solutions</FooterLink>
            <FooterLink href="/certifications">Certifications</FooterLink>
            <FooterLink href="/impact-calculator">Calculator</FooterLink>
          </LinkSection>
          
          <LinkSection>
            <LinkTitle>Act</LinkTitle>
            <FooterLink href="/take-action">Take Action</FooterLink>
            <FooterLink href="/solutions#featured">Shop Eco</FooterLink>
            <ExternalLink href="https://purrify.ca?utm_source=ecocatlitters&utm_medium=footer" target="_blank" rel="noopener noreferrer">
              Our Pick: Purrify
            </ExternalLink>
          </LinkSection>
          
          <LinkSection>
            <LinkTitle>Resources</LinkTitle>
            <ExternalLink href="https://purrify.ca/learn/science?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">
              The Science
            </ExternalLink>
            <ExternalLink href="https://purrify.ca/learn/safety?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">
              Safety Info
            </ExternalLink>
            <ExternalLink href="https://purrify.ca/blog?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">
              Blog
            </ExternalLink>
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
