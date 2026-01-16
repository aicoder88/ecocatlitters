# CLAUDE.md - EcoCatLitters

## Project Overview

**EcoCatLitters** is Satellite Site #3 for Purrify (purrify.ca), an eco-warrior-themed marketing site promoting environmentally friendly cat litter alternatives.

- **URL**: ecocatlitters.com
- **Purpose**: SEO satellite site driving traffic to Purrify products
- **Personality**: The Eco-Warrior (activist, bold, editorial aesthetic)

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.5.9 | React framework with App Router |
| React | 19.0.0 | UI library |
| TypeScript | 5.x | Type safety (strict mode) |
| styled-components | 6.1.13 | CSS-in-JS styling |
| Space Grotesk | - | Heading font |
| IBM Plex Sans | - | Body font |
| next-sitemap | 4.2.3 | Sitemap generation |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── blog/               # Blog content (4 articles)
│   ├── litter-types/       # 8 litter type pages (bamboo, corn, etc.)
│   ├── certifications/     # Eco-certification guide
│   ├── solutions/          # Eco-friendly solutions
│   ├── switching-guide/    # Litter switching guide
│   ├── take-action/        # Call-to-action page
│   └── the-problem/        # Environmental crisis page
├── components/
│   ├── layout/             # Header, Footer
│   ├── home/               # Homepage sections
│   ├── ui/                 # Reusable UI components
│   ├── comparison/         # Litter comparison table
│   ├── faq/                # FAQ accordion
│   └── seo/                # JSON-LD schema components
├── lib/                    # Utilities (registry, ThemeProvider)
└── styles/                 # Theme, GlobalStyles
public/
├── images/                 # Static images (hero, litter types)
├── sitemap.xml             # Auto-generated
└── robots.txt              # SEO config
```

## Development Commands

```bash
pnpm install       # Install dependencies
pnpm dev           # Start dev server (http://localhost:3000)
pnpm build         # Production build (also generates sitemap)
pnpm start         # Start production server
pnpm lint          # Run ESLint
```

## Key Patterns & Conventions

### Styled Components

Use transient props ($ prefix) to prevent props from reaching the DOM:

```tsx
const StyledButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  background: ${({ $variant, theme }) =>
    $variant === 'primary' ? theme.colors.accent.sunrise : 'transparent'};
`;
```

### Theme Access

Access theme values via the styled-components theme prop:

```tsx
const Card = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.neutral.charcoal};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;
```

### Path Aliases

Use `@/` for imports from src directory:

```tsx
import { ActionButton } from '@/components/ui/ActionButton';
import { theme } from '@/styles/theme';
```

### Purrify Links

All links to Purrify must include UTM tracking:

```tsx
const purrifyUrl = `https://purrify.ca/products?utm_source=ecocatlitters&utm_medium=${pageName}`;
```

### SEO Components

Use schema components for structured data:

```tsx
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';

// In page component
<ArticleSchema
  title="Article Title"
  description="Article description"
  datePublished="2024-01-15"
/>
```

## Design System Reference

### Colors

```typescript
// Primary (Green palette)
colors.primary.forest     // #1B4332 - Dark green
colors.primary.leaf       // #2D6A4F - Medium green
colors.primary.sage       // #52B788 - Light green
colors.primary.pale       // #B7E4C7 - Very light green

// Accent
colors.accent.sunrise     // #FF6B35 - Orange (CTAs)
colors.accent.golden      // #F7B538 - Yellow

// Semantic
colors.semantic.crisis    // #DC2626 - Red (warnings)
colors.semantic.success   // #10B981 - Green (positive)
```

### Typography

```typescript
// Font families
fonts.heading   // 'Space Grotesk', sans-serif
fonts.body      // 'IBM Plex Sans', sans-serif

// Font sizes (rem)
fontSize.xs     // 0.75rem
fontSize.sm     // 0.875rem
fontSize.base   // 1rem
fontSize.lg     // 1.125rem
fontSize.xl     // 1.25rem
fontSize['2xl'] // 1.5rem
fontSize['3xl'] // 1.875rem
fontSize['4xl'] // 2.25rem
```

### Spacing

```typescript
spacing.xs   // 0.25rem (4px)
spacing.sm   // 0.5rem (8px)
spacing.md   // 1rem (16px)
spacing.lg   // 1.5rem (24px)
spacing.xl   // 2rem (32px)
spacing['2xl'] // 3rem (48px)
spacing['3xl'] // 4rem (64px)
```

### Breakpoints

```typescript
breakpoints.sm  // 640px
breakpoints.md  // 768px
breakpoints.lg  // 1024px
breakpoints.xl  // 1280px
```

## Content Guidelines

### Tone
- Activist and urgent (environmental crisis framing)
- Educational but not preachy
- Action-oriented with clear CTAs

### Purrify Integration
- 3-6 contextual links per page to purrify.ca
- Links should feel natural, not forced
- Always include UTM parameters

### SEO
- Every page needs unique meta title/description
- Use structured data (JSON-LD) for articles, FAQs, how-tos
- Images need descriptive alt text

## Common Tasks

### Adding a New Blog Post

1. Create folder: `src/app/blog/[slug]/`
2. Add `page.tsx` with metadata export
3. Include `ArticleSchema` component
4. Add internal links to relevant litter-type pages
5. Include 3-6 Purrify links with UTM tracking

### Adding a New Litter Type Page

1. Create folder: `src/app/litter-types/[type]/`
2. Follow existing page structure (bamboo, corn, etc.)
3. Add image to `public/images/litters/`
4. Update `LitterComparisonTable` if needed

### Updating the Sitemap

Sitemap auto-generates on build via `npm run build`. Config in `next-sitemap.config.js`.

## Troubleshooting

### Styled-components SSR Issues
Ensure `lib/registry.tsx` is properly wrapping the app in `layout.tsx`.

### Type Errors with Theme
Check that `styled.d.ts` properly extends DefaultTheme with the theme type.

### Build Failures
Run `pnpm lint` first to catch ESLint issues before building.

---

## Deployment

### Vercel Deployment

Next.js 15 is optimized for Vercel with zero-configuration deployment:

1. **Push to GitHub:** Changes trigger automatic deployment
2. **Build command:** `pnpm build` (auto-detected)
3. **Output:** Optimized static and serverless functions
4. **Framework preset:** Next.js (auto-detected)

### Deployment Architecture

- **Static pages:** Pre-rendered at build time, served from Vercel's Edge Network
- **API routes:** Deployed as serverless functions (if any)
- **Styled-components SSR:** Server-side rendering configured via registry
- **Image optimization:** Automatic via Next.js Image component
- **Sitemap:** Generated post-build via next-sitemap

### Configuration Files

- `next.config.mjs` - Next.js configuration
- `next-sitemap.config.js` - Sitemap generation settings
- `.gitignore` - Excludes `.vercel/` build artifacts

Site URL: https://ecocatlitters.com

---

## Spec-Driven Development

For non-trivial features, follow the spec-driven protocol. See `/Users/macmini/dev/spec-driven-protocol.md` for the complete reference.

### Quick Reference

| Command | Action |
|---------|--------|
| `create spec for [idea]` | Start Phase 1: Requirements |
| `approve` | Advance to next phase |
| `refine [feedback]` | Iterate on current phase |
| `execute task [N]` | Implement specific task |

Store specs in `.specs/[feature-name]/` with:
- `requirements.md` - User stories + acceptance criteria (EARS notation)
- `design.md` - Architecture and components
- `tasks.md` - Implementation tasks with dependencies
