"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { content } from "@/content/profile";
import { ArrowUpRight, CloseIcon, MenuIcon } from "@/components/icons";

const navigation = content["pt-BR"].navigation;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, { rootMargin: "-12% 0px -60% 0px", threshold: 0 });
    const sections = document.querySelectorAll("main > section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); menuButton.current?.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner shell">
          <Link className="brand" href="/" aria-label="Logan Mendes Contardi, início" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">L<span>/</span>M</span>
            <span className="brand-name">LOGAN<br />CONTARDI</span>
          </Link>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {navigation.map((item) => <Link key={item.href} href={item.href} data-active={pathname.startsWith("/projetos") ? item.href === "/#projetos" : item.href === `/#${activeSection}`} aria-current={(pathname.startsWith("/projetos") ? item.href === "/#projetos" : item.href === `/#${activeSection}`) ? "location" : undefined}>{item.label}</Link>)}
          </nav>
          <Link className="header-contact" href="/#contato">Contato <ArrowUpRight /></Link>
          <button ref={menuButton} className="menu-trigger" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <motion.div className="scroll-progress" style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }} aria-hidden="true" />
      </header>
      <AnimatePresence>
        {open ? <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Navegação móvel" initial={reduceMotion ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }} transition={{ duration: 0.22 }}>
          {navigation.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowUpRight /></Link>)}
          <Link href="/#contato" onClick={() => setOpen(false)}><span>05</span>Contato<ArrowUpRight /></Link>
        </motion.nav> : null}
      </AnimatePresence>
    </>
  );
}
