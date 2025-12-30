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

export default function WoodContent() {
  return (
    <>
      <ArticleSchema
        title="Wood Cat Litter: Pine, Cedar & Sawdust Options Explained"
        description="Complete guide to wood-based cat litter including pine pellets, cedar chips, and sawdust varieties. Learn about natural odor control and eco-friendly disposal."
        url="https://ecocatlitters.com/litter-types/wood"
        datePublished="2024-01-15"
        dateModified="2024-12-01"
      />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/solutions">Eco Litter Types</Link> / Wood
        </Breadcrumb>

        <Title>Wood Cat Litter: Pine, Cedar & Sawdust Options</Title>
        <Subtitle>
          Wood litter turns lumber industry byproducts into powerful, natural odor fighters for your cat's litter box.
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
              <FactValue>No (pellets expand)</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Dust Level</FactLabel>
              <FactValue>Low to Medium</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Odor Control</FactLabel>
              <FactValue>Excellent (natural)</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Clumping</FactLabel>
              <FactValue>Some brands; pellets don't</FactValue>
            </Fact>
            <Fact>
              <FactLabel>Best For</FactLabel>
              <FactValue>Budget-conscious eco-switchers</FactValue>
            </Fact>
          </FactsGrid>
        </QuickFacts>

        <Section>
          <SectionTitle>What is Wood Cat Litter?</SectionTitle>
          <Paragraph>
            Wood cat litter is made from compressed sawdust, wood shavings, or processed
            lumber byproducts—primarily pine, cedar, or mixed softwoods. Rather than ending
            up in landfills or being burned, these materials get a second life in your
            cat's litter box.
          </Paragraph>
          <Paragraph>
            Wood litter comes in several forms: compressed pellets that break down into
            sawdust when wet, loose shavings, and newer clumping varieties made from
            fine wood fibers. Each has distinct characteristics and best-use cases.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Types of Wood Litter</SectionTitle>

          <Paragraph>
            <strong>Pine Pellets:</strong> The most popular wood litter variety. These
            compressed pellets absorb urine and crumble into sawdust. Pine's natural
            oils neutralize ammonia odors remarkably well. Often the most affordable
            eco-friendly option—some people even use horse bedding pellets (same product,
            bigger bags, lower price).
          </Paragraph>

          <Paragraph>
            <strong>Cedar Shavings:</strong> Cedar contains natural oils that repel
            insects and neutralize odors. The distinctive cedar scent is pleasant to
            most humans but can be strong. Some cats may need time to adjust to the
            aroma.
          </Paragraph>

          <Paragraph>
            <strong>Clumping Wood Litter:</strong> Newer formulations use fine wood
            fibers treated to clump like traditional clay. These offer the familiar
            scooping experience while maintaining wood's natural benefits.
          </Paragraph>

          <Paragraph>
            <strong>Mixed Softwood:</strong> Some brands blend various wood types or
            use reclaimed construction lumber. Check that any mixed-wood product is
            untreated and chemical-free.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>How Pine Pellets Work</SectionTitle>
          <Paragraph>
            Pine pellet litter works differently than traditional clumping clay:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Absorption:</strong> When urine hits a pellet, the compressed
              sawdust expands and absorbs the liquid.
            </ListItem>
            <ListItem>
              <strong>Breakdown:</strong> The pellet crumbles into loose sawdust as
              it absorbs moisture.
            </ListItem>
            <ListItem>
              <strong>Odor neutralization:</strong> Pine's natural phenols chemically
              neutralize ammonia, the primary cause of litter box odor.
            </ListItem>
            <ListItem>
              <strong>Sifting:</strong> Many users employ sifting litter boxes—intact
              pellets stay on top while sawdust falls through for easy removal.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Pros and Cons</SectionTitle>
          <ProConGrid>
            <ProConBox $type="pro">
              <ProConTitle>Advantages</ProConTitle>
              <ProConList>
                <ListItem>Excellent natural odor control</ListItem>
                <ListItem>Very affordable (especially pellets)</ListItem>
                <ListItem>Sustainable and renewable</ListItem>
                <ListItem>Low tracking (pellets)</ListItem>
                <ListItem>Pleasant natural scent</ListItem>
                <ListItem>Compostable</ListItem>
                <ListItem>Uses waste material</ListItem>
              </ProConList>
            </ProConBox>
            <ProConBox $type="con">
              <ProConTitle>Disadvantages</ProConTitle>
              <ProConList>
                <ListItem>Different texture than clay</ListItem>
                <ListItem>Pellets don't clump</ListItem>
                <ListItem>Requires sifting system</ListItem>
                <ListItem>Some cats dislike scent</ListItem>
                <ListItem>Sawdust can be messy</ListItem>
                <ListItem>Not flushable</ListItem>
              </ProConList>
            </ProConBox>
          </ProConGrid>
        </Section>

        <Section>
          <SectionTitle>The Odor Control Science</SectionTitle>
          <Paragraph>
            Wood litter's odor control isn't just about covering up smells—it's chemistry.
            Pine and cedar contain natural compounds called phenols and plicatic acid that
            actively neutralize ammonia at the molecular level.
          </Paragraph>
          <Paragraph>
            This is why many cat owners report that wood litter controls odors better than
            even premium clay litters with artificial fragrances. The clay approach masks
            odors; wood eliminates them.
          </Paragraph>
          <Paragraph>
            For households wanting to boost wood litter&apos;s odor control even further,{' '}
            <a href="https://purrify.ca/purr/how-it-works?utm_source=ecocatlitters" target="_blank" rel="noopener noreferrer">
              Purrify activated carbon
            </a>{' '}
            can capture any remaining odor compounds. The combination of natural wood
            phenols and activated carbon creates an exceptionally fresh-smelling litter box.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Safety Considerations</SectionTitle>
          <Paragraph>
            Wood litter is generally very safe, but keep these points in mind:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Kiln-dried is essential:</strong> Proper heat treatment removes
              harmful bacteria and reduces the strongest aromatic compounds. Never use
              fresh sawdust directly.
            </ListItem>
            <ListItem>
              <strong>Avoid treated wood:</strong> Only use products specifically made
              for pet use. Construction lumber may contain preservatives or chemicals.
            </ListItem>
            <ListItem>
              <strong>Cedar sensitivity:</strong> Some cats (and humans) are sensitive
              to cedar's strong aromatic oils. If your cat sneezes or avoids the box,
              try pine instead.
            </ListItem>
            <ListItem>
              <strong>Phenol concerns:</strong> While modern pet-safe wood litters have
              phenol levels too low to cause harm, cats with liver issues should use
              non-aromatic options.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Transitioning to Wood Litter</SectionTitle>
          <Paragraph>
            The texture difference between clay and wood pellets is significant, so
            patience is key:
          </Paragraph>
          <List>
            <ListItem>
              Start by adding a thin layer of pellets under your current litter
            </ListItem>
            <ListItem>
              Gradually increase the pellet layer while decreasing the clay over 2-3 weeks
            </ListItem>
            <ListItem>
              Consider a clumping wood variety if your cat really resists pellets
            </ListItem>
            <ListItem>
              Keep the same litter box depth—cats notice when things feel different underfoot
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Best Uses for Wood Litter</SectionTitle>
          <Paragraph>
            Wood litter shines in certain situations:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Budget-conscious households:</strong> Pine pellets are among the
              cheapest eco-friendly options, especially bought in bulk as horse bedding.
            </ListItem>
            <ListItem>
              <strong>Multi-cat homes:</strong> The strong natural odor control handles
              high-volume use well.
            </ListItem>
            <ListItem>
              <strong>Allergic cats or owners:</strong> No silica dust means easier
              breathing for everyone.
            </ListItem>
            <ListItem>
              <strong>Composters:</strong> Used wood litter (minus feces) makes excellent
              brown material for compost piles.
            </ListItem>
          </List>
        </Section>

        <RelatedLinks>
          <RelatedTitle>Explore Other Eco-Friendly Options</RelatedTitle>
          <RelatedGrid>
            <RelatedLink href="/litter-types/bamboo">Bamboo Litter</RelatedLink>
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
