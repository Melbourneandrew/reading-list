# AGENTS.md — Reading List

This repository powers Andrew Melbourne's reading list at `reading.melbournedev.com`.

## Content

- Store one entry per directory under `content/`.
- Require `metadata.json` in every entry directory.
- Keep metadata valid against `src/lib/content.ts`.
- Each entry links directly to its canonical external source; do not archive or republish the source material.
- Use the description for Andrew's own note about how the item shaped how he builds, works, or thinks.

## Validation

Run `npm run verify` before publishing.

## Deployment

Deploy the exact merged `origin/main` commit to the VPS as a Next.js server managed by PM2 and reverse-proxied by nginx. Verify both the localhost process and public HTTPS result.


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
