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

const InfoBox = styled.div`
  background: #EBF8FF;
  border-left: 4px solid #3182CE;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #2B6CB0;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #2C5282;
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

export default function TofuContent() {
  return (
    <>
      <ArticleSchema
        title="Tofu Cat Litter: The Popular Asian Import"
        description="Complete guide to tofu (soy) cat litter - hugely popular in Asia and growing in the West. Learn about its unique pellet form, flushability, and gentle texture."
        url="https://ecocatlitters.com/litter-types/tofu"
        datePublished="2024-01-15"
        dateModified="2024-12-01"
      />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/solutions">Eco Litter Types</Link> / Tofu
        </Breadcrumb>

        <Title>Tofu Cat Litter: The Asian Sensation</Title>
        <Subtitle>
          Already a bestseller across Asia, tofu (soy-based) litter is winning over Western cat owners with its unique combination of features.
        </Subtitle>

        <QuickFacts>
          <FactsTitle>Quick Facts</FactsTitle>
          <FactsGrid>
            <Fact>
              <FactLabel>Biodegradable</FactLabel>
              <FactValue>Yes - water soluble</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Flushable</FactLabel>
              <FactValue>Yes - dissolves easily</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Dust Level</FactLabel>
              <FactValue>Very Low</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Odor Control</FactLabel>
              <FactValue>Good</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Clumping</FactLabel>
              <FactValue>Yes - fast clumping</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Best For</FactLabel>
              <FactValue>Apartment dwellers, kittens</FactValue>
            </Fact>
          </FactsGrid>
        </QuickFacts>

        <Section>
          <SectionTitle>What is Tofu Cat Litter?</SectionTitle>
          <Paragraph>
            Tofu cat litter is made from the pulp left over after soy milk production—the
            same process used to make human tofu. This soy fiber (called okara in Japanese)
            is typically discarded or used as animal feed, but innovative manufacturers
            discovered it makes an excellent cat litter.
          </Paragraph>
          <Paragraph>
            The litter usually comes in small pellet form—cylindrical pieces about the
            size of a pencil eraser. This shape is distinctive among cat litters and
            gives tofu litter some unique properties.
          </Paragraph>
        </Section>

        <InfoBox>
          <InfoTitle>A Global Phenomenon</InfoTitle>
          <InfoText>
            Tofu litter has been the dominant eco-friendly cat litter in China, Japan,
            South Korea, and much of Southeast Asia for years. Millions of cats use it
            daily. Western markets are just beginning to discover what Asian cat owners
            have known for a decade: soy makes surprisingly good cat litter.
          </InfoText>
        </InfoBox>

        <Section>
          <SectionTitle>Why the Pellet Shape?</SectionTitle>
          <Paragraph>
            Unlike most litters that come in granules, tofu litter's cylindrical pellets
            offer distinct advantages:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Less tracking:</strong> The larger pellet size means fewer particles
              stick to cat paws and travel around your home.
            </ListItem>
            <ListItem>
              <strong>Easy to see changes:</strong> It's easy to spot soiled pellets for
              removal.
            </ListItem>
            <ListItem>
              <strong>Quick absorption:</strong> Pellets absorb liquid rapidly and then
              clump together.
            </ListItem>
            <ListItem>
              <strong>Dissolves in water:</strong> The pellet form breaks down quickly
              when flushed, making it very toilet-friendly.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Pros and Cons</SectionTitle>
          <ProConGrid>
            <ProConBox $type="pro">
              <ProConTitle>Advantages</ProConTitle>
              <ProConList>
                <ListItem>Extremely flushable</ListItem>
                <ListItem>Very low tracking</ListItem>
                <ListItem>Virtually dust-free</ListItem>
                <ListItem>Safe if eaten</ListItem>
                <ListItem>Lightweight</ListItem>
                <ListItem>Fast clumping</ListItem>
                <ListItem>Pleasant mild scent</ListItem>
              </ProConList>
            </ProConBox>
            <ProConBox $type="con">
              <ProConTitle>Disadvantages</ProConTitle>
              <ProConList>
                <ListItem>Unfamiliar pellet texture</ListItem>
                <ListItem>Moderate odor control</ListItem>
                <ListItem>Can mold if stored improperly</ListItem>
                <ListItem>Some cats dislike pellets</ListItem>
                <ListItem>Not as available locally</ListItem>
                <ListItem>Soy allergy concerns</ListItem>
              </ProConList>
            </ProConBox>
          </ProConGrid>
        </Section>

        <Section>
          <SectionTitle>The Flushability Advantage</SectionTitle>
          <Paragraph>
            Of all eco-friendly litters, tofu may be the most flushable. The soy fibers
            dissolve in water quickly and completely, much like toilet paper. This makes
            tofu litter ideal for:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Apartment living:</strong> No need to carry smelly bags to the
              dumpster—just flush and done.
            </ListItem>
            <ListItem>
              <strong>Septic systems:</strong> The water-soluble nature is gentler on
              septic tanks than other flushable litters.
            </ListItem>
            <ListItem>
              <strong>Convenience seekers:</strong> Scooping directly into the toilet
              streamlines the cleaning routine.
            </ListItem>
          </List>
          <Paragraph>
            <strong>Important reminder:</strong> Even with tofu litter, don't flush cat
            feces. Solid waste may contain Toxoplasma gondii, which water treatment doesn't
            fully eliminate. Flush only the urine-soaked litter; scoop solids into trash.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Texture and Cat Acceptance</SectionTitle>
          <Paragraph>
            The pellet format is the main adjustment for cats switching from traditional
            litter. Some cats take to it immediately; others need time:
          </Paragraph>
          <List>
            <ListItem>
              Cats who've used pellet-style wood litter transition easily
            </ListItem>
            <ListItem>
              Cats accustomed to fine-grain clay may initially hesitate
            </ListItem>
            <ListItem>
              Kittens learning to use litter for the first time often accept pellets readily
            </ListItem>
            <ListItem>
              Older cats with sensitive paws may appreciate the smoother pellet surface
            </ListItem>
          </List>
          <Paragraph>
            If your cat resists pure pellets, some brands offer crushed tofu litter that
            has a finer texture while retaining the flushability.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Odor Control Reality</SectionTitle>
          <Paragraph>
            Tofu litter's odor control is good but not exceptional. It absorbs and contains
            odors reasonably well, but for heavy use or sensitive noses, you may want to:
          </Paragraph>
          <List>
            <ListItem>
              Scoop frequently—the clumps are easy to spot and remove
            </ListItem>
            <ListItem>
              Add an activated charcoal supplement like{' '}
              <a href="https://purrify.ca/purr/trial?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">
                Purrify
              </a>{' '}
              for extra odor absorption
            </ListItem>
            <ListItem>
              Choose scented varieties if available (some brands add green tea or charcoal)
            </ListItem>
            <ListItem>
              Ensure good ventilation around the litter box area
            </ListItem>
          </List>
          <Paragraph>
            For superior natural odor control, consider <Link href="/litter-types/walnut">walnut</Link> or{' '}
            <Link href="/litter-types/wood">wood</Link> litter. If flushability is your
            priority and odor is manageable, tofu works well.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Perfect for Kittens</SectionTitle>
          <Paragraph>
            Tofu litter is one of the safest options for young kittens:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Safe if ingested:</strong> Curious kittens that taste-test their
              litter won't be harmed by food-grade soy.
            </ListItem>
            <ListItem>
              <strong>No clumping in stomachs:</strong> Unlike clay, tofu dissolves
              rather than clumping if swallowed.
            </ListItem>
            <ListItem>
              <strong>Dust-free breathing:</strong> Young respiratory systems aren't
              exposed to harmful particles.
            </ListItem>
            <ListItem>
              <strong>Soft on developing paws:</strong> The smooth pellets are gentle
              on kitten feet.
            </ListItem>
          </List>
          <Paragraph>
            Many breeders in Asia use tofu litter for their litters (of the feline kind)
            from birth through adoption.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Storage and Freshness</SectionTitle>
          <Paragraph>
            Like other plant-based litters, proper storage matters:
          </Paragraph>
          <List>
            <ListItem>
              Store in a cool, dry place in a sealed container
            </ListItem>
            <ListItem>
              Don't expose to humidity—soy can develop mold
            </ListItem>
            <ListItem>
              Check for any unusual smells before use
            </ListItem>
            <ListItem>
              Use within the recommended timeframe (typically 1-2 years)
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Finding Tofu Litter</SectionTitle>
          <Paragraph>
            Tofu litter is becoming more available in Western markets:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Online retailers:</strong> Amazon, Chewy, and specialty pet sites
              carry multiple brands.
            </ListItem>
            <ListItem>
              <strong>Asian grocery stores:</strong> Some carry pet supplies including
              tofu litter imported from Asian manufacturers.
            </ListItem>
            <ListItem>
              <strong>Natural pet stores:</strong> Eco-focused retailers are increasingly
              stocking tofu options.
            </ListItem>
            <ListItem>
              <strong>Big-box pet stores:</strong> Slowly adding tofu litter to their
              eco-friendly sections.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Tofu vs. Other Plant Litters</SectionTitle>
          <Paragraph>
            How does tofu compare to other eco-friendly options?
          </Paragraph>
          <Paragraph>
            <strong>vs. <Link href="/litter-types/corn">Corn</Link>:</strong> Tofu tracks
            less but has slightly weaker odor control. Both clump and flush well.
          </Paragraph>
          <Paragraph>
            <strong>vs. <Link href="/litter-types/wheat">Wheat</Link>:</strong> Wheat's
            enzymatic odor control is superior, but tofu's flushability is better.
          </Paragraph>
          <Paragraph>
            <strong>vs. <Link href="/litter-types/wood">Wood</Link> pellets:</strong>
            Similar pellet format, but tofu clumps while wood typically breaks down into
            sawdust. Tofu is flushable; wood is not.
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
