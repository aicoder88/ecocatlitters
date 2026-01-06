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
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const Meta = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
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

const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.charcoal};
  margin: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.sm};
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

const PickBox = styled.div<{ $rank: number }>`
  background: ${({ $rank }) =>
    $rank === 1 ? 'linear-gradient(135deg, #48BB78 0%, #38A169 100%)' :
    $rank === 2 ? 'linear-gradient(135deg, #4299E1 0%, #3182CE 100%)' :
    'linear-gradient(135deg, #ED8936 0%, #DD6B20 100%)'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.lg} 0;
  color: white;
`;

const PickRank = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.9;
`;

const PickTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;

const PickDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  opacity: 0.95;
  line-height: 1.6;
`;

const PickLink = styled(Link)`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const TipBox = styled.div`
  background: ${({ theme }) => theme.colors.paleGreen};
  border-left: 4px solid ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const TipTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TipText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1.6;
`;

const ComparisonTable = styled.div`
  overflow-x: auto;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const Th = styled.th`
  background: ${({ theme }) => theme.colors.forestGreen};
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  text-align: left;
`;

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const CTABox = styled.div`
  background: ${({ theme }) => theme.colors.forestGreen};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
  text-align: center;
`;

const CTATitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.paleGreen};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CTAButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const RelatedPosts = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding-top: ${({ theme }) => theme.spacing['2xl']};
`;

const RelatedTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const RelatedLink = styled(Link)`
  background: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.charcoal};
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.paleGreen};
  }
