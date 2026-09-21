import React from 'react';
import { Leaf, Phone, Mail, MapPin, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const handlePolicyClick = (policyType) => {
    setActiveTab(`policy-${policyType}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-grid">
          {/* Company Identity */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <div className="footer-icon">
                <Leaf size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="footer-brand-name">Vedique</h3>
                <p className="footer-company">Ranfort Wellness Pvt. Ltd.</p>
              </div>
            </div>

            <p className="footer-bio">
              Empowering global health through Dr. Shikha Sharma's proprietary Vedique Diet—a scientific blend of 5,000-year-old Ayurvedic wisdom and modern clinical nutrition.
            </p>

            <div className="contact-box">
              <p className="contact-item">
                <MapPin size={16} className="text-gold flex-shrink-0" />
                <span>D - 158 B, First Floor, Okhla Phase 1, New Delhi - 110020</span>
              </p>
              <p className="contact-item">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+919871100237">+91-9871100237</a>
              </p>
              <p className="contact-item">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a href="mailto:info@vedique.life">info@vedique.life</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavClick('about')}>About Us</button></li>
              <li><button onClick={() => handleNavClick('vedique-diet')}>Vedique Diet</button></li>
              <li><button onClick={() => handleNavClick('doctors')}>Meet Our Team</button></li>
              <li><button onClick={() => handleNavClick('products')}>Shop Vedique Herbs</button></li>
              <li><button onClick={() => handleNavClick('pricing')}>Plans & Pricing</button></li>
              <li><button onClick={() => handleNavClick('prakriti')}>Free Prakriti Test</button></li>
              <li><button onClick={() => handleNavClick('contact')}>Contact Us</button></li>
            </ul>
          </div>

          {/* Legal Policies */}
          <div className="footer-col">
            <h4 className="footer-heading">Legal & Policies</h4>
            <ul className="footer-links">
              <li><button onClick={() => handlePolicyClick('privacy')}>Privacy Policy</button></li>
              <li><button onClick={() => handlePolicyClick('terms')}>Terms & Conditions</button></li>
              <li><button onClick={() => handlePolicyClick('grievance')}>Grievance Redressal Policy</button></li>
              <li><button onClick={() => handlePolicyClick('return')}>Return & Refund Policy</button></li>
              <li><button onClick={() => handlePolicyClick('shipping')}>Shipping Policy</button></li>
            </ul>
          </div>

          {/* Social & Community */}
          <div className="footer-col">
            <h4 className="footer-heading">Join Our Community</h4>
            <p className="community-desc">
              Get weekly Ayurvedic diet tips, seasonal recipe e-books, and live Q&A sessions with Dr. Shikha Sharma.
            </p>
            
            <div className="social-pills">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-pill">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-pill">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-pill">YouTube</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill">LinkedIn</a>
            </div>

            <div className="whatsapp-box">
              <span className="whatsapp-icon">💬</span>
              <div>
                <strong>Join VIP WhatsApp Group</strong>
                <p>Free daily health tips & Prakriti advice</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Ranfort Wellness Pvt. Ltd. All rights reserved.</p>
          <div className="trust-badge">
            <ShieldCheck size={16} className="text-gold" /> ISO 9001:2015 & Clinical Ayurveda Certified
          </div>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: #04140f;
          color: #c7dad4;
          padding: 70px 0 30px 0;
          border-top: 3px solid var(--accent-gold);
          font-size: 0.92rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 0.8fr 1.1fr;
          gap: 40px;
          margin-bottom: 50px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }
        .footer-icon {
          width: 44px;
          height: 44px;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid var(--accent-gold);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-brand-name {
          color: #ffffff;
          font-size: 1.6rem;
          line-height: 1;
        }
        .footer-company {
          font-size: 0.72rem;
          color: var(--accent-gold);
          font-weight: 600;
        }
        .footer-bio {
          line-height: 1.6;
          margin-bottom: 20px;
          color: #a4beb5;
        }
        .contact-box {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: rgba(255, 255, 255, 0.03);
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.86rem;
        }
        .contact-item a:hover {
          color: var(--accent-gold);
        }
        .text-gold {
          color: var(--accent-gold);
        }
        .footer-heading {
          color: #ffffff;
          font-size: 1.15rem;
          margin-bottom: 20px;
          position: relative;
          padding-bottom: 8px;
        }
        .footer-heading::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 32px;
          height: 2px;
          background: var(--accent-gold);
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links button {
          background: none;
          color: #b0c9bf;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          text-align: left;
        }
        .footer-links button:hover {
          color: var(--accent-gold);
          transform: translateX(4px);
        }
        .community-desc {
          margin-bottom: 16px;
          font-size: 0.88rem;
          color: #a4beb5;
        }
        .social-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .social-pill {
          background: rgba(212, 175, 55, 0.1);
          color: var(--accent-gold);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .social-pill:hover {
          background: var(--accent-gold);
          color: #07231a;
        }
        .whatsapp-box {
          background: linear-gradient(135deg, #128c7e, #075e54);
          padding: 12px 16px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
        }
        .whatsapp-icon {
          font-size: 1.5rem;
        }
        .whatsapp-box p {
          font-size: 0.76rem;
          opacity: 0.9;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.84rem;
          color: #8aa99e;
        }
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-gold);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
