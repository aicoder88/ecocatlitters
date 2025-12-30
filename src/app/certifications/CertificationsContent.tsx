'use client';

import styled from 'styled-components';
import Link from 'next/link';

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  background: ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const WideContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Breadcrumb = styled.nav`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.paleGreen};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  a {
    color: ${({ theme }) => theme.colors.white};
    &:hover { text-decoration: underline; }
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.paleGreen};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.offWhite};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  line-height: 1.6;
`;

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const CertCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.forestGreen};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const CertHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CertIcon = styled.div`
  font-size: 2.5rem;
`;

const CertTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.forestGreen};
`;

const CertDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const WhatToLookFor = styled.div`
  background: ${({ theme }) => theme.colors.mintGreen}10;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const WhatToLookForTitle = styled.strong`
  display: block;
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const RedFlags = styled.div`
  background: #FFF5F5;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-left: 3px solid #E53E3E;
`;

const RedFlagsTitle = styled.strong`
  display: block;
  color: #C53030;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const GreenwashingSection = styled.div`
  background: ${({ theme }) => theme.colors.charcoal};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const GreenwashingTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const GreenwashingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const GreenwashingCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const GreenwashingIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const GreenwashingCardTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.sunrise};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const GreenwashingCardText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.5;
`;

const ContentBlock = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const List = styled.ul`
  margin: ${({ theme }) => theme.spacing.lg} 0;
  padding-left: ${({ theme }) => theme.spacing.xl};
`;

const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const QuickReference = styled.div`
  background: ${({ theme }) => theme.colors.forestGreen};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const QuickReferenceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const QuickGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const QuickCard = styled(Link)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
  }
`;

const QuickCardTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const QuickCardSubtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.paleGreen};
`;

