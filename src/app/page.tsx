import Link from "next/link";
import { getEntries } from "@/lib/content";

export default function HomePage() {
  const entries = getEntries();

  return (
    <main className="shell">
      <header className="site-header">
        <p className="eyebrow">Andrew Melbourne</p>
        <h1 className="site-title">Reading list</h1>
        <p className="site-intro">Writing I return to—ideas that changed how I build, work, and think.</p>
      </header>

      <ol className="entry-list">
        {entries.map((entry) => (
          <li className="entry-row" key={entry.slug}>
            <Link className="entry-link" href={`/${entry.slug}/`}>
              <span className="entry-order">{String(entry.order).padStart(2, "0")}</span>
              <span>
                <h2 className="entry-title">{entry.title}</h2>
                <p className="entry-author">{entry.author}</p>
              </span>
              <time className="entry-date" dateTime={entry.dateAdded}>
                {new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${entry.dateAdded}T00:00:00Z`))}
              </time>
            </Link>
          </li>
        ))}
      </ol>

      <footer className="site-footer">A personal archive, ordered by influence rather than recency.</footer>
    </main>
  );
}

