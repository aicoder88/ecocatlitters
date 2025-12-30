'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ArticleSchema from '@/components/seo/ArticleSchema';
import LitterHeroImage from '@/components/ui/LitterHeroImage';
import FAQSection from '@/components/faq/FAQSection';
import FAQSchema from '@/components/seo/FAQSchema';

const bambooFAQs = [
  {
    question: 'Is bamboo cat litter safe for cats?',
    answer: 'Yes, bamboo cat litter is completely safe for cats. It\'s made from natural bamboo fibers without harmful chemicals or additives. Even if your cat ingests some while grooming, it will pass through their system safely.'
  },
  {
    question: 'Does bamboo litter clump well?',
    answer: 'Most bamboo litters clump well, though clumps may be slightly softer than clay. Look for brands specifically formulated for clumping if this is important to you. The clumps are still easy to scoop and dispose of.'
  },
  {
    question: 'How often should I change bamboo cat litter?',
    answer: 'Scoop daily and completely replace bamboo litter every 2-3 weeks for single cats, or weekly for multi-cat households. Bamboo\'s natural odor control often means it stays fresher longer than clay.'
  },
  {
    question: 'Can bamboo litter be composted?',
    answer: 'Yes! Bamboo litter is 100% biodegradable and can be composted. However, only compost urine-soaked litter—cat feces should go in the trash due to potential pathogens. Used bamboo litter breaks down in 2-3 weeks.'
  },
  {
    question: 'Is bamboo litter more expensive than clay?',
    answer: 'Bamboo litter typically costs more upfront than clay, but many users find it lasts longer due to superior absorption. When you factor in the environmental benefits and potential health advantages (less dust), many consider it worth the investment.'
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

export default function BambooContent() {
  return (
    <>
      <ArticleSchema
        title="Bamboo Cat Litter: The Complete Guide"
        description="Learn everything about bamboo cat litter - the fastest-growing renewable resource for eco-friendly cat care. Discover benefits, drawbacks, and top brands."
        url="https://ecocatlitters.com/litter-types/bamboo"
        datePublished="2024-01-15"
        dateModified="2024-12-01"
      />
      <FAQSchema faqs={bambooFAQs} />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/solutions">Eco Litter Types</Link> / Bamboo
        </Breadcrumb>

        <LitterHeroImage
          src="/images/litters/bamboo.png"
          alt="Eco-friendly bamboo cat litter in a modern litter box with bamboo plants"
        />

        <Title>Bamboo Cat Litter: The Complete Guide</Title>
        <Subtitle>
          Bamboo is Earth's fastest-growing plant. Now it's revolutionizing how we think about cat litter.
        </Subtitle>

        <QuickFacts>
          <FactsTitle>Quick Facts</FactsTitle>
          <FactsGrid>
            <Fact>
              <FactLabel>Biodegradable</FactLabel>
              <FactValue>Yes - 2-3 weeks to compost</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Flushable</FactLabel>
              <FactValue>Some brands (check label)</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Dust Level</FactLabel>
              <FactValue>Very Low</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Odor Control</FactLabel>
              <FactValue>Good to Excellent</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Clumping</FactLabel>
              <FactValue>Yes (most brands)</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Best For</FactLabel>
              <FactValue>Eco-conscious households</FactValue>
            </Fact>
          </FactsGrid>
        </QuickFacts>

        <Section>
          <SectionTitle>What is Bamboo Cat Litter?</SectionTitle>
          <Paragraph>
            Bamboo cat litter is made from processed bamboo fibers, typically using the
            parts of the bamboo plant that would otherwise go to waste during manufacturing.
            Unlike traditional clay litter that requires strip mining, bamboo is a rapidly
            renewable resource that can be harvested without killing the plant.
          </Paragraph>
          <Paragraph>
            Bamboo grows incredibly fast—some species can grow up to 35 inches per day.
            This makes it one of the most sustainable raw materials on the planet. When
            processed into cat litter, the natural bamboo fibers create excellent absorption
            and clumping properties.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Environmental Benefits</SectionTitle>
          <Paragraph>
            The environmental case for bamboo litter is compelling:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Renewable resource:</strong> Bamboo regrows from its root system after
              harvesting, unlike trees that must be replanted. A bamboo grove can be harvested
              indefinitely.
            </ListItem>
            <ListItem>
              <strong>Carbon negative:</strong> Bamboo absorbs more CO2 than equivalent trees
              and releases 35% more oxygen. Using bamboo products effectively stores carbon.
            </ListItem>
            <ListItem>
              <strong>No pesticides needed:</strong> Bamboo naturally resists pests and disease,
              requiring no chemical treatments during cultivation.
            </ListItem>
            <ListItem>
              <strong>Prevents erosion:</strong> Bamboo's extensive root system prevents soil
              erosion, unlike strip mining for clay which devastates landscapes.
            </ListItem>
            <ListItem>
              <strong>Fully biodegradable:</strong> After use, bamboo litter breaks down
              naturally in weeks rather than centuries.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Pros and Cons</SectionTitle>
          <ProConGrid>
            <ProConBox $type="pro">
              <ProConTitle>Advantages</ProConTitle>
              <ProConList>
                <ListItem>Extremely low dust</ListItem>
                <ListItem>Lightweight (easier to carry)</ListItem>
                <ListItem>Excellent odor control</ListItem>
                <ListItem>Soft on cat paws</ListItem>
                <ListItem>Often flushable</ListItem>
                <ListItem>Compostable</ListItem>
                <ListItem>Sustainable source</ListItem>
              </ProConList>
            </ProConBox>
            <ProConBox $type="con">
              <ProConTitle>Disadvantages</ProConTitle>
              <ProConList>
                <ListItem>Higher upfront cost</ListItem>
                <ListItem>Less available in stores</ListItem>
                <ListItem>Some cats need adjustment time</ListItem>
                <ListItem>Clumps can be softer than clay</ListItem>
                <ListItem>May track slightly</ListItem>
              </ProConList>
            </ProConBox>
          </ProConGrid>
        </Section>

        <Section>
          <SectionTitle>How Bamboo Litter Compares to Clay</SectionTitle>
          <Paragraph>
            The differences between bamboo and traditional clay litter go beyond just
            environmental impact:
          </Paragraph>
          <Paragraph>
            <strong>Weight:</strong> Bamboo litter is significantly lighter than clay—often
            50% or more. A bag that would weigh 40 pounds in clay might weigh only 15 pounds
            in bamboo. This makes it easier to transport and pour.
          </Paragraph>
          <Paragraph>
            <strong>Dust:</strong> Clay litter, especially the clumping varieties, produces
            fine silica dust that can irritate both human and feline respiratory systems.
            Bamboo produces virtually no dust, making it ideal for cats with asthma or
            allergies.
          </Paragraph>
          <Paragraph>
            <strong>Odor control:</strong> While clay relies on added fragrances and
            chemical deodorizers, bamboo has natural antimicrobial properties that
            neutralize odors at the source. For even stronger odor control, many bamboo
            litter users add{' '}
            <a href="https://purrify.ca/purr/products?utm_source=ecocatlitters">
              Purrify activated carbon
            </a>{' '}
            to their litter boxes.
          </Paragraph>
          <Paragraph>
            <strong>Longevity:</strong> Many users report that bamboo litter lasts longer
            than equivalent amounts of clay, partially offsetting the higher purchase price.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Tips for Switching to Bamboo Litter</SectionTitle>
          <Paragraph>
            Cats can be particular about their litter. Here's how to make the transition smooth:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Gradual transition:</strong> Mix 25% bamboo with 75% old litter for the
              first week. Increase bamboo by 25% each week until fully transitioned.
            </ListItem>
            <ListItem>
              <strong>Maintain depth:</strong> Keep the same litter depth your cat is used
              to—typically 2-3 inches.
            </ListItem>
            <ListItem>
              <strong>Same box location:</strong> Don't move the litter box during the
              transition period.
            </ListItem>
            <ListItem>
              <strong>Watch for signs:</strong> If your cat starts avoiding the box, slow
              down the transition. Some cats adapt in days, others need weeks.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Is Bamboo Litter Right for Your Cat?</SectionTitle>
          <Paragraph>
            Bamboo litter works well for most cats, but it's especially beneficial for:
          </Paragraph>
          <List>
            <ListItem>Cats with respiratory issues or allergies (low dust)</ListItem>
            <ListItem>Senior cats who appreciate softer textures</ListItem>
            <ListItem>Kittens (safe if accidentally ingested)</ListItem>
            <ListItem>Multi-cat households (excellent odor control)</ListItem>
          </List>
          <Paragraph>
            Some cats that strongly prefer fine-grained clay textures may need a longer
            adjustment period or may prefer other eco-friendly options like <Link href="/litter-types/corn">corn</Link> or <Link href="/litter-types/wheat">wheat</Link> litter
            which have more similar textures.
          </Paragraph>
        </Section>

        <FAQSection faqs={bambooFAQs} />

        <RelatedLinks>
          <RelatedTitle>Explore Other Eco-Friendly Options</RelatedTitle>
          <RelatedGrid>
            <RelatedLink href="/litter-types/wood">Wood Litter</RelatedLink>
            <RelatedLink href="/litter-types/corn">Corn Litter</RelatedLink>
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
