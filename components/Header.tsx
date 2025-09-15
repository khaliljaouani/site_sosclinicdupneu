"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="logo" className="h-8 w-8" />
          <span className="font-semibold">SOS Clinic Du Pneu</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <Link href="/#services">Services</Link>
          <Link href="/#etapes">Comment ça marche</Link>
          <Link href="/zone-intervention">Zone d’intervention</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/nous-contacter" className="rounded bg-black px-4 py-2 text-white">Demander un dépannage</Link>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="border-t bg-white p-4 md:hidden">
          <div className="grid gap-3">
            <a href="/#services">Services</a>
            <a href="/#etapes">Comment ça marche</a>
            <a href="/zone-intervention">Zone d’intervention</a>
            <a href="/a-propos">À propos</a>
            <a className="rounded bg-black px-4 py-2 text-white" href="/nous-contacter">Demander un dépannage</a>
          </div>
        </div>
      )}
    </header>
  );
}
