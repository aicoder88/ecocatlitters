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

const NumberedList = styled.ol`
  margin: ${({ theme }) => theme.spacing.md} 0;
  padding-left: ${({ theme }) => theme.spacing.xl};
`;

const ListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TipBox = styled.div`
  background: ${({ theme }) => theme.colors.paleGreen};
  border-left: 4px solid ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const TipTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TipText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1.6;
`;

const ScheduleBox = styled.div`
  background: ${({ theme }) => theme.colors.offWhite};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const ScheduleTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ScheduleDay = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.forestGreen};
`;

const ScheduleDesc = styled.span`
  color: ${({ theme }) => theme.colors.charcoal};
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
        title="How to Switch Your Cat to Eco-Friendly Litter (Step-by-Step Guide)"
        description="Complete guide to transitioning your cat from clay to eco-friendly litter. Learn the gradual mixing method and avoid litter box rejection."
        url="https://ecocatlitters.com/blog/how-to-switch-cat-to-eco-friendly-litter"
        datePublished="2024-12-28"
        dateModified="2024-12-28"
      />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / How to Switch Litter
        </Breadcrumb>

        <Title>How to Switch Your Cat to Eco-Friendly Litter (Step-by-Step Guide)</Title>
        <Meta>December 28, 2024 · 8 min read</Meta>

        <Section>
          <Paragraph>
            Switching your cat from clay litter to an eco-friendly alternative is one of the best
            decisions you can make for the environment and often for your cat's health. But cats
            are creatures of habit, and a sudden change can lead to litter box rejection—a problem
            no cat owner wants to deal with.
          </Paragraph>
          <Paragraph>
            This guide walks you through the proven gradual transition method that works for
            even the pickiest cats, plus troubleshooting tips if things don't go smoothly.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Why the Gradual Approach Matters</SectionTitle>
          <Paragraph>
            Cats are sensitive to changes in their environment, especially their litter box.
            A sudden switch can cause:
          </Paragraph>
          <List>
            <ListItem>Litter box avoidance (accidents outside the box)</ListItem>
            <ListItem>Stress behaviors like excessive grooming or hiding</ListItem>
            <ListItem>Complete refusal to use the box</ListItem>
            <ListItem>Spraying or marking behavior</ListItem>
          </List>
          <Paragraph>
            By transitioning gradually over 2-3 weeks, you allow your cat to adjust to the new
            texture, scent, and feel while maintaining their litter box routine.
          </Paragraph>
        </Section>

        <ScheduleBox>
          <ScheduleTitle>14-Day Transition Schedule</ScheduleTitle>
          <ScheduleGrid>
            <ScheduleDay>Days 1-3:</ScheduleDay>
            <ScheduleDesc>75% old litter, 25% new eco-litter</ScheduleDesc>
            <ScheduleDay>Days 4-6:</ScheduleDay>
            <ScheduleDesc>50% old litter, 50% new eco-litter</ScheduleDesc>
            <ScheduleDay>Days 7-10:</ScheduleDay>
            <ScheduleDesc>25% old litter, 75% new eco-litter</ScheduleDesc>
            <ScheduleDay>Days 11-14:</ScheduleDay>
            <ScheduleDesc>100% new eco-litter</ScheduleDesc>
          </ScheduleGrid>
        </ScheduleBox>

        <Section>
          <SectionTitle>Step-by-Step Transition Process</SectionTitle>

          <NumberedList>
            <ListItem>
              <strong>Choose your new eco-friendly litter:</strong> Consider your cat's current
              preferences. If they use fine-grain clumping clay, start with{' '}
              <Link href="/litter-types/corn">corn</Link> or{' '}
              <Link href="/litter-types/wheat">wheat</Link> litter which have similar textures.
              For cats already using crystal litter,{' '}
              <Link href="/litter-types/tofu">tofu pellets</Link> may be an easier transition.
            </ListItem>
            <ListItem>
              <strong>Clean the litter box completely:</strong> Start with a fresh box. Wash it
              with mild soap and water (no harsh chemicals) and dry thoroughly.
            </ListItem>
            <ListItem>
              <strong>Create your first mix:</strong> Pour in 75% of your cat's current litter,
              then add 25% of the new eco-litter. Mix them together thoroughly.
            </ListItem>
            <ListItem>
              <strong>Observe your cat:</strong> Watch for normal litter box use. If your cat
              uses the box without hesitation, you're on track.
            </ListItem>
            <ListItem>
              <strong>Gradually increase the ratio:</strong> Every 3-4 days, increase the
              eco-litter percentage by 25%.
            </ListItem>
            <ListItem>
              <strong>Complete the transition:</strong> By day 14, you should be at 100%
              eco-friendly litter with a happy, adjusted cat.
            </ListItem>
          </NumberedList>
        </Section>

        <TipBox>
          <TipTitle>Pro Tip: The Two-Box Method</TipTitle>
          <TipText>
            If you have space, try placing a second litter box with the new eco-litter next
            to your cat's regular box. Some cats will naturally explore and may start using
            the new litter on their own, making the transition even easier.
          </TipText>
        </TipBox>

        <Section>
          <SectionTitle>Troubleshooting Common Problems</SectionTitle>

          <Paragraph>
            <strong>Cat refuses to use the box after the first mix:</strong> You may have
            moved too fast. Go back to 90% old litter / 10% new and proceed more slowly,
            taking 3-4 weeks instead of 2.
          </Paragraph>

          <Paragraph>
            <strong>Cat scratches at the litter but won't go:</strong> The texture may feel
            unfamiliar. Try a different eco-litter type—if you started with wood pellets,
            try corn or grass which have finer textures closer to clay.
          </Paragraph>

          <Paragraph>
            <strong>Cat goes beside the box, not in it:</strong> This is often a scent issue.
            Some eco-litters have stronger natural scents. Try{' '}
            <Link href="/litter-types/tofu">tofu</Link> or{' '}
            <Link href="/litter-types/corn">corn</Link> which have milder aromas.
          </Paragraph>

          <Paragraph>
            <strong>Odor issues during transition:</strong> Mixing different litter types can
            temporarily reduce odor control. Consider adding an{' '}
            <a href="https://www.purrify.ca/products?utm_source=ecocatlitters">
              activated carbon supplement like Purrify
            </a>{' '}
            during the transition period to maintain freshness.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Best Eco-Litters for Easy Transitions</SectionTitle>
          <Paragraph>
            Some eco-litters are easier to transition to than others. Here are our
            recommendations based on typical cat preferences:
          </Paragraph>
          <List>
            <ListItem>
              <strong><Link href="/litter-types/corn">Corn litter</Link>:</strong> Closest
              texture to fine-grain clumping clay. Highest acceptance rate for first-time switchers.
            </ListItem>
            <ListItem>
              <strong><Link href="/litter-types/grass">Grass litter</Link>:</strong> Cats seem
              to instinctively love it. Many accept it immediately without any transition period.
            </ListItem>
            <ListItem>
              <strong><Link href="/litter-types/wheat">Wheat litter</Link>:</strong> Similar
              to corn with added enzymatic odor control. Easy transition for most cats.
            </ListItem>
            <ListItem>
              <strong><Link href="/litter-types/tofu">Tofu litter</Link>:</strong> The pellet
              form is different, but the neutral scent makes it acceptable to most cats.
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Signs of a Successful Transition</SectionTitle>
          <Paragraph>
            How do you know the switch worked? Look for these positive indicators:
          </Paragraph>
          <List>
            <ListItem>Your cat uses the box at their normal frequency</ListItem>
            <ListItem>Normal digging and burying behavior</ListItem>
            <ListItem>No accidents outside the litter box</ListItem>
            <ListItem>Cat seems relaxed around the litter box area</ListItem>
            <ListItem>Normal grooming patterns (no excessive paw licking)</ListItem>
          </List>
        </Section>

        <CTABox>
          <CTATitle>Need Help Choosing an Eco-Friendly Litter?</CTATitle>
          <CTAText>
            Compare all 8 eco-friendly litter types side-by-side to find the perfect match for your cat.
          </CTAText>
          <CTAButton href="/solutions">View the Comparison Chart →</CTAButton>
        </CTABox>

        <Section>
          <SectionTitle>What About Multiple Cats?</SectionTitle>
          <Paragraph>
            Multi-cat households can be trickier. If one cat accepts the new litter but
            another doesn't, you have options:
          </Paragraph>
          <List>
            <ListItem>
              Maintain one box with the old litter type while gradually transitioning
              the others
            </ListItem>
            <ListItem>
              Try different eco-litter types for different cats—cats have individual
              preferences
            </ListItem>
            <ListItem>
              Be patient; some cats take longer than others, and that's okay
            </ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>The Environmental Payoff</SectionTitle>
          <Paragraph>
            Once you've completed the transition, you'll be preventing pounds of non-biodegradable
            clay from entering landfills every week. Eco-friendly litters biodegrade naturally,
            and many can even be composted (minus the solid waste). Your small change makes a
            meaningful difference.
          </Paragraph>
        </Section>

        <RelatedPosts>
          <RelatedTitle>Related Articles</RelatedTitle>
          <RelatedGrid>
            <RelatedLink href="/blog/best-cat-litter-for-apartments">
              Best Cat Litter for Apartments →
            </RelatedLink>
            <RelatedLink href="/blog/cat-litter-odor-control-tips">
              Cat Litter Smell Solutions That Work →
            </RelatedLink>
          </RelatedGrid>
        </RelatedPosts>
      </Article>
    </>
  );
}