export default function CertificationsContent() {
  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <Breadcrumb>
            <Link href="/">Home</Link> / Eco-Certifications Guide
          </Breadcrumb>
          <Title>Understanding Eco-Certifications for Cat Litter</Title>
          <Subtitle>
            Learn what environmental labels really mean, how to spot greenwashing,
            and which certifications actually matter when choosing sustainable cat litter.
          </Subtitle>
        </Container>
      </HeroSection>

      <Section>
        <WideContainer>
          <SectionTitle>Essential Certifications Explained</SectionTitle>
          <SectionSubtitle>
            These are the key terms and certifications you&apos;ll encounter when shopping
            for eco-friendly cat litter. Understanding them helps you make informed choices.
          </SectionSubtitle>
          <CertGrid>
            <CertCard>
              <CertHeader>
                <CertIcon>🌿</CertIcon>
                <CertTitle>Biodegradable</CertTitle>
              </CertHeader>
              <CertDescription>
                Products that break down naturally through biological processes. For cat litter,
                this typically means plant-based materials that decompose within weeks or months
                instead of the centuries required for clay. Biodegradable litters reduce landfill
                burden and can often be composted.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                Specific timeframe for decomposition (e.g., &quot;breaks down in 6 months&quot;).
                Look for litters made from <Link href="/litter-types/corn">corn</Link>, <Link href="/litter-types/wheat">wheat</Link>, <Link href="/litter-types/bamboo">bamboo</Link>,
                or other plant materials.
              </WhatToLookFor>
              <RedFlags>
                <RedFlagsTitle>Red flags:</RedFlagsTitle>
                Vague claims without timeframes. &quot;Eco-friendly&quot; without specifics.
                Clay litter with &quot;natural&quot; additives is not biodegradable.
              </RedFlags>
            </CertCard>

            <CertCard>
              <CertHeader>
                <CertIcon>🌲</CertIcon>
                <CertTitle>FSC Certified (Forest Stewardship Council)</CertTitle>
              </CertHeader>
              <CertDescription>
                FSC certification means wood products come from responsibly managed forests
                that provide environmental, social, and economic benefits. For <Link href="/litter-types/wood">wood-based cat litters</Link>,
                this ensures the pine, cedar, or other wood wasn&apos;t sourced from old-growth
                forests or illegal logging operations.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                The official FSC logo with a checkmark tree symbol. Certification levels include
                FSC 100% (all wood certified), FSC Mix (some certified), and FSC Recycled
                (from reclaimed sources).
              </WhatToLookFor>
              <RedFlags>
                <RedFlagsTitle>Red flags:</RedFlagsTitle>
                Claims of &quot;sustainably sourced&quot; without FSC or similar third-party
                certification. Vague statements about &quot;responsible forestry.&quot;
              </RedFlags>
            </CertCard>

            <CertCard>
              <CertHeader>
                <CertIcon>♻️</CertIcon>
                <CertTitle>Compostable</CertTitle>
              </CertHeader>
              <CertDescription>
                Compostable litter can be added to a compost pile and will break down into
                nutrient-rich soil. This is ideal for eco-conscious cat owners who want to
                minimize waste. Most plant-based litters are compostable under the right conditions.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                ASTM D6400 or EN 13432 standards for industrial composting. &quot;Home compostable&quot;
                is even better as it requires less infrastructure. <Link href="/litter-types/wood">Wood</Link> and <Link href="/litter-types/paper">paper</Link> litters
                typically compost well.
              </WhatToLookFor>
              <RedFlags>
                <RedFlagsTitle>Important safety note:</RedFlagsTitle>
                Cat waste should NOT be composted for food gardens due to potential pathogens
                like Toxoplasma. Compost only for ornamental gardens or use industrial facilities.
              </RedFlags>
            </CertCard>

            <CertCard>
              <CertHeader>
                <CertIcon>🚽</CertIcon>
                <CertTitle>Flushable</CertTitle>
              </CertHeader>
              <CertDescription>
                Some natural litters claim to be flushable, meaning they can be safely disposed
                of in the toilet. This can be convenient and keeps waste out of landfills.
                <Link href="/litter-types/tofu">Tofu</Link> and <Link href="/litter-types/corn">corn</Link> litters often have flushable formulas.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                Specific testing data on septic safety. &quot;Septic-safe&quot; claims should be
                backed by ASTM or similar standards. Check that the litter dissolves fully.
              </WhatToLookFor>
              <RedFlags>
                <RedFlagsTitle>Cautions:</RedFlagsTitle>
                Local regulations may prohibit flushing any cat litter. Never flush if you have
                a septic system. Flush only small amounts at a time. Some municipalities ban
                it due to Toxoplasma concerns.
              </RedFlags>
            </CertCard>

            <CertCard>
              <CertHeader>
                <CertIcon>🌾</CertIcon>
                <CertTitle>Made from Renewable Resources</CertTitle>
              </CertHeader>
              <CertDescription>
                Products made from plants that can be regrown annually, unlike clay which is
                mined and takes millions of years to form. Renewable resource litters have
                a much lower environmental footprint and are typically biodegradable.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                Specific ingredient sourcing information. <Link href="/litter-types/bamboo">Bamboo</Link> is the fastest-growing
                renewable resource. <Link href="/litter-types/grass">Grass</Link>, <Link href="/litter-types/corn">corn</Link>, and <Link href="/litter-types/wheat">wheat</Link> are harvested annually.
                Look for percentages of renewable content.
              </WhatToLookFor>
              <RedFlags>
                <RedFlagsTitle>Red flags:</RedFlagsTitle>
                &quot;Made with renewable resources&quot; without specifying which materials
                or what percentage. Mixed products may have minimal renewable content.
              </RedFlags>
            </CertCard>

            <CertCard>
              <CertHeader>
                <CertIcon>💨</CertIcon>
                <CertTitle>Low-Dust / Dust-Free</CertTitle>
              </CertHeader>
              <CertDescription>
                Important for cats (and humans) with respiratory sensitivities. Clay litter is
                particularly dusty and contains silica particles. Many natural alternatives
                produce significantly less dust, making them healthier for everyone in the household.
              </CertDescription>
              <WhatToLookFor>
                <WhatToLookForTitle>What to look for:</WhatToLookForTitle>
                &quot;99% dust-free&quot; claims with testing data. <Link href="/litter-types/paper">Paper</Link> and pelletized
                <Link href="/litter-types/wood"> wood</Link> litters tend to be the lowest dust. Look for litters
                processed to minimize fine particles.
              </WhatToLookFor>
              <RedFlags>
                <RedFlagsTitle>Red flags:</RedFlagsTitle>
                &quot;Low dust&quot; without specific percentages or testing. Clay litter labeled
                &quot;reduced dust&quot; may still produce significant amounts.
              </RedFlags>
            </CertCard>
          </CertGrid>
        </WideContainer>
      </Section>

      <Section>
        <Container>
          <GreenwashingSection>
            <GreenwashingTitle>How to Spot Greenwashing</GreenwashingTitle>
            <GreenwashingGrid>
              <GreenwashingCard>
                <GreenwashingIcon>🎨</GreenwashingIcon>
                <GreenwashingCardTitle>Green Imagery</GreenwashingCardTitle>
                <GreenwashingCardText>
                  Packaging covered in leaves, trees, and nature scenes doesn&apos;t mean
                  the product is actually eco-friendly. Look past the design to the
                  actual ingredients and certifications.
                </GreenwashingCardText>
              </GreenwashingCard>

              <GreenwashingCard>
                <GreenwashingIcon>🔤</GreenwashingIcon>
                <GreenwashingCardTitle>Vague Terms</GreenwashingCardTitle>
                <GreenwashingCardText>
                  Words like &quot;natural,&quot; &quot;eco,&quot; and &quot;green&quot;
                  have no legal definition. Look for specific, verifiable claims like
                  &quot;100% plant-based&quot; or &quot;FSC certified.&quot;
                </GreenwashingCardText>
              </GreenwashingCard>

              <GreenwashingCard>
                <GreenwashingIcon>🎭</GreenwashingIcon>
                <GreenwashingCardTitle>Hidden Trade-offs</GreenwashingCardTitle>
                <GreenwashingCardText>
                  A product might highlight one eco-friendly aspect while hiding problems.
                  &quot;Made with recycled packaging&quot; means nothing if the litter
                  itself is strip-mined clay.
                </GreenwashingCardText>
              </GreenwashingCard>
            </GreenwashingGrid>
          </GreenwashingSection>

          <ContentBlock>
            <SectionTitle>Questions to Ask Before Buying</SectionTitle>
            <Paragraph>
              When evaluating any cat litter that claims to be eco-friendly, ask yourself these questions:
            </Paragraph>
            <List>
              <ListItem>
                <strong>What is it made from?</strong> Look for specific plant materials
                like corn, wheat, bamboo, wood, paper, grass, or walnut shells.
              </ListItem>
              <ListItem>
                <strong>How is the raw material sourced?</strong> Is it a byproduct of
                other industries (like corn cobs from food production) or specifically grown?
              </ListItem>
              <ListItem>
                <strong>Is it biodegradable, and in what timeframe?</strong> Weeks or months
                is good; years or &quot;eventually&quot; is not.
              </ListItem>
              <ListItem>
                <strong>Are there third-party certifications?</strong> FSC, USDA BioPreferred,
                or other recognized standards add credibility.
              </ListItem>
              <ListItem>
                <strong>What happens at end of life?</strong> Can it be composted, flushed,
                or does it still end up in a landfill?
              </ListItem>
              <ListItem>
                <strong>Is the packaging also eco-friendly?</strong> Some brands use recyclable
                or compostable bags, reducing total environmental impact.
              </ListItem>
            </List>
          </ContentBlock>
        </Container>
      </Section>

      <Section>
        <Container>
          <QuickReference>
            <QuickReferenceTitle>Explore Certified Eco-Friendly Options</QuickReferenceTitle>
            <QuickGrid>
              <QuickCard href="/litter-types/bamboo">
                <QuickCardTitle>Bamboo Litter</QuickCardTitle>
                <QuickCardSubtitle>Fastest renewable resource</QuickCardSubtitle>
              </QuickCard>
              <QuickCard href="/litter-types/wood">
                <QuickCardTitle>Wood Litter</QuickCardTitle>
                <QuickCardSubtitle>Often FSC certified</QuickCardSubtitle>
              </QuickCard>
              <QuickCard href="/litter-types/corn">
                <QuickCardTitle>Corn Litter</QuickCardTitle>
                <QuickCardSubtitle>Agricultural byproduct</QuickCardSubtitle>
              </QuickCard>
              <QuickCard href="/litter-types/paper">
                <QuickCardTitle>Paper Litter</QuickCardTitle>
                <QuickCardSubtitle>Often recycled content</QuickCardSubtitle>
              </QuickCard>
              <QuickCard href="/litter-types/wheat">
                <QuickCardTitle>Wheat Litter</QuickCardTitle>
                <QuickCardSubtitle>Renewable grain-based</QuickCardSubtitle>
              </QuickCard>
              <QuickCard href="/litter-types/grass">
                <QuickCardTitle>Grass Litter</QuickCardTitle>
                <QuickCardSubtitle>Rapidly renewable</QuickCardSubtitle>
              </QuickCard>
              <QuickCard href="/litter-types/walnut">
                <QuickCardTitle>Walnut Litter</QuickCardTitle>
                <QuickCardSubtitle>Upcycled shells</QuickCardSubtitle>
              </QuickCard>
              <QuickCard href="/litter-types/tofu">
                <QuickCardTitle>Tofu Litter</QuickCardTitle>
                <QuickCardSubtitle>Soy-based, flushable</QuickCardSubtitle>
              </QuickCard>
            </QuickGrid>
          </QuickReference>
        </Container>
      </Section>
    </PageWrapper>
  );
}
