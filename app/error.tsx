"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <section className="section"><div className="container"><div className="empty-state"><span className="eyebrow">Something went wrong</span><h1 className="section-title mt-2">A leaf got stuck somewhere.</h1><p className="text-secondary">Try again and we will get you back to the greenery.</p><button className="btn btn-verdea mt-2" onClick={() => reset()}>Try again</button></div></div></section>; }
