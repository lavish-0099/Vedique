import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactUs({ onAddLead }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80 });
    onAddLead({
      id: `lead-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      goal: `Contact Form: ${formData.message}`,
      prakritiResult: 'Direct Inquiry',
      dateSubmitted: new Date().toISOString().split('T')[0],
      whatsappJoined: false,
      status: 'Inquiry Pending'
    });
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container text-center">
          <span className="badge-gold">Get In Touch</span>
          <h1 className="hero-title">Contact Vedique Wellness</h1>
          <p className="hero-sub">Ranfort Wellness Pvt. Ltd. Corporate Headquarters & Patient Care</p>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container contact-grid">
          {/* Contact Information & Map Placeholder */}
          <div className="contact-info-side flex flex-col gap-20">
            <div className="glass-card p-28">
              <h2 className="text-xl font-bold mb-16 text-emerald">Headquarters Address</h2>
              
              <div className="contact-info-list flex flex-col gap-14">
                <div className="flex items-start gap-12 text-sm">
                  <MapPin size={20} className="text-gold flex-shrink-0" />
                  <div>
                    <strong>Ranfort Wellness Pvt. Ltd.</strong>
                    <p className="text-muted">D - 158 B, First Floor, Okhla Phase 1, New Delhi - 110020</p>
                  </div>
                </div>

                <div className="flex items-center gap-12 text-sm">
                  <Phone size={20} className="text-gold flex-shrink-0" />
                  <div>
                    <strong>Phone Support:</strong>
                    <p><a href="tel:+919871100237" className="text-emerald font-bold">+91-9871100237</a></p>
                  </div>
                </div>

                <div className="flex items-center gap-12 text-sm">
                  <Mail size={20} className="text-gold flex-shrink-0" />
                  <div>
                    <strong>Email Inquiries:</strong>
                    <p><a href="mailto:info@vedique.life" className="text-emerald font-bold">info@vedique.life</a></p>
                  </div>
                </div>

                <div className="flex items-center gap-12 text-sm">
                  <Clock size={20} className="text-gold flex-shrink-0" />
                  <div>
                    <strong>Working Hours:</strong>
                    <p className="text-muted">Monday - Saturday (9:30 AM to 6:30 PM IST)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="map-card glass-card p-20 text-center">
              <div className="map-placeholder-box bg-emerald-dark text-white rounded-16 p-30">
                <MapPin size={36} className="text-gold mx-auto mb-10 animate-bounce" />
                <h3 className="font-bold">Okhla Phase 1, New Delhi</h3>
                <p className="text-xs text-gold">Ranfort Wellness Headquarters Clinic</p>
              </div>
            </div>
          </div>

          {/* Contact Form (Page 11 Wireframe Requirement) */}
          <div className="contact-form-side glass-card p-32">
            <h2 className="text-2xl font-bold mb-10">Send Us a Message</h2>
            <p className="text-muted text-sm mb-20">Have questions about our Vedique diet programs, herbal supplements, or doctor appointments?</p>

            {submitted ? (
              <div className="text-center p-20">
                <CheckCircle2 size={48} className="text-gold mx-auto mb-10" />
                <h3 className="text-xl font-bold">Message Sent Successfully!</h3>
                <p className="text-muted text-sm">Thank you <strong>{formData.name}</strong>. Our medical support team will reply to <strong>{formData.email}</strong> within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-emerald btn-sm mt-20">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-14">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Your name..."
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Your Message / Health Inquiry *</label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Write your health query here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send size={16} /> Submit Contact Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .page-hero { background: linear-gradient(135deg, #07231a, #0d382b); color: #ffffff; padding: 60px 0; }
        .hero-sub { color: var(--accent-gold); font-size: 1.1rem; margin-top: 8px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .p-28 { padding: 28px; }
        .p-32 { padding: 32px; }
        .p-20 { padding: 20px; }
        .p-30 { padding: 30px; }
        .gap-20 { gap: 20px; }
        .gap-14 { gap: 14px; }
        .gap-12 { gap: 12px; }
        .text-emerald { color: var(--primary-emerald); }
        .rounded-16 { border-radius: 16px; }
        .animate-bounce { animation: bounce 2s infinite; }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
