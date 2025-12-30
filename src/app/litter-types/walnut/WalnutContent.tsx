'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ArticleSchema from '@/components/seo/ArticleSchema';
import LitterHeroImage from '@/components/ui/LitterHeroImage';
import FAQSection from '@/components/faq/FAQSection';
import FAQSchema from '@/components/seo/FAQSchema';

const walnutFAQs = [
  {
    question: 'Why is walnut litter so good at odor control?',
    answer: 'Walnut shells contain natural tannins with antimicrobial properties, plus their chemical composition helps neutralize ammonia directly. Unlike clay that masks odors with fragrances, walnut actually eliminates odors at the source.'
  },
  {
    question: 'Is walnut litter safe for people with nut allergies?',
    answer: 'If anyone in your household has a tree nut allergy, walnut litter is not recommended. While cats aren\'t typically affected, humans with nut allergies may react to airborne particles when pouring or scooping. Consult your allergist first.'
  },
  {
    question: 'Why is walnut litter dark colored?',
    answer: 'Walnut litter\'s natural dark brown color is actually advantageous—it hides stains and discoloration that would be obvious in light litters. However, the dark color makes it harder to monitor urine color, which can indicate health issues.'
  },
  {
    question: 'Does walnut litter track a lot?',
    answer: 'Walnut litter can produce some fine particles that track on paws. Using a litter mat, choosing larger granule sizes, and keeping litter depth at 3-4 inches can minimize tracking. The trade-off is worth it for many users given the superior odor control.'
  },
  {
    question: 'Can walnut cat litter be composted?',
    answer: 'Yes, walnut litter is biodegradable and can be composted. It breaks down naturally and adds organic material to compost. As with all litters, only compost urine-soaked material—never cat feces due to potential pathogens.'
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
  background: linear-gradient(135deg, #8B7355 0%, #6B5344 100%);
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

const WarningBox = styled.div`
  background: #FFF5F5;
  border-left: 4px solid #E53E3E;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const WarningTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #C53030;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const WarningText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #742A2A;
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

export default function WalnutContent() {
  return (
    <>
      <ArticleSchema
        title="Walnut Cat Litter: Superior Odor Control from Walnut Shells"
        description="Discover walnut shell cat litter - the eco-friendly option with exceptional odor neutralization. Learn about its dark color advantage and natural absorbency."
        url="https://ecocatlitters.com/litter-types/walnut"
        datePublished="2024-01-15"
        dateModified="2024-12-01"
      />
      <FAQSchema faqs={walnutFAQs} />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/solutions">Eco Litter Types</Link> / Walnut
        </Breadcrumb>

        <LitterHeroImage
          src="/images/litters/walnut.png"
          alt="Crushed walnut shell cat litter with whole walnuts"
        />

        <Title>Walnut Cat Litter: Nature's Odor Fighter</Title>
        <Subtitle>
          Crushed walnut shells deliver some of the best natural odor control available, turning agricultural waste into a premium cat litter.
        </Subtitle>

        <QuickFacts>
          <FactsTitle>Quick Facts</FactsTitle>
          <FactsGrid>
            <Fact>
              <FactLabel>Biodegradable</FactLabel>
              <FactValue>Yes - compostable</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Flushable</FactLabel>
              <FactValue>No</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Dust Level</FactLabel>
              <FactValue>Low</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Odor Control</FactLabel>
              <FactValue>Excellent</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Clumping</FactLabel>
              <FactValue>Yes - firm clumps</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Best For</FactLabel>
              <FactValue>Multi-cat homes, odor-sensitive owners</FactValue>
            </Fact>
          </FactsGrid>
        </QuickFacts>

        <Section>
          <SectionTitle>What is Walnut Cat Litter?</SectionTitle>
          <Paragraph>
            Walnut cat litter is made from crushed walnut shells—the hard outer casing
            that's typically discarded during walnut processing. Rather than becoming
            waste, these shells are ground, processed, and transformed into one of the
            most effective natural cat litters available.
          </Paragraph>
          <Paragraph>
            The United States is a major walnut producer, particularly California, which
            means walnut litter often has a shorter supply chain than imported alternatives.
            This byproduct approach exemplifies sustainable manufacturing: what was once
            waste becomes a valuable product.
          </Paragraph>
        </Section>

        <HighlightBox>
          <HighlightTitle>The Dark Color Advantage</HighlightTitle>
          <HighlightText>
            Walnut litter is naturally dark brown—and this is actually a feature, not a
            bug. The dark color hides stains and discoloration that would be obvious in
            white or light-colored litters. Many cat owners find this more aesthetically
            pleasing than watching their light litter gradually turn yellow. The trade-off
            is that dark litter makes it harder to monitor your cat's urine color, which
            can be an early indicator of health issues.
          </HighlightText>
        </HighlightBox>

        <Section>
          <SectionTitle>Why Walnut Excels at Odor Control</SectionTitle>
          <Paragraph>
            Walnut shells have natural properties that make them exceptional odor fighters:
          </Paragraph>
          <List>
            <ListItem>
              <strong>High absorption:</strong> The fibrous structure of walnut shells
              absorbs liquid quickly and holds it, preventing pooling that causes odors.
            </ListItem>
            <ListItem>
              <strong>Natural tannins:</strong> Walnuts contain tannins—the same compounds
              found in wine and tea—that have natural antimicrobial properties.
            </ListItem>
            <ListItem>
              <strong>Ammonia neutralization:</strong> The chemical composition of walnut
              shells helps neutralize ammonia, the primary cause of litter box smell.
            </ListItem>
            <ListItem>
              <strong>No masking fragrances:</strong> Unlike clay litters that rely on
              added scents, walnut controls odors at the source rather than covering them up.
            </ListItem>
          </List>
          <Paragraph>
            Many cat owners who switch to walnut from clay report being surprised at how
            well it controls odors—often better than premium scented clay litters. For
            households with particularly sensitive noses or multiple cats, adding{' '}
            <a href="https://purrify.ca/purr/products?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">
              Purrify activated carbon
            </a>{' '}
            alongside walnut litter creates an even more powerful odor-fighting combination.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Pros and Cons</SectionTitle>
          <ProConGrid>
            <ProConBox $type="pro">
              <ProConTitle>Advantages</ProConTitle>
              <ProConList>
                <ListItem>Exceptional odor control</ListItem>
                <ListItem>Strong, tight clumps</ListItem>
                <ListItem>Dark color hides stains</ListItem>
                <ListItem>Very absorbent</ListItem>
                <ListItem>Uses agricultural waste</ListItem>
                <ListItem>Low dust</ListItem>
                <ListItem>Long-lasting</ListItem>
              </ProConList>
            </ProConBox>
            <ProConBox $type="con">
              <ProConTitle>Disadvantages</ProConTitle>
              <ProConList>
                <ListItem>Dark color hides health indicators</ListItem>
                <ListItem>Not safe for nut allergies</ListItem>
                <ListItem>Higher price point</ListItem>
                <ListItem>Can track (fine particles)</ListItem>
                <ListItem>Unfamiliar to some cats</ListItem>
                <ListItem>Not flushable</ListItem>
              </ProConList>
            </ProConBox>
          </ProConGrid>
        </Section>

        <WarningBox>
          <WarningTitle>Nut Allergy Warning</WarningTitle>
          <WarningText>
            If anyone in your household has a tree nut allergy, walnut litter is not
            recommended. While cats are not typically allergic to tree nuts, humans with
            nut allergies may react to airborne particles when pouring or scooping the
            litter. If you're unsure, consult with your allergist before using walnut-based
            products in your home.
          </WarningText>
        </WarningBox>

        <Section>
          <SectionTitle>Clumping Performance</SectionTitle>
          <Paragraph>
            Walnut litter forms firm, tight clumps that hold together well during scooping.
            The clumps tend to be slightly heavier than clay clumps of the same size due
            to walnut's density, but they break apart less often.
          </Paragraph>
          <Paragraph>
            Tips for best clumping performance:
          </Paragraph>
          <List>
            <ListItem>
              Maintain 3-4 inches of litter depth for clumps to form properly
            </ListItem>
            <ListItem>
              Wait 5-10 minutes after your cat uses the box before scooping—this allows
              clumps to fully form
            </ListItem>
            <ListItem>
              Use a sturdy metal scoop; plastic scoops can struggle with walnut's weight
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Comparing Walnut to Wood</SectionTitle>
          <Paragraph>
            Both walnut and <Link href="/litter-types/wood">wood litter</Link> use
            agricultural/forestry byproducts, but they perform differently:
          </Paragraph>
          <Paragraph>
            <strong>Odor control:</strong> Walnut generally has better odor control than
            pine, though both outperform most other eco-friendly options. Walnut neutralizes
            while pine masks.
          </Paragraph>
          <Paragraph>
            <strong>Clumping:</strong> Walnut clumps; most wood litters (pellets) don't.
            Clumping wood varieties exist but are less common.
          </Paragraph>
          <Paragraph>
            <strong>Price:</strong> Walnut is typically more expensive than wood pellets,
            which can be extremely affordable when bought as horse bedding.
          </Paragraph>
          <Paragraph>
            <strong>Texture:</strong> Walnut has a finer, more familiar texture; wood
            pellets are larger and require more adjustment from cats used to clay.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Best Uses for Walnut Litter</SectionTitle>
          <Paragraph>
            Walnut litter particularly shines in these situations:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Multi-cat households:</strong> The superior odor control handles
              heavy use well.
            </ListItem>
            <ListItem>
              <strong>Small spaces:</strong> When the litter box is in a main living area,
              odor control matters more.
            </ListItem>
            <ListItem>
              <strong>Odor-sensitive owners:</strong> If you've struggled with litter box
              smell despite regular cleaning, walnut may be the answer.
            </ListItem>
            <ListItem>
              <strong>Cats who prefer fine textures:</strong> The granule size is closer
              to premium clumping clay than other eco-options.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Transitioning to Walnut</SectionTitle>
          <Paragraph>
            The dark color can initially startle some cats. Here's how to make the switch
            smoothly:
          </Paragraph>
          <List>
            <ListItem>
              Start with a thin layer of walnut under your current litter
            </ListItem>
            <ListItem>
              Increase walnut and decrease old litter over 2 weeks
            </ListItem>
            <ListItem>
              Consider mixing with a lighter eco-litter if your cat is very resistant
            </ListItem>
            <ListItem>
              Keep the litter box in the same location during transition
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Health Monitoring Considerations</SectionTitle>
          <Paragraph>
            Because walnut litter is dark, it can be harder to notice changes in your cat's
            urine color—an important health indicator. If your cat has a history of urinary
            issues, or if you want to monitor for health problems:
          </Paragraph>
          <List>
            <ListItem>
              Consider keeping one box with lighter-colored litter for monitoring
            </ListItem>
            <ListItem>
              Learn to look for other signs of urinary issues (straining, frequency changes)
            </ListItem>
            <ListItem>
              Schedule regular vet check-ups that include urinalysis
            </ListItem>
          </List>
        </Section>

        <FAQSection faqs={walnutFAQs} />

        <RelatedLinks>
          <RelatedTitle>Explore Other Eco-Friendly Options</RelatedTitle>
          <RelatedGrid>
            <RelatedLink href="/litter-types/bamboo">Bamboo Litter</RelatedLink>
            <RelatedLink href="/litter-types/wood">Wood Litter</RelatedLink>
            <RelatedLink href="/litter-types/corn">Corn Litter</RelatedLink>
            <RelatedLink href="/litter-types/paper">Paper Litter</RelatedLink>
            <RelatedLink href="/litter-types/wheat">Wheat Litter</RelatedLink>
            <RelatedLink href="/litter-types/grass">Grass Litter</RelatedLink>
          </RelatedGrid>
        </RelatedLinks>
      </Article>
    </>
  );
}
