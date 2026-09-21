import React, { useState } from 'react';
import { Stethoscope, Star, Calendar, ArrowRight, Search, CheckCircle2 } from 'lucide-react';

export default function Doctors({ doctors, setActiveTab }) {
  const [filterSpecialty, setFilterSpecialty] = useState('All');

  const specialties = ['All', 'Metabolic Disorders', 'PCOS & Hormonal', 'Diabetes & Sugar', 'Gut & Thyroid'];

  const filteredDoctors = doctors.filter(doc => {
    if (filterSpecialty === 'All') return true;
    return doc.specialty.toLowerCase().includes(filterSpecialty.toLowerCase().split(' ')[0]);
  });

  return (
    <div className="doctors-page">
      <section className="page-hero">
        <div className="container text-center">
          <span className="badge-gold">Clinical Ayurvedic Roster</span>
          <h1 className="hero-title">Meet Our Medical Team</h1>
          <p className="hero-sub">Experienced BAMS & MD Ayurvedic Physicians & Certified Clinical Nutritionists</p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container">
          {/* Specialty Filter */}
          <div className="specialty-bar glass-card mb-30">
            <span className="filter-lbl">Filter by Department:</span>
            <div className="specialty-pills">
              {specialties.map(s => (
                <button 
                  key={s} 
                  onClick={() => setFilterSpecialty(s)}
                  className={`spec-pill ${filterSpecialty === s ? 'active' : ''}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="doctors-full-grid">
            {filteredDoctors.map((doc) => (
              <div key={doc.id} className="doctor-card glass-card">
                <div className="doc-img-wrapper">
                  <img src={doc.image} alt={doc.name} className="doc-img" />
                  <span className="exp-pill">{doc.experience}</span>
                </div>

                <div className="doc-body">
                  <div className="doc-rating">
                    <Star size={14} className="star-filled" />
                    <span>{doc.rating} ({doc.reviews} verified reviews)</span>
                  </div>

                  <h3 className="doc-name">{doc.name}</h3>
                  <p className="doc-title">{doc.title}</p>
                  <p className="doc-qual">{doc.qualification}</p>

                  <div className="doc-specialty-box">
                    <strong>Primary Expertise:</strong>
                    <p>{doc.specialty}</p>
                  </div>

                  <div className="doc-fee-bar">
                    <div>
                      <span className="fee-label">Consultation Fee</span>
                      <span className="fee-amount">₹{doc.fee}</span>
                    </div>

                    <button 
                      onClick={() => setActiveTab(`doctor-${doc.id}`)} 
                      className="btn-emerald btn-sm"
                    >
                      <Calendar size={14} /> Book Doctor <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-hero { background: linear-gradient(135deg, #07231a, #0d382b); color: #ffffff; padding: 60px 0; }
        .hero-sub { color: var(--accent-gold); font-size: 1.1rem; margin-top: 8px; }
        .specialty-bar { padding: 16px 24px; display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
        .filter-lbl { font-weight: 700; font-size: 0.9rem; color: var(--primary-emerald); }
        .specialty-pills { display: flex; gap: 10px; flex-wrap: wrap; }
        .spec-pill { background: #ffffff; border: 1px solid var(--border-light); padding: 6px 16px; border-radius: 20px; font-size: 0.84rem; font-weight: 600; }
        .spec-pill.active { background: var(--primary-emerald); color: #ffffff; }
        .doctors-full-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .doctor-card { overflow: hidden; display: flex; flex-direction: column; }
        .doc-img-wrapper { position: relative; height: 250px; }
        .doc-img { width: 100%; height: 100%; object-fit: cover; }
        .exp-pill { position: absolute; top: 14px; right: 14px; background: rgba(7, 35, 26, 0.9); color: var(--accent-gold); font-size: 0.76rem; font-weight: 700; padding: 4px 12px; border-radius: 12px; }
        .doc-body { padding: 24px; display: flex; flex-direction: column; flex-grow: 1; }
        .doc-rating { display: flex; align-items: center; gap: 4px; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 6px; }
        .doc-name { font-size: 1.25rem; }
        .doc-title { font-size: 0.82rem; color: var(--accent-gold); font-weight: 700; margin-bottom: 4px; }
        .doc-qual { font-size: 0.78rem; color: var(--text-muted); margin-bottom: 12px; }
        .doc-specialty-box { background: var(--bg-cream); padding: 10px 14px; border-radius: 10px; font-size: 0.84rem; margin-bottom: 20px; }
        .doc-specialty-box strong { color: var(--primary-emerald); display: block; font-size: 0.76rem; text-transform: uppercase; }
        .doc-fee-bar { display: flex; justify-content: space-between; align-items: center; margin-top: auto; border-top: 1px solid var(--border-light); padding-top: 14px; }
        .fee-label { font-size: 0.72rem; color: var(--text-muted); display: block; }
        .fee-amount { font-size: 1.15rem; font-weight: 800; color: var(--primary-emerald); }
        .mb-30 { margin-bottom: 30px; }
      `}</style>
    </div>
  );
}
