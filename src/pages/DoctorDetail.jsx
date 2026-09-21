import React, { useState } from 'react';
import { Calendar, Clock, Award, CheckCircle2, PhoneCall, Star, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import confetti from 'canvas-confetti';

// Mini Calendar Component
function MiniCalendar({ selectedDate, onSelectDate }) {
  const [viewMonth, setViewMonth] = useState(new Date());

  const today = new Date();
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const monthName = viewMonth.toLocaleString('default', { month: 'long' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => setViewMonth(new Date(year, month - 1, 1));
  const nextMonth = () => setViewMonth(new Date(year, month + 1, 1));

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const isSameDay = (d) => {
    if (!selectedDate) return false;
    return selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === d;
  };
  const isPast = (d) => new Date(year, month, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());

  return (
    <div className="mini-calendar">
      <div className="cal-header">
        <button type="button" onClick={prevMonth} className="cal-nav-btn"><ChevronLeft size={16} /></button>
        <span className="cal-month-label">{monthName} {year}</span>
        <button type="button" onClick={nextMonth} className="cal-nav-btn"><ChevronRight size={16} /></button>
      </div>
      <div className="cal-grid-header">
        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <span key={d} className="cal-day-name">{d}</span>)}
      </div>
      <div className="cal-grid">
        {cells.map((d, i) => (
          <button
            key={i}
            type="button"
            className={`cal-cell ${!d ? 'empty' : ''} ${d && isPast(d) ? 'past' : ''} ${d && isSameDay(d) ? 'selected' : ''}`}
            disabled={!d || isPast(d)}
            onClick={() => d && !isPast(d) && onSelectDate(new Date(year, month, d))}
          >
            {d || ''}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function DoctorDetail({ doctor, setActiveTab, onAddLead }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(doctor?.availableSlots?.[0] || '10:00 AM');
  const [patientData, setPatientData] = useState({ name: '', phone: '', email: '', healthIssue: '' });
  const [booked, setBooked] = useState(false);

  if (!doctor) {
    return (
      <div className="section-padding text-center container">
        <h2>Doctor Profile Not Found</h2>
        <button onClick={() => setActiveTab('doctors')} className="btn-emerald mt-20">Back to Doctors</button>
      </div>
    );
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate) {
      alert('Please select an appointment date from the calendar.');
      return;
    }
    setBooked(true);
    confetti({ particleCount: 100, spread: 70 });
    onAddLead({
      id: `lead-${Date.now()}`,
      name: patientData.name,
      email: patientData.email,
      phone: patientData.phone,
      goal: `Appointment: ${doctor.name} • ${selectedDate.toDateString()} @ ${selectedSlot}`,
      prakritiResult: `Concern: ${patientData.healthIssue}`,
      dateSubmitted: new Date().toISOString().split('T')[0],
      whatsappJoined: true,
      status: 'Appointment Confirmed',
    });
  };

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('en-IN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
    : 'No date selected';

  return (
    <div className="doctor-detail-page">
      <div className="container py-30">
        <button onClick={() => setActiveTab('doctors')} className="btn-outline btn-sm mb-20">
          <ArrowLeft size={14} /> Back to Doctor Roster
        </button>

        <div className="doc-detail-grid">
          {/* Left: Doctor Profile */}
          <div className="doc-profile-left">
            <div className="doc-header-card glass-card">
              <div className="doc-main-img-box">
                <img src={doctor.image} alt={doctor.name} className="doc-main-img" />
              </div>
              <div className="doc-main-info">
                <span className="badge-gold">{doctor.experience}</span>
                <h1 className="doc-full-name">{doctor.name}</h1>
                <p className="doc-full-title">{doctor.title}</p>
                <p className="doc-full-qual">{doctor.qualification}</p>
                <div className="doc-rating-badge">
                  <Star size={16} className="star-filled" />
                  <span><strong>{doctor.rating}</strong> ({doctor.reviews} verified reviews)</span>
                </div>
              </div>
            </div>

            <div className="glass-card mt-24 p-28">
              <h2 className="section-title mb-12">About {doctor.name}</h2>
              <p className="text-muted leading-relaxed mb-20">{doctor.bio}</p>

              <h3 className="font-bold text-lg mb-10 text-gold">Key Achievements:</h3>
              <ul className="achievements-list">
                {doctor.achievements?.map((item, idx) => (
                  <li key={idx}><CheckCircle2 size={16} className="text-gold" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Booking Panel */}
          <div className="doc-booking-right">
            <div className="booking-card glass-card">
              <div className="booking-header">
                <span className="fee-badge">Consultation Fee: ₹{doctor.fee}</span>
                <h2>Book Appointment Slot</h2>
                <p className="text-sm text-muted">1-on-1 Video Consultation & Personalized Vedique Plan</p>
              </div>

              {booked ? (
                <div className="booking-success-box text-center">
                  <CheckCircle2 size={52} className="text-gold" style={{ margin: '0 auto 12px', display: 'block' }} />
                  <h3>Appointment Confirmed! 🎉</h3>
                  <p>Your slot with <strong>{doctor.name}</strong> on</p>
                  <p className="booked-date">{formattedDate}</p>
                  <p>at <strong>{selectedSlot}</strong> is booked.</p>
                  <p className="text-xs text-muted" style={{ marginTop: '10px' }}>Details sent to {patientData.phone}</p>
                  <button onClick={() => setBooked(false)} className="btn-outline btn-sm" style={{ marginTop: '16px' }}>
                    Book Another Slot
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="booking-form">
                  {/* Calendar */}
                  <div className="booking-section">
                    <label className="booking-section-label">
                      <Calendar size={14} className="text-gold" /> Select Appointment Date
                    </label>
                    <MiniCalendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
                    {selectedDate && (
                      <div className="selected-date-pill">
                        ✓ {formattedDate}
                      </div>
                    )}
                  </div>

                  {/* Time Slots */}
                  <div className="booking-section">
                    <label className="booking-section-label">
                      <Clock size={14} className="text-gold" /> Select Time Slot
                    </label>
                    <div className="slots-grid">
                      {doctor.availableSlots?.map(slot => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`slot-btn ${selectedSlot === slot ? 'active' : ''}`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Patient Form */}
                  <div className="booking-section">
                    <label className="booking-section-label">Patient Details</label>
                    <div className="form-group mb-10">
                      <label>Full Name *</label>
                      <input required placeholder="e.g. Vikram Sharma" value={patientData.name} onChange={e => setPatientData({ ...patientData, name: e.target.value })} />
                    </div>
                    <div className="form-group mb-10">
                      <label>WhatsApp Number *</label>
                      <input required type="tel" placeholder="+91 9876543210" value={patientData.phone} onChange={e => setPatientData({ ...patientData, phone: e.target.value })} />
                    </div>
                    <div className="form-group mb-10">
                      <label>Email Address *</label>
                      <input required type="email" placeholder="you@email.com" value={patientData.email} onChange={e => setPatientData({ ...patientData, email: e.target.value })} />
                    </div>
                    <div className="form-group mb-20">
                      <label>Primary Health Concern</label>
                      <input placeholder="e.g. Weight loss, PCOS, Diabetes" value={patientData.healthIssue} onChange={e => setPatientData({ ...patientData, healthIssue: e.target.value })} />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Confirm Booking (₹{doctor.fee})
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .py-30 { padding-top: 30px; padding-bottom: 30px; }
        .mb-20 { margin-bottom: 20px; }
        .mb-12 { margin-bottom: 12px; }
        .mb-10 { margin-bottom: 10px; }
        .mt-20 { margin-top: 20px; }
        .mt-24 { margin-top: 24px; }
        .p-28 { padding: 28px; }
        .doc-detail-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; }
        .doc-header-card { padding: 24px; display: flex; gap: 24px; align-items: center; }
        .doc-main-img { width: 140px; height: 140px; border-radius: 20px; object-fit: cover; border: 3px solid var(--accent-gold); }
        .doc-full-name { font-size: 1.8rem; margin: 4px 0; }
        .doc-full-title { color: var(--accent-gold); font-size: 0.9rem; font-weight: 700; }
        .doc-full-qual { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 8px; }
        .doc-rating-badge { display: flex; align-items: center; gap: 6px; font-size: 0.84rem; }
        .star-filled { color: #ffb800; fill: #ffb800; }
        .achievements-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .achievements-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; }
        .text-gold { color: var(--accent-gold); }
        .font-bold { font-weight: 700; }
        .text-lg { font-size: 1.1rem; }
        .booking-card { padding: 28px; }
        .booking-header { margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--border-light); }
        .fee-badge { background: var(--gold-soft); color: #7a5e12; font-weight: 800; font-size: 0.85rem; padding: 4px 14px; border-radius: 12px; display: inline-block; margin-bottom: 8px; }
        .booking-header h2 { font-size: 1.3rem; margin-bottom: 4px; }
        .booking-section { margin-bottom: 20px; }
        .booking-section-label { font-weight: 700; font-size: 0.84rem; display: flex; align-items: center; gap: 6px; margin-bottom: 10px; color: var(--primary-emerald); }
        .slots-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .slot-btn { background: #ffffff; border: 1px solid var(--border-light); padding: 9px 6px; border-radius: 10px; font-size: 0.8rem; font-weight: 600; transition: all 0.2s; }
        .slot-btn.active { background: var(--primary-emerald); color: #fff; border-color: var(--primary-emerald); }
        .slot-btn:hover:not(.active) { border-color: var(--accent-gold); background: var(--gold-soft); }
        .selected-date-pill { background: #e8f5e9; color: #2e7d32; padding: 8px 14px; border-radius: 10px; font-size: 0.82rem; font-weight: 700; margin-top: 10px; border: 1px solid #a5d6a7; }
        .booking-success-box { padding: 20px 0; }
        .booking-success-box h3 { font-size: 1.4rem; margin-bottom: 10px; }
        .booked-date { font-weight: 800; color: var(--primary-emerald); font-size: 1rem; margin: 4px 0; }
        /* Mini Calendar */
        .mini-calendar { background: #fff; border: 1px solid var(--border-light); border-radius: 14px; padding: 14px; }
        .cal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .cal-month-label { font-weight: 800; font-size: 0.92rem; color: var(--primary-emerald); }
        .cal-nav-btn { background: var(--bg-cream); border: 1px solid var(--border-light); width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
        .cal-nav-btn:hover { background: var(--gold-soft); }
        .cal-grid-header { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; margin-bottom: 6px; }
        .cal-day-name { text-align: center; font-size: 0.7rem; font-weight: 700; color: var(--text-muted); padding: 4px 0; }
        .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 3px; }
        .cal-cell { aspect-ratio: 1; border-radius: 8px; font-size: 0.8rem; font-weight: 600; display: flex; align-items: center; justify-content: center; background: none; border: 1px solid transparent; transition: all 0.15s; cursor: pointer; }
        .cal-cell:hover:not(.empty):not(.past):not(.selected) { background: var(--gold-soft); border-color: var(--accent-gold); }
        .cal-cell.selected { background: var(--primary-emerald); color: #fff; border-color: var(--primary-emerald); }
        .cal-cell.past { color: #ccc; cursor: not-allowed; }
        .cal-cell.empty { cursor: default; }
        @media (max-width: 900px) {
          .doc-detail-grid { grid-template-columns: 1fr; }
          .doc-header-card { flex-direction: column; text-align: center; }
        }
      `}</style>
    </div>
  );
}
