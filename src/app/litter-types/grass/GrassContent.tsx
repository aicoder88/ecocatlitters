'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ArticleSchema from '@/components/seo/ArticleSchema';
import LitterHeroImage from '@/components/ui/LitterHeroImage';
import FAQSection from '@/components/faq/FAQSection';
import FAQSchema from '@/components/seo/FAQSchema';

const grassFAQs = [
  {
    question: 'Why do cats love grass litter so much?',
    answer: 'Cats evolved as grassland hunters, so the soft texture and subtle vegetal scent may appeal to deep instincts. Many cats that reject other eco-litters accept grass litter immediately—some even prefer it to their old clay litter right away.'
  },
  {
    question: 'Is grass litter worth the higher price?',
    answer: 'While grass litter costs more upfront, many users find the value proposition works out: it lasts longer, needs fewer supplements for odor control, high cat acceptance prevents waste, and the lightweight bags are easier to manage.'
  },
  {
    question: 'Does grass litter clump well?',
    answer: 'Grass litter forms very tight, solid clumps that don\'t crumble during scooping. Clumps form quickly and hold together better than many other eco-litters, making cleanup efficient and reducing waste.'
  },
  {
    question: 'Is grass cat litter hypoallergenic?',
    answer: 'Yes, grass litter is gluten-free and generally hypoallergenic, making it suitable for households with grain sensitivities. It also produces minimal dust, benefiting cats and humans with respiratory sensitivities.'
  },
  {
    question: 'Where can I buy grass cat litter?',
    answer: 'Grass litter is available at specialty pet stores, natural grocery stores, online retailers (often with subscription discounts), and some large pet chains in their eco-friendly sections. Availability is growing as demand increases.'
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

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #48BB78 0%, #38A169 100%);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  color: white;
`;

const HighlightTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HighlightText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
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

export default function GrassContent() {
  return (
    <>
      <ArticleSchema
        title="Grass Cat Litter: The Newest Eco-Friendly Innovation"
        description="Explore grass seed cat litter - the latest sustainable innovation. Learn about its exceptional clumping, natural odor control, and why cats instinctively love it."
        url="https://ecocatlitters.com/litter-types/grass"
        datePublished="2024-01-15"
        dateModified="2024-12-01"
      />
      <FAQSchema faqs={grassFAQs} />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/solutions">Eco Litter Types</Link> / Grass
        </Breadcrumb>

        <LitterHeroImage
          src="/images/litters/grass.png"
          alt="Fresh grass seed cat litter in a modern eco-friendly setting"
        />

        <Title>Grass Cat Litter: The New Generation</Title>
        <Subtitle>
          Made from grass seed fibers, this newcomer combines the best traits of other eco-litters while cats seem to love it instinctively.
        </Subtitle>

        <QuickFacts>
          <FactsTitle>Quick Facts</FactsTitle>
          <FactsGrid>
            <Fact>
              <FactLabel>Biodegradable</FactLabel>
              <FactValue>Yes - rapidly compostable</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Flushable</FactLabel>
              <FactValue>Yes (most brands)</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Dust Level</FactLabel>
              <FactValue>Minimal</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Odor Control</FactLabel>
              <FactValue>Excellent</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Clumping</FactLabel>
              <FactValue>Excellent - tight clumps</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Best For</FactLabel>
              <FactValue>Premium eco-conscious owners</FactValue>
            </Fact>
          </FactsGrid>
        </QuickFacts>

        <Section>
          <SectionTitle>What is Grass Cat Litter?</SectionTitle>
          <Paragraph>
            Grass cat litter is made from the fibrous part of grass seeds—typically from
            grass grown specifically for seed production, not your lawn clippings. The seeds
            are harvested, the useful grass seed extracted for landscaping use, and the
            remaining fibers processed into cat litter.
          </Paragraph>
          <Paragraph>
            This relatively new category emerged in the mid-2010s and has quickly gained
            a devoted following. While less established than corn or wood litters, grass
            litter has impressed users with its performance across multiple metrics.
          </Paragraph>
        </Section>

        <HighlightBox>
          <HighlightTitle>Why Cats Love Grass Litter</HighlightTitle>
          <HighlightText>
            Many cat owners report unusually high acceptance rates when switching to grass
            litter. The theory? Cats evolved as grassland hunters. The soft texture and
            subtle vegetal scent of grass litter may appeal to deep instincts. Whatever
            the reason, picky cats that reject other alternatives often accept grass litter
            readily—sometimes preferring it to their old clay litter immediately.
          </HighlightText>
        </HighlightBox>

        <Section>
          <SectionTitle>Performance Highlights</SectionTitle>
          <Paragraph>
            Grass litter tends to excel across the board:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Clumping:</strong> Forms very tight, solid clumps that don't crumble
              during scooping. Clumps form quickly and hold together well.
            </ListItem>
            <ListItem>
              <strong>Odor control:</strong> Among the best of any eco-friendly option.
              Natural plant fibers absorb and neutralize odors effectively. For even
              stronger results, some owners add{' '}
              <a href="https://purrify.ca/purr?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">
                Purrify
              </a>{' '}
              to their litter box.
            </ListItem>
            <ListItem>
              <strong>Dust:</strong> Minimal dust during pouring and scooping—a major
              improvement over many clay litters.
            </ListItem>
            <ListItem>
              <strong>Weight:</strong> Very lightweight, often 50-70% lighter than clay.
              Easier to carry, pour, and dispose of.
            </ListItem>
            <ListItem>
              <strong>Longevity:</strong> Many users report grass litter lasts longer
              than equivalent amounts of other litters.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Pros and Cons</SectionTitle>
          <ProConGrid>
            <ProConBox $type="pro">
              <ProConTitle>Advantages</ProConTitle>
              <ProConList>
                <ListItem>Excellent odor control</ListItem>
                <ListItem>Superior clumping</ListItem>
                <ListItem>Very low dust</ListItem>
                <ListItem>Lightweight</ListItem>
                <ListItem>Cats often love it</ListItem>
                <ListItem>Flushable</ListItem>
                <ListItem>Fast biodegradation</ListItem>
              </ProConList>
            </ProConBox>
            <ProConBox $type="con">
              <ProConTitle>Disadvantages</ProConTitle>
              <ProConList>
                <ListItem>Highest price point</ListItem>
                <ListItem>Limited availability</ListItem>
                <ListItem>Fewer brand choices</ListItem>
                <ListItem>Some tracking</ListItem>
                <ListItem>Newer, less track record</ListItem>
              </ProConList>
            </ProConBox>
          </ProConGrid>
        </Section>

        <Section>
          <SectionTitle>Environmental Benefits</SectionTitle>
          <Paragraph>
            Grass litter has impressive environmental credentials:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Fast-growing resource:</strong> Grass grows much faster than trees
              and requires less water than many crops.
            </ListItem>
            <ListItem>
              <strong>Uses byproduct:</strong> The litter is made from seed husks that
              would otherwise be waste after seed harvest.
            </ListItem>
            <ListItem>
              <strong>No harmful additives:</strong> Most grass litters are pure plant
              fiber with no chemicals, fragrances, or synthetic binders.
            </ListItem>
            <ListItem>
              <strong>Rapid biodegradation:</strong> Grass fibers break down faster than
              most other organic litters when composted.
            </ListItem>
            <ListItem>
              <strong>Carbon neutral to negative:</strong> Growing grass absorbs CO2,
              and the short production cycle keeps the carbon footprint minimal.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>How Grass Compares to Other Grains</SectionTitle>
          <Paragraph>
            Against <Link href="/litter-types/corn">corn</Link> and{' '}
            <Link href="/litter-types/wheat">wheat</Link>, grass holds its own:
          </Paragraph>
          <Paragraph>
            <strong>Odor control:</strong> Grass typically outperforms corn and matches
            or beats wheat's enzymatic action.
          </Paragraph>
          <Paragraph>
            <strong>Clumping:</strong> All three clump well, but grass clumps tend to
            be the tightest and least likely to break apart.
          </Paragraph>
          <Paragraph>
            <strong>Cat acceptance:</strong> Grass seems to have the highest acceptance
            rate, possibly due to instinctual preferences.
          </Paragraph>
          <Paragraph>
            <strong>Price:</strong> Grass is typically the most expensive of the grain-based
            options, though prices are dropping as production scales up.
          </Paragraph>
          <Paragraph>
            <strong>Allergies:</strong> Grass is gluten-free and generally hypoallergenic,
            making it suitable for households with grain sensitivities.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>The Price Question</SectionTitle>
          <Paragraph>
            Let's address the elephant in the room: grass litter costs more than most
            alternatives. A bag that costs $15 in corn litter might cost $25-30 in grass.
          </Paragraph>
          <Paragraph>
            However, many users find the value proposition works out:
          </Paragraph>
          <List>
            <ListItem>
              The litter often lasts longer, needing fewer complete changes
            </ListItem>
            <ListItem>
              Better odor control means less need for supplements or frequent scooping
            </ListItem>
            <ListItem>
              High cat acceptance prevents the waste of rejected litter
            </ListItem>
            <ListItem>
              Lightweight bags are easier to manage, reducing frustration
            </ListItem>
          </List>
          <Paragraph>
            For households where budget is less important than performance and
            environmental impact, grass litter is often worth the premium.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Transitioning to Grass Litter</SectionTitle>
          <Paragraph>
            Good news: most cats transition to grass litter easily. Many will use it
            without any gradual transition. But if your cat is change-resistant:
          </Paragraph>
          <List>
            <ListItem>
              Start with a 25/75 grass/old litter mix
            </ListItem>
            <ListItem>
              Increase grass content every few days
            </ListItem>
            <ListItem>
              Most cats fully transition within 1-2 weeks
            </ListItem>
            <ListItem>
              Keep the litter box location consistent
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Best Uses for Grass Litter</SectionTitle>
          <Paragraph>
            Grass litter is ideal for:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Picky cats:</strong> If your cat has rejected other eco-litters,
              try grass before giving up.
            </ListItem>
            <ListItem>
              <strong>Multi-cat households:</strong> Superior odor control handles
              heavy use.
            </ListItem>
            <ListItem>
              <strong>Small living spaces:</strong> When the litter box is in a main
              living area, premium odor control matters.
            </ListItem>
            <ListItem>
              <strong>Sustainability-focused owners:</strong> For those willing to pay
              for the best environmental option.
            </ListItem>
            <ListItem>
              <strong>Allergy-conscious homes:</strong> Low dust and hypoallergenic
              properties benefit sensitive cats and humans.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Finding Grass Litter</SectionTitle>
          <Paragraph>
            Grass litter isn't yet as widely distributed as corn or wood options.
            You'll typically find it at:
          </Paragraph>
          <List>
            <ListItem>Specialty pet stores</ListItem>
            <ListItem>Natural/organic grocery stores</ListItem>
            <ListItem>Online retailers (often with subscription discounts)</ListItem>
            <ListItem>Some large pet chains in their eco-friendly sections</ListItem>
          </List>
          <Paragraph>
            As demand grows and production scales, expect wider availability and
            potentially lower prices in the coming years.
          </Paragraph>
        </Section>

        <FAQSection faqs={grassFAQs} />

        <RelatedLinks>
          <RelatedTitle>Explore Other Eco-Friendly Options</RelatedTitle>
          <RelatedGrid>
            <RelatedLink href="/litter-types/bamboo">Bamboo Litter</RelatedLink>
            <RelatedLink href="/litter-types/wood">Wood Litter</RelatedLink>
            <RelatedLink href="/litter-types/corn">Corn Litter</RelatedLink>
            <RelatedLink href="/litter-types/paper">Paper Litter</RelatedLink>
            <RelatedLink href="/litter-types/walnut">Walnut Litter</RelatedLink>
            <RelatedLink href="/litter-types/wheat">Wheat Litter</RelatedLink>
          </RelatedGrid>
        </RelatedLinks>
      </Article>
    </>
  );
}
