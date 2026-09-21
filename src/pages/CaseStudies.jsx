import React, { useState } from 'react';
import { Award, ArrowRight } from 'lucide-react';

export default function CaseStudies({ caseStudies, setActiveTab }) {
  const [selectedCat, setSelectedCat] = useState('All');

  const categories = ['All', 'PCOS / PCOD', 'Diabetes Management', 'Thyroid & Gut'];

  const filtered = caseStudies.filter(cs => selectedCat === 'All' || cs.category === selectedCat);

  const handleViewCase = (csId) => {
    setActiveTab(`case-study-${csId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="case-studies-page">
      <section className="page-hero">
        <div className="container text-center">
          <span className="badge-gold">Clinical Outcomes & Evidence</span>
          <h1 className="hero-title">Vedique Clinical Case Studies</h1>
          <p className="hero-sub">Empirical Data & Reversal Metrics from Patient Medical Records</p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container">
          <div className="filter-row glass-card p-16 mb-30">
            <span className="filter-label">Filter by Condition:</span>
            <div className="filter-pills">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`cat-pill ${selectedCat === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="case-studies-list">
            {filtered.map((cs) => (
              <div key={cs.id} className="case-detail-card glass-card">
                <div className="case-header-row">
                  <div>
                    <span className="badge-gold cs-badge">{cs.category}</span>
                    <h2 className="case-patient-name">{cs.patientName}</h2>
                    <p className="case-condition">{cs.condition} • {cs.duration}</p>
                  </div>
                  <div className="weight-badge">
                    Result: {cs.weightLost} Weight Loss
                  </div>
                </div>

                <div className="case-body-grid">
                  <div>
                    <p className="case-summary-text">{cs.summary}</p>
                    <div className="hba1c-box">
                      <h4 className="hba1c-heading">Laboratory Blood Report Changes:</h4>
                      <div className="hba1c-row">
                        <div>
                          <span className="hba1c-label">Baseline Value</span>
                          <p className="hba1c-before">{cs.hba1cBefore}</p>
                        </div>
                        <div className="hba1c-arrow">→</div>
                        <div>
                          <span className="hba1c-label">Post-Vedique Value</span>
                          <p className="hba1c-after">{cs.hba1cAfter}</p>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => handleViewCase(cs.id)} className="btn-emerald read-cs-btn">
                      Read Full Case Study <ArrowRight size={14} />
                    </button>
                  </div>

                  <div className="case-img-box">
                    <img src={cs.image} alt={cs.patientName} className="case-img" onClick={() => handleViewCase(cs.id)} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <button onClick={() => setActiveTab('prakriti')} className="btn-primary">
              Start Your Own Transformation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .page-hero { background: linear-gradient(135deg, #07231a, #0d382b); color: #ffffff; padding: 60px 0; }
        .hero-sub { color: var(--accent-gold); font-size: 1.1rem; margin-top: 8px; }
        .p-16 { padding: 16px; }
        .mb-30 { margin-bottom: 30px; }
        .filter-row { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .filter-label { font-weight: 700; font-size: 0.9rem; white-space: nowrap; }
        .filter-pills { display: flex; gap: 10px; flex-wrap: wrap; }
        .cat-pill { background: #fff; border: 1px solid var(--border-light); color: var(--text-dark); font-weight: 600; font-size: 0.84rem; padding: 6px 16px; border-radius: 20px; transition: all 0.2s; }
        .cat-pill.active { background: var(--primary-emerald); color: #fff; border-color: var(--primary-emerald); }
        .case-studies-list { display: flex; flex-direction: column; gap: 28px; }
        .case-detail-card { padding: 32px; }
        .case-header-row { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
        .cs-badge { display: inline-block; margin-bottom: 8px; }
        .case-patient-name { font-size: 1.8rem; font-weight: 800; margin-bottom: 4px; }
        .case-condition { font-size: 0.92rem; color: var(--accent-gold); font-weight: 700; }
        .weight-badge { background: var(--gold-soft); color: #7a5e12; padding: 8px 18px; border-radius: 20px; font-weight: 700; font-size: 0.88rem; white-space: nowrap; align-self: flex-start; }
        .case-body-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 28px; align-items: center; }
        .case-summary-text { color: var(--text-muted); line-height: 1.75; margin-bottom: 20px; }
        .hba1c-box { background: #fff; padding: 18px; border-radius: 14px; border: 1px solid var(--border-light); margin-bottom: 20px; }
        .hba1c-heading { font-weight: 700; font-size: 0.82rem; color: var(--primary-emerald); margin-bottom: 12px; }
        .hba1c-row { display: flex; gap: 20px; align-items: center; }
        .hba1c-label { font-size: 0.72rem; color: var(--text-muted); display: block; margin-bottom: 3px; }
        .hba1c-before { font-size: 1.3rem; font-weight: 800; color: #d32f2f; }
        .hba1c-after { font-size: 1.3rem; font-weight: 800; color: var(--primary-emerald); }
        .hba1c-arrow { font-size: 1.5rem; color: var(--accent-gold); font-weight: 800; }
        .read-cs-btn { display: inline-flex; align-items: center; gap: 6px; }
        .case-img-box {}
        .case-img { width: 100%; height: 260px; object-fit: cover; border-radius: 18px; display: block; }
        @media (max-width: 900px) { .case-body-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
