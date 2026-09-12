"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";

export function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);
  const links = [["Home", "/"], ["Shop", "/shop"], ["Plant Care", "/plant-care"], ["About", "/about"]];

  return (
    <header className="site-navbar">
      <nav className="navbar navbar-expand-lg py-3" aria-label="Main navigation">
        <div className="container">
          <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Verdea home">
            <Image src="/assets/verdea-logo.svg" alt="Verdea" width={140} height={32} priority />
          </Link>
          <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="verdeaNav" aria-label="Toggle navigation">
            <i className="bi bi-list" />
          </button>
          <div className={`collapse navbar-collapse ${open ? "show" : ""}`} id="verdeaNav">
            <div className="navbar-nav mx-auto gap-lg-3">
              {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={`nav-link ${pathname === href ? "active" : ""}`}>{label}</Link>)}
            </div>
            <Link href="/cart" onClick={() => setOpen(false)} className="cart-pill d-inline-flex align-items-center gap-2" aria-label={`Cart with ${itemCount} items`}>
              <i className="bi bi-bag" /> Cart <span>{itemCount}</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
