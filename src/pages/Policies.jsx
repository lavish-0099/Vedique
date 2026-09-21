import React, { useState, useEffect } from 'react';
import { ShieldCheck, FileText, RotateCcw, AlertCircle, Truck } from 'lucide-react';

export default function Policies({ initialPolicy = 'privacy' }) {
  const [activePolicy, setActivePolicy] = useState(initialPolicy);

  useEffect(() => {
    if (initialPolicy) setActivePolicy(initialPolicy);
  }, [initialPolicy]);

  const policiesMap = {
    privacy: {
      title: 'Privacy Policy',
      wireframePage: 'Page 12',
      content: `Ranfort Wellness Pvt. Ltd. ("Vedique Wellness", "We", "Us") respects your personal data and privacy. 

### Data Collection & Usage:
1. **Health Data & Form Responses**: Information collected through our multi-step Prakriti diagnostic form, doctor consultation bookings, and newsletter signups is kept strictly confidential under ISO 9001 medical standards.
2. **E-Commerce & Payments**: Payment and order fulfillment details for herbal product purchases are processed securely via PCI-DSS compliant payment gateways. We never store credit card numbers on local servers.
3. **Third-Party Sharing**: We do not sell, rent, or lease your personal health details or phone numbers to third-party advertisers.`
    },
    terms: {
      title: 'Terms & Conditions',
      wireframePage: 'Page 13',
      content: `Welcome to Vedique Wellness. By accessing our website, purchasing products, or enrolling in Vedique diet plans, you agree to comply with the following terms:

### Medical Disclaimer:
- The Vedique Diet system and Ayurvedic consultations are designed to support lifestyle wellness and metabolic balance under BAMS doctor guidance.
- Patients are encouraged to continue necessary prescribed medications unless explicitly adjusted by their treating medical physician.

### Intellectual Property:
- All proprietary algorithms, Prakriti diagnostic tools, Dr. Shikha Sharma e-books, and website media are owned exclusively by Ranfort Wellness Pvt. Ltd.`
    },
    return: {
      title: 'Return & Refund Policy',
      wireframePage: 'Page 14',
      content: `At Ranfort Wellness Pvt. Ltd., we strive for 100% customer satisfaction across our products and clinical consultation plans.

### Herbal Product Returns (Vedique Store):
- Unopened product containers may be returned within **7 days** of delivery for a full refund or exchange.
- Damaged or defective items received during shipping will be replaced free of charge upon sharing unboxing photos within 48 hours to info@vedique.life.

### Diet Consultation & Doctor Plans:
- Consultation plan fees can be cancelled with a 100% refund prior to the first doctor consultation call.`
    },
    grievance: {
      title: 'Grievance Redressal Policy',
      wireframePage: 'Page 15',
      content: `In accordance with Information Technology Act 2000 and consumer protection rules, Ranfort Wellness Pvt. Ltd. has designated a Grievance Redressal Officer to resolve any customer or data privacy concerns.

### Grievance Officer Contact:
- **Officer Name**: Mr. Vikramaditya Singh
- **Company**: Ranfort Wellness Pvt. Ltd.
- **Address**: D - 158 B, First Floor, Okhla Phase 1, New Delhi - 110020
- **Email**: grievance@vedique.life
- **Phone**: +91-9871100237`
    },
    shipping: {
      title: 'Shipping Policy',
      wireframePage: 'Page 16',
      content: `Ranfort Wellness Pvt. Ltd. ships all Vedique herbal formulations, elixirs, and health kits across India and internationally.

### Dispatch Timeline:
- **Domestic Shipping (India)**: Orders are processed within 24-48 hours and delivered within 3 to 5 business days.
- **International Shipping**: Delivered within 7 to 10 business days via DHL/FedEx.
- **Tracking**: Tracking links are sent automatically via SMS and Email upon dispatch.`
    }
  };

  const current = policiesMap[activePolicy] || policiesMap.privacy;

  return (
    <div className="policies-page">
      <section className="page-hero">
        <div className="container text-center">
          <span className="badge-gold">Ranfort Wellness Legal Center</span>
          <h1 className="hero-title">{current.title}</h1>
          <p className="hero-sub">Wireframe Compliance Document • {current.wireframePage}</p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container policy-layout">
          {/* Sidebar */}
          <div className="policy-sidebar glass-card p-20 flex flex-col gap-10">
            <button
              onClick={() => setActivePolicy('privacy')}
              className={`policy-tab ${activePolicy === 'privacy' ? 'active' : ''}`}
            >
              <ShieldCheck size={16} /> Privacy Policy (Page 12)
            </button>
            <button
              onClick={() => setActivePolicy('terms')}
              className={`policy-tab ${activePolicy === 'terms' ? 'active' : ''}`}
            >
              <FileText size={16} /> Terms & Conditions (Page 13)
            </button>
            <button
              onClick={() => setActivePolicy('return')}
              className={`policy-tab ${activePolicy === 'return' ? 'active' : ''}`}
            >
              <RotateCcw size={16} /> Return & Refund Policy (Page 14)
            </button>
            <button
              onClick={() => setActivePolicy('grievance')}
              className={`policy-tab ${activePolicy === 'grievance' ? 'active' : ''}`}
            >
              <AlertCircle size={16} /> Grievance Redressal Policy (Page 15)
            </button>
            <button
              onClick={() => setActivePolicy('shipping')}
              className={`policy-tab ${activePolicy === 'shipping' ? 'active' : ''}`}
            >
              <Truck size={16} /> Shipping Policy (Page 16)
            </button>
          </div>

          {/* Policy Document Viewer */}
          <div className="policy-content glass-card p-36">
            <span className="badge-gold mb-10 inline-block">{current.wireframePage} Verified</span>
            <h2 className="text-2xl font-bold mb-20">{current.title}</h2>
            <div className="policy-text-body leading-relaxed text-sm whitespace-pre-line">
              {current.content}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero { background: linear-gradient(135deg, #07231a, #0d382b); color: #ffffff; padding: 60px 0; }
        .hero-sub { color: var(--accent-gold); font-size: 1.1rem; margin-top: 8px; }
        .policy-layout { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 30px; }
        .p-20 { padding: 20px; }
        .p-36 { padding: 36px; }
        .gap-10 { gap: 10px; }
        .policy-tab { background: #ffffff; border: 1px solid var(--border-light); padding: 12px 16px; border-radius: 12px; font-size: 0.88rem; font-weight: 700; text-align: left; display: flex; align-items: center; gap: 10px; color: var(--text-dark); }
        .policy-tab.active { background: var(--primary-emerald); color: #ffffff; }
        .policy-text-body { line-height: 1.8; color: #2d3748; }
        @media (max-width: 900px) { .policy-layout { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
