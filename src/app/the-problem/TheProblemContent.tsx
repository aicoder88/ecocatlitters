'use client';

import styled from 'styled-components';
import Link from 'next/link';
import StatCard from '@/components/ui/StatCard';
import ActionButton from '@/components/ui/ActionButton';

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  background: linear-gradient(135deg,
    ${({ theme }) => theme.colors.charcoal} 0%,
    ${({ theme }) => theme.colors.crisis}20 100%);
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const Eyebrow = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.colors.crisis};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  span {
    color: ${({ theme }) => theme.colors.crisis};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.lightGray};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;

  &:nth-child(even) {
    background: ${({ theme }) => theme.colors.offWhite};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  line-height: 1.6;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
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
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.forestGreen};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const HighlightTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HighlightText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  opacity: 0.9;
  line-height: 1.6;
`;

const ImpactCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.crisis}30;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ImpactTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.crisis};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ImpactText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

const ComparisonTable = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  margin: ${({ theme }) => theme.spacing.xl} 0;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const TableRow = styled.div<{ $header?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  background: ${({ $header, theme }) => $header ? theme.colors.forestGreen : theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TableCell = styled.div<{ $header?: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ $header, theme }) => $header ? theme.colors.forestGreen : theme.colors.white};
  color: ${({ $header, theme }) => $header ? theme.colors.white : theme.colors.charcoal};
  font-weight: ${({ $header }) => $header ? '700' : '400'};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:first-child {
    text-align: left;
    font-weight: 600;
  }
`;

const SolutionPreview = styled.div`
  background: ${({ theme }) => theme.colors.paleGreen};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SolutionLink = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.forestGreen};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const CTASection = styled.section`
  background: ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.paleGreen};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

