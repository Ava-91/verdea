import Link from "next/link";

export default function ProductNotFound() {
  return (
    <section className="section">
      <div className="container">
        <div className="empty-state">
          <span className="eyebrow">404</span>
          <h1 className="section-title mt-2">This leafy corner does not exist.</h1>
          <p className="text-secondary">The plant you were looking for may have moved or never sprouted.</p>
          <Link href="/shop" className="btn btn-verdea mt-2">Back to shop</Link>
        </div>
      </div>
    </section>
  );
}
