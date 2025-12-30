'use client';

import styled from 'styled-components';
import Link from 'next/link';

const NotFoundWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
`;

const NotFoundIcon = styled.div`
  font-size: 5rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const NotFoundTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const NotFoundMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 500px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

const SuggestionBox = styled.div`
  background: ${({ theme }) => theme.colors.paleGreen};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 400px;
`;

const SuggestionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SuggestionLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SuggestionLink = styled(Link)`
  color: ${({ theme }) => theme.colors.forestGreen};
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const HomeButton = styled(Link)`
  background: ${({ theme }) => theme.colors.forestGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.base};
  display: inline-block;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.leafGreen};
    transform: translateY(-2px);
  }
`;

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <NotFoundIcon>🔍🐱</NotFoundIcon>
      <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
      <NotFoundMessage>
        Looks like this page wandered off like a curious cat! The page you&apos;re looking
        for doesn&apos;t exist or may have been moved.
      </NotFoundMessage>

      <SuggestionBox>
        <SuggestionTitle>Try one of these instead:</SuggestionTitle>
        <SuggestionLinks>
          <SuggestionLink href="/solutions">Browse Eco-Friendly Litter Types</SuggestionLink>
          <SuggestionLink href="/the-problem">Learn About Cat Litter&apos;s Impact</SuggestionLink>
          <SuggestionLink href="/switching-guide">How to Switch Cat Litters</SuggestionLink>
          <SuggestionLink href="/certifications">Eco Certifications Explained</SuggestionLink>
        </SuggestionLinks>
      </SuggestionBox>

      <HomeButton href="/">Return to Homepage</HomeButton>
    </NotFoundWrapper>
  );
}
