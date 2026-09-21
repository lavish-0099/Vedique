import React, { useState } from 'react';
import { CheckCircle2, Star, ShieldCheck, HeartPulse, PhoneCall, Sparkles, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Pricing({ testimonials, onAddLead }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', preferredTime: 'Morning (10 AM - 1 PM)' });
  const [submitted, setSubmitted] = useState(false);

  const plans = [
    {
      id: 'plan-1',
      title: 'Vedique Starter',
      duration: '1 Month Kickstart',
      price: '₹3,999',
      originalPrice: '₹5,999',
      tag: 'Ideal for Weight & Gut Reset',
      features: [
        '1-on-1 Ayurvedic Doctor Consultation',
        'Personalized Prakriti Meal Plan',
        'Weekly Weight & Digestion Review',
        '1 Herbal Detox Elixir Included',
        'WhatsApp Support (Mon - Sat)'
      ]
    },
    {
      id: 'plan-2',
      title: 'Vedique Transform',
      duration: '3 Months Program',
      price: '₹9,999',
      originalPrice: '₹14,999',
      tag: 'Most Popular for PCOS & Diabetes',
      popular: true,
      features: [
        'Everything in Starter Plan',
        'Unlimited BAMS Doctor Call Access',
        'Full PCOS / Sugar Reversal Protocol',
        '3 Custom Herbal Elixir Kits Included',
        'Blood Report Analysis & Monitoring',
        'Dr. Shikha’s VIP Recipe E-Book'
      ]
    },
    {
      id: 'plan-3',
      title: 'Vedique Mastery',
      duration: '6 Months Complete Healing',
      price: '₹16,999',
      originalPrice: '₹24,999',
      tag: 'Complete Metabolic Reversal',
      features: [
        'Everything in Transform Plan',
        'Senior MD Doctor Dedicated Management',
        'Family Health Assessment (2 Members)',
        '6 Months Herbal Formulations Supply',
        'Priority Direct WhatsApp Doctor Line',
        'Lifetime Maintenance Guide'
      ]
    }
  ];

  const handleOpenConsultModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
    setSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 60 });
    onAddLead({
      id: `lead-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      goal: `Pricing Plan Request: ${selectedPlan ? selectedPlan.title : 'General Call'}`,
      prakritiResult: 'Pending Consultation',
      dateSubmitted: new Date().toISOString().split('T')[0],
      whatsappJoined: true,
      status: 'Call Requested'
    });
  };

  return (
    <div className="pricing-page">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <span className="badge-gold">Transparent Health Investment</span>
          <h1 className="hero-title">Choose Your Vedique Healing Plan</h1>
          <p className="hero-sub">No Hidden Charges • Guided by Qualified BAMS Ayurvedic Doctors</p>
        </div>
      </section>

      {/* 1. TRUST SECTION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Section 1: Trust & Reliability</span>
            <h2 className="section-title">A Journey of Proven Healing</h2>
            <p className="section-subtitle">How Vedique Diet helps you achieve sustainable health</p>
          </div>

          <div className="trust-grid">
            <div className="trust-card glass-card">
              <ShieldCheck className="text-gold mb-10" size={32} />
              <h3>ISO Certified Clinical Protocol</h3>
              <p>Every meal plan and herb is clinically tested under Ranfort Wellness Pvt. Ltd. quality standards.</p>
            </div>
            <div className="trust-card glass-card">
              <HeartPulse className="text-gold mb-10" size={32} />
              <h3>Root Cause Reversal</h3>
              <p>We target cellular inflammation, metabolic sluggishness, and insulin resistance naturally.</p>
            </div>
            <div className="trust-card glass-card">
              <Star className="text-gold mb-10" size={32} />
              <h3>98.4% Patient Satisfaction</h3>
              <p>Over 50,000 satisfied patients across India, US, UK, UAE, and 24 other nations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TESTIMONIAL SECTION */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Section 2: Real Patient Reviews</span>
            <h2 className="section-title">Before & After Success Stories</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card glass-card">
                <div className="testimonial-rating">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} className="star-filled" />)}
                </div>
                <div className="testimonial-result-badge">{t.result}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="author-avatar" />
                  <div>
                    <h4 className="author-name">{t.name}</h4>
                    <p className="author-meta">{t.role} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PLAN SECTION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Section 3: Pricing Plans</span>
            <h2 className="section-title">Select Your Custom Wellness Plan</h2>
            <p className="section-subtitle">Click any plan to request an instant Doctor Consultation Call</p>
          </div>

          <div className="plans-grid">
            {plans.map((p) => (
              <div key={p.id} className={`plan-card glass-card ${p.popular ? 'popular-card' : ''}`}>
                {p.popular && <span className="popular-badge">Most Popular</span>}
                <span className="plan-tag">{p.tag}</span>
                <h3 className="plan-title">{p.title}</h3>
                <span className="plan-duration">{p.duration}</span>

                <div className="plan-price-box">
                  <span className="plan-price">{p.price}</span>
                  <span className="plan-old-price">{p.originalPrice}</span>
                </div>

                <ul className="plan-features">
                  {p.features.map((feat, idx) => (
                    <li key={idx}><CheckCircle2 size={16} className="text-gold flex-shrink-0" /> {feat}</li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleOpenConsultModal(p)} 
                  className={p.popular ? 'btn-primary w-full' : 'btn-emerald w-full'}
                >
                  <PhoneCall size={16} /> Choose Plan & Get Call
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION POPUP FORM MODAL (Wireframe Page 6 Requirement) */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
              <X size={20} />
            </button>

            {submitted ? (
              <div className="text-center p-20">
                <CheckCircle2 size={48} className="text-gold mx-auto mb-10" />
                <h3 className="text-2xl font-bold mb-6">Call Request Received!</h3>
                <p>Thank you <strong>{formData.name}</strong>. Our senior Vedique health advisor will call you at <strong>{formData.phone}</strong> during {formData.preferredTime}.</p>
                <button onClick={() => setModalOpen(false)} className="btn-emerald mt-20">
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <span className="badge-gold mb-10 inline-block">Consultation Call Form</span>
                <h2 className="text-2xl font-bold mb-4">
                  Request Call for {selectedPlan ? selectedPlan.title : 'Vedique Plan'}
                </h2>
                <p className="text-muted text-sm mb-20">
                  Fill your details below. Our senior Ayurvedic doctor will call you to explain your plan, analyze your health goals, and answer questions.
                </p>

                <form onSubmit={handleFormSubmit} className="flex flex-col gap-14">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number for Call *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="ramesh@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label>Preferred Time for Call</label>
                    <select 
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                    >
                      <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                      <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary w-full mt-10">
                    <PhoneCall size={16} /> Request Free Consultation Call
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .page-hero { background: linear-gradient(135deg, #07231a, #0d382b); color: #ffffff; padding: 60px 0; text-align: center; }
        .hero-sub { color: var(--accent-gold); font-size: 1.1rem; margin-top: 8px; }
        .trust-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-top: 30px; }
        .trust-card { padding: 28px; text-align: center; }
        .trust-card h3 { font-size: 1.15rem; margin-bottom: 8px; }
        .trust-card p { font-size: 0.88rem; color: var(--text-muted); }
        .plans-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 30px; }
        .plan-card { padding: 32px; position: relative; display: flex; flex-direction: column; }
        .popular-card { border: 2px solid var(--accent-gold); background: #ffffff; transform: scale(1.03); }
        .popular-badge { position: absolute; top: -14px; right: 24px; background: var(--accent-gold); color: #07231a; font-weight: 800; font-size: 0.78rem; padding: 4px 14px; border-radius: 12px; }
        .plan-tag { font-size: 0.78rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase; margin-bottom: 6px; }
        .plan-title { font-size: 1.5rem; }
        .plan-duration { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px; }
        .plan-price-box { margin-bottom: 20px; }
        .plan-price { font-size: 2.2rem; font-weight: 800; color: var(--primary-emerald); }
        .plan-old-price { text-decoration: line-through; color: #999; font-size: 1.1rem; margin-left: 10px; }
        .plan-features { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; flex-grow: 1; }
        .plan-features li { display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: var(--text-dark); }
        .w-full { width: 100%; justify-content: center; }
        .modal-close-btn { position: absolute; top: 16px; right: 16px; background: none; color: var(--text-muted); }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .gap-14 { gap: 14px; }
        .mt-10 { margin-top: 10px; }
        .mb-20 { margin-bottom: 20px; }
      `}</style>
    </div>
  );
}
