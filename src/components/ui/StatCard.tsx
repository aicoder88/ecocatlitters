'use client';

import styled from 'styled-components';

const Card = styled.div<{ $variant?: 'crisis' | 'solution' | 'neutral' }>`
  background: ${({ theme, $variant }) => 
    $variant === 'crisis' ? theme.colors.crisis + '10' :
    $variant === 'solution' ? theme.colors.mintGreen + '20' :
    theme.colors.white};
  border-left: 4px solid ${({ theme, $variant }) => 
    $variant === 'crisis' ? theme.colors.crisis :
    $variant === 'solution' ? theme.colors.forestGreen :
    theme.colors.sunrise};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const StatNumber = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1;
`;

const StatLabel = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const StatDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const Source = styled.cite`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ theme }) => theme.spacing.md};
  font-style: normal;
`;

interface StatCardProps {
  stat: string;
  label: string;
  description?: string;
  source?: string;
  variant?: 'crisis' | 'solution' | 'neutral';
}

export default function StatCard({ stat, label, description, source, variant = 'neutral' }: StatCardProps) {
  return (
    <Card $variant={variant}>
      <StatNumber>{stat}</StatNumber>
      <StatLabel>{label}</StatLabel>
      {description && <StatDescription>{description}</StatDescription>}
      {source && <Source>Source: {source}</Source>}
    </Card>
  );
}
