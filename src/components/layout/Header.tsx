'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.forestGreen};
  border-bottom: 3px solid ${({ theme }) => theme.colors.sunrise};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.02em;
  
  span {
    color: ${({ theme }) => theme.colors.sunrise};
  }
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background: ${({ theme }) => theme.colors.forestGreen};
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
    transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
    transition: transform 0.3s ease;
    box-shadow: ${({ $isOpen }) => ($isOpen ? '-10px 0 30px rgba(0,0,0,0.3)' : 'none')};
  }
`;

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.paleGreen};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.sunrise};
  }
`;

const CTAButton = styled(Link)`
  background: ${({ theme }) => theme.colors.sunrise};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.sunriseLight};
    transform: translateY(-2px);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <Logo href="/">
          eco<span>cat</span>litters
        </Logo>
        <Nav $isOpen={isOpen}>
          <NavLink href="/the-problem">The Problem</NavLink>
          <NavLink href="/solutions">Solutions</NavLink>
          <NavLink href="/impact-calculator">Calculator</NavLink>
          <NavLink href="/take-action">Take Action</NavLink>
          <CTAButton href="/solutions#featured">Shop Eco →</CTAButton>
        </Nav>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
      </Container>
    </HeaderWrapper>
  );
}
