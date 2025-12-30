'use client';

import styled from 'styled-components';
import Image from 'next/image';

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 200px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

interface LitterHeroImageProps {
  src: string;
  alt: string;
}

export default function LitterHeroImage({ src, alt }: LitterHeroImageProps) {
  return (
    <HeroWrapper>
      <StyledImage
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 800px) 100vw, 800px"
      />
    </HeroWrapper>
  );
}
