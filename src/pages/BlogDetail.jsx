import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, ArrowRight } from 'lucide-react';

export default function BlogDetail({ blog, setActiveTab }) {
  if (!blog) {
    return (
      <div className="section-padding text-center container">
        <h2>Article Not Found</h2>
        <p className="text-muted mt-10">This article may have been moved or deleted.</p>
        <button onClick={() => setActiveTab('blogs')} className="btn-emerald mt-20">
          <ArrowLeft size={16} /> Back to Blogs
        </button>
      </div>
    );
  }

  // Basic markdown-like renderer
  const renderContent = (content) => {
    return content.split('\n').map((line, i) => {
      if (line.startsWith('### ')) {
        return <h3 key={i} className="blog-detail-h3">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={i} className="blog-detail-h2">{line.replace('## ', '')}</h2>;
      }
      if (line.match(/^\d+\.\s/)) {
        return <p key={i} className="blog-detail-list-item">{line.replace(/\*\*(.*?)\*\*/g, (_, t) => t)}</p>;
      }
      if (line.startsWith('- ')) {
        const text = line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, (_, t) => t);
        return <p key={i} className="blog-detail-bullet">• {text}</p>;
      }
      if (line.trim() === '') {
        return <br key={i} />;
      }
      // Bold text replacement
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} className="blog-detail-para">
          {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
        </p>
      );
    });
  };

  const shareUrl = `https://vedique-wellness.vercel.app`;

  return (
    <div className="blog-detail-page">
      {/* Hero Banner */}
      <section className="blog-detail-hero">
        <div className="container">
          <button onClick={() => setActiveTab('blogs')} className="back-btn">
            <ArrowLeft size={16} /> Back to All Articles
          </button>
          <div className="blog-hero-content">
            <span className="blog-cat-badge">{blog.category}</span>
            <h1 className="blog-detail-title">{blog.title}</h1>
            <div className="blog-meta-row">
              <span className="meta-item"><User size={14} /> {blog.author}</span>
              <span className="meta-item"><Calendar size={14} /> {blog.date}</span>
              <span className="meta-item"><Clock size={14} /> {blog.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container">
        <div className="blog-featured-img-wrap">
          <img src={blog.image} alt={blog.title} className="blog-featured-img" />
        </div>
      </div>

      {/* Content Grid */}
      <section className="section-padding bg-cream">
        <div className="container blog-content-grid">
          {/* Article Body */}
          <article className="blog-article-body glass-card">
            <div className="article-prose">
              {renderContent(blog.content)}
            </div>

            {/* Tag */}
            <div className="article-tags">
              <span className="tag-pill">{blog.category}</span>
            </div>

            {/* Share */}
            <div className="article-share-bar">
              <span className="share-label"><Share2 size={14} /> Share this article:</span>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="share-btn facebook">Facebook</a>
              <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noreferrer" className="share-btn twitter">Twitter</a>
              <a href={`https://wa.me/?text=${encodeURIComponent(blog.title + ' ' + shareUrl)}`} target="_blank" rel="noreferrer" className="share-btn whatsapp">WhatsApp</a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            {/* Author Card */}
            <div className="sidebar-card glass-card">
              <h3 className="sidebar-heading"><User size={16} /> About the Author</h3>
              <div className="author-sidebar-info">
                <div className="author-avatar-lg">
                  {blog.author.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <strong className="author-name-lg">{blog.author}</strong>
                  <p className="author-role-lg">Senior Ayurvedic Physician, Vedique Wellness</p>
                </div>
              </div>
              <p className="author-bio">
                An expert in clinical Ayurvedic nutrition with years of research in metabolic health, 
                hormonal balance, and Vedic dietetics.
              </p>
            </div>

            {/* CTA Card */}
            <div className="sidebar-cta-card dark-glass-card">
              <BookOpen size={28} className="cta-icon" />
              <h3>Get Your Free Prakriti Analysis</h3>
              <p>Discover your unique body constitution and receive a personalized diet plan by Dr. Shikha Sharma.</p>
              <button onClick={() => setActiveTab('prakriti')} className="btn-primary cta-sidebar-btn">
                Start Free Test <ArrowRight size={14} />
              </button>
            </div>

            {/* More Articles */}
            <div className="sidebar-card glass-card">
              <h3 className="sidebar-heading">Explore More</h3>
              <div className="more-links">
                <button onClick={() => setActiveTab('vedique-diet')} className="more-link-btn">Understanding Vedique Diet →</button>
                <button onClick={() => setActiveTab('case-studies')} className="more-link-btn">Read Patient Case Studies →</button>
                <button onClick={() => setActiveTab('doctors')} className="more-link-btn">Meet Our Doctors →</button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="blog-bottom-cta">
        <div className="container text-center">
          <h2>Ready to Start Your Wellness Journey?</h2>
          <p>Book a consultation with Dr. Shikha Sharma and get your personalized Vedique plan today.</p>
          <button onClick={() => setActiveTab('prakriti')} className="btn-primary mt-20">
            Book Free Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .blog-detail-hero {
          background: linear-gradient(135deg, #07231a, #0d382b);
          color: #fff;
          padding: 50px 0 40px;
        }
        .back-btn {
          background: rgba(255,255,255,0.1);
          color: #d8e5e0;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.84rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 24px;
          transition: all 0.2s;
        }
        .back-btn:hover { background: rgba(255,255,255,0.2); color: #fff; }
        .blog-cat-badge {
          display: inline-block;
          background: rgba(212,175,55,0.25);
          color: var(--accent-gold);
          border: 1px solid rgba(212,175,55,0.4);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 16px;
        }
        .blog-detail-title { font-size: 2.4rem; color: #fff; line-height: 1.25; margin-bottom: 20px; }
        .blog-meta-row { display: flex; gap: 20px; flex-wrap: wrap; }
        .meta-item { display: flex; align-items: center; gap: 6px; font-size: 0.85rem; color: #b0c9bf; }
        .blog-featured-img-wrap { margin: -10px auto 0; max-width: 900px; }
        .blog-featured-img { width: 100%; height: 400px; object-fit: cover; border-radius: 20px; display: block; box-shadow: var(--shadow-lg); }
        .blog-content-grid { display: grid; grid-template-columns: 1fr 340px; gap: 32px; align-items: start; }
        .blog-article-body { padding: 36px; }
        .article-prose { font-size: 1.02rem; line-height: 1.85; color: var(--text-dark); }
        .blog-detail-h2 { font-size: 1.6rem; margin: 28px 0 10px; color: var(--primary-emerald); }
        .blog-detail-h3 { font-size: 1.25rem; margin: 22px 0 8px; color: var(--primary-emerald); }
        .blog-detail-para { margin-bottom: 14px; }
        .blog-detail-list-item { margin: 6px 0 6px 16px; }
        .blog-detail-bullet { margin: 6px 0 6px 8px; color: var(--text-muted); }
        .article-tags { margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--border-light); }
        .tag-pill { background: var(--gold-soft); color: #7a5e12; font-weight: 700; font-size: 0.8rem; padding: 5px 14px; border-radius: 20px; }
        .article-share-bar { display: flex; align-items: center; gap: 10px; margin-top: 20px; flex-wrap: wrap; }
        .share-label { font-size: 0.84rem; font-weight: 700; color: var(--text-muted); display: flex; align-items: center; gap: 6px; }
        .share-btn { font-size: 0.78rem; font-weight: 700; padding: 5px 14px; border-radius: 20px; }
        .facebook { background: #1877f2; color: #fff; }
        .twitter { background: #1da1f2; color: #fff; }
        .whatsapp { background: #25d366; color: #fff; }
        .sidebar-card { padding: 24px; margin-bottom: 20px; }
        .sidebar-heading { font-size: 1rem; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; color: var(--primary-emerald); }
        .author-sidebar-info { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .author-avatar-lg { width: 52px; height: 52px; border-radius: 50%; background: var(--primary-emerald); color: var(--accent-gold); font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .author-name-lg { font-size: 0.95rem; display: block; }
        .author-role-lg { font-size: 0.76rem; color: var(--text-muted); }
        .author-bio { font-size: 0.84rem; color: var(--text-muted); line-height: 1.6; }
        .sidebar-cta-card { padding: 24px; text-align: center; margin-bottom: 20px; }
        .cta-icon { color: var(--accent-gold); margin: 0 auto 12px; display: block; }
        .sidebar-cta-card h3 { color: #fff; font-size: 1.1rem; margin-bottom: 8px; }
        .sidebar-cta-card p { color: #b0c9bf; font-size: 0.84rem; margin-bottom: 16px; }
        .cta-sidebar-btn { width: 100%; justify-content: center; font-size: 0.88rem; }
        .more-links { display: flex; flex-direction: column; gap: 10px; }
        .more-link-btn { background: none; text-align: left; font-size: 0.88rem; font-weight: 600; color: var(--primary-emerald); padding: 8px 0; border-bottom: 1px dashed var(--border-light); }
        .more-link-btn:hover { color: var(--accent-gold); }
        .blog-bottom-cta { background: linear-gradient(135deg, #07231a, #0d382b); color: #fff; padding: 60px 0; text-align: center; }
        .blog-bottom-cta h2 { color: #fff; font-size: 2rem; margin-bottom: 10px; }
        .blog-bottom-cta p { color: #b0c9bf; }
        .mt-10 { margin-top: 10px; }
        .mt-20 { margin-top: 20px; }
        @media (max-width: 900px) {
          .blog-content-grid { grid-template-columns: 1fr; }
          .blog-detail-title { font-size: 1.7rem; }
          .blog-featured-img { height: 250px; }
        }
      `}</style>
    </div>
  );
}
