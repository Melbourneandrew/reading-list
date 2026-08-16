import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getEntries, getEntry } from "@/lib/content";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getEntries().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const entry = getEntry((await params).slug);
  return entry ? { title: entry.title, description: entry.description } : {};
}

export default async function EntryPage({ params }: PageProps) {
  const entry = getEntry((await params).slug);
  if (!entry) notFound();

  return (
    <main className="shell">
      <header className="article-header">
        <Link className="back-link" href="/">← Reading list</Link>
        <h1 className="article-title">{entry.title}</h1>
        <p className="article-byline">{entry.author}{entry.publishedAt ? ` · ${entry.publishedAt}` : ""}</p>
        <a className="source-link" href={entry.sourceUrl} rel="noreferrer" target="_blank">Read the original ↗</a>
      </header>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.content}</ReactMarkdown>
      </article>
    </main>
  );
}

