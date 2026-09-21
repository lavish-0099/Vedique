import React, { useState } from 'react';
import { ShoppingCart, Star, Filter, Search, Eye, Leaf } from 'lucide-react';

export default function Products({ products, setActiveTab }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Weight & Metabolism', 'Women Health', 'Gut & Digestion', 'Teas & Elixirs', 'Diabetes & Sugar Care', 'Mind & Immunity'];

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewProduct = (productId) => {
    setActiveTab(`product-${productId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="products-page">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container text-center">
          <span className="badge-gold">Vedique Herbal Collection</span>
          <h1 className="hero-title">Doctor-Formulated Botanical Elixirs</h1>
          <p className="hero-sub">100% Natural • Ayurvedic • Clinically Designed by Dr. Shikha Sharma</p>
        </div>
      </section>

      {/* Store Container */}
      <section className="section-padding bg-cream">
        <div className="container">
          {/* Controls Bar */}
          <div className="store-controls-bar glass-card mb-30">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search herbal supplements, teas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="results-count">{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</p>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card glass-card">
                {product.tag && <span className="product-badge">{product.tag}</span>}
                <div className="product-img-box" onClick={() => handleViewProduct(product.id)}>
                  <img src={product.image} alt={product.title} className="product-img" />
                  <div className="view-overlay">
                    <Eye size={16} /> View Details
                  </div>
                </div>

                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-desc-short">{product.description}</p>

                  <div className="product-rating">
                    <Star size={14} className="star-filled" />
                    <span>{product.rating} ({product.reviewsCount} reviews)</span>
                  </div>

                  <div className="product-price-row">
                    <div>
                      <span className="price-current">₹{product.price}</span>
                      <span className="price-old">₹{product.originalPrice}</span>
                    </div>
                    <button
                      onClick={() => handleViewProduct(product.id)}
                      className="btn-emerald btn-sm"
                    >
                      <ShoppingCart size={14} /> Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products text-center" style={{ padding: '60px 0' }}>
              <Leaf size={48} style={{ color: 'var(--accent-gold)', margin: '0 auto 16px', display: 'block' }} />
              <h3>No products found</h3>
              <p className="text-muted">Try clearing filters or search another herb category.</p>
              <button onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} className="btn-outline" style={{ marginTop: '20px' }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .page-hero { background: linear-gradient(135deg, #07231a, #0d382b); color: #ffffff; padding: 60px 0; text-align: center; }
        .hero-sub { color: var(--accent-gold); font-size: 1.1rem; margin-top: 8px; }
        .store-controls-bar { padding: 20px; display: flex; flex-direction: column; gap: 16px; }
        .search-box { position: relative; width: 100%; }
        .search-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-muted); }
        .search-box input { width: 100%; padding: 12px 14px 12px 44px; border-radius: 12px; border: 1px solid var(--border-light); font-size: 0.98rem; outline: none; background: #fff; }
        .search-box input:focus { border-color: var(--accent-gold); }
        .category-pills { display: flex; gap: 10px; overflow-x: auto; padding-bottom: 4px; flex-wrap: wrap; }
        .cat-pill { background: #ffffff; border: 1px solid var(--border-light); color: var(--text-dark); font-weight: 600; font-size: 0.84rem; padding: 6px 16px; border-radius: 20px; white-space: nowrap; transition: all 0.2s ease; }
        .cat-pill.active { background: var(--primary-emerald); color: #ffffff; border-color: var(--primary-emerald); }
        .results-count { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px; }
        .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }
        .product-card { position: relative; display: flex; flex-direction: column; overflow: hidden; cursor: pointer; }
        .product-badge { position: absolute; top: 12px; left: 12px; background: var(--accent-gold); color: #07231a; font-weight: 700; font-size: 0.72rem; padding: 4px 10px; border-radius: 12px; z-index: 2; }
        .product-img-box { position: relative; height: 210px; overflow: hidden; cursor: pointer; }
        .product-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .product-card:hover .product-img { transform: scale(1.06); }
        .view-overlay { position: absolute; inset: 0; background: rgba(7, 35, 26, 0.6); display: flex; align-items: center; justify-content: center; gap: 6px; color: #fff; font-weight: 700; font-size: 0.9rem; opacity: 0; transition: opacity 0.3s ease; }
        .product-card:hover .view-overlay { opacity: 1; }
        .product-info { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; }
        .product-category { font-size: 0.72rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
        .product-title { font-size: 1rem; margin: 6px 0 6px 0; font-weight: 700; line-height: 1.35; }
        .product-desc-short { font-size: 0.81rem; color: var(--text-muted); margin-bottom: 10px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .product-rating { display: flex; align-items: center; gap: 4px; font-size: 0.78rem; color: var(--text-muted); margin-bottom: 14px; }
        .star-filled { color: #ffb800; fill: #ffb800; }
        .product-price-row { display: flex; justify-content: space-between; align-items: center; margin-top: auto; border-top: 1px solid var(--border-light); padding-top: 12px; }
        .price-current { font-weight: 800; font-size: 1.15rem; color: var(--primary-emerald); }
        .price-old { text-decoration: line-through; color: #999; font-size: 0.82rem; margin-left: 6px; }
        .mb-30 { margin-bottom: 30px; }
      `}</style>
    </div>
  );
}
