import Link from "next/link";
import { profile } from "@/content/profile";
import { ArrowUpRight } from "@/components/icons";

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-inner"><Link href="/" className="footer-brand">LM<span>/</span></Link><p>© {new Date().getFullYear()} {profile.name}</p><Link href="#top" className="back-to-top">Voltar ao topo <ArrowUpRight /></Link></div></footer>;
}
