"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      prefetch
      className={`px-3 py-2 rounded transition ${
        pathname === href ? "bg-white/15" : "hover:bg-indigo-400/30"
      }`}
    >
      {children}
    </Link>
  );
  return (
  <nav className="px-4 bg-indigo-600/90 py-4 shadow sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/assets/searchflix-logo.svg" alt="SearchFlix Logo" width={40} height={40} />
          <h1 className="font-bold text-2xl text-white">SearchFlix</h1>
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden text-white px-3 py-2 rounded hover:bg-indigo-400/30 transition"
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div className="hidden md:flex gap-1 text-white font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/services">Services</NavLink>
        </div>
      </div>
      {open && (
        <div className="md:hidden mt-3 grid gap-1 text-white font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/services">Services</NavLink>
        </div>
      )}
    </nav>
  );
}
