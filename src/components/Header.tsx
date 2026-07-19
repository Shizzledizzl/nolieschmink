"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/data/siteContent";

function homeHref(hash: string) {
  return hash.startsWith("#") ? `/${hash}` : hash;
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const resolveHref = (href: string) => (isHome ? href : homeHref(href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? "bg-cream/95 shadow-md shadow-purple-soft/10 backdrop-blur-md"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href={isHome ? "#top" : "/"}
          className="font-display text-lg font-semibold text-purple-deep transition-colors hover:text-rose sm:text-xl"
        >
          {siteContent.business.name}
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hoofdnavigatie">
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-lavender/30 hover:text-purple-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={resolveHref("#contact")}
            className="hidden rounded-full bg-purple-soft px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-soft/25 transition-all hover:bg-purple-deep hover:shadow-lg sm:inline-flex"
          >
            {siteContent.nav.cta}
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2.5 text-purple-deep transition-colors hover:bg-lavender/40 lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
          </button>
        </div>
      </div>

      {/* Mobiel menu */}
      <div
        id={menuId}
        className={`border-t border-lavender/40 bg-cream lg:hidden ${
          open ? "block" : "hidden"
        }`}
        hidden={!open}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
          aria-label="Mobiele navigatie"
        >
          {siteContent.nav.links.map((link, i) => (
            <a
              key={link.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={resolveHref(link.href)}
              onClick={close}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-lavender/30"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resolveHref("#contact")}
            onClick={close}
            className="mt-2 rounded-full bg-purple-soft px-4 py-3 text-center text-base font-semibold text-white shadow-md"
          >
            {siteContent.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}
