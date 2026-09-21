import React, { useState } from 'react';
import { ArrowLeft, Star, ShoppingCart, Leaf, ShieldCheck, Award, Package, Check, Minus, Plus } from 'lucide-react';

export default function ProductDetail({ product, setActiveTab, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h2>Product Not Found</h2>
        <p className="text-muted">The product you are looking for does not exist.</p>
        <button onClick={() => setActiveTab('products')} className="btn-emerald mt-20">
          <ArrowLeft size={16} /> Back to Products
        </button>
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    onAddToCart && onAddToCart({ ...product, qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const benefits = [
    { icon: <Leaf size={24} />, title: '100% Natural', desc: 'Pure Ayurvedic herbs with zero synthetic additives or preservatives.' },
    { icon: <ShieldCheck size={24} />, title: 'Doctor Formulated', desc: 'Crafted under guidance of Dr. Shikha Sharma & certified BAMS doctors.' },
    { icon: <Award size={24} />, title: 'Quality Tested', desc: 'Each batch is FSSAI-certified and tested for potency and purity.' },
  ];

  return (
    <div className="pdp-page">
      {/* Breadcrumb */}
      <div className="pdp-breadcrumb">
        <div className="container breadcrumb-inner">
          <button onClick={() => setActiveTab('home')} className="breadcrumb-link">Home</button>
          <span>/</span>
          <button onClick={() => setActiveTab('products')} className="breadcrumb-link">Products</button>
          <span>/</span>
          <span className="breadcrumb-current">{product.title}</span>
        </div>
      </div>

      {/* Main PDP Section */}
      <section className="section-padding bg-cream">
        <div className="container pdp-grid">
          {/* Left: Product Image */}
          <div className="pdp-image-col">
            <div className="pdp-img-frame">
              {product.tag && <span className="pdp-tag-badge">{product.tag}</span>}
              {discount > 0 && <span className="pdp-discount-badge">-{discount}%</span>}
              <img src={product.image} alt={product.title} className="pdp-main-img" />
            </div>
            {/* Thumbnail row placeholder */}
            <div className="pdp-thumb-row">
              {[0, 1, 2].map(i => (
                <div key={i} className={`pdp-thumb ${i === 0 ? 'active' : ''}`}>
                  <img src={product.image} alt={`view-${i}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="pdp-info-col">
            <span className="pdp-category">{product.category}</span>
            <h1 className="pdp-title">{product.title}</h1>

            {/* Rating */}
            <div className="pdp-rating-row">
              <div className="stars-row">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} size={16} className={s <= Math.floor(product.rating) ? 'star-filled' : 'star-empty'} />
                ))}
              </div>
              <span className="rating-val"><strong>{product.rating}</strong></span>
              <span className="review-count">({product.reviewsCount} verified reviews)</span>
            </div>

            {/* Price */}
            <div className="pdp-price-block">
              <span className="pdp-price-current">₹{product.price}</span>
              <span className="pdp-price-original">₹{product.originalPrice}</span>
              <span className="pdp-save-tag">Save ₹{product.originalPrice - product.price}</span>
            </div>

            {/* Description */}
            <p className="pdp-description">{product.description}</p>

            {/* Ingredients */}
            <div className="pdp-ingredients-box">
              <strong className="ingredients-label"><Leaf size={14} /> Ayurvedic Ingredients:</strong>
              <div className="ingredients-pills">
                {product.ingredients?.map((ing, i) => (
                  <span key={i} className="ingredient-pill">{ing}</span>
                ))}
              </div>
            </div>

            {/* Quantity & CTA */}
            <div className="pdp-qty-row">
              <span className="qty-label">Qty:</span>
              <div className="qty-controls">
                <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}><Minus size={14} /></button>
                <span className="qty-val">{qty}</span>
                <button className="qty-btn" onClick={() => setQty(qty + 1)}><Plus size={14} /></button>
              </div>
            </div>

            <div className="pdp-cta-row">
              <button onClick={handleAddToCart} className={`btn-primary pdp-cart-btn ${added ? 'added' : ''}`}>
                {added ? <><Check size={18} /> Added to Cart!</> : <><ShoppingCart size={18} /> Add to Cart</>}
              </button>
              <button
                onClick={() => { handleAddToCart(); setActiveTab('cart'); }}
                className="btn-emerald pdp-buy-btn"
              >
                Buy Now
              </button>
            </div>

            {/* Trust badges */}
            <div className="pdp-trust-strip">
              <span><ShieldCheck size={14} /> 7-Day Returns</span>
              <span><Package size={14} /> Free Shipping ₹799+</span>
              <span><Award size={14} /> FSSAI Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-30">Why Choose Vedique Products?</h2>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-card glass-card">
                <div className="benefit-icon text-gold">{b.icon}</div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related CTA */}
      <section className="pdp-related-strip">
        <div className="container text-center">
          <p>Explore more Ayurvedic formulations crafted by Dr. Shikha Sharma</p>
          <button onClick={() => setActiveTab('products')} className="btn-outline mt-10">
            <ArrowLeft size={14} /> View All Products
          </button>
        </div>
      </section>

      <style>{`
        .pdp-page { overflow-x: hidden; }
        .pdp-breadcrumb { background: #f5f1ea; padding: 12px 0; border-bottom: 1px solid var(--border-light); }
        .breadcrumb-inner { display: flex; align-items: center; gap: 8px; font-size: 0.84rem; color: var(--text-muted); }
        .breadcrumb-link { background: none; color: var(--text-muted); font-size: 0.84rem; }
        .breadcrumb-link:hover { color: var(--primary-emerald); }
        .breadcrumb-current { color: var(--primary-emerald); font-weight: 700; }
        .pdp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }
        .pdp-img-frame { position: relative; border-radius: 24px; overflow: hidden; box-shadow: var(--shadow-lg); }
        .pdp-main-img { width: 100%; height: 480px; object-fit: cover; display: block; }
        .pdp-tag-badge { position: absolute; top: 16px; left: 16px; background: var(--accent-gold); color: #07231a; font-weight: 800; font-size: 0.75rem; padding: 5px 12px; border-radius: 20px; z-index: 2; }
        .pdp-discount-badge { position: absolute; top: 16px; right: 16px; background: #d32f2f; color: #fff; font-weight: 800; font-size: 0.82rem; padding: 5px 12px; border-radius: 20px; z-index: 2; }
        .pdp-thumb-row { display: flex; gap: 10px; margin-top: 12px; }
        .pdp-thumb { width: 70px; height: 70px; border-radius: 10px; overflow: hidden; border: 2px solid transparent; cursor: pointer; }
        .pdp-thumb.active { border-color: var(--accent-gold); }
        .pdp-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .pdp-category { font-size: 0.8rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .pdp-title { font-size: 2rem; margin: 8px 0 14px 0; line-height: 1.25; }
        .pdp-rating-row { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .stars-row { display: flex; gap: 2px; }
        .star-filled { color: #ffb800; fill: #ffb800; }
        .star-empty { color: #ddd; }
        .rating-val { font-weight: 800; color: var(--primary-emerald); }
        .review-count { font-size: 0.84rem; color: var(--text-muted); }
        .pdp-price-block { display: flex; align-items: baseline; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
        .pdp-price-current { font-size: 2.2rem; font-weight: 800; color: var(--primary-emerald); }
        .pdp-price-original { font-size: 1.1rem; color: #999; text-decoration: line-through; }
        .pdp-save-tag { background: #e8f5e9; color: #2e7d32; font-size: 0.8rem; font-weight: 700; padding: 4px 10px; border-radius: 12px; }
        .pdp-description { color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 20px; }
        .pdp-ingredients-box { background: var(--bg-cream); border: 1px solid var(--border-light); border-radius: 14px; padding: 16px; margin-bottom: 24px; }
        .ingredients-label { display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: var(--primary-emerald); margin-bottom: 10px; }
        .ingredients-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .ingredient-pill { background: #fff; border: 1px solid var(--border-light); font-size: 0.78rem; font-weight: 600; padding: 4px 12px; border-radius: 20px; color: var(--text-dark); }
        .pdp-qty-row { display: flex; align-items: center; gap: 14px; margin-bottom: 20px; }
        .qty-label { font-weight: 700; font-size: 0.9rem; }
        .qty-controls { display: flex; align-items: center; gap: 0; border: 1px solid var(--border-light); border-radius: 10px; overflow: hidden; }
        .qty-btn { background: #f5f1ea; padding: 8px 14px; font-size: 1rem; transition: background 0.2s; }
        .qty-btn:hover { background: var(--gold-soft); }
        .qty-val { padding: 8px 18px; font-weight: 700; border-left: 1px solid var(--border-light); border-right: 1px solid var(--border-light); }
        .pdp-cta-row { display: flex; gap: 12px; margin-bottom: 20px; }
        .pdp-cart-btn { flex: 1; justify-content: center; transition: background 0.3s; }
        .pdp-cart-btn.added { background: linear-gradient(135deg, #2e7d32, #388e3c); }
        .pdp-buy-btn { flex: 1; justify-content: center; }
        .pdp-trust-strip { display: flex; gap: 16px; flex-wrap: wrap; font-size: 0.8rem; font-weight: 600; color: var(--text-muted); }
        .pdp-trust-strip span { display: flex; align-items: center; gap: 5px; }
        .benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .benefit-card { padding: 28px; text-align: center; }
        .benefit-icon { margin-bottom: 12px; }
        .benefit-title { font-size: 1.1rem; margin-bottom: 6px; }
        .benefit-desc { font-size: 0.86rem; color: var(--text-muted); }
        .pdp-related-strip { background: var(--primary-emerald); color: #fff; padding: 28px 0; text-align: center; }
        .pdp-related-strip p { color: #c4ded5; margin-bottom: 10px; }
        .mb-30 { margin-bottom: 30px; }
        .mt-10 { margin-top: 10px; }
        .mt-20 { margin-top: 20px; }
        @media (max-width: 900px) {
          .pdp-grid { grid-template-columns: 1fr; }
          .benefits-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
