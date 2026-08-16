import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell article-header">
      <p className="eyebrow">404</p>
      <h1 className="article-title">Not on the list.</h1>
      <Link href="/">Return to the reading list</Link>
    </main>
  );
}

