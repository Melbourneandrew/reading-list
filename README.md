# Reading List

Andrew Melbourne's static archive of influential writing.

## Local development

```bash
npm install
npm run dev
```

## Content shape

Each directory under `content/` contains:

- `metadata.json` — title, author, slug, canonical source, date added, display order, description, and optional publication date
- `content.md` — Markdown rendered at `/<slug>/`

Run `npm run verify` before publishing. `npm run build` writes the static site to `out/`.

