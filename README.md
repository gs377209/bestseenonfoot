# Best Seen On Foot

[![CodeQL](https://github.com/gs377209/bestseenonfoot/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/gs377209/bestseenonfoot/actions/workflows/github-code-scanning/codeql)
[![Cypress Tests](https://github.com/gs377209/bestseenonfoot/actions/workflows/cypress.yml/badge.svg)](https://github.com/gs377209/bestseenonfoot/actions/workflows/cypress.yml)
[![Dependency Review](https://github.com/gs377209/bestseenonfoot/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/gs377209/bestseenonfoot/actions/workflows/dependency-review.yml)
[![Greetings](https://github.com/gs377209/bestseenonfoot/actions/workflows/greetings.yml/badge.svg)](https://github.com/gs377209/bestseenonfoot/actions/workflows/greetings.yml)
[![Manual workflow](https://github.com/gs377209/bestseenonfoot/actions/workflows/manual.yml/badge.svg)](https://github.com/gs377209/bestseenonfoot/actions/workflows/manual.yml)
[![Mark stale issues and pull requests](https://github.com/gs377209/bestseenonfoot/actions/workflows/stale.yml/badge.svg)](https://github.com/gs377209/bestseenonfoot/actions/workflows/stale.yml)
[![Node.js CI](https://github.com/gs377209/bestseenonfoot/actions/workflows/node.js.yml/badge.svg)](https://github.com/gs377209/bestseenonfoot/actions/workflows/node.js.yml)
[![OSSAR](https://github.com/gs377209/bestseenonfoot/actions/workflows/ossar.yml/badge.svg)](https://github.com/gs377209/bestseenonfoot/actions/workflows/ossar.yml)
[![Playwright Tests](https://github.com/gs377209/bestseenonfoot/actions/workflows/playwright.yml/badge.svg)](https://github.com/gs377209/bestseenonfoot/actions/workflows/playwright.yml)
[![Pull Request Labeler](https://github.com/gs377209/bestseenonfoot/actions/workflows/labeler.yml/badge.svg)](https://github.com/gs377209/bestseenonfoot/actions/workflows/labeler.yml)

Travel Blog

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- Make sure to setup [git-lfs](https://git-lfs.com/) before cloning
- Switch to correct node version
- Install dependencies
- Pull the latest `env` variables from vercel
- Run the development server

```shell
# Install git-lfs using whatever tool makes sense for your OS
brew install git-lfs
git lfs install
nvm use
npm i
npx vercel env pull
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `src/app/api/hello.ts`.

The `src/app/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## A statically generated blog example using Next.js, Markdown, and TypeScript

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) feature using Markdown files as the data source.

The blog posts are stored in `src/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

### Demo

[https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)

### Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter&project-name=blog-starter&repository-name=blog-starter)

#### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)
- [Umbraco Heartcore](/examples/cms-umbraco-heartcore)
- [Builder.io](/examples/cms-builder-io)
- [TinaCMS](/examples/cms-tina/)
- [Enterspeed](/examples/cms-enterspeed)

### How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```shell
npx create-next-app --example blog-starter blog-starter-app
```

```shell
yarn create next-app --example blog-starter blog-starter-app
```

```shell
pnpm create next-app --example blog-starter blog-starter-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
