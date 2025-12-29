'use client';

import styled from 'styled-components';

const Badge = styled.div<{ $size?: 'small' | 'medium' | 'large' }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.mintGreen};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: ${({ theme, $size }) => 
    $size === 'small' ? `${theme.spacing.xs} ${theme.spacing.sm}` :
    $size === 'large' ? `${theme.spacing.md} ${theme.spacing.xl}` :
    `${theme.spacing.sm} ${theme.spacing.md}`};
`;

const Icon = styled.span<{ $size?: 'small' | 'medium' | 'large' }>`
  font-size: ${({ $size }) => 
    $size === 'small' ? '1rem' :
    $size === 'large' ? '1.5rem' :
    '1.25rem'};
`;

const Label = styled.span<{ $size?: 'small' | 'medium' | 'large' }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme, $size }) => 
    $size === 'small' ? theme.fontSizes.xs :
    $size === 'large' ? theme.fontSizes.base :
    theme.fontSizes.sm};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.forestGreen};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

interface CertificationBadgeProps {
  icon: string;
  label: string;
  size?: 'small' | 'medium' | 'large';
}

export default function CertificationBadge({ icon, label, size = 'medium' }: CertificationBadgeProps) {
  return (
    <Badge $size={size}>
      <Icon $size={size}>{icon}</Icon>
      <Label $size={size}>{label}</Label>
    </Badge>
  );
}