`;

export default function ArticleContent() {
  return (
    <>
      <ArticleSchema
        title="Best Cat Litter for Apartments: Odor Control in Small Spaces"
        description="Living in an apartment with cats? Discover which eco-friendly litters offer the best odor control, lowest dust, and easiest disposal."
        url="https://ecocatlitters.com/blog/best-cat-litter-for-apartments"
        datePublished="2024-12-26"
        dateModified="2024-12-26"
      />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / Best Litter for Apartments
        </Breadcrumb>

        <Title>Best Cat Litter for Apartments: Odor Control in Small Spaces</Title>
        <Meta>December 26, 2024 · 6 min read</Meta>

        <Section>
          <Paragraph>
            Apartment living with cats presents unique challenges. When your litter box shares
            space with your living area—sometimes just feet from your couch or bed—odor control
            becomes critical. Add in concerns about dust, disposal logistics, and storage space,
            and choosing the right litter becomes more important than ever.
          </Paragraph>
          <Paragraph>
            We've evaluated eco-friendly litters specifically for apartment living, considering
            the factors that matter most in small spaces.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>What Apartment Dwellers Need</SectionTitle>
          <Paragraph>
            Living in an apartment means different priorities than a house with a basement
            or garage for the litter box:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Superior odor control:</strong> When the litter box is in your living
              space, odors affect your daily comfort
            </ListItem>
            <ListItem>
              <strong>Low dust:</strong> Dust particles spread throughout small, enclosed
              spaces quickly
            </ListItem>
            <ListItem>
              <strong>Easy disposal:</strong> No backyard compost? Flushable or lightweight
              litter makes trash runs easier
            </ListItem>
            <ListItem>
              <strong>Low tracking:</strong> Less tracking means less cleaning in your
              compact space
            </ListItem>
            <ListItem>
              <strong>Compact storage:</strong> Lightweight bags that fit in small closets
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Our Top Picks for Apartments</SectionTitle>

          <PickBox $rank={1}>
            <PickRank>Best Overall</PickRank>
            <PickTitle>Walnut Litter</PickTitle>
            <PickDesc>
              Exceptional natural odor control thanks to walnut shell tannins. The dark color
              hides stains, and the natural ammonia neutralization keeps your apartment fresh.
              Not flushable, but the superior odor control is worth the trade-off.
            </PickDesc>
            <PickLink href="/litter-types/walnut">Learn about Walnut Litter →</PickLink>
          </PickBox>

          <PickBox $rank={2}>
            <PickRank>Best Flushable Option</PickRank>
            <PickTitle>Tofu (Soy) Litter</PickTitle>
            <PickDesc>
              The most flushable eco-litter available—dissolves completely in water. Perfect
              for apartments without convenient trash disposal. Low tracking pellet format
              keeps your floors cleaner. Just flush small amounts at a time.
            </PickDesc>
            <PickLink href="/litter-types/tofu">Learn about Tofu Litter →</PickLink>
          </PickBox>

          <PickBox $rank={3}>
            <PickRank>Best Budget Option</PickRank>
            <PickTitle>Wood (Pine) Litter</PickTitle>
            <PickDesc>
              Pine's natural phenols neutralize ammonia exceptionally well, and it's the most
              affordable eco-option. Not flushable, but the excellent odor control and low
              price make it a practical choice for budget-conscious renters.
            </PickDesc>
            <PickLink href="/litter-types/wood">Learn about Wood Litter →</PickLink>
          </PickBox>
        </Section>

        <Section>
          <SectionTitle>Quick Comparison for Apartments</SectionTitle>
          <ComparisonTable>
            <Table>
              <thead>
                <tr>
                  <Th>Litter Type</Th>
                  <Th>Odor Control</Th>
                  <Th>Flushable</Th>
                  <Th>Dust</Th>
                  <Th>Tracking</Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td><Link href="/litter-types/walnut">Walnut</Link></Td>
                  <Td>Excellent</Td>
                  <Td>No</Td>
                  <Td>Low</Td>
                  <Td>Some</Td>
                </tr>
                <tr>
                  <Td><Link href="/litter-types/grass">Grass</Link></Td>
                  <Td>Excellent</Td>
                  <Td>Yes</Td>
                  <Td>Minimal</Td>
                  <Td>Some</Td>
                </tr>
                <tr>
                  <Td><Link href="/litter-types/tofu">Tofu</Link></Td>
                  <Td>Good</Td>
                  <Td>Yes</Td>
                  <Td>Very Low</Td>
                  <Td>Low</Td>
                </tr>
                <tr>
                  <Td><Link href="/litter-types/wood">Wood</Link></Td>
                  <Td>Excellent</Td>
                  <Td>No</Td>
                  <Td>Low-Med</Td>
                  <Td>Low</Td>
                </tr>
                <tr>
                  <Td><Link href="/litter-types/corn">Corn</Link></Td>
                  <Td>Good</Td>
                  <Td>Yes</Td>
                  <Td>Very Low</Td>
                  <Td>Some</Td>
                </tr>
              </tbody>
            </Table>
          </ComparisonTable>
        </Section>

        <TipBox>
          <TipTitle>Apartment Odor Control Secret</TipTitle>
          <TipText>
            For apartments where the litter box is in a main living area, combine any
            eco-litter with an{' '}
            <a href="https://www.purrify.ca/products?utm_source=ecocatlitters">
              activated carbon supplement like Purrify
            </a>. This dual-action approach captures odors that even the best litters
            might miss, keeping your small space fresh.
          </TipText>
        </TipBox>

        <Section>
          <SectionTitle>The Flushability Factor</SectionTitle>
          <Paragraph>
            For apartment dwellers without convenient trash access, flushable litter is
            a game-changer. No more carrying smelly bags through hallways or down stairs.
          </Paragraph>
          <Paragraph>
            <strong>Best flushable options:</strong>
          </Paragraph>
          <List>
            <ListItem>
              <Link href="/litter-types/tofu">Tofu/soy litter</Link> — Dissolves most
              completely, safest for plumbing
            </ListItem>
            <ListItem>
              <Link href="/litter-types/corn">Corn litter</Link> — Flushable and
              septic-safe, excellent clumping
            </ListItem>
            <ListItem>
              <Link href="/litter-types/wheat">Wheat litter</Link> — Flushable with
              added enzymatic odor control
            </ListItem>
          </List>
          <Paragraph>
            <strong>Important:</strong> Even with flushable litter, never flush cat feces.
            It can contain parasites that water treatment doesn't fully eliminate. Flush
            only urine-soaked litter in small amounts.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Placement Tips for Small Spaces</SectionTitle>
          <Paragraph>
            Where you put the litter box matters as much as what you put in it:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Bathroom corner:</strong> Good ventilation and easy cleanup if using
              flushable litter
            </ListItem>
            <ListItem>
              <strong>Closet with litter furniture:</strong> Enclosed furniture hides the
              box and contains odors, but ensure ventilation
            </ListItem>
            <ListItem>
              <strong>Avoid the kitchen:</strong> Even with great litter, keep the box away
              from food prep areas
            </ListItem>
            <ListItem>
              <strong>Near an air vent:</strong> Helps circulate air and prevents odor
              buildup in one spot
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Storage in Small Spaces</SectionTitle>
          <Paragraph>
            Eco-litters are generally lighter than clay, making storage easier:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Wood and grass litters</strong> are 50-70% lighter than clay—easier
              to carry up stairs
            </ListItem>
            <ListItem>
              <strong>Tofu pellets</strong> are compact and don't need large bags
            </ListItem>
            <ListItem>
              Consider <strong>subscription services</strong> that deliver smaller quantities
              regularly rather than storing large bags
            </ListItem>
          </List>
        </Section>

        <CTABox>
          <CTATitle>Compare All Eco-Friendly Litter Types</CTATitle>
          <CTAText>
            See how each litter type stacks up on odor control, dust, clumping, and more.
          </CTAText>
          <CTAButton href="/solutions">View Full Comparison →</CTAButton>
        </CTABox>

        <Section>
          <SectionTitle>What About Building Rules?</SectionTitle>
          <Paragraph>
            Some apartment buildings have rules about pet waste disposal. Before choosing
            a flushable litter, check with your building management about:
          </Paragraph>
          <List>
            <ListItem>Rules about flushing pet products</ListItem>
            <ListItem>Plumbing capacity in older buildings</ListItem>
            <ListItem>Designated pet waste disposal areas</ListItem>
          </List>
          <Paragraph>
            If flushing isn't an option, lightweight eco-litters like grass or wood are
            still easier to carry to the trash than heavy clay.
          </Paragraph>
        </Section>

        <RelatedPosts>
          <RelatedTitle>Related Articles</RelatedTitle>
          <RelatedGrid>
            <RelatedLink href="/blog/cat-litter-odor-control-tips">
              Cat Litter Smell Solutions That Work →
            </RelatedLink>
            <RelatedLink href="/blog/how-to-switch-cat-to-eco-friendly-litter">
              How to Switch to Eco-Friendly Litter →
            </RelatedLink>
          </RelatedGrid>
        </RelatedPosts>
      </Article>
    </>
  );
}
