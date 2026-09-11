import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { AddToCart } from "@/components/AddToCart";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  return <section className="section"><div className="container"><Link href="/shop" className="small text-secondary"><i className="bi bi-arrow-left me-2" />Back to shop</Link><div className="row g-5 align-items-center mt-2"><div className="col-lg-6"><div className="product-image rounded-4"><Image src={product.image} alt={product.name} width={900} height={945} sizes="(max-width: 991px) 100vw, 50vw" priority /></div></div><div className="col-lg-6"><span className="product-category">{product.category}</span><h1 className="section-title mt-2 mb-3">{product.name}</h1><div className="d-flex align-items-center gap-3 mb-3"><span className="price fs-3">${product.price}</span><span className="text-secondary"><i className="bi bi-star-fill me-1" aria-hidden="true" />{product.rating}</span></div><p className="text-secondary" style={{ lineHeight: 1.8 }}>{product.description}</p><div className="row g-3 my-4"><Info label="Light" value={product.light} icon="sun" /><Info label="Watering" value={product.watering} icon="droplet" /><Info label="Temperature" value={product.temperature} icon="thermometer-half" /><Info label="Size" value={product.size} icon="rulers" /><Info label="Pets" value={product.petFriendly ? "Pet friendly" : "Keep away"} icon="heart" /><Info label="Stock" value={`${product.stock} available`} icon="box" /></div><AddToCart product={product} /></div></div><div className="mt-5 pt-5"><h2 className="section-title h2">You might also like</h2><div className="row g-4 mt-1">{related.map((item) => <div className="col-md-4" key={item.id}><ProductCard product={item} /></div>)}</div></div></div></section>;
}

function Info({ label, value, icon }: { label: string; value: string; icon: string }) { return <div className="col-sm-6"><div className="info-card py-3"><div className="d-flex align-items-center gap-3"><div className="info-icon"><i className={`bi bi-${icon}`} aria-hidden="true" /></div><div><div className="small text-secondary">{label}</div><strong>{value}</strong></div></div></div></div>; }
