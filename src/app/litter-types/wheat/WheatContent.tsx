'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ArticleSchema from '@/components/seo/ArticleSchema';

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

const ScienceBox = styled.div`
  background: linear-gradient(135deg, #F6E05E 0%, #D69E2E 100%);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const ScienceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: #744210;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ScienceText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #744210;
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

export default function WheatContent() {
  return (
    <>
      <ArticleSchema
        title="Wheat Cat Litter: Enzyme-Powered Odor Control"
        description="Learn about wheat-based cat litter and its unique enzyme technology for natural odor neutralization. Discover why this grain litter clumps, flushes, and performs."
        url="https://ecocatlitters.com/litter-types/wheat"
        datePublished="2024-01-15"
        dateModified="2024-12-01"
      />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/solutions">Eco Litter Types</Link> / Wheat
        </Breadcrumb>

        <Title>Wheat Cat Litter: Enzyme-Powered Performance</Title>
        <Subtitle>
          Natural wheat enzymes neutralize odors at the molecular level, making this one of the most scientifically-backed eco-friendly options.
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
              <FactValue>Low</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Odor Control</FactLabel>
              <FactValue>Very Good (enzymatic)</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Clumping</FactLabel>
              <FactValue>Excellent</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Best For</FactLabel>
              <FactValue>Science-minded cat owners</FactValue>
            </Fact>
          </FactsGrid>
        </QuickFacts>

        <Section>
          <SectionTitle>What is Wheat Cat Litter?</SectionTitle>
          <Paragraph>
            Wheat cat litter is made from processed wheat—typically secondary-grade wheat
            that doesn't meet standards for human food or animal feed. The wheat is ground,
            processed, and often combined with natural starches to create a clumping litter
            with unique properties.
          </Paragraph>
          <Paragraph>
            What sets wheat apart from other grain litters is its natural enzyme content.
            These enzymes actively break down odor-causing compounds rather than simply
            absorbing or masking them—a fundamentally different approach to odor control.
          </Paragraph>
        </Section>

        <ScienceBox>
          <ScienceTitle>The Science of Enzymatic Odor Control</ScienceTitle>
          <ScienceText>
            Wheat contains natural enzymes that break down urea—the compound in cat urine
            that converts to ammonia and creates that distinctive litter box smell. When
            urine contacts wheat litter, these enzymes begin breaking down urea before it
            can become ammonia. This enzymatic action continues working over time, which
            is why wheat litter often seems to get better at odor control the longer you
            use it (up to a point). The enzymes are doing their job continuously, not just
            at first contact. For multi-cat homes wanting extra odor protection, pairing
            wheat litter with{' '}
            <a href="https://purrify.ca/purr/how-it-works?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">
              Purrify activated carbon
            </a>{' '}
            creates a powerful dual-action system.
          </ScienceText>
        </ScienceBox>

        <Section>
          <SectionTitle>Clumping and Texture</SectionTitle>
          <Paragraph>
            Wheat litter forms solid clumps thanks to natural wheat starches that activate
            when wet. The clumping action is similar to corn litter, though some users
            report wheat clumps as slightly firmer.
          </Paragraph>
          <Paragraph>
            The texture of wheat litter is:
          </Paragraph>
          <List>
            <ListItem>
              Fine-grained, similar to premium clumping clay
            </ListItem>
            <ListItem>
              Soft underfoot, comfortable for cat paws
            </ListItem>
            <ListItem>
              Light tan or golden color (natural wheat color)
            </ListItem>
            <ListItem>
              Lightweight compared to clay
            </ListItem>
          </List>
          <Paragraph>
            Most cats transition easily from clay to wheat because the texture and
            behavior are so similar.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Pros and Cons</SectionTitle>
          <ProConGrid>
            <ProConBox $type="pro">
              <ProConTitle>Advantages</ProConTitle>
              <ProConList>
                <ListItem>Enzymatic odor control</ListItem>
                <ListItem>Excellent clumping</ListItem>
                <ListItem>Flushable and septic-safe</ListItem>
                <ListItem>Low dust</ListItem>
                <ListItem>Easy transition from clay</ListItem>
                <ListItem>Safe if ingested</ListItem>
                <ListItem>Lightweight</ListItem>
              </ProConList>
            </ProConBox>
            <ProConBox $type="con">
              <ProConTitle>Disadvantages</ProConTitle>
              <ProConList>
                <ListItem>Not for gluten-sensitive households</ListItem>
                <ListItem>Can attract pantry pests</ListItem>
                <ListItem>Higher cost than clay</ListItem>
                <ListItem>May mold if stored wet</ListItem>
                <ListItem>Some tracking</ListItem>
              </ProConList>
            </ProConBox>
          </ProConGrid>
        </Section>

        <Section>
          <SectionTitle>Wheat vs. Corn: The Grain Debate</SectionTitle>
          <Paragraph>
            <Link href="/litter-types/corn">Corn</Link> and wheat are the two most popular
            grain-based litters. Here's how they compare:
          </Paragraph>
          <Paragraph>
            <strong>Odor control:</strong> Wheat's enzymatic action gives it an edge for
            sustained odor control. Corn absorbs but doesn't actively break down odors.
          </Paragraph>
          <Paragraph>
            <strong>Clumping:</strong> Both clump well. Wheat clumps tend to be slightly
            firmer; corn clumps can be softer but form faster.
          </Paragraph>
          <Paragraph>
            <strong>Safety:</strong> Both are safe if ingested. Choose based on any food
            sensitivities in your household (wheat contains gluten; corn doesn't).
          </Paragraph>
          <Paragraph>
            <strong>Price:</strong> Usually comparable, though both cost more than clay.
          </Paragraph>
          <Paragraph>
            <strong>Availability:</strong> Corn litter is slightly more widely available;
            wheat may require specialty pet stores or online ordering.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Flushability and Disposal</SectionTitle>
          <Paragraph>
            Wheat litter is generally flushable and septic-safe. The wheat fibers break
            down easily in water, much like toilet paper. However:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Flush small amounts:</strong> Large clumps can overwhelm older
              plumbing. Break them up and flush with plenty of water.
            </ListItem>
            <ListItem>
              <strong>Don't flush feces:</strong> Cat waste can contain Toxoplasma gondii,
              which water treatment doesn't fully remove. Solid waste goes in the trash.
            </ListItem>
            <ListItem>
              <strong>Check local regulations:</strong> Some areas prohibit flushing any
              pet waste, regardless of the litter type.
            </ListItem>
            <ListItem>
              <strong>Composting works too:</strong> Wheat litter composts quickly in a
              proper setup (urine-soaked litter only, no feces).
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Storage and Pest Prevention</SectionTitle>
          <Paragraph>
            Because wheat is a food product, proper storage matters more than with clay:
          </Paragraph>
          <List>
            <ListItem>
              Store in a cool, dry place in a sealed container
            </ListItem>
            <ListItem>
              Keep away from areas prone to pantry pests (moths, weevils)
            </ListItem>
            <ListItem>
              Don't store in humid basements or garages
            </ListItem>
            <ListItem>
              Check expiration dates—old wheat litter may lose enzyme effectiveness
            </ListItem>
            <ListItem>
              Discard any litter that develops an off smell or visible mold
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Best Uses for Wheat Litter</SectionTitle>
          <Paragraph>
            Wheat litter is an excellent choice for:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Cat owners who prioritize odor control:</strong> The enzymatic action
              provides sustained odor fighting.
            </ListItem>
            <ListItem>
              <strong>Apartment dwellers:</strong> Flushability means no smelly trash bags.
            </ListItem>
            <ListItem>
              <strong>Households seeking easy transition:</strong> Similar texture to clay
              makes switching simple.
            </ListItem>
            <ListItem>
              <strong>Environmentally-conscious families:</strong> Renewable, biodegradable,
              and made from a common crop.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>A Note on Gluten</SectionTitle>
          <Paragraph>
            Wheat contains gluten, which may be a concern for households with celiac disease
            or severe gluten sensitivity. While cats aren't affected by gluten, the dust from
            pouring and scooping wheat litter could potentially cause reactions in highly
            sensitive individuals.
          </Paragraph>
          <Paragraph>
            If gluten is a concern, consider <Link href="/litter-types/corn">corn</Link> or
            <Link href="/litter-types/grass"> grass</Link> litter as gluten-free grain
            alternatives with similar performance.
          </Paragraph>
        </Section>

        <RelatedLinks>
          <RelatedTitle>Explore Other Eco-Friendly Options</RelatedTitle>
          <RelatedGrid>
            <RelatedLink href="/litter-types/bamboo">Bamboo Litter</RelatedLink>
            <RelatedLink href="/litter-types/wood">Wood Litter</RelatedLink>
            <RelatedLink href="/litter-types/corn">Corn Litter</RelatedLink>
            <RelatedLink href="/litter-types/paper">Paper Litter</RelatedLink>
            <RelatedLink href="/litter-types/walnut">Walnut Litter</RelatedLink>
            <RelatedLink href="/litter-types/grass">Grass Litter</RelatedLink>
          </RelatedGrid>
        </RelatedLinks>
      </Article>
    </>
  );
}
