'use client';

import styled from 'styled-components';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'urgent' | 'light';

const BaseButton = styled.button<{ $variant?: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;

  ${({ theme, $variant }) => {
    if ($variant === 'urgent') {
      return `
        background: ${theme.colors.crisis};
        color: ${theme.colors.white};
        animation: pulse 2s infinite;

        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.5); }
          50% { box-shadow: 0 0 0 10px rgba(220, 38, 38, 0); }
        }

        &:hover {
          background: rgba(220, 38, 38, 0.85);
          transform: scale(1.05);
        }
      `;
    }
    if ($variant === 'secondary') {
      return `
        background: transparent;
        color: ${theme.colors.forestGreen};
        border: 2px solid ${theme.colors.forestGreen};

        &:hover {
          background: ${theme.colors.forestGreen};
          color: ${theme.colors.white};
        }
      `;
    }
    if ($variant === 'light') {
      return `
        background: ${theme.colors.white};
        color: ${theme.colors.forestGreen};
        border: 2px solid ${theme.colors.white};

        &:hover {
          background: ${theme.colors.paleGreen};
          border-color: ${theme.colors.paleGreen};
          transform: translateY(-2px);
        }
      `;
    }
    return `
      background: ${theme.colors.sunrise};
      color: ${theme.colors.white};

      &:hover {
        background: ${theme.colors.sunriseLight};
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.lg};
      }
    `;
  }}
`;

const BaseLink = styled(Link)<{ $variant?: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;

  ${({ theme, $variant }) => {
    if ($variant === 'urgent') {
      return `
        background: ${theme.colors.crisis};
        color: ${theme.colors.white};

        &:hover {
          background: rgba(220, 38, 38, 0.85);
          transform: scale(1.05);
        }
      `;
    }
    if ($variant === 'secondary') {
      return `
        background: transparent;
        color: ${theme.colors.forestGreen};
        border: 2px solid ${theme.colors.forestGreen};

        &:hover {
          background: ${theme.colors.forestGreen};
          color: ${theme.colors.white};
        }
      `;
    }
    if ($variant === 'light') {
      return `
        background: ${theme.colors.white};
        color: ${theme.colors.forestGreen};
        border: 2px solid ${theme.colors.white};

        &:hover {
          background: ${theme.colors.paleGreen};
          border-color: ${theme.colors.paleGreen};
          transform: translateY(-2px);
        }
      `;
    }
    return `
      background: ${theme.colors.sunrise};
      color: ${theme.colors.white};

      &:hover {
        background: ${theme.colors.sunriseLight};
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.lg};
      }
    `;
  }}
`;

interface ActionButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  external?: boolean;
}

export default function ActionButton({
  children,
  href,
  onClick,
  variant = 'primary',
  external = false
}: ActionButtonProps) {
  if (href) {
    if (external) {
      return (
        <BaseLink
          href={href}
          $variant={variant}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </BaseLink>
      );
    }
    return (
      <BaseLink href={href} $variant={variant}>
        {children}
      </BaseLink>
    );
  }

  return (
    <BaseButton onClick={onClick} $variant={variant}>
      {children}
    </BaseButton>
  );
}
