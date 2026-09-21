import React, { useState } from 'react';
import { Users, FileText, Award, Stethoscope, Plus, Trash2, Edit2, CheckCircle2, Save, X, Package } from 'lucide-react';

export default function AdminDashboard({
  leads,
  blogs,
  caseStudies,
  doctors,
  products,
  onAddBlog, onDeleteBlog,
  onAddCaseStudy, onDeleteCaseStudy,
  onAddDoctor, onDeleteDoctor, onEditDoctor,
  onAddProduct, onDeleteProduct, onEditProduct,
}) {
  const [activeTab, setActiveTab] = useState('userInfo');
  const [leadSearch, setLeadSearch] = useState('');

  // Blog state
  const [newBlog, setNewBlog] = useState({ title: '', category: 'Ayurvedic Science', excerpt: '', content: '' });

  // Case Study state
  const [newCase, setNewCase] = useState({ patientName: '', condition: '', category: 'PCOS / PCOD', weightLost: '', hba1cBefore: '', hba1cAfter: '', summary: '' });

  // Doctor state
  const [newDoc, setNewDoc] = useState({ name: '', title: '', specialty: '', fee: 1500 });
  const [editingDoctorId, setEditingDoctorId] = useState(null);
  const [editDocData, setEditDocData] = useState({});

  // Product state
  const [newProduct, setNewProduct] = useState({ title: '', category: 'Weight & Metabolism', price: '', originalPrice: '', description: '', tag: '', ingredients: '' });
  const [editingProductId, setEditingProductId] = useState(null);
  const [editProductData, setEditProductData] = useState({});

  const filteredLeads = leads.filter(l =>
    l.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
    l.phone.includes(leadSearch) ||
    l.goal.toLowerCase().includes(leadSearch.toLowerCase())
  );

  const startEditDoctor = (doc) => {
    setEditingDoctorId(doc.id);
    setEditDocData({ name: doc.name, title: doc.title, specialty: doc.specialty, fee: doc.fee });
  };

  const saveEditDoctor = (id) => {
    onEditDoctor(id, { ...editDocData, fee: Number(editDocData.fee) });
    setEditingDoctorId(null);
  };

  const startEditProduct = (p) => {
    setEditingProductId(p.id);
    setEditProductData({ title: p.title, category: p.category, price: p.price, originalPrice: p.originalPrice, description: p.description, tag: p.tag || '', ingredients: (p.ingredients || []).join(', ') });
  };

  const saveEditProduct = (id) => {
    onEditProduct(id, {
      ...editProductData,
      price: Number(editProductData.price),
      originalPrice: Number(editProductData.originalPrice),
      ingredients: editProductData.ingredients.split(',').map(s => s.trim()).filter(Boolean),
    });
    setEditingProductId(null);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    onAddProduct({
      id: `prod-${Date.now()}`,
      title: newProduct.title,
      category: newProduct.category,
      price: Number(newProduct.price),
      originalPrice: Number(newProduct.originalPrice),
      description: newProduct.description,
      tag: newProduct.tag,
      ingredients: newProduct.ingredients.split(',').map(s => s.trim()).filter(Boolean),
      rating: 4.8,
      reviewsCount: 0,
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80',
    });
    setNewProduct({ title: '', category: 'Weight & Metabolism', price: '', originalPrice: '', description: '', tag: '', ingredients: '' });
  };

  return (
    <div className="admin-dashboard-page">
      {/* Header */}
      <section className="admin-top-bar">
        <div className="container adm-header-row">
          <div>
            <span className="badge-gold">Ranfort Wellness Internal Admin</span>
            <h1 className="adm-title">Vedique Portal Management</h1>
          </div>
          <div className="admin-status-badge">
            <span className="live-dot"></span> System Live & Syncing
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container">
          {/* Admin Tabs */}
          <div className="admin-nav-tabs glass-card adm-tabs-row">
            {[
              { id: 'userInfo', icon: <Users size={15} />, label: `Leads (${leads.length})` },
              { id: 'products', icon: <Package size={15} />, label: `Products (${(products||[]).length})` },
              { id: 'blogUpdates', icon: <FileText size={15} />, label: `Blogs (${blogs.length})` },
              { id: 'caseUpdates', icon: <Award size={15} />, label: `Case Studies (${caseStudies.length})` },
              { id: 'manageDoctors', icon: <Stethoscope size={15} />, label: `Doctors (${doctors.length})` },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`admin-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* ============= TAB 1: LEADS ============= */}
          {activeTab === 'userInfo' && (
            <div className="glass-card adm-card">
              <div className="adm-card-header">
                <div>
                  <h2 className="adm-section-title">User Information & Patient Inquiries</h2>
                  <p className="adm-section-sub">Real-time leads from forms, Prakriti test & consultations</p>
                </div>
                <input
                  type="text"
                  placeholder="Search by name, phone..."
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  className="adm-search-input"
                />
              </div>
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Patient</th><th>Contact</th><th>Goal / Inquiry</th>
                      <th>Prakriti</th><th>Date</th><th>WhatsApp</th><th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.map(lead => (
                      <tr key={lead.id}>
                        <td><strong>{lead.name}</strong></td>
                        <td><div className="text-xs">{lead.phone}</div><div className="text-xs text-muted">{lead.email}</div></td>
                        <td><span className="text-xs font-semibold">{lead.goal}</span></td>
                        <td><span className="text-xs badge-gold">{lead.prakritiResult}</span></td>
                        <td><span className="text-xs">{lead.dateSubmitted}</span></td>
                        <td>{lead.whatsappJoined ? <span className="text-xs text-emerald font-bold">✓ Yes</span> : <span className="text-xs text-muted">No</span>}</td>
                        <td><span className="status-pill">{lead.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ============= TAB 2: PRODUCTS ============= */}
          {activeTab === 'products' && (
            <div className="adm-two-col">
              {/* Add Product Form */}
              <div className="glass-card adm-card">
                <h2 className="adm-section-title">Add New Product</h2>
                <form onSubmit={handleAddProduct} className="adm-form">
                  <div className="form-group">
                    <label>Product Title *</label>
                    <input required placeholder="e.g. Triphala Detox Capsules" value={newProduct.title} onChange={e => setNewProduct({ ...newProduct, title: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}>
                      {['Weight & Metabolism','Women Health','Gut & Digestion','Teas & Elixirs','Diabetes & Sugar Care','Mind & Immunity'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Sale Price (₹) *</label>
                      <input required type="number" placeholder="999" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label>Original Price (₹) *</label>
                      <input required type="number" placeholder="1499" value={newProduct.originalPrice} onChange={e => setNewProduct({ ...newProduct, originalPrice: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description *</label>
                    <textarea rows={2} required placeholder="Short product description..." value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Tag (e.g. Bestseller, New)</label>
                    <input placeholder="Bestseller" value={newProduct.tag} onChange={e => setNewProduct({ ...newProduct, tag: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Ingredients (comma-separated)</label>
                    <input placeholder="Triphala, Ashwagandha, Neem" value={newProduct.ingredients} onChange={e => setNewProduct({ ...newProduct, ingredients: e.target.value })} />
                  </div>
                  <button type="submit" className="btn-emerald"><Plus size={15} /> Add Product</button>
                </form>
              </div>

              {/* Product List */}
              <div className="glass-card adm-card">
                <h2 className="adm-section-title">All Products ({(products || []).length})</h2>
                <div className="adm-list">
                  {(products || []).map(p => (
                    <div key={p.id} className="adm-list-item">
                      {editingProductId === p.id ? (
                        <div className="edit-inline-form">
                          <input className="edit-input" value={editProductData.title} onChange={e => setEditProductData({ ...editProductData, title: e.target.value })} placeholder="Title" />
                          <div className="edit-row-2">
                            <input className="edit-input" type="number" value={editProductData.price} onChange={e => setEditProductData({ ...editProductData, price: e.target.value })} placeholder="Price" />
                            <input className="edit-input" type="number" value={editProductData.originalPrice} onChange={e => setEditProductData({ ...editProductData, originalPrice: e.target.value })} placeholder="Original Price" />
                          </div>
                          <input className="edit-input" value={editProductData.tag} onChange={e => setEditProductData({ ...editProductData, tag: e.target.value })} placeholder="Tag" />
                          <textarea className="edit-input" rows={2} value={editProductData.description} onChange={e => setEditProductData({ ...editProductData, description: e.target.value })} placeholder="Description" />
                          <div className="edit-actions">
                            <button className="btn-emerald btn-xs" onClick={() => saveEditProduct(p.id)}><Save size={13} /> Save</button>
                            <button className="btn-outline btn-xs" onClick={() => setEditingProductId(null)}><X size={13} /> Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="adm-item-img"><img src={p.image} alt={p.title} /></div>
                          <div className="adm-item-info">
                            <strong className="adm-item-name">{p.title}</strong>
                            <span className="adm-item-sub">₹{p.price} <s style={{color:'#999', fontSize:'0.75rem'}}>₹{p.originalPrice}</s> • {p.category}</span>
                          </div>
                          <div className="adm-item-actions">
                            <button onClick={() => startEditProduct(p)} className="edit-btn"><Edit2 size={14} /></button>
                            <button onClick={() => onDeleteProduct(p.id)} className="delete-btn"><Trash2 size={14} /></button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============= TAB 3: BLOGS ============= */}
          {activeTab === 'blogUpdates' && (
            <div className="adm-two-col">
              <div className="glass-card adm-card">
                <h2 className="adm-section-title">Add New Article</h2>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  onAddBlog({
                    id: `blog-${Date.now()}`,
                    title: newBlog.title,
                    author: 'Dr. Shikha Sharma',
                    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' }),
                    category: newBlog.category,
                    readTime: '5 min read',
                    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
                    excerpt: newBlog.excerpt,
                    content: newBlog.content,
                  });
                  setNewBlog({ title: '', category: 'Ayurvedic Science', excerpt: '', content: '' });
                }} className="adm-form">
                  <div className="form-group"><label>Article Title *</label><input required placeholder="Blog title..." value={newBlog.title} onChange={e => setNewBlog({ ...newBlog, title: e.target.value })} /></div>
                  <div className="form-group"><label>Category</label>
                    <select value={newBlog.category} onChange={e => setNewBlog({ ...newBlog, category: e.target.value })}>
                      {['Ayurvedic Science','Women Health','Gut Health','Metabolic Health'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="form-group"><label>Excerpt *</label><textarea required rows={2} placeholder="Short summary..." value={newBlog.excerpt} onChange={e => setNewBlog({ ...newBlog, excerpt: e.target.value })} /></div>
                  <div className="form-group"><label>Full Content *</label><textarea required rows={5} placeholder="Full article content (supports ### for headings, **bold**)..." value={newBlog.content} onChange={e => setNewBlog({ ...newBlog, content: e.target.value })} /></div>
                  <button type="submit" className="btn-emerald"><Plus size={15} /> Publish Blog</button>
                </form>
              </div>
              <div className="glass-card adm-card">
                <h2 className="adm-section-title">Active Articles ({blogs.length})</h2>
                <div className="adm-list">
                  {blogs.map(b => (
                    <div key={b.id} className="adm-list-item">
                      <div className="adm-item-info">
                        <strong className="adm-item-name">{b.title}</strong>
                        <span className="adm-item-sub">{b.category} • {b.date}</span>
                      </div>
                      <button onClick={() => onDeleteBlog(b.id)} className="delete-btn"><Trash2 size={14} /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============= TAB 4: CASE STUDIES ============= */}
          {activeTab === 'caseUpdates' && (
            <div className="adm-two-col">
              <div className="glass-card adm-card">
                <h2 className="adm-section-title">Add New Case Study</h2>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  onAddCaseStudy({
                    id: `cs-${Date.now()}`,
                    patientName: newCase.patientName,
                    condition: newCase.condition,
                    category: newCase.category,
                    duration: '3 Months Vedique Program',
                    weightLost: newCase.weightLost,
                    hba1cBefore: newCase.hba1cBefore || 'Baseline Report',
                    hba1cAfter: newCase.hba1cAfter || 'Normalized',
                    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
                    summary: newCase.summary,
                    metrics: [{ label: 'Weight Loss', value: newCase.weightLost }],
                  });
                  setNewCase({ patientName: '', condition: '', category: 'PCOS / PCOD', weightLost: '', hba1cBefore: '', hba1cAfter: '', summary: '' });
                }} className="adm-form">
                  <div className="form-group"><label>Patient Name *</label><input required placeholder="e.g. Rahul M., 38 Yrs (Delhi)" value={newCase.patientName} onChange={e => setNewCase({ ...newCase, patientName: e.target.value })} /></div>
                  <div className="form-group"><label>Condition *</label><input required placeholder="e.g. Type-2 Diabetes Reversal" value={newCase.condition} onChange={e => setNewCase({ ...newCase, condition: e.target.value })} /></div>
                  <div className="form-group"><label>Category</label>
                    <select value={newCase.category} onChange={e => setNewCase({ ...newCase, category: e.target.value })}>
                      {['PCOS / PCOD','Diabetes Management','Thyroid & Gut'].map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="form-row-2">
                    <div className="form-group"><label>Before Value</label><input placeholder="HbA1c 9.8%" value={newCase.hba1cBefore} onChange={e => setNewCase({ ...newCase, hba1cBefore: e.target.value })} /></div>
                    <div className="form-group"><label>After Value</label><input placeholder="HbA1c 5.8%" value={newCase.hba1cAfter} onChange={e => setNewCase({ ...newCase, hba1cAfter: e.target.value })} /></div>
                  </div>
                  <div className="form-group"><label>Weight Lost</label><input placeholder="e.g. 12 kg" value={newCase.weightLost} onChange={e => setNewCase({ ...newCase, weightLost: e.target.value })} /></div>
                  <div className="form-group"><label>Case Summary *</label><textarea required rows={3} placeholder="Clinical details..." value={newCase.summary} onChange={e => setNewCase({ ...newCase, summary: e.target.value })} /></div>
                  <button type="submit" className="btn-emerald"><Plus size={15} /> Add Case Study</button>
                </form>
              </div>
              <div className="glass-card adm-card">
                <h2 className="adm-section-title">Managed Cases ({caseStudies.length})</h2>
                <div className="adm-list">
                  {caseStudies.map(cs => (
                    <div key={cs.id} className="adm-list-item">
                      <div className="adm-item-info">
                        <strong className="adm-item-name">{cs.patientName}</strong>
                        <span className="adm-item-sub">{cs.condition} • {cs.weightLost}</span>
                      </div>
                      <button onClick={() => onDeleteCaseStudy(cs.id)} className="delete-btn"><Trash2 size={14} /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============= TAB 5: DOCTORS ============= */}
          {activeTab === 'manageDoctors' && (
            <div className="adm-two-col">
              <div className="glass-card adm-card">
                <h2 className="adm-section-title">Add New Physician</h2>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  onAddDoctor({
                    id: `dr-${Date.now()}`,
                    name: newDoc.name,
                    title: newDoc.title,
                    qualification: 'BAMS (Ayurveda Clinical)',
                    experience: '10+ Years Experience',
                    specialty: newDoc.specialty,
                    rating: 4.9, reviews: 0,
                    fee: Number(newDoc.fee),
                    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
                    bio: 'Ayurvedic specialist dedicated to Vedique clinical dietetics.',
                    availableSlots: ['10:00 AM', '02:00 PM', '05:00 PM'],
                    achievements: ['Vedique Certified Physician']
                  });
                  setNewDoc({ name: '', title: '', specialty: '', fee: 1500 });
                }} className="adm-form">
                  <div className="form-group"><label>Doctor Name *</label><input required placeholder="e.g. Dr. Kavita Roy" value={newDoc.name} onChange={e => setNewDoc({ ...newDoc, name: e.target.value })} /></div>
                  <div className="form-group"><label>Designation *</label><input required placeholder="e.g. Senior Metabolic Consultant" value={newDoc.title} onChange={e => setNewDoc({ ...newDoc, title: e.target.value })} /></div>
                  <div className="form-group"><label>Specialty *</label><input required placeholder="e.g. PCOS & Hormonal Balance" value={newDoc.specialty} onChange={e => setNewDoc({ ...newDoc, specialty: e.target.value })} /></div>
                  <div className="form-group"><label>Consultation Fee (₹) *</label><input required type="number" value={newDoc.fee} onChange={e => setNewDoc({ ...newDoc, fee: e.target.value })} /></div>
                  <button type="submit" className="btn-emerald"><Plus size={15} /> Add Doctor</button>
                </form>
              </div>
              <div className="glass-card adm-card">
                <h2 className="adm-section-title">Doctor Roster ({doctors.length})</h2>
                <div className="adm-list">
                  {doctors.map(d => (
                    <div key={d.id} className="adm-list-item adm-doc-item">
                      {editingDoctorId === d.id ? (
                        <div className="edit-inline-form" style={{ width: '100%' }}>
                          <input className="edit-input" placeholder="Name" value={editDocData.name} onChange={e => setEditDocData({ ...editDocData, name: e.target.value })} />
                          <input className="edit-input" placeholder="Title" value={editDocData.title} onChange={e => setEditDocData({ ...editDocData, title: e.target.value })} />
                          <input className="edit-input" placeholder="Specialty" value={editDocData.specialty} onChange={e => setEditDocData({ ...editDocData, specialty: e.target.value })} />
                          <input className="edit-input" type="number" placeholder="Fee (₹)" value={editDocData.fee} onChange={e => setEditDocData({ ...editDocData, fee: e.target.value })} />
                          <div className="edit-actions">
                            <button className="btn-emerald btn-xs" onClick={() => saveEditDoctor(d.id)}><Save size={13} /> Save</button>
                            <button className="btn-outline btn-xs" onClick={() => setEditingDoctorId(null)}><X size={13} /> Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="doc-list-avatar">{d.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</div>
                          <div className="adm-item-info">
                            <strong className="adm-item-name">{d.name}</strong>
                            <span className="adm-item-sub">{d.specialty} • ₹{d.fee}/session</span>
                          </div>
                          <div className="adm-item-actions">
                            <button onClick={() => startEditDoctor(d)} className="edit-btn"><Edit2 size={14} /></button>
                            <button onClick={() => onDeleteDoctor(d.id)} className="delete-btn"><Trash2 size={14} /></button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        .admin-top-bar { background: #04140f; padding: 24px 0; border-bottom: 2px solid var(--accent-gold); }
        .adm-header-row { display: flex; justify-content: space-between; align-items: center; }
        .adm-title { font-size: 1.6rem; font-weight: 800; color: #fff; margin-top: 4px; }
        .admin-status-badge { background: rgba(212,175,55,0.15); color: var(--accent-gold); padding: 6px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; gap: 8px; }
        .adm-tabs-row { display: flex; flex-wrap: wrap; gap: 8px; padding: 12px; margin-bottom: 28px; }
        .admin-tab-btn { background: #fff; border: 1px solid var(--border-light); padding: 10px 16px; border-radius: 12px; font-size: 0.83rem; font-weight: 700; color: var(--text-dark); display: flex; align-items: center; gap: 6px; transition: all 0.2s; }
        .admin-tab-btn.active { background: var(--primary-emerald); color: #fff; border-color: var(--primary-emerald); }
        .admin-tab-btn:hover:not(.active) { background: var(--bg-cream); }
        .adm-card { padding: 28px; }
        .adm-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
        .adm-section-title { font-size: 1.15rem; font-weight: 800; margin-bottom: 16px; }
        .adm-section-sub { font-size: 0.8rem; color: var(--text-muted); }
        .adm-search-input { padding: 9px 14px; border: 1px solid var(--border-light); border-radius: 10px; font-size: 0.84rem; outline: none; min-width: 240px; }
        .adm-search-input:focus { border-color: var(--accent-gold); }
        .adm-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .adm-form { display: flex; flex-direction: column; gap: 14px; }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .adm-list { display: flex; flex-direction: column; gap: 10px; }
        .adm-list-item { background: #fff; border: 1px solid var(--border-light); border-radius: 12px; padding: 12px 16px; display: flex; align-items: center; gap: 12px; }
        .adm-doc-item { flex-wrap: wrap; }
        .adm-item-img { width: 48px; height: 48px; border-radius: 8px; overflow: hidden; flex-shrink: 0; }
        .adm-item-img img { width: 100%; height: 100%; object-fit: cover; }
        .doc-list-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--primary-emerald); color: var(--accent-gold); font-weight: 800; font-size: 0.88rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .adm-item-info { flex: 1; min-width: 0; }
        .adm-item-name { font-size: 0.88rem; display: block; }
        .adm-item-sub { font-size: 0.75rem; color: var(--text-muted); }
        .adm-item-actions { display: flex; gap: 6px; }
        .edit-btn { background: rgba(212,175,55,0.1); color: var(--accent-gold); border: 1px solid rgba(212,175,55,0.3); padding: 6px 10px; border-radius: 8px; }
        .edit-btn:hover { background: var(--accent-gold); color: #07231a; }
        .delete-btn { background: rgba(211,47,47,0.08); color: #d32f2f; border: 1px solid rgba(211,47,47,0.2); padding: 6px 10px; border-radius: 8px; }
        .delete-btn:hover { background: #d32f2f; color: #fff; }
        .edit-inline-form { display: flex; flex-direction: column; gap: 8px; padding: 4px 0; }
        .edit-input { padding: 8px 12px; border: 1px solid var(--border-light); border-radius: 8px; font-size: 0.84rem; outline: none; width: 100%; }
        .edit-input:focus { border-color: var(--primary-emerald); }
        .edit-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .edit-actions { display: flex; gap: 8px; }
        .btn-xs { padding: 6px 12px; font-size: 0.78rem; }
        .table-responsive { overflow-x: auto; }
        .admin-table { width: 100%; border-collapse: collapse; font-size: 0.84rem; }
        .admin-table th, .admin-table td { padding: 12px 14px; border-bottom: 1px solid var(--border-light); text-align: left; }
        .admin-table th { background: var(--bg-cream); font-weight: 700; color: var(--primary-emerald); }
        .status-pill { background: var(--gold-soft); color: #7a5e12; font-weight: 700; padding: 3px 10px; border-radius: 10px; font-size: 0.72rem; }
        .text-emerald { color: var(--primary-emerald); }
        @media (max-width: 900px) { .adm-two-col { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
