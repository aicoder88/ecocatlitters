'use client';

import styled from 'styled-components';
import Link from 'next/link';
import HowToSchema from '@/components/seo/HowToSchema';

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

const StepCard = styled.div`
  background: ${({ theme }) => theme.colors.offWhite};
  border-left: 4px solid ${({ theme }) => theme.colors.forestGreen};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const StepNumber = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.forestGreen};
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  text-align: center;
  line-height: 32px;
  font-weight: 700;
  margin-right: ${({ theme }) => theme.spacing.md};
`;

const StepTitle = styled.h3`
  display: inline;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.charcoal};
`;

const StepContent = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-left: 48px;
`;

const TimelineContainer = styled.div`
  background: ${({ theme }) => theme.colors.paleGreen};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const TimelineTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.forestGreen};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TimelineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TimelineItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

const TimelineWeek = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.forestGreen};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const TimelineRatio = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.charcoal};
`;

const TimelineLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
`;

const WarningBox = styled.div`
  background: #FFF9E6;
  border-left: 4px solid #D69E2E;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const WarningTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #744210;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const WarningText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #744210;
  line-height: 1.6;
`;

const TipBox = styled.div`
  background: #EBF8FF;
  border-left: 4px solid #3182CE;
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

const TipTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: #2B6CB0;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TipText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: #2C5282;
  line-height: 1.6;
`;

const LitterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing.xl} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LitterLink = styled(Link)`
  display: block;
  background: ${({ theme }) => theme.colors.forestGreen};
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.charcoal};
  }
`;

