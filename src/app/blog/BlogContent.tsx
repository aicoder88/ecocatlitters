'use client';

import styled from 'styled-components';
import Link from 'next/link';

const Main = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(Link)`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.forestGreen};
  }
`;

const CardCategory = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.forestGreen};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
`;

const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.charcoal};
  margin: ${({ theme }) => theme.spacing.sm} 0;
  line-height: 1.3;
`;

const CardExcerpt = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
`;

const ReadMore = styled.span`
  color: ${({ theme }) => theme.colors.forestGreen};
  font-weight: 600;
`;

const blogPosts = [
  {
    slug: 'how-to-switch-cat-to-eco-friendly-litter',
    category: 'Guides',
    title: 'How to Switch Your Cat to Eco-Friendly Litter (Step-by-Step Guide)',
    excerpt: 'A complete guide to transitioning your cat from clay to natural litter without stress or litter box rejection.',
    date: 'December 28, 2024',
    readTime: '8 min read',
  },
  {
    slug: 'best-cat-litter-for-apartments',
    category: 'Guides',
    title: 'Best Cat Litter for Apartments: Odor Control in Small Spaces',
    excerpt: 'Living in an apartment with cats? Discover which eco-friendly litters offer the best odor control for close-quarters living.',
    date: 'December 26, 2024',
    readTime: '6 min read',
  },
  {
    slug: 'eco-friendly-litter-safe-for-kittens',
    category: 'Safety',
    title: 'Is Eco-Friendly Cat Litter Safe for Kittens?',
    excerpt: 'What you need to know about natural litter safety for kittens, including which types are safest and which to avoid.',
    date: 'December 24, 2024',
    readTime: '5 min read',
  },
  {
    slug: 'cat-litter-odor-control-tips',
    category: 'Tips',
    title: 'Cat Litter Smell Solutions That Actually Work',
    excerpt: 'Struggling with litter box odors? Science-backed solutions and product recommendations for a fresher home.',
    date: 'December 22, 2024',
    readTime: '7 min read',
  },
];

export default function BlogContent() {
  return (
    <Main>
      <Header>
        <Title>Eco Cat Litter Blog</Title>
        <Subtitle>
          Expert guides, tips, and advice to help you choose and use eco-friendly cat litter effectively.
        </Subtitle>
      </Header>

      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} href={`/blog/${post.slug}`}>
            <CardCategory>{post.category}</CardCategory>
            <CardTitle>{post.title}</CardTitle>
            <CardExcerpt>{post.excerpt}</CardExcerpt>
            <CardMeta>
              <span>{post.date} · {post.readTime}</span>
              <ReadMore>Read more →</ReadMore>
            </CardMeta>
          </BlogCard>
        ))}
      </BlogGrid>
    </Main>
  );
}
