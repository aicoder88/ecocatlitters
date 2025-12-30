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

const SafeBox = styled.div`
  background: ${({ theme }) => theme.colors.paleGreen};
  border-left: 4px solid ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const SafeTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CautionBox = styled.div`
  background: #FFF9E6;
  border-left: 4px solid #D69E2E;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const CautionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #744210;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CautionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #744210;
  line-height: 1.6;
`;

const RankingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.xl} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const RankingCard = styled.div<{ $safe: boolean }>`
  background: ${({ $safe }) => $safe ? '#F0FFF4' : '#FFF5F5'};
  border: 2px solid ${({ $safe }) => $safe ? '#48BB78' : '#FC8181'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const RankingHeader = styled.div<{ $safe: boolean }>`
  font-weight: 600;
  color: ${({ $safe }) => $safe ? '#276749' : '#C53030'};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const RankingList = styled.ul`
  padding-left: ${({ theme }) => theme.spacing.lg};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.base};
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
        title="Is Eco-Friendly Cat Litter Safe for Kittens? Safety Guide"
        description="What you need to know about natural litter safety for kittens. Learn which eco-friendly litters are safest."
        url="https://ecocatlitters.com/blog/eco-friendly-litter-safe-for-kittens"
        datePublished="2024-12-24"
        dateModified="2024-12-24"
      />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / Eco Litter for Kittens
        </Breadcrumb>

        <Title>Is Eco-Friendly Cat Litter Safe for Kittens?</Title>
        <Meta>December 24, 2024 · 5 min read</Meta>

        <Section>
          <Paragraph>
            When you bring home a new kitten, every choice matters—including what you put in
            their litter box. Kittens are curious, often tasting everything they encounter,
            and their developing respiratory systems are more sensitive than adult cats.
          </Paragraph>
          <Paragraph>
            The good news: most eco-friendly litters are actually <em>safer</em> for kittens
            than traditional clay litter. Here's what you need to know.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Why Kittens Need Special Consideration</SectionTitle>
          <Paragraph>
            Kittens differ from adult cats in ways that affect litter safety:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Taste-testing behavior:</strong> Kittens explore with their mouths and
              may eat litter, especially during the first weeks of litter training
            </ListItem>
            <ListItem>
              <strong>Developing respiratory systems:</strong> Young lungs are more vulnerable
              to dust and airborne particles
            </ListItem>
            <ListItem>
              <strong>Smaller body size:</strong> Ingesting the same amount of a substance has
              a bigger impact on a 2-pound kitten than a 10-pound cat
            </ListItem>
            <ListItem>
              <strong>Weaker immune systems:</strong> Kittens may be more susceptible to
              bacterial or mold issues
            </ListItem>
          </List>
        </Section>

        <RankingGrid>
          <RankingCard $safe={true}>
            <RankingHeader $safe={true}>Safest for Kittens</RankingHeader>
            <RankingList>
              <li><Link href="/litter-types/paper">Paper litter</Link> — dust-free, non-toxic</li>
              <li><Link href="/litter-types/tofu">Tofu litter</Link> — food-grade, dissolves if eaten</li>
              <li><Link href="/litter-types/corn">Corn litter</Link> — food-grade, safe if ingested</li>
              <li><Link href="/litter-types/wheat">Wheat litter</Link> — food-grade, gentle</li>
            </RankingList>
          </RankingCard>
          <RankingCard $safe={false}>
            <RankingHeader $safe={false}>Use With Caution</RankingHeader>
            <RankingList>
              <li>Clumping clay — can cause blockages if eaten</li>
              <li>Silica crystals — sharp, not for ingestion</li>
              <li>Scented litters — chemicals may irritate</li>
              <li>Cedar chips — strong oils may be too much</li>
            </RankingList>
          </RankingCard>
        </RankingGrid>

        <Section>
          <SectionTitle>The Best Eco-Litters for Kittens</SectionTitle>

          <Paragraph>
            <strong><Link href="/litter-types/paper">Paper litter</Link> — Top choice for very young kittens</strong>
          </Paragraph>
          <Paragraph>
            Vets and breeders often recommend paper litter for kittens under 8 weeks. It's
            virtually dust-free, completely non-toxic if eaten, and soft on tiny paws. The
            only downside is weaker odor control, but for young kittens who are learning
            the litter box, safety trumps smell.
          </Paragraph>

          <Paragraph>
            <strong><Link href="/litter-types/tofu">Tofu litter</Link> — Best for curious eaters</strong>
          </Paragraph>
          <Paragraph>
            Made from food-grade soy, tofu litter is safe if ingested. Unlike clumping clay
            that can cause intestinal blockages, tofu dissolves in liquid. Asian breeders
            have used tofu litter for kittens for decades.
          </Paragraph>

          <Paragraph>
            <strong><Link href="/litter-types/corn">Corn</Link> and <Link href="/litter-types/wheat">wheat litter</Link> — Good all-around options</strong>
          </Paragraph>
          <Paragraph>
            Both are made from food-grade grains and are safe if accidentally eaten in small
            amounts. They clump well for easy cleaning and have low dust. Most kittens
            transition easily because the texture is similar to clay.
          </Paragraph>
        </Section>

        <SafeBox>
          <SafeTitle>What Makes a Litter "Kitten-Safe"?</SafeTitle>
          <List>
            <ListItem>Non-toxic if ingested in small amounts</ListItem>
            <ListItem>Low or no dust to protect developing lungs</ListItem>
            <ListItem>Non-clumping in the digestive tract</ListItem>
            <ListItem>No harsh chemicals or fragrances</ListItem>
            <ListItem>Soft texture that won't hurt paw pads</ListItem>
          </List>
        </SafeBox>

        <Section>
          <SectionTitle>When to Be Careful</SectionTitle>
          <Paragraph>
            Some eco-friendly litters require extra consideration for kittens:
          </Paragraph>

          <Paragraph>
            <strong><Link href="/litter-types/wood">Wood/pine litter</Link></strong> — Generally safe,
            but choose kiln-dried products. The heat treatment removes harmful substances.
            Fresh sawdust or untreated wood can contain oils that may irritate young cats.
          </Paragraph>

          <Paragraph>
            <strong><Link href="/litter-types/walnut">Walnut litter</Link></strong> — Safe for most
            kittens, but if anyone in your household has a nut allergy, airborne particles
            could be a concern. The litter itself won't harm your kitten.
          </Paragraph>
        </Section>

        <CautionBox>
          <CautionTitle>When to See the Vet</CautionTitle>
          <CautionText>
            If your kitten regularly eats litter (more than occasional taste-testing),
            consult your veterinarian. Excessive litter eating can indicate nutritional
            deficiencies, anemia, or other health issues. A vet can rule out medical causes
            and recommend appropriate solutions.
          </CautionText>
        </CautionBox>

        <Section>
          <SectionTitle>Age-Based Recommendations</SectionTitle>

          <Paragraph>
            <strong>Under 8 weeks:</strong> Use paper litter exclusively. Kittens this young
            are still learning and most likely to taste-test their litter. Paper is the
            safest option during this critical period.
          </Paragraph>

          <Paragraph>
            <strong>8-12 weeks:</strong> You can begin transitioning to corn, wheat, or tofu
            litter if desired. These food-grade options remain safe while offering better
            clumping and odor control than paper.
          </Paragraph>

          <Paragraph>
            <strong>12+ weeks:</strong> Most kittens can safely use any eco-friendly litter.
            By this age, litter-eating behavior typically decreases as kittens learn proper
            litter box habits.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Tips for Litter Training Kittens</SectionTitle>
          <List>
            <ListItem>
              <strong>Keep it shallow:</strong> Young kittens can struggle with deep litter.
              Start with 1-2 inches and increase as they grow.
            </ListItem>
            <ListItem>
              <strong>Use low-sided boxes:</strong> Kittens need to be able to climb in
              easily. Cut-down cardboard boxes work great for tiny kittens.
            </ListItem>
            <ListItem>
              <strong>Place kittens in the box after meals:</strong> This helps establish
              the litter box habit.
            </ListItem>
            <ListItem>
              <strong>Keep it clean:</strong> Scoop frequently—kittens are more likely to
              avoid dirty boxes.
            </ListItem>
            <ListItem>
              <strong>One box per kitten plus one:</strong> For multiple kittens, provide
              plenty of litter box options.
            </ListItem>
          </List>
        </Section>

        <CTABox>
          <CTATitle>Compare Kitten-Safe Litter Options</CTATitle>
          <CTAText>
            See all 8 eco-friendly litter types compared side-by-side, including safety ratings.
          </CTAText>
          <CTAButton href="/solutions">View Comparison →</CTAButton>
        </CTABox>

        <Section>
          <SectionTitle>The Bottom Line</SectionTitle>
          <Paragraph>
            Eco-friendly cat litters are generally safer for kittens than traditional clay,
            especially clumping clay which can cause intestinal blockages if eaten. Paper,
            tofu, corn, and wheat litters are all excellent choices for kittens. Start with
            the safest option (paper) for very young kittens, then transition to your
            preferred eco-litter as they mature.
          </Paragraph>
        </Section>

        <RelatedPosts>
          <RelatedTitle>Related Articles</RelatedTitle>
          <RelatedGrid>
            <RelatedLink href="/blog/how-to-switch-cat-to-eco-friendly-litter">
              How to Switch to Eco-Friendly Litter →
            </RelatedLink>
            <RelatedLink href="/litter-types/paper">
              Complete Guide to Paper Litter →
            </RelatedLink>
          </RelatedGrid>
        </RelatedPosts>
      </Article>
    </>
  );
}
