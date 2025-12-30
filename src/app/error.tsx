'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useEffect } from 'react';

const ErrorWrapper = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ErrorTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 500px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const RetryButton = styled.button`
  background: ${({ theme }) => theme.colors.forestGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.base};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: ${({ theme }) => theme.spacing.md};

  &:hover {
    background: ${({ theme }) => theme.colors.leafGreen};
    transform: translateY(-2px);
  }
`;

const HomeLink = styled(Link)`
  color: ${({ theme }) => theme.colors.forestGreen};
  font-weight: 600;
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.leafGreen};
  }
`;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorWrapper>
      <ErrorIcon>🐱</ErrorIcon>
      <ErrorTitle>Oops! Something went wrong</ErrorTitle>
      <ErrorMessage>
        Our eco-friendly servers had a small hiccup. Don&apos;t worry, no cats were harmed
        and no litter was wasted. Let&apos;s try that again.
      </ErrorMessage>
      <div>
        <RetryButton onClick={() => reset()}>
          Try Again
        </RetryButton>
        <HomeLink href="/">Return Home</HomeLink>
      </div>
    </ErrorWrapper>
  );
}
