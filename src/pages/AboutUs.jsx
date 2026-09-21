import React from 'react';
import { Leaf, Award, ShieldCheck, HeartPulse, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutUs({ setActiveTab }) {
  return (
    <div className="about-page">
      {/* Banner */}
      <section className="page-hero">
        <div className="container">
          <span className="section-tag">Ranfort Wellness Pvt. Ltd.</span>
          <h1 className="hero-title">Pioneering the Science of Vedique Wellness</h1>
          <p className="hero-sub">Where 5,000 Years of Ayurvedic Heritage Meets Modern Clinical Expertise</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container about-grid">
          <div className="about-text">
            <h2>Our Core Mission & Philosophy</h2>
            <p>
              Founded under the guidance of <strong>Dr. Shikha Sharma</strong>, Vedique Wellness (Ranfort Wellness Pvt. Ltd.) was built to address the global epidemic of chronic lifestyle diseases—including PCOS, Type-2 Diabetes, Obesity, Hypothyroidism, and Gut Dysbiosis.
            </p>
            <p>
              We believe that true healing does not come from suppressing symptoms with lifetime medication. Instead, by identifying an individual’s unique Ayurvedic body constitution (Prakriti) and mapping it against modern clinical nutritional science, we re-ignite metabolic fire (*Agni*) and purge systemic toxins (*Ama*).
            </p>

            <div className="pillars-grid mt-25">
              <div className="pillar-card glass-card">
                <Leaf className="text-gold" size={24} />
                <h3>Prakriti Precision</h3>
                <p>Tailored food combinations designed for your Vata, Pitta, or Kapha genetic bio-identity.</p>
              </div>

              <div className="pillar-card glass-card">
                <ShieldCheck className="text-gold" size={24} />
                <h3>No Crash Starvation</h3>
                <p>Abundant, nourishing meals using herbs and home grains instead of dangerous liquid diets.</p>
              </div>

              <div className="pillar-card glass-card">
                <HeartPulse className="text-gold" size={24} />
                <h3>Medical Supervision</h3>
                <p>Guided by qualified Ayurvedic BAMS doctors and clinical nutritionists every step of the way.</p>
              </div>
            </div>
          </div>

          <div className="about-image-side">
            <div className="about-img-frame">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" 
                alt="Vedique Diet Science" 
                className="about-img"
              />
              <div className="experience-badge">
                <strong>50,000+</strong>
                <span>Lives Transformed Globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream text-center">
        <div className="container">
          <h2 className="section-title">Ready to Start Your Health Transformation?</h2>
          <p className="section-subtitle">Take our quick 2-minute Prakriti diagnostic assessment today.</p>
          <button onClick={() => setActiveTab('prakriti')} className="btn-primary">
            Start Free Prakriti Analysis <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <style>{`
        .page-hero {
          background: linear-gradient(135deg, #07231a, #0d382b);
          color: #ffffff;
          padding: 60px 0;
          text-align: center;
        }
        .hero-sub {
          color: var(--accent-gold);
          font-size: 1.15rem;
          margin-top: 10px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          align-items: center;
        }
        .about-text h2 {
          font-size: 2.2rem;
          margin-bottom: 16px;
        }
        .about-text p {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 14px;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .pillar-card {
          padding: 20px;
        }
        .pillar-card h3 {
          font-size: 1.05rem;
          margin: 10px 0 6px 0;
        }
        .pillar-card p {
          font-size: 0.84rem;
          color: var(--text-muted);
        }
        .about-img-frame {
          position: relative;
        }
        .about-img {
          width: 100%;
          border-radius: 24px;
          height: 440px;
          object-fit: cover;
        }
        .experience-badge {
          position: absolute;
          bottom: -20px;
          left: 20px;
          background: var(--primary-emerald);
          color: #ffffff;
          padding: 16px 24px;
          border-radius: 16px;
          border: 2px solid var(--accent-gold);
          display: flex;
          flex-direction: column;
        }
        .experience-badge strong {
          font-size: 1.6rem;
          color: var(--accent-gold);
        }
        .mt-25 {
          margin-top: 25px;
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
