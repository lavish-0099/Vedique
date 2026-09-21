import React, { useState } from 'react';
import {
  Sparkles, CheckCircle2, ArrowRight, Star, Heart, Shield, Award,
  Users, Stethoscope, BookOpen, MessageSquare, ChevronRight, Play, ShoppingBag, Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Home({
  products,
  doctors,
  caseStudies,
  blogs,
  testimonials,
  setActiveTab,
  onAddLead
}) {
  const handleViewProduct = (productId) => {
    setActiveTab(`product-${productId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // New User Multi-step Form State (Page 1 Wireframe)
  const [newUserStep, setNewUserStep] = useState(1);
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    phone: '',
    primaryGoal: 'Weight Loss & Fat Reduction',
    healthIssue: 'PCOS / Hormonal Imbalance',
    joinWhatsapp: true
  });
  const [newUserSubmitted, setNewUserSubmitted] = useState(false);

  const handleNewUserSubmit = (e) => {
    e.preventDefault();
    if (newUserStep < 3) {
      setNewUserStep(newUserStep + 1);
    } else {
      setNewUserSubmitted(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      onAddLead({
        id: `lead-${Date.now()}`,
        name: newUserData.name,
        email: newUserData.email,
        phone: newUserData.phone,
        goal: `${newUserData.primaryGoal} (${newUserData.healthIssue})`,
        prakritiResult: 'Pending Assessment',
        dateSubmitted: new Date().toISOString().split('T')[0],
        whatsappJoined: newUserData.joinWhatsapp,
        status: '7-Day Plan Sent'
      });
    }
  };

  return (
    <div className="homepage">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="section-tag">
              <Sparkles size={14} /> 5,000-Year Ayurvedic Science + Modern Clinical Nutrition
            </div>
            <h1 className="hero-title">
              Heal Your Root Cause with <span className="gold-gradient-text">Vedique Diet</span>
            </h1>
            <p className="hero-description">
              Pioneered by <strong>Dr. Shikha Sharma</strong>, the Vedique Diet transforms metabolic health, reverses PCOS & Type-2 Diabetes, and achieves natural weight loss without starvation or crash diets.
            </p>

            <div className="hero-ctas">
              <button
                onClick={() => setActiveTab('prakriti')}
                className="btn-primary pulse-glow"
              >
                <Sparkles size={18} /> Start Free Prakriti Analysis <ArrowRight size={18} />
              </button>
              <button
                onClick={() => setActiveTab('vedique-diet')}
                className="btn-outline"
              >
                Explore Vedique Science
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">50,000+</span>
                <span className="stat-label">Patients Transformed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-num">98.4%</span>
                <span className="stat-label">PCOS & Diabetes Success Rate</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-num">22+ Yrs</span>
                <span className="stat-label">Clinical Excellence</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card-wrapper animate-float">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Shikha Sharma Vedique Diet"
                className="hero-img"
              />
              <div className="floating-badge badge-top-right">
                <Award size={18} className="text-gold" />
                <div>
                  <strong>Doctor Formulated</strong>
                  <p>100% Herbal & Natural</p>
                </div>
              </div>
              <div className="floating-badge badge-bottom-left">
                <Stethoscope size={18} className="text-gold" />
                <div>
                  <strong>Personalized Dosha Plan</strong>
                  <p>Vata • Pitta • Kapha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT SECTION (Top Products on Display) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Vedique Store Showcase</span>
            <h2 className="section-title">Top Vedique Formulations</h2>
            <p className="section-subtitle">Doctor-curated herbal elixirs and clinical supplements to accelerate your health journey.</p>
          </div>

          <div className="products-grid">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="product-card glass-card">
                {product.tag && <span className="product-badge">{product.tag}</span>}
                <div className="product-img-box" onClick={() => handleViewProduct(product.id)} style={{ cursor: 'pointer' }}>
                  <img src={product.image} alt={product.title} className="product-img" />
                  <button
                    onClick={(e) => { e.stopPropagation(); handleViewProduct(product.id); }}
                    className="quick-view-btn"
                  >
                    <Eye size={16} /> Quick View
                  </button>
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title" onClick={() => handleViewProduct(product.id)} style={{ cursor: 'pointer' }}>{product.title}</h3>
                  <div className="product-rating">
                    <Star size={14} className="star-filled" />
                    <span>{product.rating} ({product.reviewsCount} reviews)</span>
                  </div>
                  <div className="product-price-row">
                    <div>
                      <span className="price-current">₹{product.price}</span>
                      <span className="price-old">₹{product.originalPrice}</span>
                    </div>
                    <button
                      onClick={() => handleViewProduct(product.id)}
                      className="btn-emerald btn-sm"
                    >
                      <ShoppingBag size={14} /> View Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-30">
            <button onClick={() => setActiveTab('products')} className="btn-outline">
              View All Products <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 3. VEDIQUE STORY SECTION (About Dr. Shikha Sharma) */}
      <section className="section-padding bg-cream">
        <div className="container story-grid">
          <div className="story-img-col">
            <div className="story-frame">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                alt="Dr. Shikha Sharma"
                className="story-img"
              />
              <div className="story-experience-card">
                <span className="exp-num">22+</span>
                <span className="exp-text">Years of Vedic Clinical Research</span>
              </div>
            </div>
          </div>

          <div className="story-content-col">
            <span className="section-tag">Vedique Story</span>
            <h2 className="section-title">Meet Dr. Shikha Sharma</h2>
            <p className="story-text">
              Dr. Shikha Sharma is a renowned medical doctor and Ayurvedic wellness visionary who graduated from the prestigious Maulana Azad Medical College (Delhi). Over two decades ago, she realized that modern pharmaceutical suppression alone could not cure chronic lifestyle diseases like PCOS, Diabetes, and Obesity.
            </p>
            <p className="story-text">
              By combining ancient Ayurvedic Prakriti mapping with clinical nutritionist precision, she birthed the <strong>Vedique Diet</strong> system—a groundbreaking methodology that treats the root cause rather than temporary symptoms.
            </p>

            <ul className="story-bullets">
              <li><CheckCircle2 className="text-gold flex-shrink-0" size={18} /> Personalized nutrition tailored to your genetic Vata, Pitta, and Kapha constitution</li>
              <li><CheckCircle2 className="text-gold flex-shrink-0" size={18} /> Zero calorie starvation—uses kitchen herbs and seasonal whole foods</li>
              <li><CheckCircle2 className="text-gold flex-shrink-0" size={18} /> Sustained disease reversal supported by clinical doctor monitoring</li>
            </ul>

            <div className="mt-20">
              <button onClick={() => setActiveTab('dr-shikha')} className="btn-emerald">
                Read Dr. Shikha's Full Story <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIAL SECTION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Real Patient Reviews</span>
            <h2 className="section-title">Stories of Transformation</h2>
            <p className="section-subtitle">Read how thousands recovered their energy, reversed chronic conditions, and reclaimed their vitality.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card glass-card">
                <div className="testimonial-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-filled" />
                  ))}
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

      {/* 5. DOCTORS SECTION */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Clinical Medical Team</span>
            <h2 className="section-title">Consult Our Ayurvedic Physicians</h2>
            <p className="section-subtitle">Experienced BAMS and MD doctors ready to design your custom metabolic health plan.</p>
          </div>

          <div className="doctors-preview-grid">
            {doctors.slice(0, 3).map((doc) => (
              <div key={doc.id} className="doctor-card glass-card">
                <div className="doctor-img-box">
                  <img src={doc.image} alt={doc.name} className="doctor-img" />
                  <span className="experience-pill">{doc.experience}</span>
                </div>
                <div className="doctor-card-body">
                  <h3 className="doctor-name">{doc.name}</h3>
                  <p className="doctor-title">{doc.title}</p>
                  <p className="doctor-specialty"><strong>Specialty:</strong> {doc.specialty}</p>
                  <div className="doctor-fee-row">
                    <span className="doctor-fee">Consultation Fee: ₹{doc.fee}</span>
                    <button
                      onClick={() => setActiveTab(`doctor-${doc.id}`)}
                      className="btn-emerald btn-sm"
                    >
                      Book Slot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-30">
            <button onClick={() => setActiveTab('doctors')} className="btn-outline">
              View All Doctors & Book Appointment <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. CASE STUDY SECTION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Clinical Case Studies</span>
            <h2 className="section-title">Proven Medical Results</h2>
            <p className="section-subtitle">Real patient clinical reports before and after the Vedique protocol.</p>
          </div>

          <div className="case-studies-grid">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="case-card glass-card">
                <div className="case-card-img-box">
                  <img src={cs.image} alt={cs.patientName} className="case-img" />
                  <span className="case-category-tag">{cs.category}</span>
                </div>
                <div className="case-card-content">
                  <span className="case-duration">{cs.duration}</span>
                  <h3 className="case-patient">{cs.patientName}</h3>
                  <p className="case-summary">{cs.summary}</p>
                  <div className="case-metrics-bar">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="metric-box">
                        <span className="metric-val">{m.value}</span>
                        <span className="metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-30">
            <button onClick={() => setActiveTab('case-studies')} className="btn-primary">
              Explore All Case Studies <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. NEW USER SECTION (Multi-Step Form for 7-Day Diet / Book / Prakriti Analysis) */}
      <section className="section-padding new-user-banner">
        <div className="container">
          <div className="new-user-card dark-glass-card">
            <div className="new-user-header">
              <span className="badge-gold">Are You a New User?</span>
              <h2>Get Your Free 7-Day Personalized Diet Plan & Dr. Shikha's E-Book!</h2>
              <p>Fill our quick 3-step wellness query to receive your instant tailored health guide and join our exclusive WhatsApp VIP Community.</p>
            </div>

            {newUserSubmitted ? (
              <div className="success-banner">
                <CheckCircle2 size={48} className="text-gold" />
                <h3>Congratulations, {newUserData.name}!</h3>
                <p>Your Free 7-Day Vedique Diet Plan and Dr. Shikha’s Prakriti E-Book have been sent to <strong>{newUserData.email}</strong>.</p>
                {newUserData.joinWhatsapp && (
                  <div className="whatsapp-join-box">
                    <p>💬 You are also invited to join our Private VIP WhatsApp Group for daily tips!</p>
                    <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="btn-primary btn-sm">
                      Join WhatsApp VIP Community
                    </a>
                  </div>
                )}
                <button onClick={() => setNewUserSubmitted(false)} className="btn-outline text-white mt-15">
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleNewUserSubmit} className="multi-step-form">
                <div className="form-steps-indicator">
                  <div className={`step-dot ${newUserStep >= 1 ? 'active' : ''}`}>1. Info</div>
                  <div className="step-line"></div>
                  <div className={`step-dot ${newUserStep >= 2 ? 'active' : ''}`}>2. Goal</div>
                  <div className="step-line"></div>
                  <div className={`step-dot ${newUserStep >= 3 ? 'active' : ''}`}>3. Community</div>
                </div>

                {newUserStep === 1 && (
                  <div className="form-step-fields">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ananya Sharma"
                        value={newUserData.name}
                        onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="ananya@gmail.com"
                        value={newUserData.email}
                        onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>WhatsApp Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={newUserData.phone}
                        onChange={(e) => setNewUserData({ ...newUserData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {newUserStep === 2 && (
                  <div className="form-step-fields">
                    <div className="form-group">
                      <label>Primary Health Goal *</label>
                      <select
                        value={newUserData.primaryGoal}
                        onChange={(e) => setNewUserData({ ...newUserData, primaryGoal: e.target.value })}
                      >
                        <option value="Weight Loss & Fat Reduction">Weight Loss & Fat Reduction</option>
                        <option value="PCOS / PCOD Cycle Reversal">PCOS / PCOD Cycle Reversal</option>
                        <option value="Type-2 Diabetes & Sugar Control">Type-2 Diabetes & Sugar Control</option>
                        <option value="Bloating, Acidity & IBS Care">Bloating, Acidity & IBS Care</option>
                        <option value="Thyroid & Energy Restoration">Thyroid & Energy Restoration</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Do you have any existing diagnosed condition?</label>
                      <input
                        type="text"
                        placeholder="e.g. Hypothyroidism, Fatty Liver"
                        value={newUserData.healthIssue}
                        onChange={(e) => setNewUserData({ ...newUserData, healthIssue: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {newUserStep === 3 && (
                  <div className="form-step-fields">
                    <div className="whatsapp-checkbox-card">
                      <input
                        type="checkbox"
                        id="joinWhatsappCheck"
                        checked={newUserData.joinWhatsapp}
                        onChange={(e) => setNewUserData({ ...newUserData, joinWhatsapp: e.target.checked })}
                      />
                      <label htmlFor="joinWhatsappCheck">
                        <strong>Yes! Add me to the Vedique VIP WhatsApp Health Community</strong>
                        <p>Receive daily Ayurvedic meal tips, live webinars with Dr. Shikha Sharma, and early access discount codes.</p>
                      </label>
                    </div>
                  </div>
                )}

                <div className="form-nav-buttons">
                  {newUserStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setNewUserStep(newUserStep - 1)}
                      className="btn-outline text-white"
                    >
                      Back
                    </button>
                  )}
                  <button type="submit" className="btn-primary">
                    {newUserStep === 3 ? 'Get Free 7-Day Plan & E-Book' : 'Next Step →'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. PRAKRITI ANALYSIS SECTION */}
      <section className="section-padding bg-cream">
        <div className="container prakriti-banner-grid">
          <div className="prakriti-text-side">
            <span className="section-tag">Interactive AI Assessment</span>
            <h2 className="section-title">Discover Your Ayurvedic Prakriti</h2>
            <p className="prakriti-desc">
              Your body constitution is unique. Are you dominant in Vata (Air), Pitta (Fire), or Kapha (Earth)? Take our multi-step Prakriti diagnostic form to instantly unlock your tailored food list and health score.
            </p>
            <div className="prakriti-badges">
              <span className="badge-prakriti vata">Vata (Air & Space)</span>
              <span className="badge-prakriti pitta">Pitta (Fire & Water)</span>
              <span className="badge-prakriti kapha">Kapha (Earth & Water)</span>
            </div>
            <button onClick={() => setActiveTab('prakriti')} className="btn-emerald btn-lg mt-20">
              <Sparkles size={18} /> Launch Full Multi-Step Prakriti Tool
            </button>
          </div>

          <div className="prakriti-preview-box glass-card">
            <h3>Sample Prakriti Breakdown</h3>
            <div className="dosha-meter-row">
              <div className="dosha-meter">
                <span className="dosha-lbl">Pitta (55%)</span>
                <div className="meter-bg"><div className="meter-fill pitta-bg" style={{ width: '55%' }}></div></div>
              </div>
              <div className="dosha-meter">
                <span className="dosha-lbl">Vata (30%)</span>
                <div className="meter-bg"><div className="meter-fill vata-bg" style={{ width: '30%' }}></div></div>
              </div>
              <div className="dosha-meter">
                <span className="dosha-lbl">Kapha (15%)</span>
                <div className="meter-bg"><div className="meter-fill kapha-bg" style={{ width: '15%' }}></div></div>
              </div>
            </div>
            <div className="prakriti-tip-box">
              <strong>Pitta-Vata Recommendation:</strong> Avoid excess spicy/fried foods; consume cooling coconut water, fennel tea, and ghee in the morning.
            </div>
          </div>
        </div>
      </section>

      {/* 9. DR SHIKHA SECTION */}
      <section className="section-padding bg-white">
        <div className="container dr-shikha-landing-teaser dark-glass-card">
          <div className="teaser-content">
            <span className="badge-gold">Dedicated Founder Page</span>
            <h2>Dr. Shikha Sharma's Vision & Publications</h2>
            <p>
              Author of bestsellers, media consultant for national television networks, and founder of Ranfort Wellness Pvt. Ltd. Explore her direct page to view press interviews, podcasts, and personal consultation availability.
            </p>
            <button onClick={() => setActiveTab('dr-shikha')} className="btn-primary">
              Visit Dr. Shikha's Page <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 10. BLOG SECTION */}
      <section className="section-padding bg-cream">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Ayurvedic Wellness Journal</span>
            <h2 className="section-title">Latest Articles & Health Wisdom</h2>
            <p className="section-subtitle">Expert advice on diet, metabolic healing, and lifestyle harmony.</p>
          </div>

          <div className="blogs-grid">
            {blogs.map((b) => (
              <div key={b.id} className="blog-card glass-card">
                <div className="blog-img-box">
                  <img src={b.image} alt={b.title} className="blog-img" />
                  <span className="blog-cat">{b.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>{b.author}</span> • <span>{b.readTime}</span>
                  </div>
                  <h3 className="blog-title">{b.title}</h3>
                  <p className="blog-excerpt">{b.excerpt}</p>
                  <button onClick={() => setActiveTab('blogs')} className="read-more-btn">
                    Read Article <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .homepage {
          overflow-x: hidden;
        }
        .hero-section {
          background: linear-gradient(135deg, #07231a 0%, #0d382b 50%, #03140f 100%);
          color: #ffffff;
          padding: 80px 0 100px 0;
          position: relative;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 50px;
          align-items: center;
        }
        .hero-title {
          font-size: 3.2rem;
          color: #ffffff;
          margin: 16px 0 20px 0;
          letter-spacing: -1px;
        }
        .hero-description {
          font-size: 1.15rem;
          color: #c4ded5;
          margin-bottom: 32px;
          line-height: 1.7;
        }
        .hero-ctas {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(212, 175, 55, 0.2);
          padding: 20px 24px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-num {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--accent-gold);
        }
        .stat-label {
          font-size: 0.78rem;
          color: #a1c4b7;
        }
        .stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(255, 255, 255, 0.15);
        }
        .hero-visual {
          position: relative;
        }
        .visual-card-wrapper {
          position: relative;
          border-radius: 24px;
          padding: 10px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.4), rgba(255,255,255,0.1));
        }
        .hero-img {
          width: 100%;
          height: 440px;
          object-fit: cover;
          border-radius: 20px;
        }
        .floating-badge {
          position: absolute;
          background: rgba(7, 35, 26, 0.9);
          border: 1px solid var(--accent-gold);
          backdrop-filter: blur(12px);
          padding: 12px 18px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }
        .badge-top-right {
          top: -20px;
          right: -20px;
        }
        .badge-bottom-left {
          bottom: -20px;
          left: -20px;
        }
        .floating-badge strong {
          font-size: 0.88rem;
          display: block;
        }
        .floating-badge p {
          font-size: 0.75rem;
          color: var(--accent-gold);
        }
        .text-center {
          text-align: center;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-top: 30px;
        }
        .product-card {
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .product-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--accent-gold);
          color: #07231a;
          font-weight: 700;
          font-size: 0.72rem;
          padding: 4px 10px;
          border-radius: 12px;
          z-index: 2;
        }
        .product-img-box {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.06);
        }
        .quick-view-btn {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(7, 35, 26, 0.85);
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.78rem;
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .product-card:hover .quick-view-btn {
          opacity: 1;
        }
        .product-info {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .product-category {
          font-size: 0.75rem;
          color: var(--accent-gold);
          font-weight: 700;
          text-transform: uppercase;
        }
        .product-title {
          font-size: 1.05rem;
          margin: 6px 0 8px 0;
          height: 2.8em;
          overflow: hidden;
        }
        .product-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 14px;
        }
        .star-filled {
          color: #ffb800;
          fill: #ffb800;
        }
        .product-price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }
        .price-current {
          font-weight: 800;
          font-size: 1.15rem;
          color: var(--primary-emerald);
        }
        .price-old {
          text-decoration: line-through;
          color: #999;
          font-size: 0.85rem;
          margin-left: 6px;
        }
        .mt-30 {
          margin-top: 30px;
        }
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .story-frame {
          position: relative;
        }
        .story-img {
          width: 100%;
          height: 480px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: var(--shadow-lg);
        }
        .story-experience-card {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--primary-emerald);
          color: #ffffff;
          padding: 20px 24px;
          border-radius: 20px;
          border: 2px solid var(--accent-gold);
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .exp-num {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--accent-gold);
        }
        .exp-text {
          font-size: 0.85rem;
          max-width: 120px;
        }
        .story-text {
          color: var(--text-muted);
          margin-bottom: 16px;
          font-size: 1.02rem;
        }
        .story-bullets {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 20px 0;
        }
        .story-bullets li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 0.95rem;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 30px;
        }
        .testimonial-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
        }
        .testimonial-rating {
          display: flex;
          gap: 4px;
          margin-bottom: 10px;
        }
        .testimonial-result-badge {
          background: var(--gold-soft);
          color: #7a5e12;
          font-weight: 700;
          font-size: 0.82rem;
          padding: 4px 12px;
          border-radius: 12px;
          display: inline-block;
          margin-bottom: 14px;
        }
        .testimonial-text {
          font-style: italic;
          color: var(--text-dark);
          margin-bottom: 20px;
          font-size: 0.95rem;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
        }
        .author-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--accent-gold);
        }
        .author-name {
          font-size: 0.95rem;
        }
        .author-meta {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .doctors-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 30px;
        }
        .doctor-card {
          overflow: hidden;
        }
        .doctor-img-box {
          position: relative;
          height: 220px;
        }
        .doctor-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .experience-pill {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(7, 35, 26, 0.85);
          color: var(--accent-gold);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 12px;
        }
        .doctor-card-body {
          padding: 20px;
        }
        .doctor-name {
          font-size: 1.15rem;
        }
        .doctor-title {
          font-size: 0.82rem;
          color: var(--accent-gold);
          font-weight: 700;
          margin-bottom: 8px;
        }
        .doctor-specialty {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .doctor-fee-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-light);
          padding-top: 12px;
        }
        .doctor-fee {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-emerald);
        }
        .case-studies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          margin-top: 30px;
        }
        .case-card {
          overflow: hidden;
        }
        .case-card-img-box {
          position: relative;
          height: 180px;
        }
        .case-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .case-category-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: var(--primary-emerald);
          color: #ffffff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 12px;
        }
        .case-card-content {
          padding: 20px;
        }
        .case-duration {
          font-size: 0.76rem;
          color: var(--accent-gold);
          font-weight: 700;
        }
        .case-patient {
          font-size: 1.1rem;
          margin: 4px 0 10px 0;
        }
        .case-summary {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .case-metrics-bar {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          background: var(--bg-cream);
          padding: 10px;
          border-radius: 12px;
          text-align: center;
        }
        .metric-val {
          display: block;
          font-weight: 800;
          font-size: 0.85rem;
          color: var(--primary-emerald);
        }
        .metric-lbl {
          font-size: 0.68rem;
          color: var(--text-muted);
        }
        .new-user-banner {
          background: linear-gradient(135deg, #07231a, #0d382b);
        }
        .new-user-card {
          padding: 40px;
          max-width: 800px;
          margin: 0 auto;
        }
        .new-user-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .new-user-header h2 {
          color: #ffffff;
          font-size: 2rem;
          margin: 12px 0 10px 0;
        }
        .new-user-header p {
          color: #b0c9bf;
          font-size: 0.98rem;
        }
        .multi-step-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-steps-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .step-dot {
          background: rgba(255, 255, 255, 0.1);
          color: #8aa99e;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.82rem;
          font-weight: 700;
        }
        .step-dot.active {
          background: var(--accent-gold);
          color: #07231a;
        }
        .step-line {
          width: 30px;
          height: 2px;
          background: rgba(255, 255, 255, 0.2);
        }
        .form-step-fields {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-group label {
          display: block;
          font-size: 0.88rem;
          font-weight: 600;
          color: #e2ede8;
          margin-bottom: 6px;
        }
        .form-group input, .form-group select {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
          color: #ffffff;
          font-size: 0.95rem;
          outline: none;
        }
        .form-group input:focus, .form-group select:focus {
          border-color: var(--accent-gold);
        }
        .whatsapp-checkbox-card {
          display: flex;
          gap: 14px;
          background: rgba(18, 140, 126, 0.25);
          border: 1px solid rgba(18, 140, 126, 0.5);
          padding: 20px;
          border-radius: 14px;
        }
        .whatsapp-checkbox-card label strong {
          color: #ffffff;
          font-size: 1rem;
        }
        .whatsapp-checkbox-card label p {
          color: #a4beb5;
          font-size: 0.84rem;
          margin-top: 4px;
        }
        .form-nav-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 10px;
        }
        .success-banner {
          text-align: center;
          padding: 20px;
        }
        .success-banner h3 {
          color: #ffffff;
          font-size: 1.6rem;
          margin: 14px 0 8px 0;
        }
        .success-banner p {
          color: #b0c9bf;
          margin-bottom: 20px;
        }
        .whatsapp-join-box {
          background: rgba(255, 255, 255, 0.1);
          padding: 16px;
          border-radius: 12px;
          margin-bottom: 16px;
        }
        .prakriti-banner-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
        }
        .prakriti-desc {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 20px;
        }
        .prakriti-badges {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .badge-prakriti {
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.82rem;
          font-weight: 700;
        }
        .badge-prakriti.vata { background: #e3f2fd; color: #1565c0; }
        .badge-prakriti.pitta { background: #fff3e0; color: #e65100; }
        .badge-prakriti.kapha { background: #e8f5e9; color: #2e7d32; }
        .prakriti-preview-box {
          padding: 28px;
        }
        .prakriti-preview-box h3 {
          margin-bottom: 20px;
        }
        .dosha-meter-row {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
        .dosha-lbl {
          font-size: 0.85rem;
          font-weight: 700;
        }
        .meter-bg {
          height: 10px;
          background: #e0e0e0;
          border-radius: 5px;
          overflow: hidden;
          margin-top: 4px;
        }
        .meter-fill {
          height: 100%;
          border-radius: 5px;
        }
        .pitta-bg { background: linear-gradient(90deg, #ff9800, #f44336); }
        .vata-bg { background: linear-gradient(90deg, #2196f3, #00bcd4); }
        .kapha-bg { background: linear-gradient(90deg, #4caf50, #8bc34a); }
        .prakriti-tip-box {
          background: var(--gold-soft);
          padding: 14px;
          border-radius: 12px;
          font-size: 0.85rem;
          color: #5c450a;
          border-left: 4px solid var(--accent-gold);
        }
        .dr-shikha-landing-teaser {
          padding: 50px;
          text-align: center;
        }
        .teaser-content h2 {
          color: #ffffff;
          font-size: 2.2rem;
          margin: 14px 0 12px 0;
        }
        .teaser-content p {
          color: #c4ded5;
          max-width: 650px;
          margin: 0 auto 24px auto;
          font-size: 1.05rem;
        }
        .blogs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 30px;
        }
        .blog-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .blog-img-box {
          position: relative;
          height: 190px;
        }
        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .blog-cat {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(7, 35, 26, 0.85);
          color: var(--accent-gold);
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 12px;
        }
        .blog-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .blog-meta {
          font-size: 0.78rem;
          color: var(--text-muted);
          margin-bottom: 8px;
        }
        .blog-title {
          font-size: 1.08rem;
          margin-bottom: 10px;
        }
        .blog-excerpt {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 16px;
        }
        .read-more-btn {
          background: none;
          color: var(--primary-emerald);
          font-weight: 700;
          font-size: 0.88rem;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
        }

        @media (max-width: 900px) {
          .hero-grid, .story-grid, .prakriti-banner-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 2.3rem;
          }
        }
      `}</style>
    </div>
  );
}
