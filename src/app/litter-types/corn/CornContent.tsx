'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ArticleSchema from '@/components/seo/ArticleSchema';
import LitterHeroImage from '@/components/ui/LitterHeroImage';
import FAQSection from '@/components/faq/FAQSection';
import FAQSchema from '@/components/seo/FAQSchema';

const cornFAQs = [
  {
    question: 'Is corn cat litter safe if my cat eats it?',
    answer: 'Yes, corn litter is made from food-grade corn and is safe if ingested in small amounts. This makes it ideal for kittens who may taste-test their litter. However, if your cat regularly eats litter, consult your vet as this could indicate a health issue.'
  },
  {
    question: 'Can you flush corn cat litter?',
    answer: 'Most corn litters are flushable and septic-safe. The corn breaks down in water like toilet paper. However, flush only small amounts at a time, never flush cat feces (due to parasites), and check local regulations as some areas prohibit flushing any pet waste.'
  },
  {
    question: 'Does corn litter attract bugs?',
    answer: 'Corn litter can potentially attract pantry pests if left wet or stored improperly. Keep it in a cool, dry place in a sealed container. Change wet litter promptly and maintain regular litter box hygiene to prevent any issues.'
  },
  {
    question: 'How does corn litter compare to clay for odor control?',
    answer: 'Corn litter offers good odor control through absorption, though it may not be quite as strong as clay with deodorizers. For enhanced odor control, scoop frequently and consider adding an activated carbon supplement like <a href="https://purrify.ca/purr?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">Purrify</a>.'
  },
  {
    question: 'Will my cat accept corn litter?',
    answer: 'Corn litter has one of the highest acceptance rates among eco-friendly options because its texture closely mimics fine-grain clay. Most cats transition easily, especially with a gradual 2-week mixing approach.'
  }
];

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
`;

const Breadcrumb = styled.nav`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  a {
    color: ${({ theme }) => theme.colors.forestGreen};
    &:hover { text-decoration: underline; }
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const List = styled.ul`
  margin: ${({ theme }) => theme.spacing.md} 0;
  padding-left: ${({ theme }) => theme.spacing.xl};
`;

const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProConGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.xl} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProConBox = styled.div<{ $type: 'pro' | 'con' }>`
  background: ${({ $type, theme }) =>
    $type === 'pro' ? theme.colors.paleGreen : '#FFF5F5'};
  border-left: 4px solid ${({ $type, theme }) =>
    $type === 'pro' ? theme.colors.forestGreen : '#E53E3E'};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const ProConTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProConList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing.md};
  margin: 0;
`;

const QuickFacts = styled.div`
  background: ${({ theme }) => theme.colors.offWhite};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const FactsTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Fact = styled.div`
  display: flex;
  flex-direction: column;
`;

const FactLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FactValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.charcoal};
  font-weight: 600;
`;

const WarningBox = styled.div`
  background: #FFF9E6;
  border-left: 4px solid #D69E2E;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const WarningTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #744210;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const WarningText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #744210;
  line-height: 1.6;
`;

