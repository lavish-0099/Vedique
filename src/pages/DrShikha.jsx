import React from 'react';
import { Award, BookOpen, Tv, Stethoscope, CheckCircle2, ArrowRight, Star } from 'lucide-react';

export default function DrShikha({ setActiveTab }) {
  const dr = {
    name: 'Dr. Shikha Sharma',
    title: 'Founder & Chief Clinical Officer, Ranfort Wellness Pvt. Ltd.',
    qualification: 'BAMS (Maulana Azad Medical College, Univ of Delhi)',
    experience: '22+ Years Clinical Experience',
    bio: 'Dr. Shikha Sharma is an internationally acclaimed pioneer in holistic medicine and nutrition science. Over 22 years ago, after graduating from MAMC, she noticed that conventional pharmaceuticals often failed to reverse the root cause of lifestyle illnesses. She founded Vedique Wellness to bring structured, evidence-based Ayurvedic dietetics into modern medical practice.',
    books: [
      { title: 'The Vedique Diet Solution', year: '2021', publisher: 'HarperCollins' },
      { title: '101 Ayurvedic Remedies for PCOS & Diabetes', year: '2019', publisher: 'Random House' },
      { title: 'Eat Right for Your Dosha', year: '2016', publisher: 'Rupa Publications' }
    ],
    media: [
      'Featured Health Expert on NDTV, Times of India & BBC World',
      'Columnist for Hindustan Times & India Today Wellness',
      'Keynote Speaker at World Health Summit & FICCI Healthcare'
    ]
  };

  return (
    <div className="dr-shikha-page">
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container dr-hero-grid">
          <div className="dr-img-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80" 
              alt={dr.name} 
              className="dr-profile-img"
            />
          </div>

          <div className="dr-hero-info">
            <span className="badge-gold">Pioneer of Vedique Science</span>
            <h1 className="dr-name-heading">{dr.name}</h1>
            <p className="dr-qual">{dr.qualification}</p>
            <p className="dr-title-sub">{dr.title}</p>
            <div className="dr-exp-tag">
              <Stethoscope size={16} className="text-gold" /> {dr.experience} • 50,000+ Transformed Patients
            </div>

            <p className="dr-bio-lead">{dr.bio}</p>

            <button onClick={() => setActiveTab('doctors')} className="btn-primary mt-15">
              Book Personal Consultation with Dr. Shikha <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Publications & Books */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Author & Researcher</span>
            <h2 className="section-title">Bestselling Books by Dr. Shikha Sharma</h2>
          </div>

          <div className="books-grid">
            {dr.books.map((b, i) => (
              <div key={i} className="book-card glass-card">
                <BookOpen size={32} className="text-gold mb-10" />
                <h3 className="book-title">{b.title}</h3>
                <p className="book-meta">Published: {b.year} | {b.publisher}</p>
                <div className="book-badge">Verified Bestseller</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Keynote Coverage */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Media Recognition</span>
            <h2 className="section-title">Press, TV & Keynote Speeches</h2>
          </div>

          <div className="media-list glass-card">
            {dr.media.map((item, idx) => (
              <div key={idx} className="media-item">
                <Tv size={20} className="text-gold flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-hero {
          background: linear-gradient(135deg, #07231a, #0d382b);
          color: #ffffff;
          padding: 80px 0;
        }
        .dr-hero-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 50px;
          align-items: center;
        }
        .dr-profile-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 24px;
          border: 3px solid var(--accent-gold);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        }
        .dr-name-heading {
          font-size: 2.8rem;
          color: #ffffff;
          margin: 10px 0 4px 0;
        }
        .dr-qual {
          color: var(--accent-gold);
          font-weight: 700;
          font-size: 1.05rem;
        }
        .dr-title-sub {
          color: #b0c9bf;
          font-size: 0.95rem;
          margin-bottom: 14px;
        }
        .dr-exp-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.85rem;
          margin-bottom: 18px;
        }
        .dr-bio-lead {
          color: #d8e5e0;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .mt-15 { margin-top: 15px; }
        .mb-10 { margin-bottom: 10px; }
        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-top: 30px;
        }
        .book-card {
          padding: 28px;
          text-align: center;
        }
        .book-title {
          font-size: 1.15rem;
          margin-bottom: 6px;
        }
        .book-meta {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        .book-badge {
          display: inline-block;
          background: var(--gold-soft);
          color: #7a5e12;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 12px;
        }
        .media-list {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 800px;
          margin: 30px auto 0 auto;
        }
        .media-item {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--primary-emerald);
        }
        @media (max-width: 900px) {
          .dr-hero-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
