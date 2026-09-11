"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/components/CartProvider";

export function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const links = [["Home", "/"], ["Shop", "/shop"], ["Plant Care", "/plant-care"], ["About", "/about"]];

  return (
    <header className="site-navbar">
      <nav className="navbar navbar-expand-lg py-3" aria-label="Main navigation">
        <div className="container">
          <Link href="/" className="brand d-flex align-items-center gap-2">
            <span className="brand-mark" aria-hidden="true"><i className="bi bi-flower1" /></span>
            Verdea
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#verdeaNav" aria-controls="verdeaNav" aria-label="Toggle navigation">
            <i className="bi bi-list" />
          </button>
          <div className="collapse navbar-collapse" id="verdeaNav">
            <div className="navbar-nav mx-auto gap-lg-3">
              {links.map(([label, href]) => <Link key={href} href={href} className={`nav-link ${pathname === href ? "active" : ""}`}>{label}</Link>)}
            </div>
            <Link href="/cart" className="cart-pill d-inline-flex align-items-center gap-2" aria-label={`Cart with ${itemCount} items`}>
              <i className="bi bi-bag" /> Cart <span>{itemCount}</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
