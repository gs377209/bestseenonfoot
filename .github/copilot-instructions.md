# AI Coding Agent Instructions for bestseenonfoot

## Project Overview

This is a **travel blog application** built with Next.js 15, TypeScript, and React 19. It's a static-generated blog with dynamic routes, Vercel Postgres integration for contact form submissions, and comprehensive testing (Jest, Vitest, Playwright, Cypress).

## Architecture

### Core Stack

- **Framework**: Next.js 15 (App Router) with Turbopack in dev
- **Runtime**: React 19 with Server Components
- **Database**: Vercel Postgres with Kysely type-safe query builder
- **Styling**: Tailwind CSS with PostCSS
- **Testing**: Jest (Jest DOM), Vitest, Playwright (e2e), Cypress (e2e + component)

### Key Directory Structure

```sh
src/
├── app/                      # Next.js App Router (layouts, pages, routes)
│   ├── posts/[slug]/         # Dynamic blog post pages (SSG)
│   ├── api/                  # API routes (none currently)
│   └── layout.tsx            # Root layout with metadata, scripts
├── _posts/                   # Markdown blog posts (source of truth)
├── components/               # React components (35+ reusable)
├── lib/
│   ├── api.ts               # Post parsing & RSS generation (gray-matter, remark)
│   ├── actions.ts           # Server actions (Zod validation, contact form)
│   ├── constants.ts         # Public env vars (BASE_URL, analytics IDs)
│   └── cookies.ts           # Consent tracking
├── database/
│   ├── database.ts          # Kysely instance
│   ├── types.ts             # Database schema (contact_submission table)
│   └── ContactSubmissionRepository.ts # CRUD operations
├── interfaces/               # TypeScript interfaces (Post, Author, Location)
├── __tests__/               # Jest tests
└── __vitests__/             # Vitest tests
```

### Data Flow Patterns

1. **Blog Posts**: Markdown files (`src/_posts/*.md`) → gray-matter parsing → static generation → SSG routes
2. **Contact Form**: Form submission → Server Action (`sendContactRequest`) → Zod validation → Kysely insert → Database
3. **Metadata/SEO**: Per-post metadata in YAML frontmatter → generateMetadata() → OpenGraph tags

## Critical Developer Workflows

### Development

- **Start dev server**: `npm run dev` (uses Turbopack + experimental HTTPS)
- **Type checking**: `npm run typecheck` (includes special tsconfig for `__tests__` and `__vitests__`)
- **Linting**: `npm run lint --max-warnings 0` (Next.js recommended rules, Cypress, Storybook, Prettier)

### Testing (Run all before commits via preversion hook)

- **Unit tests**: `npm run test:ci` (Jest, jsdom environment) or `npm run test` (watch mode)
- **Vitest**: `npm run test:vitest:ci` (separate fast tests)
- **Component tests**: `npm run component:headless` (Cypress)
- **E2E tests**: `npm run e2e:playwright` or `npm run e2e:headless` (Cypress)
- **All quality gates**: `npm run preversion` (runs prettier, typecheck, lint, mdlint, tests, build)

### Building & Deployment

- **Build**: `npm run build` (static export for Next.js)
- **Start**: `npm run start` (preview production build)
- **Storybook**: `npm run storybook` (stories from `src/storybook/`)
- **Markdown linting**: `npm run mdlintfix`

## Project-Specific Conventions

### Post Structure (Markdown Frontmatter)

Posts must have YAML frontmatter with:

```yaml
title: "Post Title"
excerpt: "Summary text"
coverImage: "/assets/blog/slug/image.jpg"
date: "2024-01-01T00:00:00.000Z"
author:
  name: "Author Name"
  picture: "/assets/authors/name.jpg"
  url: "author-slug"
ogImage:
  url: "/assets/blog/slug/image.jpg"
location:
  url: "region/country"
  name: "Country"
tags: [tag1, tag2]
```

Slugs are derived from filename (without .md). Files in `src/_posts/` are auto-discovered.

### Server Actions Pattern

- All async form handling uses `"use server"` directive
- Validation via **Zod schemas** (see `src/lib/actions.ts`)
- Returns typed response objects (e.g., `ContactFormState`)
- Include anti-spam honeypot field: `address` field must be blank (max length 0)

### Database Operations (Kysely)

- Type-safe queries via `src/database/types.ts` schema
- Repository pattern in `ContactSubmissionRepository.ts`
- Immutable query building (re-assign after `.where()`, `.set()`)
- All queries are async functions with `"use server"` directive

