import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/400-italic.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reading.melbournedev.com"),
  title: {
    default: "Reading List — Andrew Melbourne",
    template: "%s — Andrew Melbourne's Reading List",
  },
  description: "Writing that shaped how Andrew Melbourne thinks and works.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
