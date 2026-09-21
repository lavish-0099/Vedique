import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Heart, Zap, ArrowRight, Activity, Flame } from 'lucide-react';

export default function VediqueDiet({ setActiveTab }) {
  const processSteps = [
    {
      num: '01',
      title: 'Prakriti & Dosha Assessment',
      desc: 'We map your metabolic genetics through 24 diagnostic markers to pinpoint Vata, Pitta, or Kapha imbalances.'
    },
    {
      num: '02',
      title: 'Customized Home Food Plan',
      desc: 'Receive your custom meal protocol using Indian kitchen spices, seasonal vegetables, and zero artificial powders.'
    },
    {
      num: '03',
      title: 'Doctor & Nutritionist Coaching',
      desc: 'Weekly 1-on-1 consultations with BAMS doctors to monitor blood markers, gut healing, and weight progression.'
    },
    {
      num: '04',
      title: 'Root-Cause Reversal & Vitality',
      desc: 'Sustain long-term metabolic health, regularize menstrual cycles, and lower HbA1c naturally.'
    }
  ];

  return (
    <div className="vedique-diet-page">
      {/* Banner */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Clinical Ayurvedic Nutrition</span>
          <h1 className="hero-title">The Vedique Diet Philosophy</h1>
          <p className="hero-sub">Science-Backed Metabolic Reversal Crafted by Dr. Shikha Sharma</p>
        </div>
      </section>

      {/* 1. What is Vedique Diet? */}
      <section className="section-padding bg-white">
        <div className="container vedique-section-grid">
          <div className="vedique-text">
            <span className="section-tag">Section 1</span>
            <h2>What is Vedique Diet?</h2>
            <p>
              The <strong>Vedique Diet</strong> is a proprietary therapeutic nutrition protocol that bridges 5,000-year-old Vedic health principles with 21st-century clinical dietetics. Developed by Dr. Shikha Sharma over two decades of clinical research, it views food not merely as calories, but as biological code that directly regulates your hormones, gut microbiome, and cellular longevity.
            </p>
            <p>
              Unlike crash diets that force every person into the same rigid keto or low-carb template, the Vedique Diet customizes every single meal based on your individual **Prakriti** (Vata, Pitta, or Kapha) and current metabolic state (*Agni*).
            </p>
          </div>

          <div className="vedique-card glass-card">
            <h3 className="text-gold mb-10"><Sparkles size={20} className="inline mr-2" /> What You Get in the Vedique Diet:</h3>
            <ul className="vedique-list">
              <li><CheckCircle2 size={16} className="text-gold" /> Personalized weekly food charts tailored to your kitchen</li>
              <li><CheckCircle2 size={16} className="text-gold" /> Targeted Ayurvedic herbal formulations for Agni reset</li>
              <li><CheckCircle2 size={16} className="text-gold" /> Dedicated BAMS Doctor consultation & progress tracking</li>
              <li><CheckCircle2 size={16} className="text-gold" /> Comprehensive Prakriti diagnostic report & E-Books</li>
              <li><CheckCircle2 size={16} className="text-gold" /> Reversal roadmap for PCOS, Diabetes, Fatty Liver & Thyroid</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. Why Vedique Diet Is Different? */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Section 2</span>
            <h2 className="section-title">Why Vedique Diet Is Different?</h2>
            <p className="section-subtitle">Comparing traditional dieting vs. the Vedique scientific approach</p>
          </div>

          <div className="comparison-table-wrapper glass-card">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Generic Crash / Calorie Diets</th>
                  <th className="highlight-col">Vedique Diet Protocol</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Core Approach</strong></td>
                  <td>Treats everyone with identical calorie deficit</td>
                  <td className="highlight-col"><strong>Personalized to your unique Prakriti (Dosha)</strong></td>
                </tr>
                <tr>
                  <td><strong>Hunger & Weakness</strong></td>
                  <td>Severe hunger pangs, muscle loss & fatigue</td>
                  <td className="highlight-col"><strong>Abundant nourishing meals, high energy</strong></td>
                </tr>
                <tr>
                  <td><strong>Long-term Rebound</strong></td>
                  <td>90% of weight lost is regained quickly</td>
                  <td className="highlight-col"><strong>Permanent metabolic reset & zero rebound</strong></td>
                </tr>
                <tr>
                  <td><strong>Medical Reversal</strong></td>
                  <td>Ignores underlying hormonal root cause</td>
                  <td className="highlight-col"><strong>Targeted PCOS, Diabetes & Gut healing</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. How Vedique Diet Works? */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Section 3</span>
            <h2 className="section-title">How Vedique Diet Works?</h2>
            <p className="section-subtitle">Our 4-step medical transformation journey</p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="process-card glass-card">
                <span className="process-num">{step.num}</span>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-40">
            <button onClick={() => setActiveTab('prakriti')} className="btn-primary">
              Start Step 1: Free Prakriti Analysis <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background: linear-gradient(135deg, #07231a, #0d382b);
          color: #ffffff;
          padding: 60px 0;
          text-align: center;
        }
        .hero-sub { color: var(--accent-gold); font-size: 1.1rem; margin-top: 8px; }
        .vedique-section-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
        }
        .vedique-text h2 { font-size: 2.2rem; margin-bottom: 14px; }
        .vedique-text p { color: var(--text-muted); font-size: 1.05rem; margin-bottom: 14px; }
        .vedique-card { padding: 28px; }
        .vedique-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .vedique-list li { display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 0.95rem; }
        .mb-10 { margin-bottom: 10px; }
        .comparison-table-wrapper { padding: 10px; overflow-x: auto; margin-top: 20px; }
        .comparison-table { width: 100%; border-collapse: collapse; text-align: left; }
        .comparison-table th, .comparison-table td { padding: 16px 20px; border-bottom: 1px solid var(--border-light); }
        .comparison-table th { background: var(--bg-cream); font-size: 1rem; color: var(--primary-emerald); }
        .highlight-col { background: rgba(212, 175, 55, 0.1); color: var(--primary-emerald); }
        .process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-top: 30px; }
        .process-card { padding: 28px; position: relative; }
        .process-num { font-size: 2.2rem; font-weight: 800; color: var(--accent-gold); opacity: 0.8; display: block; margin-bottom: 10px; }
        .process-title { font-size: 1.15rem; margin-bottom: 8px; }
        .process-desc { font-size: 0.88rem; color: var(--text-muted); }
        .mt-40 { margin-top: 40px; }
        @media (max-width: 900px) { .vedique-section-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
