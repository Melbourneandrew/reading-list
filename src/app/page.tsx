import { getEntries } from "@/lib/content";

const socials = [
  { label: "Github", href: "https://github.com/Melbourneandrew", path: "M15 3C8.373 3 3 8.373 3 15c0 5.623 3.872 10.328 9.092 11.63-.056-.162-.092-.35-.092-.583v-2.051h-1.508c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.289-.227-.069-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.081-.025 1.691-.121.328-.833.895-1.6 1.588-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233C9.053 10.647 8.706 8.73 9.435 8c1.798 0 2.885 1.166 3.146 1.481A9.1 9.1 0 0 1 15.495 9c1.036 0 2.024.174 2.922.483C18.675 9.17 19.763 8 21.565 8c.732.731.381 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097C18.199 20.49 19 22.1 19 23.313v2.734c0 .104-.023.179-.035.268C23.641 24.676 27 20.236 27 15 27 8.373 21.627 3 15 3z", viewBox: "0 0 30 30" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/melbourneandrew/", path: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM9 17H6.477v-7H9v7ZM7.694 8.717c-.771 0-1.286-.514-1.286-1.2s.514-1.2 1.371-1.2c.771 0 1.286.514 1.286 1.2s-.514 1.2-1.371 1.2ZM18 17h-2.442v-3.826c0-1.058-.651-1.302-.895-1.302s-1.058.163-1.058 1.302V17h-2.523v-7h2.523v.977C13.93 10.407 14.581 10 15.802 10S18 10.977 18 13.174V17Z", viewBox: "0 0 24 24" },
  { label: "Twitter", href: "https://x.com/melbourneandrew", path: "M2.367 3 9.463 13.141 2.74 21h2.641l5.264-6.17L14.961 21h6.91L14.45 10.375 20.74 3h-2.6l-4.869 5.688L9.299 3H2.367Zm3.84 2h2.049l9.777 14h-2.031L6.207 5Z", viewBox: "0 0 24 24" },
  { label: "Blog", href: "https://blog.melbournedev.com", path: "M12 6a2.4 2.4 0 0 0-2.4-2.4H4.8A2.4 2.4 0 0 0 2.4 6v12A2.4 2.4 0 0 0 4.8 20.4h4.8A2.4 2.4 0 0 1 12 22.8V6Zm0 0a2.4 2.4 0 0 1 2.4-2.4h4.8A2.4 2.4 0 0 1 21.6 6v12a2.4 2.4 0 0 1-2.4 2.4h-4.8a2.4 2.4 0 0 0-2.4 2.4V6Z", viewBox: "0 0 24 24" },
  { label: "Portfolio", href: "https://melbournedev.com", path: "M18.685 19.097A9.723 9.723 0 0 0 21.75 12a9.75 9.75 0 1 0-16.435 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z", viewBox: "0 0 24 24" },
];

export default function HomePage() {
  const entries = getEntries();

  return (
    <main className="shell">
      <header className="site-header">
        <h1 className="site-title">Andrew Melbourne&apos;s Reading List</h1>
        <p className="site-subtitle">Writing that shaped how I build, work, and think.</p>
        <nav className="social-links" aria-label="Andrew Melbourne online">
          {socials.map((social) => (
            <a className="social-link" href={social.href} key={social.label} rel="noopener noreferrer" target="_blank">
              <svg aria-hidden="true" viewBox={social.viewBox}><path d={social.path} /></svg>
              {social.label}
            </a>
          ))}
        </nav>
      </header>

      <ol className="entry-list">
        {entries.map((entry) => (
          <li className="entry-row" key={entry.slug}>
            <a className="entry-link" href={entry.sourceUrl} rel="noopener noreferrer" target="_blank">
              <div className="entry-heading">
                <h2 className="entry-title">{entry.title}</h2>
                <time className="entry-date" dateTime={entry.dateAdded}>
                  {new Intl.DateTimeFormat("en-US", { month: "numeric", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${entry.dateAdded}T00:00:00Z`))}
                </time>
              </div>
              <p className="entry-description">{entry.description}</p>
            </a>
          </li>
        ))}
      </ol>

      <footer className="site-footer">Writing that shaped how I build, work, and think.</footer>
    </main>
  );
}
