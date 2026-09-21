import React, { useState } from 'react';
import { Sparkles, CheckCircle2, RefreshCw, Download, ArrowRight, Share2, Flame, Wind, Mountain } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PrakritiAnalysis({ onAddLead }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCalculated, setIsCalculated] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: '', phone: '', email: '' });

  const questions = [
    {
      id: 'q1',
      title: 'Physical Frame & Body Build',
      subtitle: 'Select the option that best matches your natural body structure:',
      options: [
        { label: 'Lean, thin, tall/short, hard to gain weight', dosha: 'Vata' },
        { label: 'Medium frame, athletic, good muscle tone', dosha: 'Pitta' },
        { label: 'Broad, heavy frame, gains weight easily, slow loss', dosha: 'Kapha' }
      ]
    },
    {
      id: 'q2',
      title: 'Skin Texture & Temperature',
      subtitle: 'How does your skin naturally feel throughout seasons?',
      options: [
        { label: 'Dry, rough, thin, prone to cold hands/feet', dosha: 'Vata' },
        { label: 'Warm, reddish tone, sensitive, prone to acne/freckles', dosha: 'Pitta' },
        { label: 'Smooth, oily, thick, cool to touch', dosha: 'Kapha' }
      ]
    },
    {
      id: 'q3',
      title: 'Appetite & Digestive Pattern',
      subtitle: 'What is your typical hunger & digestion experience?',
      options: [
        { label: 'Irregular hunger, frequent bloating or constipation', dosha: 'Vata' },
        { label: 'Strong, intense hunger; gets irritable if meals delayed', dosha: 'Pitta' },
        { label: 'Slow, steady appetite; can easily skip meals', dosha: 'Kapha' }
      ]
    },
    {
      id: 'q4',
      title: 'Weather & Thermal Preference',
      subtitle: 'Which climate makes you feel most comfortable?',
      options: [
        { label: 'Dislikes cold weather and windy days', dosha: 'Vata' },
        { label: 'Dislikes hot weather; sweats easily and intensely', dosha: 'Pitta' },
        { label: 'Dislikes cold, damp, humid days', dosha: 'Kapha' }
      ]
    },
    {
      id: 'q5',
      title: 'Sleep Depth & Mind Trait',
      subtitle: 'How is your sleep quality and stress reaction?',
      options: [
        { label: 'Light sleep, frequent waking, mind worries/races', dosha: 'Vata' },
        { label: 'Moderate sleep, intense dreams, goal-driven', dosha: 'Pitta' },
        { label: 'Deep heavy sleep, hard to wake up early, calm', dosha: 'Kapha' }
      ]
    }
  ];

  const handleOptionSelect = (qId, dosha) => {
    setAnswers({ ...answers, [qId]: dosha });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    setIsCalculated(true);
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });

    // Calculate score breakdown
    let vataCount = 0;
    let pittaCount = 0;
    let kaphaCount = 0;

    Object.values(answers).forEach(val => {
      if (val === 'Vata') vataCount++;
      if (val === 'Pitta') pittaCount++;
      if (val === 'Kapha') kaphaCount++;
    });

    const total = Object.keys(answers).length || 1;
    const vataPct = Math.round((vataCount / total) * 100);
    const pittaPct = Math.round((pittaCount / total) * 100);
    const kaphaPct = 100 - (vataPct + pittaPct);

    let dominant = 'Vata-Pitta';
    if (vataPct >= pittaPct && vataPct >= kaphaPct) dominant = `Vata Dominant (${vataPct}%)`;
    else if (pittaPct >= vataPct && pittaPct >= kaphaPct) dominant = `Pitta Dominant (${pittaPct}%)`;
    else dominant = `Kapha Dominant (${kaphaPct}%)`;

    onAddLead({
      id: `lead-${Date.now()}`,
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
      goal: 'Prakriti Diagnostic Assessment',
      prakritiResult: `${dominant} [V:${vataPct}% P:${pittaPct}% K:${kaphaPct}%]`,
      dateSubmitted: new Date().toISOString().split('T')[0],
      whatsappJoined: true,
      status: 'Prakriti Report Generated'
    });
  };

  // Score calculation for render
  let vCount = 0, pCount = 0, kCount = 0;
  Object.values(answers).forEach(val => {
    if (val === 'Vata') vCount++;
    if (val === 'Pitta') pCount++;
    if (val === 'Kapha') kCount++;
  });
  const tot = Object.keys(answers).length || 1;
  const vPct = Math.round((vCount / tot) * 100);
  const pPct = Math.round((pCount / tot) * 100);
  const kPct = 100 - (vPct + pPct);

  return (
    <div className="prakriti-page">
      <section className="page-hero">
        <div className="container">
          <span className="badge-gold">AI Ayurvedic Health Diagnostic</span>
          <h1 className="hero-title">Discover Your Unique Prakriti</h1>
          <p className="hero-sub">Answer 5 quick physiological queries to unlock your personalized Dosha & Diet analysis</p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container max-w-800">
          {!isCalculated ? (
            <div className="wizard-card glass-card">
              {/* Progress Indicator */}
              <div className="wizard-header">
                <div className="progress-bar-bg">
                  <div className="progress-fill" style={{ width: `${((currentStep + 1) / (questions.length + 1)) * 100}%` }}></div>
                </div>
                <span className="step-counter">
                  {currentStep < questions.length ? `Question ${currentStep + 1} of ${questions.length}` : 'Final Step: Contact Details'}
                </span>
              </div>

              {currentStep < questions.length ? (
                /* Question Slide */
                <div className="question-slide">
                  <h2 className="q-title">{questions[currentStep].title}</h2>
                  <p className="q-sub">{questions[currentStep].subtitle}</p>

                  <div className="options-list">
                    {questions[currentStep].options.map((opt, idx) => {
                      const isSelected = answers[questions[currentStep].id] === opt.dosha;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleOptionSelect(questions[currentStep].id, opt.dosha)}
                          className={`option-card ${isSelected ? 'selected' : ''}`}
                        >
                          <span className="radio-circle">{isSelected && '✓'}</span>
                          <span className="opt-label">{opt.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="wizard-nav-row">
                    {currentStep > 0 && (
                      <button onClick={() => setCurrentStep(currentStep - 1)} className="btn-outline">
                        Previous
                      </button>
                    )}
                    <button 
                      disabled={!answers[questions[currentStep].id]}
                      onClick={() => setCurrentStep(currentStep + 1)} 
                      className="btn-primary ml-auto"
                    >
                      {currentStep === questions.length - 1 ? 'Enter Details →' : 'Next Question →'}
                    </button>
                  </div>
                </div>
              ) : (
                /* User Details Form Step */
                <form onSubmit={handleCalculate} className="user-details-step">
                  <h2 className="q-title">Generate My Health Analysis Report</h2>
                  <p className="q-sub">Please specify where we should send your detailed 10-page Prakriti PDF & diet guide:</p>

                  <div className="form-group mb-14">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Deepika Verma"
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group mb-14">
                    <label>WhatsApp Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 9876543210"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group mb-20">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="deepika@gmail.com"
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                    />
                  </div>

                  <div className="wizard-nav-row">
                    <button type="button" onClick={() => setCurrentStep(questions.length - 1)} className="btn-outline">
                      Back to Questions
                    </button>
                    <button type="submit" className="btn-primary ml-auto pulse-glow">
                      <Sparkles size={16} /> View Instant Prakriti Results
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* RESULTS VIEW */
            <div className="results-card glass-card">
              <div className="results-header text-center">
                <span className="badge-gold">Diagnostic Report for {userInfo.name}</span>
                <h2>Your Personalized Ayurvedic Prakriti Analysis</h2>
                <p>Based on your metabolic markers calculated by Dr. Shikha Sharma's Vedique system</p>
              </div>

              <div className="dosha-percentage-grid">
                <div className="dosha-stat-box vata-box">
                  <Wind size={28} className="dosha-icon" />
                  <span className="dosha-name">Vata (Air)</span>
                  <span className="dosha-pct">{vPct}%</span>
                </div>

                <div className="dosha-stat-box pitta-box">
                  <Flame size={28} className="dosha-icon" />
                  <span className="dosha-name">Pitta (Fire)</span>
                  <span className="dosha-pct">{pPct}%</span>
                </div>

                <div className="dosha-stat-box kapha-box">
                  <Mountain size={28} className="dosha-icon" />
                  <span className="dosha-name">Kapha (Earth)</span>
                  <span className="dosha-pct">{kPct}%</span>
                </div>
              </div>

              <div className="recommendations-box mt-30">
                <h3 className="mb-10 text-gold">Doctor Recommendations for Your Profile:</h3>
                <ul className="rec-list">
                  <li><strong>Ideal Spices:</strong> Cumin, Fennel, Cardamom, and Fresh Ginger.</li>
                  <li><strong>Foods to Favor:</strong> Warm cooked grains, moong dal, seasonal gourd vegetables, and warm milk with turmeric.</li>
                  <li><strong>Foods to Avoid:</strong> Ice-cold carbonated drinks, excess raw green smoothies, and refined white sugar.</li>
                </ul>
              </div>

              <div className="whatsapp-vip-card mt-24">
                <h3>💬 VIP Health Group Invitation</h3>
                <p>A copy of your PDF report has been dispatched to {userInfo.email}. Join our VIP WhatsApp community for daily guidance.</p>
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="btn-primary btn-sm inline-flex mt-10">
                  Join VIP WhatsApp Community
                </a>
              </div>

              <div className="text-center mt-30">
                <button onClick={() => { setIsCalculated(false); setCurrentStep(0); setAnswers({}); }} className="btn-outline">
                  <RefreshCw size={14} /> Retake Test
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .page-hero { background: linear-gradient(135deg, #07231a, #0d382b); color: #ffffff; padding: 60px 0; text-align: center; }
        .hero-sub { color: var(--accent-gold); font-size: 1.1rem; margin-top: 8px; }
        .max-w-800 { max-width: 800px; margin: 0 auto; }
        .wizard-card, .results-card { padding: 36px; }
        .wizard-header { margin-bottom: 24px; }
        .progress-bar-bg { height: 8px; background: rgba(0,0,0,0.08); border-radius: 4px; overflow: hidden; margin-bottom: 8px; }
        .progress-fill { height: 100%; background: var(--accent-gold); transition: width 0.3s ease; }
        .step-counter { font-size: 0.82rem; color: var(--text-muted); font-weight: 700; }
        .q-title { font-size: 1.6rem; margin-bottom: 6px; }
        .q-sub { color: var(--text-muted); font-size: 0.95rem; margin-bottom: 20px; }
        .options-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }
        .option-card {
          padding: 16px 20px;
          border-radius: 12px;
          border: 1px solid var(--border-light);
          background: #ffffff;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }
        .option-card:hover { border-color: var(--accent-gold); transform: translateX(4px); }
        .option-card.selected { border-color: var(--primary-emerald); background: var(--gold-soft); font-weight: 700; }
        .radio-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 2px solid var(--primary-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          color: var(--primary-emerald);
          flex-shrink: 0;
        }
        .wizard-nav-row { display: flex; align-items: center; }
        .ml-auto { margin-left: auto; }
        .dosha-percentage-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
        .dosha-stat-box { padding: 20px; border-radius: 16px; text-align: center; color: #ffffff; display: flex; flex-direction: column; align-items: center; }
        .vata-box { background: linear-gradient(135deg, #1976d2, #0288d1); }
        .pitta-box { background: linear-gradient(135deg, #f57c00, #d32f2f); }
        .kapha-box { background: linear-gradient(135deg, #388e3c, #689f38); }
        .dosha-pct { font-size: 1.8rem; font-weight: 800; }
        .recommendations-box { background: #ffffff; padding: 24px; border-radius: 16px; border: 1px solid var(--border-light); }
        .rec-list { list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 0.92rem; }
        .whatsapp-vip-card { background: rgba(18, 140, 126, 0.15); border: 1px solid #128c7e; padding: 20px; border-radius: 16px; }
        .mb-14 { margin-bottom: 14px; }
        .mb-20 { margin-bottom: 20px; }
        .mt-30 { margin-top: 30px; }
        .mt-24 { margin-top: 24px; }
      `}</style>
    </div>
  );
}