export default function SwitchingGuideContent() {
  return (
    <>
      <HowToSchema
        title="How to Switch Your Cat to Eco-Friendly Litter"
        description="Step-by-step guide to transitioning your cat from clay to sustainable cat litter without litter box problems."
        steps={[
          { name: 'Choose your litter', text: 'Choose your eco-friendly litter type based on your priorities' },
          { name: 'Week 1 - Introduction', text: 'Mix 25% new litter with 75% old litter' },
          { name: 'Week 2 - Half and half', text: 'Adjust to a 50/50 ratio of new and old litter' },
          { name: 'Week 3 - Mostly new', text: 'Increase to 75% new litter, 25% old' },
          { name: 'Week 4 - Complete', text: 'Complete the transition to 100% new litter' },
        ]}
      />
      <Article>
        <Breadcrumb>
          <Link href="/">Home</Link> / Switching Guide
        </Breadcrumb>

        <Title>How to Switch Your Cat to Eco-Friendly Litter</Title>
        <Subtitle>
          A gradual transition is the key to success. Follow this guide to help your cat embrace sustainable litter without any drama.
        </Subtitle>

        <Section>
          <SectionTitle>Why Gradual Matters</SectionTitle>
          <Paragraph>
            Cats are creatures of habit. Their litter box is one of their most important
            territories, and sudden changes can cause stress—sometimes leading to
            accidents outside the box. A gradual transition gives your cat time to
            adjust to new textures, scents, and sensations.
          </Paragraph>
          <Paragraph>
            The good news? Most cats transition smoothly when given time. And many
            actually prefer their new eco-friendly litter once they're used to it.
          </Paragraph>
        </Section>

        <TimelineContainer>
          <TimelineTitle>The 4-Week Transition Schedule</TimelineTitle>
          <TimelineGrid>
            <TimelineItem>
              <TimelineWeek>Week 1</TimelineWeek>
              <TimelineRatio>25/75</TimelineRatio>
              <TimelineLabel>New / Old</TimelineLabel>
            </TimelineItem>
            <TimelineItem>
              <TimelineWeek>Week 2</TimelineWeek>
              <TimelineRatio>50/50</TimelineRatio>
              <TimelineLabel>New / Old</TimelineLabel>
            </TimelineItem>
            <TimelineItem>
              <TimelineWeek>Week 3</TimelineWeek>
              <TimelineRatio>75/25</TimelineRatio>
              <TimelineLabel>New / Old</TimelineLabel>
            </TimelineItem>
            <TimelineItem>
              <TimelineWeek>Week 4</TimelineWeek>
              <TimelineRatio>100%</TimelineRatio>
              <TimelineLabel>New Litter</TimelineLabel>
            </TimelineItem>
          </TimelineGrid>
        </TimelineContainer>

        <Section>
          <SectionTitle>Step-by-Step Guide</SectionTitle>

          <StepCard>
            <StepNumber>1</StepNumber>
            <StepTitle>Choose Your New Litter</StepTitle>
            <StepContent>
              <Paragraph>
                Consider your priorities: odor control, clumping, flushability, price,
                and texture similar to clay. Different eco-litters excel in different areas:
              </Paragraph>
              <List>
                <ListItem>
                  <strong>Most like clay texture:</strong>{' '}
                  <Link href="/litter-types/corn">Corn</Link>,{' '}
                  <Link href="/litter-types/wheat">Wheat</Link>,{' '}
                  <Link href="/litter-types/grass">Grass</Link>
                </ListItem>
                <ListItem>
                  <strong>Best odor control:</strong>{' '}
                  <Link href="/litter-types/walnut">Walnut</Link>,{' '}
                  <Link href="/litter-types/wood">Wood</Link>
                </ListItem>
                <ListItem>
                  <strong>Most flushable:</strong>{' '}
                  <Link href="/litter-types/tofu">Tofu</Link>,{' '}
                  <Link href="/litter-types/corn">Corn</Link>
                </ListItem>
                <ListItem>
                  <strong>Best for allergies:</strong>{' '}
                  <Link href="/litter-types/paper">Paper</Link>,{' '}
                  <Link href="/litter-types/bamboo">Bamboo</Link>
                </ListItem>
              </List>
            </StepContent>
          </StepCard>

          <StepCard>
            <StepNumber>2</StepNumber>
            <StepTitle>Prepare the Litter Box</StepTitle>
            <StepContent>
              <Paragraph>
                Before starting the transition:
              </Paragraph>
              <List>
                <ListItem>
                  Clean the litter box thoroughly with unscented soap
                </ListItem>
                <ListItem>
                  Don't move the box to a new location during transition
                </ListItem>
                <ListItem>
                  Maintain the same litter depth your cat is used to (usually 2-3 inches)
                </ListItem>
                <ListItem>
                  If you have multiple cats, consider transitioning one box at a time
                </ListItem>
              </List>
            </StepContent>
          </StepCard>

          <StepCard>
            <StepNumber>3</StepNumber>
            <StepTitle>Week 1: The Introduction (25% New)</StepTitle>
            <StepContent>
              <Paragraph>
                Add a thin layer of new litter on top of your current litter, or mix
                about 25% new with 75% old. Your cat will start to experience the new
                texture and scent without feeling overwhelmed.
              </Paragraph>
              <Paragraph>
                <strong>Watch for:</strong> Normal litter box use. If your cat uses the
                box normally, you're ready to continue. If they hesitate or avoid the
                box, slow down and use less new litter.
              </Paragraph>
            </StepContent>
          </StepCard>

          <StepCard>
            <StepNumber>4</StepNumber>
            <StepTitle>Week 2: Finding Balance (50/50)</StepTitle>
            <StepContent>
              <Paragraph>
                Increase the new litter to roughly half the box. Your cat should be
                getting comfortable with the new texture by now.
              </Paragraph>
              <Paragraph>
                <strong>Pro tip:</strong> Mix the litters thoroughly rather than
                layering. This helps your cat experience both consistently.
              </Paragraph>
            </StepContent>
          </StepCard>

          <StepCard>
            <StepNumber>5</StepNumber>
            <StepTitle>Week 3: Almost There (75% New)</StepTitle>
            <StepContent>
              <Paragraph>
                The new litter should now dominate the box. Most cats are fully
                comfortable at this point, using the box without any hesitation.
              </Paragraph>
              <Paragraph>
                If your cat is still adjusting, stay at this ratio for an extra week
                before moving on.
              </Paragraph>
            </StepContent>
          </StepCard>

          <StepCard>
            <StepNumber>6</StepNumber>
            <StepTitle>Week 4: Complete the Switch (100% New)</StepTitle>
            <StepContent>
              <Paragraph>
                Fill the box entirely with the new eco-friendly litter. Congratulations—
                you've made the switch!
              </Paragraph>
              <Paragraph>
                Monitor for another week to ensure your cat remains comfortable. If any
                issues arise, you can always step back temporarily.
              </Paragraph>
            </StepContent>
          </StepCard>
        </Section>

        <WarningBox>
          <WarningTitle>Signs Your Cat Needs More Time</WarningTitle>
          <WarningText>
            If you notice any of these behaviors, slow down the transition:
            avoiding the litter box, going right next to the box instead of inside,
            excessive digging without using the box, meowing or seeming stressed
            around the box, or eliminating in unusual places. Step back to the
            previous ratio and give your cat more time before progressing.
          </WarningText>
        </WarningBox>

        <Section>
          <SectionTitle>Special Situations</SectionTitle>

          <Paragraph>
            <strong>Multi-cat households:</strong> Consider transitioning one litter
            box at a time while keeping at least one box with the old litter. This
            gives cats options and reduces stress. Once all cats are comfortable,
            transition the remaining boxes.
          </Paragraph>

          <Paragraph>
            <strong>Picky or anxious cats:</strong> Some cats need 6-8 weeks instead
            of 4. That's okay. The goal is a stress-free transition, not speed.
          </Paragraph>

          <Paragraph>
            <strong>Senior cats:</strong> Older cats may be more set in their ways.
            Consider eco-litters with textures closest to clay, like{' '}
            <Link href="/litter-types/corn">corn</Link> or{' '}
            <Link href="/litter-types/wheat">wheat</Link>.
          </Paragraph>

          <Paragraph>
            <strong>Kittens:</strong> Young kittens (under 4 months) actually transition
            easily—they're still forming preferences. Many breeders use eco-friendly
            litter from the start.
          </Paragraph>
        </Section>

        <TipBox>
          <TipTitle>Odor Control During Transition</TipTitle>
          <TipText>
            Mixing litters can sometimes create unexpected odor issues as the materials
            interact differently. If smell becomes a problem during transition, try
            adding{' '}
            <a href="https://purrify.ca/purr/products?utm_source=ecocatlitters" style={{ color: 'inherit', textDecoration: 'underline' }}>
              Purrify activated carbon
            </a>{' '}
            to neutralize odors naturally. It works with any litter type and makes
            the transition period much more pleasant.{' '}
            <a href="https://purrify.ca/purr/trial?utm_source=ecocatlitters" style={{ color: 'inherit', textDecoration: 'underline' }}>
              Try it risk-free
            </a>.
          </TipText>
        </TipBox>

        <Section>
          <SectionTitle>What If It Doesn't Work?</SectionTitle>
          <Paragraph>
            Some cats are extremely particular. If your cat absolutely refuses one
            type of eco-litter, try another. The textures vary significantly:
          </Paragraph>
          <List>
            <ListItem>
              <strong>If they rejected pellets:</strong> Try fine-grain options like
              corn, wheat, or grass
            </ListItem>
            <ListItem>
              <strong>If they disliked the scent:</strong> Try unscented paper or
              bamboo
            </ListItem>
            <ListItem>
              <strong>If texture was the issue:</strong> Grass litter has the highest
              acceptance rate for picky cats
            </ListItem>
          </List>
          <Paragraph>
            Don't give up after one try. With eight major types of eco-friendly litter,
            there's likely one that works for your cat.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>Explore Your Options</SectionTitle>
          <LitterLinks>
            <LitterLink href="/litter-types/bamboo">Bamboo</LitterLink>
            <LitterLink href="/litter-types/wood">Wood</LitterLink>
            <LitterLink href="/litter-types/corn">Corn</LitterLink>
            <LitterLink href="/litter-types/paper">Paper</LitterLink>
            <LitterLink href="/litter-types/walnut">Walnut</LitterLink>
            <LitterLink href="/litter-types/wheat">Wheat</LitterLink>
            <LitterLink href="/litter-types/grass">Grass</LitterLink>
            <LitterLink href="/litter-types/tofu">Tofu</LitterLink>
          </LitterLinks>
        </Section>
      </Article>
    </>
  );
}