### Component Organization

- 35+ components in `src/components/` (no subdirectories)
- Naming: PascalCase for components, kebab-case for files (e.g., `HeroPost.tsx`)
- Common patterns:
  - `_next/image` for optimized images (sharp integration)
  - FontAwesome SVG icons (auto CSS disabled in root layout)
  - Classnames utility for conditional styling
  - React Markdown for content rendering

### Styling

- Tailwind CSS with PostCSS
- Custom globals in `src/styles/globals.css`
- Theme color: `#34D399` (emerald)
- Responsive design via Tailwind breakpoints

### Metadata & SEO

- Root metadata in `src/app/layout.tsx` (global)
- Per-route metadata via `generateMetadata()` (e.g., post pages)
- OpenGraph image URLs must use `BASE_URL` constant
- Canonical URLs auto-set from `metadataBase`

### Environment Variables

All public vars prefixed `NEXT_PUBLIC_`:

- `NEXT_PUBLIC_SITE_URL` (fallback: localhost:3000)
- `NEXT_PUBLIC_SITE_LOGO`
- `NEXT_PUBLIC_GOOGLE_ADS_ID`, `GOOGLE_TAG_MANAGER_ID`, `GOOGLE_OPTIMIZE_ID`
- `NEXT_PUBLIC_FACEBOOK_APP_ID`, `FACEBOOK_PIXEL_ID`
- Pull Vercel env: `npx vercel env pull`

### Static Generation (SSG)

- `dynamicParams: false` in post routes (only pre-built slugs)
- `generateStaticParams()` returns all valid route params
- `revalidatePath()` in server actions for ISR

## Testing Patterns

### Jest + React Testing Library

- Test files: `src/__tests__/**/*.test.tsx`
- Setup: `jest.setup.ts` (configures DOM API mocks)
- Config maps `@/components/*` to `src/components/`

### Vitest

- Test files: `src/__vitests__/**/*.test.tsx`
- Separate tsconfig at `src/__vitests__/tsconfig.json`
- jsdom environment for component testing

### Playwright

- Config at `playwright.config.ts` (timeout: 60s, multi-browser)
- Global setup: `global-setup.ts`
- Runs against built app (via `playwright install --with-deps`)
- Output to `test-results/`

### Cypress

- E2E and component tests
- Recommended plugin in ESLint config
- Open GUI: `npm run component`, headless: `npm run component:headless`

## Integration Points & Dependencies

### External Services

- **Vercel Postgres**: Connection via `@vercel/postgres-kysely`
- **Vercel Analytics & Speed Insights**: Imported in root layout
- **Facebook Pixel & GTM**: Loaded via Next.js `<Script>` component
- **Google Ads**: Via `next/third-parties`
- **RSS Feed**: Generated in `src/lib/api.ts` using `feed` package

### Critical Dependencies

- `gray-matter`: YAML frontmatter parsing
- `remark` + `remark-html`: Markdown → HTML conversion
- `zod`: Schema validation (contact form)
- `date-fns`: Date manipulation
- `fuse.js`: Client-side search
- `@fortawesome/*`: Icon library (35MB, CSS disabled in code)
- `react-markdown`: Rendered markdown content

### Package Manager

- **Engine**: Node.js 18.12.0+ (strict validation via `engineStrict`)
- **npm**: 9.0.0+
- **Git LFS**: Required before cloning (for image assets)

## Common Pitfalls & Patterns

1. **Post slug generation**: Derived from filename, not frontmatter title
2. **Validation**: Always use Zod for server action inputs
3. **Image paths**: Use `/assets/**` for local images (configured in `next.config.ts`)
4. **Type safety**: Check `src/interfaces/` before creating new models
5. **Metadata URLs**: Always use `BASE_URL` + path, never hardcode domains
6. **Kysely queries**: Immutable—reassign query after each clause
7. **RSS generation**: Escapes HTML in feed content (`escape-html` package)
8. **Component naming**: Use kebab-case filenames even for PascalCase exports

## Code Quality Standards

- **Linting**: ESLint (flat config) + Prettier (check before commit)
- **Max warnings**: 0 in lint (strict enforcement)
- **Type checking**: Required in preversion hook
- **Markdown linting**: markdownlint-cli2 with fix script
- **Pre-commit hook**: Husky (runs `npm run prepare`)
- **Versioning**: npm version triggers full quality pipeline
