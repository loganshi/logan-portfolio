import type { Metadata, Viewport } from "next";
import "@fontsource-variable/space-grotesk/wght.css";
import "@fontsource-variable/dm-sans/wght.css";
import "./globals.css";
import "./lab.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/content/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${profile.name} — Software Developer`, template: `%s | ${profile.name}` },
  description: "Portfólio de Logan Mendes Contardi, desenvolvedor full-stack com mais de 6 anos de experiência em soluções web, integrações e performance.",
  applicationName: "Logan Mendes Contardi — Portfólio",
  keywords: ["Logan Mendes Contardi", "Software Developer", "Full-Stack Developer", "React", "Next.js", "PHP", "WordPress", "Web Development"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: profile.name,
    title: `${profile.name} — Software Developer`,
    description: "Soluções web com intenção. Desenvolvimento full-stack, integrações e performance.",
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `Portfólio de ${profile.name}` }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#0B0B0D", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body id="top"><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