const RelatedLinks = styled.div`
  background: ${({ theme }) => theme.colors.forestGreen};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const RelatedTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const RelatedLink = styled(Link)`
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export default function CornContent() {
  return (
    <>
      <ArticleSchema
        title="Corn Cat Litter: Natural Clumping That Cats Love"
        description="Everything you need to know about corn-based cat litter. Learn about its excellent clumping, natural safety, flushability, and why cats often prefer it."
        url="https://ecocatlitters.com/litter-types/corn"
        datePublished="2024-01-15"
        dateModified="2024-12-01"
      />
      <FAQSchema faqs={cornFAQs} />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/solutions">Eco Litter Types</Link> / Corn
        </Breadcrumb>

        <LitterHeroImage
          src="/images/litters/corn.png"
          alt="Natural corn-based cat litter granules with corn cobs"
        />

        <Title>Corn Cat Litter: Natural Clumping Power</Title>
        <Subtitle>
          Made from whole-kernel corn, this litter offers clay-like clumping with the safety of a food-grade ingredient.
        </Subtitle>

        <QuickFacts>
          <FactsTitle>Quick Facts</FactsTitle>
          <FactsGrid>
            <Fact>
              <FactLabel>Biodegradable</FactLabel>
              <FactValue>Yes - fully compostable</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Flushable</FactLabel>
              <FactValue>Yes (most brands)</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Dust Level</FactLabel>
              <FactValue>Very Low</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Odor Control</FactLabel>
              <FactValue>Good to Very Good</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Clumping</FactLabel>
              <FactValue>Excellent</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Best For</FactLabel>
              <FactValue>Easy transition from clay</FactValue>
            </Fact>
          </FactsGrid>
        </QuickFacts>

        <Section>
          <SectionTitle>What is Corn Cat Litter?</SectionTitle>
          <Paragraph>
            Corn cat litter is made from whole-kernel corn that's been ground and processed
            into granules. The natural starches in corn create excellent clumping properties,
            while the fibrous material absorbs moisture effectively.
          </Paragraph>
          <Paragraph>
            Most corn litters use corn that's been specifically processed for pet products—not
            the same corn used for human food or animal feed. This ensures consistent quality
            and performance while utilizing agricultural resources efficiently.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Why Cats Love Corn Litter</SectionTitle>
          <Paragraph>
            Of all eco-friendly litter types, corn often has the highest acceptance rate
            among cats. Here's why:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Familiar texture:</strong> The granule size and feel closely mimics
              fine-grain clumping clay, making the transition nearly seamless for most cats.
            </ListItem>
            <ListItem>
              <strong>Soft on paws:</strong> Corn granules are gentler than clay or wood
              pellets, which senior cats and declawed cats especially appreciate.
            </ListItem>
            <ListItem>
              <strong>Neutral scent:</strong> Unlike wood or paper litters, corn has a very
              mild, non-offensive smell that doesn't deter sensitive cats.
            </ListItem>
            <ListItem>
              <strong>Natural digging:</strong> The texture allows for satisfying digging
              and burying behaviors that are instinctual for cats.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Clumping Performance</SectionTitle>
          <Paragraph>
            Corn litter's clumping ability is one of its standout features. The natural
            starches in corn act as binding agents, creating firm clumps that:
          </Paragraph>
          <List>
            <ListItem>Form quickly upon contact with moisture</ListItem>
            <ListItem>Hold together when scooped (no crumbling)</ListItem>
            <ListItem>Don't stick to the bottom of the litter box</ListItem>
            <ListItem>Allow easy separation from clean litter</ListItem>
          </List>
          <Paragraph>
            Many users report that corn litter clumps as well as—or better than—premium
            clay clumping litters. This means less waste during scooping and better value
            per bag.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Pros and Cons</SectionTitle>
          <ProConGrid>
            <ProConBox $type="pro">
              <ProConTitle>Advantages</ProConTitle>
              <ProConList>
                <ListItem>Excellent clumping</ListItem>
                <ListItem>Easy transition from clay</ListItem>
                <ListItem>Flushable (septic-safe)</ListItem>
                <ListItem>Very low dust</ListItem>
                <ListItem>Safe if ingested</ListItem>
                <ListItem>Lightweight</ListItem>
                <ListItem>Biodegradable</ListItem>
              </ProConList>
            </ProConBox>
            <ProConBox $type="con">
              <ProConTitle>Disadvantages</ProConTitle>
              <ProConList>
                <ListItem>Can attract bugs if wet</ListItem>
                <ListItem>Higher price than clay</ListItem>
                <ListItem>Aflatoxin concerns (rare)</ListItem>
                <ListItem>
                  Moderate odor control (tip: add{' '}
                  <a href="https://purrify.ca/purr?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">Purrify</a>{' '}
                  for extra freshness)
                </ListItem>
                <ListItem>Some tracking</ListItem>
              </ProConList>
            </ProConBox>
          </ProConGrid>
        </Section>

        <WarningBox>
          <WarningTitle>A Note on Aflatoxins</WarningTitle>
          <WarningText>
            Some pet owners worry about aflatoxins—toxins produced by mold that can grow
            on corn. Reputable corn litter manufacturers test for aflatoxins and use
            processes that prevent mold growth. However, always store corn litter in a
            cool, dry place and discard any that gets wet or develops an off smell.
            If your cat tends to eat litter, consult your vet about the best option.
          </WarningText>
        </WarningBox>

        <Section>
          <SectionTitle>Flushability and Disposal</SectionTitle>
          <Paragraph>
            One of corn litter's biggest conveniences is that most brands are flushable.
            The corn breaks down in water, making it safe for most sewage systems.
            However, there are important caveats:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Check your septic system:</strong> While corn litter is septic-safe,
              older systems may not handle regular flushing. When in doubt, stick to
              composting or trash disposal.
            </ListItem>
            <ListItem>
              <strong>Flush small amounts:</strong> Don't flush entire clumps at once.
              Break them up and flush with plenty of water.
            </ListItem>
            <ListItem>
              <strong>Never flush feces:</strong> Cat feces can contain Toxoplasma gondii,
              a parasite that water treatment doesn't fully eliminate. Always dispose of
              solid waste in the trash.
            </ListItem>
            <ListItem>
              <strong>Local regulations:</strong> Some areas prohibit flushing any cat
              litter. Check your local guidelines.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Boosting Odor Control</SectionTitle>
          <Paragraph>
            Corn litter's odor control is good but not exceptional compared to clay or
            wood. If you find odors becoming an issue, especially in multi-cat homes:
          </Paragraph>
          <List>
            <ListItem>
              Scoop more frequently—at least twice daily for multiple cats
            </ListItem>
            <ListItem>
              Add an activated carbon supplement to the litter box
            </ListItem>
            <ListItem>
              Ensure adequate litter depth (3-4 inches)
            </ListItem>
            <ListItem>
              Replace all litter completely every 2-3 weeks
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Who Should Choose Corn Litter?</SectionTitle>
          <Paragraph>
            Corn litter is an excellent choice for:
          </Paragraph>
          <List>
            <ListItem>
              <strong>First-time eco-switchers:</strong> The familiar texture makes
              the transition easy for both cats and owners.
            </ListItem>
            <ListItem>
              <strong>Picky cats:</strong> High acceptance rate means fewer litter
              box avoidance issues.
            </ListItem>
            <ListItem>
              <strong>Apartment dwellers:</strong> Flushability means no trips to
              the dumpster with smelly bags.
            </ListItem>
            <ListItem>
              <strong>Households with kittens:</strong> Safe if accidentally ingested
              during the curious kitten phase.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Corn vs. Other Grain-Based Litters</SectionTitle>
          <Paragraph>
            Corn isn't the only grain-based option. Here's how it compares:
          </Paragraph>
          <Paragraph>
            <strong>Corn vs. <Link href="/litter-types/wheat">Wheat</Link>:</strong> Both
            clump well, but wheat has natural enzymes that may control odors slightly
            better. Corn typically has a finer texture.
          </Paragraph>
          <Paragraph>
            <strong>Corn vs. <Link href="/litter-types/grass">Grass</Link>:</strong> Grass
            litter is newer to the market and often has better odor control, but corn
            is more widely available and usually more affordable.
          </Paragraph>
        </Section>

        <FAQSection faqs={cornFAQs} />

        <RelatedLinks>
          <RelatedTitle>Explore Other Eco-Friendly Options</RelatedTitle>
          <RelatedGrid>
            <RelatedLink href="/litter-types/bamboo">Bamboo Litter</RelatedLink>
            <RelatedLink href="/litter-types/wood">Wood Litter</RelatedLink>
            <RelatedLink href="/litter-types/paper">Paper Litter</RelatedLink>
            <RelatedLink href="/litter-types/walnut">Walnut Litter</RelatedLink>
            <RelatedLink href="/litter-types/wheat">Wheat Litter</RelatedLink>
            <RelatedLink href="/litter-types/grass">Grass Litter</RelatedLink>
          </RelatedGrid>
        </RelatedLinks>
      </Article>
    </>
  );
}
