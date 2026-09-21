import React from 'react';
import { ArrowLeft, TrendingDown, Award, Heart, ArrowRight, Activity } from 'lucide-react';

export default function CaseStudyDetail({ caseStudy, setActiveTab }) {
  if (!caseStudy) {
    return (
      <div className="section-padding text-center container">
        <h2>Case Study Not Found</h2>
        <p className="text-muted mt-10">This case study may have been moved or deleted.</p>
        <button onClick={() => setActiveTab('case-studies')} className="btn-emerald mt-20">
          <ArrowLeft size={16} /> Back to Case Studies
        </button>
      </div>
    );
  }

  return (
    <div className="cs-detail-page">
      {/* Hero Banner */}
      <section className="cs-hero">
        <div className="container">
          <button onClick={() => setActiveTab('case-studies')} className="back-btn">
            <ArrowLeft size={16} /> Back to All Case Studies
          </button>
          <span className="cs-cat-badge">{caseStudy.category}</span>
          <h1 className="cs-hero-title">{caseStudy.patientName}</h1>
          <p className="cs-condition">{caseStudy.condition}</p>
          <div className="cs-meta-pills">
            <span className="meta-pill"><Activity size={13} /> {caseStudy.duration}</span>
            <span className="meta-pill weight-pill"><TrendingDown size={13} /> {caseStudy.weightLost} Lost</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container cs-img-wrapper">
        <img src={caseStudy.image} alt={caseStudy.patientName} className="cs-featured-img" />
      </div>

      {/* Main Grid */}
      <section className="section-padding bg-cream">
        <div className="container cs-main-grid">
          {/* Story Side */}
          <div className="cs-story-side">
            <div className="glass-card cs-story-card">
              <h2 className="story-heading">Patient's Health Journey</h2>
              <p className="story-text">{caseStudy.summary}</p>

              <div className="timeline-section">
                <h3 className="timeline-heading">Treatment Timeline</h3>
                <div className="timeline-steps">
                  <div className="tl-step">
                    <div className="tl-dot tl-dot-red"></div>
                    <div>
                      <strong>Week 1-2: Assessment</strong>
                      <p>Prakriti mapping, blood reports analysis, and initial Vedique diet plan design.</p>
                    </div>
                  </div>
                  <div className="tl-step">
                    <div className="tl-dot tl-dot-orange"></div>
                    <div>
                      <strong>Month 1: Gut Reset</strong>
                      <p>Agni rekindling protocol with targeted herbal formulations and lifestyle adjustments.</p>
                    </div>
                  </div>
                  <div className="tl-step">
                    <div className="tl-dot tl-dot-gold"></div>
                    <div>
                      <strong>Month 2-3: Active Reversal</strong>
                      <p>Steady metabolic correction, weight reduction, and blood marker improvement.</p>
                    </div>
                  </div>
                  <div className="tl-step">
                    <div className="tl-dot tl-dot-green"></div>
                    <div>
                      <strong>Final Phase: Sustained Health</strong>
                      <p>Maintenance protocol and long-term Vedique lifestyle integration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Side */}
          <div className="cs-metrics-side">
            {/* Key Metrics */}
            <div className="glass-card cs-metrics-card">
              <h3 className="metrics-heading"><Award size={18} className="text-gold" /> Clinical Outcome Metrics</h3>
              <div className="metrics-stacked">
                {caseStudy.metrics.map((m, i) => (
                  <div key={i} className="metric-item-large">
                    <span className="metric-val-large">{m.value}</span>
                    <span className="metric-lbl-large">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Before / After */}
            <div className="before-after-card glass-card">
              <h3 className="ba-heading"><Activity size={18} className="text-gold" /> Blood Report: Before vs After</h3>
              <div className="ba-compare-row">
                <div className="ba-box ba-before">
                  <span className="ba-label">Before Vedique</span>
                  <span className="ba-value">{caseStudy.hba1cBefore}</span>
                </div>
                <div className="ba-arrow">
                  <ArrowRight size={24} className="text-gold" />
                </div>
                <div className="ba-box ba-after">
                  <span className="ba-label">After Vedique</span>
                  <span className="ba-value after-val">{caseStudy.hba1cAfter}</span>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="cs-disclaimer">
              <strong>* Disclaimer:</strong> Individual results may vary. These results were achieved under the supervision of qualified Ayurvedic doctors with consistent dietary adherence.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cs-cta-section">
        <div className="container text-center">
          <Heart size={32} className="cta-heart" />
          <h2>Ready to Write Your Own Success Story?</h2>
          <p>Take our free Prakriti analysis and receive your personalized Vedique health roadmap today.</p>
          <button onClick={() => setActiveTab('prakriti')} className="btn-primary mt-20">
            Start Your Transformation <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <style>{`
        .cs-hero { background: linear-gradient(135deg, #07231a, #0d382b); color: #fff; padding: 50px 0 40px; }
        .back-btn { background: rgba(255,255,255,0.1); color: #d8e5e0; border: 1px solid rgba(255,255,255,0.15); padding: 8px 16px; border-radius: 20px; font-size: 0.84rem; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; margin-bottom: 24px; }
        .back-btn:hover { background: rgba(255,255,255,0.2); }
        .cs-cat-badge { display: inline-block; background: rgba(212,175,55,0.2); color: var(--accent-gold); border: 1px solid rgba(212,175,55,0.4); font-size: 0.78rem; font-weight: 700; padding: 5px 14px; border-radius: 20px; margin-bottom: 14px; }
        .cs-hero-title { font-size: 2.4rem; color: #fff; margin-bottom: 8px; }
        .cs-condition { color: var(--accent-gold); font-size: 1.1rem; font-weight: 600; margin-bottom: 20px; }
        .cs-meta-pills { display: flex; gap: 12px; flex-wrap: wrap; }
        .meta-pill { background: rgba(255,255,255,0.1); color: #d8e5e0; padding: 6px 14px; border-radius: 20px; font-size: 0.82rem; display: flex; align-items: center; gap: 6px; }
        .weight-pill { background: rgba(212,175,55,0.2); color: var(--accent-gold); }
        .cs-img-wrapper { margin-top: 0; }
        .cs-featured-img { width: 100%; height: 420px; object-fit: cover; border-radius: 20px; display: block; box-shadow: var(--shadow-lg); }
        .cs-main-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 32px; }
        .cs-story-card { padding: 32px; }
        .story-heading { font-size: 1.5rem; margin-bottom: 14px; }
        .story-text { color: var(--text-muted); line-height: 1.8; margin-bottom: 28px; }
        .timeline-heading { font-size: 1.1rem; margin-bottom: 18px; color: var(--primary-emerald); }
        .timeline-steps { display: flex; flex-direction: column; gap: 20px; }
        .tl-step { display: flex; gap: 14px; align-items: flex-start; }
        .tl-dot { width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0; margin-top: 4px; }
        .tl-dot-red { background: #ef5350; }
        .tl-dot-orange { background: #ff9800; }
        .tl-dot-gold { background: var(--accent-gold); }
        .tl-dot-green { background: #4caf50; }
        .tl-step strong { font-size: 0.92rem; display: block; margin-bottom: 3px; }
        .tl-step p { font-size: 0.84rem; color: var(--text-muted); }
        .cs-metrics-card { padding: 28px; margin-bottom: 20px; }
        .metrics-heading { font-size: 1rem; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
        .metrics-stacked { display: flex; flex-direction: column; gap: 14px; }
        .metric-item-large { background: var(--bg-cream); border-radius: 14px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; }
        .metric-val-large { font-size: 1.25rem; font-weight: 800; color: var(--primary-emerald); }
        .metric-lbl-large { font-size: 0.82rem; color: var(--text-muted); font-weight: 600; }
        .before-after-card { padding: 24px; margin-bottom: 16px; }
        .ba-heading { font-size: 1rem; margin-bottom: 18px; display: flex; align-items: center; gap: 8px; }
        .ba-compare-row { display: flex; align-items: center; gap: 14px; }
        .ba-box { flex: 1; border-radius: 14px; padding: 16px; text-align: center; }
        .ba-before { background: #ffebee; border: 1px solid #ef9a9a; }
        .ba-after { background: #e8f5e9; border: 1px solid #a5d6a7; }
        .ba-label { font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 4px; }
        .ba-value { font-size: 1.2rem; font-weight: 800; color: #c62828; display: block; }
        .after-val { color: #2e7d32 !important; }
        .ba-arrow { display: flex; align-items: center; }
        .cs-disclaimer { font-size: 0.76rem; color: var(--text-muted); padding: 12px 16px; background: var(--bg-cream); border-radius: 10px; border-left: 3px solid var(--accent-gold); line-height: 1.5; }
        .cs-cta-section { background: linear-gradient(135deg, #07231a, #0d382b); color: #fff; padding: 70px 0; text-align: center; }
        .cta-heart { color: var(--accent-gold); margin: 0 auto 16px; display: block; }
        .cs-cta-section h2 { color: #fff; font-size: 2rem; margin-bottom: 10px; }
        .cs-cta-section p { color: #b0c9bf; margin-bottom: 0; }
        .text-gold { color: var(--accent-gold); }
        .mt-10 { margin-top: 10px; }
        .mt-20 { margin-top: 20px; }
        @media (max-width: 900px) {
          .cs-main-grid { grid-template-columns: 1fr; }
          .cs-hero-title { font-size: 1.7rem; }
        }
      `}</style>
    </div>
  );
}
