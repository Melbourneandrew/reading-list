# AGENTS.md — Reading List

This repository powers Andrew Melbourne's static reading archive at `reading.melbourndev.com`.

## Content

- Store one entry per directory under `content/`.
- Require `metadata.json` and `content.md` in every entry directory.
- Keep metadata valid against `src/lib/content.ts`.
- Use Cloudflare Images delivery URLs for archived images; never commit source image binaries.
- Preserve source wording only when Andrew supplies the material or confirms republication rights. Always retain the canonical source URL.

## Validation

Run `npm run verify` before publishing. The build is a fully static export in `out/`.

## Deployment

Follow the local OpenClaw `reading-list` skill for editorial ingestion, Cloudflare Images, GitHub publication, and VPS deployment. The VPS procedure is modeled on and must preserve the guarantees of the `webgridplus-deploy` skill: deploy only an exact merged `origin/main` commit and verify the public HTTPS result.


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
