# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

MTCode is a personal tech blog built with Next.js App Router. Content is authored as MDX files and the entire site is statically generated. UI is zh-Hant (Traditional Chinese).

## Commands

Package manager is **pnpm** (see `pnpm-lock.yaml` / `pnpm-workspace.yaml`); Node 24 (`.nvmrc`). The `scripts` in `package.json` say `npm` but use `pnpm`.

```bash
pnpm dev              # Next dev server at http://localhost:3000
pnpm build            # Production build (also the only way to surface content/date errors — see below)
pnpm lint             # ESLint (flat config)
pnpm lint:fix         # ESLint --fix
pnpm format           # Prettier --write on ts/tsx
pnpm format:check     # Prettier --check
pnpm storybook:dev    # Storybook at :6006 (component workshop)
pnpm storybook:build  # Static Storybook
```

There is no test runner configured. Storybook stories (`designSystem/components/**/*.stories.tsx`) are the primary way to exercise components in isolation.

## Architecture

**Content-driven static site.** Posts live as MDX in `content/posts/*.mdx`. `lib/posts.ts` is the single source of truth for reading them — it uses Node `fs` at build time (gray-matter for frontmatter), so it only runs in Server Components / build, never the client. Pages are fully static: every route uses `generateStaticParams` + `export const dynamicParams = false`, so a slug or page number that isn't pre-generated 404s rather than rendering on demand.

**The date contract is load-bearing.** Frontmatter `date` must be ISO `YYYY-MM-DD`; `toMeta()` in `lib/posts.ts` throws at build if not. Posts are sorted reverse-chronologically by **string comparison** of that field — a dotted or non-padded date silently corrupts ordering, hero selection, pagination, and prev/next. Keep the ISO format.

**Post visibility.** `getAllPosts()` filters out `published: false` and sorts; most code should use it. `getPostBySlug()` deliberately does **not** filter on `published` — callers must guard drafts themselves (e.g. `app/articles/[slug]/page.tsx` checks `!post.published` and calls `notFound()`).

**Routing / pagination.** `POSTS_PER_PAGE = 10`. Page 1 of the article list is `/articles`; pages 2..N are `/articles/page/[page]` (page 1 is intentionally excluded from `generateStaticParams` there). Both render the shared `ArticlesView`. Individual posts are `/articles/[slug]`, rendered with `next-mdx-remote/rsc` (`<MDXRemote>`) using the element overrides from `getMdxComponents()`.

**Design system (`designSystem/`).** This is the component layer, aliased as `@/designSystem/components`. `designSystem/components/ui/*` are shadcn/Radix primitives (button, card, badge, separator); higher-level components (article-card, site-nav, pager, etc.) live in their own folders, each with an `index.ts` barrel and often a `.stories.tsx`. `components.json` configures shadcn (style `radix-maia`, base color `olive`, RSC on) — use it when adding shadcn components.

**Path alias.** `@/*` maps to repo root (`tsconfig.json`). Import as `@/lib/...`, `@/designSystem/components/...`.

## Styling & tokens

- **Tailwind v4, CSS-first.** There is no `tailwind.config`. Theme, `@theme inline` token mappings, and the shadcn semantic CSS variables all live in `app/globals.css` (imports `tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css`). Colors are OKLCH.
- Use semantic token classes (`bg-primary`, `text-muted-foreground`, `bg-card`, `border`) rather than raw palette colors so light/dark and theming stay consistent. `cn()` in `lib/utils.ts` (clsx + tailwind-merge) is the class-merge helper.
- `DESIGN.md` is a design **reference document** (describes a "Hahow" teal brand) — it is not auto-applied. The actual runtime tokens are whatever is in `app/globals.css` / `components.json`; treat that as the source of truth and don't assume DESIGN.md values are live.

## Conventions

- **React Compiler is enabled** (`next.config.ts: reactCompiler: true` + `babel-plugin-react-compiler`). Don't hand-add `useMemo`/`useCallback`/`memo` for performance; let the compiler handle it. Follow the Rules of React so the compiler can optimize.
- `pageExtensions` includes `mdx`, so `.mdx` files under `app/` would also be routable.
- **Prettier owns formatting** — `eslint-config-prettier` is last in the ESLint chain to disable conflicting rules. `prettier-plugin-tailwindcss` auto-sorts class names. Don't fight class ordering by hand. VS Code is configured for format-on-save + ESLint autofix (`.vscode/settings.json`).
- `lib/site-data.ts` holds static non-MDX page content (slides, profile, award timeline) as typed exports — edit data there, not in JSX.
