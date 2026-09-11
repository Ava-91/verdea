import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4 pb-5">
          <div className="col-lg-6">
            <Link href="/" className="brand d-inline-flex align-items-center gap-2 mb-3"><span className="brand-mark"><i className="bi bi-flower1" /></span>Verdea</Link>
            <p className="mb-0" style={{ maxWidth: 520 }}>Plants for slower mornings, greener corners, and homes that feel a little more alive.</p>
          </div>
          <div className="col-6 col-lg-3"><h2 className="h6 text-white">Explore</h2><div className="d-grid gap-2 mt-3"><Link href="/shop">Shop</Link><Link href="/plant-care">Plant Care</Link><Link href="/about">About</Link></div></div>
          <div className="col-6 col-lg-3"><h2 className="h6 text-white">Project</h2><p className="small mb-0">A collaborative Next.js + TypeScript + Bootstrap V1 plant shop.</p></div>
        </div>
        <div className="border-top border-light border-opacity-10 pt-3 small">© {new Date().getFullYear()} Verdea. Built with care.</div>
      </div>
    </footer>
  );
}
