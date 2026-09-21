import React, { useState } from 'react';
import { Leaf, Phone, Sparkles, Menu, X } from 'lucide-react';

export default function Header({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'vedique-diet', label: 'Vedique Diet' },
    { id: 'doctors', label: 'Meet Our Team' },
    { id: 'products', label: 'Products' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'case-studies', label: 'Case Study' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header-sticky">
      {/* Top Banner */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="live-dot"></span>
            <span>Over 50,000+ Health Transformations across 28 Countries</span>
          </div>
          <div className="top-bar-right">
            <a href="tel:+919871100237" className="phone-link">
              <Phone size={14} /> +91-9871100237
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <div className="container nav-container">
          {/* Logo */}
          <div className="logo-container" onClick={() => handleNavClick('home')}>
            <div className="logo-icon">
              <Leaf size={22} className="text-gold" />
            </div>
            <div className="logo-text">
              <span className="brand-name">Vedique</span>
              <span className="brand-tagline">Ranfort Wellness Pvt. Ltd.</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="desktop-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`nav-link ${activeTab === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="nav-actions">
            <button
              onClick={() => handleNavClick('prakriti')}
              className="btn-primary pulse-glow btn-sm"
            >
              <Sparkles size={16} /> Free Prakriti Test
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`mobile-link ${activeTab === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .header-sticky {
          position: sticky;
          top: 0;
          z-index: 900;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
        }
        .top-bar {
          background: var(--emerald-dark);
          color: #d8e5e0;
          font-size: 0.82rem;
          padding: 8px 0;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }
        .top-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .live-dot {
          width: 8px;
          height: 8px;
          background: var(--accent-gold);
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 8px var(--accent-gold);
        }
        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .phone-link {
          color: var(--accent-gold);
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 600;
        }
        .phone-link:hover {
          text-decoration: underline;
        }
        .main-nav {
          padding: 14px 0;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }
        .logo-icon {
          width: 42px;
          height: 42px;
          background: var(--primary-emerald);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--accent-gold);
        }
        .text-gold { color: var(--accent-gold); }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--primary-emerald);
          letter-spacing: -0.5px;
          line-height: 1;
        }
        .brand-tagline {
          font-size: 0.68rem;
          color: var(--text-muted);
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        .desktop-links {
          display: flex;
          gap: 20px;
        }
        .nav-link {
          background: none;
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--text-dark);
          position: relative;
          padding: 6px 0;
          transition: color 0.2s ease;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--primary-emerald);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2.5px;
          background: var(--accent-gold);
          border-radius: 2px;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .btn-sm {
          padding: 10px 20px;
          font-size: 0.88rem;
        }
        .mobile-toggle {
          display: none;
          background: none;
          color: var(--primary-emerald);
        }
        .mobile-menu-drawer {
          background: #ffffff;
          border-top: 1px solid var(--border-light);
          padding: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-link {
          text-align: left;
          background: none;
          font-size: 1rem;
          font-weight: 600;
          padding: 10px;
          border-radius: 8px;
          color: var(--text-dark);
        }
        .mobile-link.active {
          background: var(--gold-soft);
          color: var(--primary-emerald);
        }
        @media (max-width: 1024px) {
          .desktop-links {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
