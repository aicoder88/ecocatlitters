'use client';

import styled from 'styled-components';
import Link from 'next/link';
import ArticleSchema from '@/components/seo/ArticleSchema';
import LitterHeroImage from '@/components/ui/LitterHeroImage';
import FAQSection from '@/components/faq/FAQSection';
import FAQSchema from '@/components/seo/FAQSchema';

const paperFAQs = [
  {
    question: 'Why do vets recommend paper litter after surgery?',
    answer: 'Vets recommend paper litter post-surgery because it produces zero dust that could enter incisions, doesn\'t stick to wounds like clumping litter, and is non-toxic if licked during grooming. Its soft texture is also gentle on healing bodies.'
  },
  {
    question: 'Does paper litter control odors well?',
    answer: 'Paper litter\'s main weakness is odor control—it absorbs but doesn\'t neutralize odors. To manage smells, scoop frequently, add baking soda, use an activated carbon supplement like <a href="https://purrify.ca/purr/products?utm_source=ecocatlitters">Purrify</a>, and replace all litter every 5-7 days.'
  },
  {
    question: 'Is paper litter good for kittens?',
    answer: 'Paper litter is excellent for kittens. It\'s safe if accidentally eaten, produces no dust for developing respiratory systems, and is gentle on young paw pads. Many breeders and shelters use paper litter for kittens under 8 weeks old.'
  },
  {
    question: 'Can paper cat litter be composted?',
    answer: 'Yes, paper litter is easily compostable. Used paper litter (without cat feces) breaks down quickly in compost. It represents true circular economy: recycled paper becomes litter, then returns to earth as compost.'
  },
  {
    question: 'Why won\'t my cat use paper litter?',
    answer: 'Some cats reject paper litter because the pellet texture feels different from clay. Try crumbled paper varieties with a finer texture, or mix paper with their current litter and gradually increase the ratio over 2-3 weeks.'
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
  background: ${({ theme }) => theme.colors.paleGreen};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const HighlightTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};
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

export default function PaperContent() {
  return (
    <>
      <ArticleSchema
        title="Paper Cat Litter: The Gentlest Option for Sensitive Cats"
        description="Complete guide to paper-based cat litter. Learn why vets recommend it for post-surgery cats, its exceptional dust-free properties, and recycled paper benefits."
        url="https://ecocatlitters.com/litter-types/paper"
        datePublished="2024-01-15"
        dateModified="2024-12-01"
      />
      <FAQSchema faqs={paperFAQs} />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/solutions">Eco Litter Types</Link> / Paper
        </Breadcrumb>

        <LitterHeroImage
          src="/images/litters/paper.png"
          alt="Recycled paper cat litter pellets with sustainable materials"
        />

        <Title>Paper Cat Litter: The Gentlest Choice</Title>
        <Subtitle>
          Made from recycled newspapers and cardboard, paper litter is the go-to recommendation for post-surgery cats and sensitive felines.
        </Subtitle>

        <QuickFacts>
          <FactsTitle>Quick Facts</FactsTitle>
          <FactsGrid>
            <Fact>
              <FactLabel>Biodegradable</FactLabel>
              <FactValue>Yes - easily compostable</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Flushable</FactLabel>
              <FactValue>No</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Dust Level</FactLabel>
              <FactValue>Virtually Zero</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Odor Control</FactLabel>
              <FactValue>Moderate</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Clumping</FactLabel>
              <FactValue>Some brands</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Best For</FactLabel>
              <FactValue>Post-surgery, allergies, kittens</FactValue>
            </Fact>
          </FactsGrid>
        </QuickFacts>

        <Section>
          <SectionTitle>What is Paper Cat Litter?</SectionTitle>
          <Paragraph>
            Paper cat litter is made from recycled paper products—primarily newspapers,
            magazines, and cardboard that would otherwise go to landfills. The paper is
            processed into either pellets or crumbled pieces that absorb moisture and
            control odors.
          </Paragraph>
          <Paragraph>
            Because it's made from recycled materials, paper litter represents a true
            circular economy product: waste becomes a useful product, which then
            biodegrades back into the earth.
          </Paragraph>
        </Section>

        <HighlightBox>
          <HighlightTitle>Vet's Choice for Post-Surgery Cats</HighlightTitle>
          <Paragraph>
            If your cat has recently been spayed, neutered, or had any surgical procedure,
            your veterinarian likely recommended paper litter. Here's why:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Zero dust:</strong> Clay and silica dust can enter surgical incisions
              and cause infection. Paper produces no airborne particles.
            </ListItem>
            <ListItem>
              <strong>Non-clumping varieties:</strong> Clumping litter can stick to wounds.
              Paper pellets won't adhere to sensitive areas.
            </ListItem>
            <ListItem>
              <strong>Soft texture:</strong> Gentle on tender paws and healing bodies.
            </ListItem>
            <ListItem>
              <strong>Non-toxic if licked:</strong> Cats grooming around surgical sites
              won't ingest harmful substances.
            </ListItem>
          </List>
        </HighlightBox>

        <Section>
          <SectionTitle>Types of Paper Litter</SectionTitle>
          <Paragraph>
            <strong>Paper Pellets:</strong> The most common form. Cylindrical pellets made
            from compressed recycled paper. They absorb urine but don't clump—the pellets
            simply swell and darken when wet. Easy to identify and remove soiled litter.
          </Paragraph>
          <Paragraph>
            <strong>Crumbled Paper:</strong> Some brands break the paper into irregular
            crumbles rather than uniform pellets. This texture is closer to traditional
            litter and may be more accepted by picky cats.
          </Paragraph>
          <Paragraph>
            <strong>Clumping Paper:</strong> Newer formulations use paper fibers treated
            to clump when wet, offering the convenience of scoop-and-toss cleaning while
            maintaining paper's benefits.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Pros and Cons</SectionTitle>
          <ProConGrid>
            <ProConBox $type="pro">
              <ProConTitle>Advantages</ProConTitle>
              <ProConList>
                <ListItem>Virtually dust-free</ListItem>
                <ListItem>Extremely soft texture</ListItem>
                <ListItem>Made from recycled materials</ListItem>
                <ListItem>Safe for kittens</ListItem>
                <ListItem>Vet-recommended post-surgery</ListItem>
                <ListItem>Lightweight</ListItem>
                <ListItem>Highly absorbent</ListItem>
              </ProConList>
            </ProConBox>
            <ProConBox $type="con">
              <ProConTitle>Disadvantages</ProConTitle>
              <ProConList>
                <ListItem>Poor odor control</ListItem>
                <ListItem>Doesn't clump (most types)</ListItem>
                <ListItem>Needs frequent changing</ListItem>
                <ListItem>Different texture than clay</ListItem>
                <ListItem>Some cats reject it</ListItem>
                <ListItem>Can get mushy when saturated</ListItem>
              </ProConList>
            </ProConBox>
          </ProConGrid>
        </Section>

        <Section>
          <SectionTitle>The Odor Challenge</SectionTitle>
          <Paragraph>
            Let's be honest: paper litter's biggest weakness is odor control. Unlike wood
            with its natural phenols or clay with added deodorizers, plain paper doesn't
            have inherent odor-fighting properties.
          </Paragraph>
          <Paragraph>
            If you need to use paper litter (for medical reasons or sensitive cats), here
            are ways to manage odors:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Scoop frequently:</strong> At least twice daily, more for multiple cats.
            </ListItem>
            <ListItem>
              <strong>Add baking soda:</strong> A thin layer at the bottom of the box helps
              neutralize ammonia.
            </ListItem>
            <ListItem>
              <strong>Use activated charcoal:</strong> Adding an activated carbon
              supplement like{' '}
              <a href="https://purrify.ca/purr/products?utm_source=ecocatlitters">
                Purrify
              </a>{' '}
              can significantly improve odor absorption without compromising paper's gentle properties.
            </ListItem>
            <ListItem>
              <strong>Change completely often:</strong> Replace all litter every 5-7 days
              rather than just topping off.
            </ListItem>
            <ListItem>
              <strong>Good ventilation:</strong> Place the litter box in a well-ventilated
              area to prevent odor buildup.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Perfect for Allergies</SectionTitle>
          <Paragraph>
            For cats or humans with respiratory sensitivities, paper litter can be
            life-changing:
          </Paragraph>
          <List>
            <ListItem>
              <strong>No silica dust:</strong> Traditional clay litter produces fine
              silica particles linked to respiratory issues in both cats and humans.
            </ListItem>
            <ListItem>
              <strong>Hypoallergenic:</strong> Paper doesn't trigger most common allergens.
            </ListItem>
            <ListItem>
              <strong>Asthma-friendly:</strong> Cats with feline asthma often improve
              dramatically after switching from clay to paper.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Ideal for Kittens</SectionTitle>
          <Paragraph>
            Paper litter is one of the safest choices for young kittens:
          </Paragraph>
          <List>
            <ListItem>
              Kittens explore with their mouths—paper is safe if accidentally eaten
            </ListItem>
            <ListItem>
              The soft texture is gentle on developing paw pads
            </ListItem>
            <ListItem>
              No clumping materials that could cause intestinal blockages
            </ListItem>
            <ListItem>
              Dust-free environment protects developing respiratory systems
            </ListItem>
          </List>
          <Paragraph>
            Many breeders and shelters use paper litter for kittens under 8 weeks old,
            then gradually transition to clumping varieties as the kittens mature.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Environmental Impact</SectionTitle>
          <Paragraph>
            Paper litter scores high on sustainability:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Diverts waste:</strong> Every bag of paper litter represents
              newspapers and cardboard saved from landfills.
            </ListItem>
            <ListItem>
              <strong>Reduces new production:</strong> Using recycled paper means fewer
              trees cut for virgin paper production.
            </ListItem>
            <ListItem>
              <strong>Biodegrades quickly:</strong> Used paper litter breaks down in
              weeks when composted (without cat feces).
            </ListItem>
            <ListItem>
              <strong>Low energy production:</strong> Manufacturing paper litter requires
              less energy than mining and processing clay.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>When Paper Litter Makes Sense</SectionTitle>
          <Paragraph>
            Paper litter is the best choice when:
          </Paragraph>
          <List>
            <ListItem>Your cat is recovering from surgery or illness</ListItem>
            <ListItem>You or your cat have respiratory allergies</ListItem>
            <ListItem>You have very young kittens</ListItem>
            <ListItem>Your cat has sensitive or injured paws</ListItem>
            <ListItem>Environmental sustainability is your top priority</ListItem>
          </List>
          <Paragraph>
            For everyday use without special medical needs, you might prefer options with
            better odor control like <Link href="/litter-types/wood">wood</Link> or
            <Link href="/litter-types/walnut"> walnut</Link> litter.
          </Paragraph>
        </Section>

        <FAQSection faqs={paperFAQs} />

        <RelatedLinks>
          <RelatedTitle>Explore Other Eco-Friendly Options</RelatedTitle>
          <RelatedGrid>
            <RelatedLink href="/litter-types/bamboo">Bamboo Litter</RelatedLink>
            <RelatedLink href="/litter-types/wood">Wood Litter</RelatedLink>
            <RelatedLink href="/litter-types/corn">Corn Litter</RelatedLink>
            <RelatedLink href="/litter-types/walnut">Walnut Litter</RelatedLink>
            <RelatedLink href="/litter-types/wheat">Wheat Litter</RelatedLink>
            <RelatedLink href="/litter-types/grass">Grass Litter</RelatedLink>
          </RelatedGrid>
        </RelatedLinks>
      </Article>
    </>
  );
}
