import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight } from 'lucide-react';

export default function Blogs({ blogs, setActiveTab }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBlogs = blogs.filter(b =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleReadBlog = (blogId) => {
    setActiveTab(`blog-${blogId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="blogs-page">
      <section className="page-hero">
        <div className="container text-center">
          <span className="badge-gold">Vedique Knowledge Hub</span>
          <h1 className="hero-title">Ayurvedic Health & Clinical Nutrition Articles</h1>
          <p className="hero-sub">Written by Dr. Shikha Sharma & Senior Medical Physicians</p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container">
          <div className="search-bar-wrapper glass-card p-16 mb-30">
            <input
              type="text"
              placeholder="Search articles on Prakriti, PCOS, Diabetes, Gut Reset..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="blog-search-input"
            />
          </div>

          <div className="blogs-grid">
            {filteredBlogs.map((b) => (
              <div key={b.id} className="blog-card glass-card">
                <div className="blog-img-box" onClick={() => handleReadBlog(b.id)} style={{ cursor: 'pointer' }}>
                  <img src={b.image} alt={b.title} className="blog-img" />
                  <span className="blog-cat">{b.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>{b.author}</span> • <span>{b.date}</span> • <span>{b.readTime}</span>
                  </div>
                  <h3 className="blog-title" onClick={() => handleReadBlog(b.id)} style={{ cursor: 'pointer' }}>
                    {b.title}
                  </h3>
                  <p className="blog-excerpt">{b.excerpt}</p>
                  <button onClick={() => handleReadBlog(b.id)} className="read-more-btn">
                    Read Full Article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center" style={{ padding: '60px 0' }}>
              <BookOpen size={48} style={{ color: 'var(--accent-gold)', margin: '0 auto 16px', display: 'block' }} />
              <h3>No articles found</h3>
              <p className="text-muted">Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .page-hero { background: linear-gradient(135deg, #07231a, #0d382b); color: #ffffff; padding: 60px 0; }
        .hero-sub { color: var(--accent-gold); font-size: 1.1rem; margin-top: 8px; }
        .p-16 { padding: 16px; }
        .mb-30 { margin-bottom: 30px; }
        .blog-search-input { width: 100%; padding: 12px 18px; border-radius: 12px; border: 1px solid var(--border-light); font-size: 0.98rem; outline: none; background: #fff; }
        .blog-search-input:focus { border-color: var(--accent-gold); }
        .blogs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .blog-card { overflow: hidden; display: flex; flex-direction: column; transition: transform 0.2s; }
        .blog-card:hover { transform: translateY(-4px); }
        .blog-img-box { position: relative; height: 190px; overflow: hidden; }
        .blog-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .blog-card:hover .blog-img { transform: scale(1.05); }
        .blog-cat { position: absolute; top: 12px; left: 12px; background: rgba(7, 35, 26, 0.85); color: var(--accent-gold); font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 12px; }
        .blog-content { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; }
        .blog-meta { font-size: 0.78rem; color: var(--text-muted); margin-bottom: 8px; }
        .blog-title { font-size: 1.08rem; margin-bottom: 10px; font-weight: 700; line-height: 1.4; }
        .blog-title:hover { color: var(--primary-emerald); }
        .blog-excerpt { font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px; }
        .read-more-btn { background: none; color: var(--primary-emerald); font-weight: 700; font-size: 0.88rem; display: flex; align-items: center; gap: 6px; margin-top: auto; }
        .read-more-btn:hover { color: var(--accent-gold); }
      `}</style>
    </div>
  );
}
