export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <span className="eyebrow">About Verdea</span>
            <h1 className="section-title mt-2">A calmer way to bring plants home.</h1>
            <p className="section-subtitle mt-3">
              Verdea is a plant shop built for people who want beautiful plants without the guesswork. We choose plants with everyday homes in mind and give you the care information you need before you buy.
            </p>
            <p className="text-secondary" style={{ lineHeight: 1.8 }}>
              From light and watering needs to size, temperature, pet safety, stock, and customer ratings, each product page is designed to help you make a confident choice. Browse the collection, find a plant that fits your space, and add it to your cart when you are ready.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="hero-plant"><i className="bi bi-flower2" /></div>
          </div>
        </div>
        <div className="row g-4 mt-5">
          <div className="col-md-4">
            <div className="info-card">
              <h2 className="h5">Plants worth choosing</h2>
              <p className="text-secondary mb-0">A focused collection of indoor plants, with clear details so you can choose what suits your home.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <h2 className="h5">Care information included</h2>
              <p className="text-secondary mb-0">Every product includes practical guidance for light, water, temperature, size, and pet safety.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card">
              <h2 className="h5">Shop with confidence</h2>
              <p className="text-secondary mb-0">Use search, filters, ratings, stock information, and your cart to make a simple, informed purchase.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
