import fs from "node:fs";
import path from "node:path";
import { z } from "zod";

const contentRoot = path.join(process.cwd(), "content");

const metadataSchema = z.object({
  title: z.string().min(1),
  author: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  sourceUrl: z.string().url(),
  dateAdded: z.iso.date(),
  order: z.number().int(),
  description: z.string().min(1),
  publishedAt: z.iso.date().optional(),
});

export type EntryMetadata = z.infer<typeof metadataSchema>;
export type Entry = EntryMetadata;

function readEntry(directoryName: string): Entry {
  const directory = path.join(contentRoot, directoryName);
  const metadata = metadataSchema.parse(
    JSON.parse(fs.readFileSync(path.join(directory, "metadata.json"), "utf8")),
  );
  if (metadata.slug !== directoryName) {
    throw new Error(`Entry directory ${directoryName} must match slug ${metadata.slug}`);
  }

  return metadata;
}

export function getEntries(): Entry[] {
  return fs
    .readdirSync(contentRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => readEntry(entry.name))
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}

