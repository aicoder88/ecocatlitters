'use client';

import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

const CounterWrapper = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Number = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.sunrise};
  line-height: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const Unit = styled.span`
  font-size: 0.5em;
  color: ${({ theme }) => theme.colors.forestGreen};
`;

const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-top: ${({ theme }) => theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Subtext = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

interface ImpactCounterProps {
  endValue: number;
  unit?: string;
  label: string;
  subtext?: string;
  duration?: number;
  prefix?: string;
}

export default function ImpactCounter({ 
  endValue, 
  unit, 
  label, 
  subtext,
  duration = 2000,
  prefix = ''
}: ImpactCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * endValue));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return (
    <CounterWrapper ref={ref}>
      <Number>
        {prefix}{count.toLocaleString()}{unit && <Unit>{unit}</Unit>}
      </Number>
      <Label>{label}</Label>
      {subtext && <Subtext>{subtext}</Subtext>}
    </CounterWrapper>
  );
}