export default function TheProblemContent() {
  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <Eyebrow>Environmental Crisis</Eyebrow>
          <Title>
            The <span>Dirty Truth</span> About Cat Litter
          </Title>
          <Subtitle>
            Behind every bag of traditional clay cat litter lies a trail of environmental
            destruction that most cat owners never see. Strip mining, landfill waste, and
            toxic chemicals—it&apos;s time to understand the real cost.
          </Subtitle>
        </Container>
      </HeroSection>

      <Section>
        <Container>
          <SectionTitle>The Scale of the Cat Litter Crisis</SectionTitle>
          <SectionSubtitle>
            The numbers are staggering. Every year, millions of tons of cat litter contribute
            to environmental degradation—and the problem is growing.
          </SectionSubtitle>
          <StatsGrid>
            <StatCard
              stat="2M+"
              label="Tons to Landfills Annually"
              description="In the US alone, over 2 million tons of cat litter ends up in landfills every single year. None of it biodegrades—it sits there for centuries."
              variant="crisis"
            />
            <StatCard
              stat="8B"
              label="Pounds of Clay Mined"
              description="Sodium bentonite clay mining destroys ecosystems and leaves permanent scars on the landscape. Open-pit mines devastate wildlife habitats."
              variant="crisis"
            />
            <StatCard
              stat="500+"
              label="Years to Decompose"
              description="Traditional clay litter sits in landfills for centuries, slowly leaching chemicals into groundwater and contaminating soil."
              variant="crisis"
            />
          </StatsGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentBlock>
            <SectionTitle>Strip Mining: The Hidden Environmental Cost</SectionTitle>
            <Paragraph>
              The sodium bentonite clay used in most cat litters doesn&apos;t come from a factory—it&apos;s
              strip-mined from the earth in a process that causes irreversible environmental damage.
              This mining method involves removing entire layers of topsoil, destroying natural
              habitats, and creating massive open pits that scar the landscape for generations.
            </Paragraph>

            <ImpactCard>
              <ImpactTitle>Habitat Destruction</ImpactTitle>
              <ImpactText>
                Strip mining for cat litter clay destroys forests, wetlands, and prairies.
                Wildlife that depended on these ecosystems—including endangered species—are
                displaced or killed. The land may never fully recover.
              </ImpactText>
            </ImpactCard>

            <Paragraph>
              Mining operations consume enormous amounts of water and energy, release harmful
              particulate matter into the air, and disrupt local water tables. Communities near
              mining sites report increased respiratory problems and contaminated well water.
            </Paragraph>

            <ImpactCard>
              <ImpactTitle>Water Contamination</ImpactTitle>
              <ImpactText>
                Bentonite mining operations can contaminate groundwater with heavy metals and
                sediment. Nearby streams and rivers suffer from increased turbidity and chemical
                runoff, harming aquatic ecosystems.
              </ImpactText>
            </ImpactCard>

            <Paragraph>
              And then there&apos;s the transportation impact. Heavy bags of clay litter are shipped
              across the country, burning fossil fuels every mile of the way. A single 40-pound
              bag of clay litter might travel 1,000+ miles from mine to store. When you add up
              the mining, processing, packaging, and shipping, the carbon footprint is staggering.
            </Paragraph>

            <HighlightBox>
              <HighlightTitle>The Better Alternative</HighlightTitle>
              <HighlightText>
                Plant-based cat litters made from <Link href="/litter-types/bamboo" style={{ color: 'inherit', textDecoration: 'underline' }}>bamboo</Link>, <Link href="/litter-types/corn" style={{ color: 'inherit', textDecoration: 'underline' }}>corn</Link>, <Link href="/litter-types/wheat" style={{ color: 'inherit', textDecoration: 'underline' }}>wheat</Link>,
                and <Link href="/litter-types/wood" style={{ color: 'inherit', textDecoration: 'underline' }}>wood</Link> use renewable resources that can be regrown annually.
                No strip mining, no habitat destruction, and they biodegrade in weeks instead of centuries.
                For even better odor control, many cat owners add{' '}
                <a href="https://purrify.ca/purr/products?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  Purrify activated carbon supplements
                </a>{' '}
                to their eco-friendly litter.
              </HighlightText>
            </HighlightBox>
          </ContentBlock>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentBlock>
            <SectionTitle>Silica Dust: The Health Hazard</SectionTitle>
            <Paragraph>
              Traditional clay cat litters produce significant amounts of fine silica dust when
              poured and when cats dig in the litter box. This isn&apos;t just messy—it&apos;s a
              genuine health concern for both cats and humans.
            </Paragraph>
            <List>
              <ListItem>
                <strong>Respiratory irritation:</strong> Fine silica particles can irritate
                the lungs and airways, causing coughing, wheezing, and shortness of breath.
              </ListItem>
              <ListItem>
                <strong>Feline asthma:</strong> Cats with asthma or other respiratory conditions
                can have severe reactions to dusty litters. Many veterinarians recommend low-dust
                alternatives.
              </ListItem>
              <ListItem>
                <strong>Long-term exposure risks:</strong> Crystalline silica is classified as a
                carcinogen. While cat litter dust exposure is lower than industrial exposure,
                daily use adds up over years.
              </ListItem>
              <ListItem>
                <strong>Allergies and sensitivities:</strong> Both humans and cats can develop
                sensitivities to the additives and fragrances in conventional clay litters.
              </ListItem>
            </List>

            <SolutionPreview>
              <h3 style={{ marginBottom: '0.5rem' }}>Dust-Free Alternatives</h3>
              <p>Many eco-friendly litters produce 90-99% less dust than clay:</p>
              <SolutionGrid>
                <SolutionLink href="/litter-types/paper">Paper Litter</SolutionLink>
                <SolutionLink href="/litter-types/bamboo">Bamboo Litter</SolutionLink>
                <SolutionLink href="/litter-types/wood">Wood Pellets</SolutionLink>
                <SolutionLink href="/litter-types/grass">Grass Litter</SolutionLink>
              </SolutionGrid>
            </SolutionPreview>
          </ContentBlock>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>The Landfill Problem</SectionTitle>
          <SectionSubtitle>
            Clay litter doesn&apos;t just fill up landfills—it actively harms the environment for centuries.
          </SectionSubtitle>
          <StatsGrid>
            <StatCard
              stat="34%"
              label="Higher Carbon Footprint"
              description="Compared to sustainable alternatives, clay litter generates significantly more greenhouse gas emissions throughout its lifecycle."
              source="Environmental Science & Technology"
              variant="crisis"
            />
            <StatCard
              stat="0%"
              label="Recyclable"
              description="Traditional clay litter cannot be recycled, composted, or reused in any meaningful way. It&apos;s a one-way trip to the landfill."
              variant="crisis"
            />
            <StatCard
              stat="Forever"
              label="Chemicals in Soil"
              description="Sodium bentonite and added chemicals can leach into groundwater over time, potentially affecting local water supplies."
              variant="crisis"
            />
          </StatsGrid>

          <ContentBlock style={{ marginTop: '3rem' }}>
            <ComparisonTable>
              <TableRow $header>
                <TableCell $header>Factor</TableCell>
                <TableCell $header>Clay Litter</TableCell>
                <TableCell $header>Eco Alternatives</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Biodegradation Time</TableCell>
                <TableCell>500+ years</TableCell>
                <TableCell>2-8 weeks</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Raw Material</TableCell>
                <TableCell>Strip-mined clay</TableCell>
                <TableCell>Renewable plants</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Compostable</TableCell>
                <TableCell>No</TableCell>
                <TableCell>Yes (most types)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Dust Production</TableCell>
                <TableCell>High</TableCell>
                <TableCell>Low to None</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Weight</TableCell>
                <TableCell>Very Heavy</TableCell>
                <TableCell>Lightweight</TableCell>
              </TableRow>
            </ComparisonTable>
          </ContentBlock>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentBlock>
            <SectionTitle>What Can You Do?</SectionTitle>
            <Paragraph>
              The good news? Cat owners have more eco-friendly options than ever before.
              Switching from clay to a sustainable cat litter is one of the easiest ways
              to reduce your environmental footprint as a pet owner.
            </Paragraph>
            <List>
              <ListItem>
                <strong>Switch to plant-based litter:</strong> Options like <Link href="/litter-types/corn">corn</Link>, <Link href="/litter-types/wheat">wheat</Link>, <Link href="/litter-types/bamboo">bamboo</Link>, and <Link href="/litter-types/wood">wood</Link> litters
                offer excellent performance with minimal environmental impact.
              </ListItem>
              <ListItem>
                <strong>Boost odor control naturally:</strong> Products like{' '}
                <a href="https://purrify.ca/purr?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">Purrify</a>{' '}
                use activated carbon to neutralize odors without chemicals, working with any litter type.
              </ListItem>
              <ListItem>
                <strong>Consider composting:</strong> Many eco-friendly litters can be
                composted (for non-food gardens), keeping waste out of landfills entirely.
              </ListItem>
              <ListItem>
                <strong>Buy in bulk:</strong> Reduce packaging waste by purchasing larger
                quantities less frequently.
              </ListItem>
              <ListItem>
                <strong>Spread the word:</strong> Most cat owners don&apos;t know about the
                environmental impact of clay litter. Share what you&apos;ve learned!
              </ListItem>
            </List>
          </ContentBlock>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTATitle>Ready to Be Part of the Solution?</CTATitle>
          <CTAText>
            Join thousands of cat owners who&apos;ve made the switch to sustainable litter.
            It&apos;s better for the planet, often better for your cat, and easier than you think.
          </CTAText>
          <CTAButtons>
            <ActionButton href="/solutions">
              Explore All Alternatives →
            </ActionButton>
            <ActionButton href="/switching-guide" variant="light">
              Read the Switching Guide
            </ActionButton>
          </CTAButtons>
        </Container>
      </CTASection>
    </PageWrapper>
  );
}
