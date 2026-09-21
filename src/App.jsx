import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import DrShikha from './pages/DrShikha';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import VediqueDiet from './pages/VediqueDiet';
import Pricing from './pages/Pricing';
import PrakritiAnalysis from './pages/PrakritiAnalysis';
import Doctors from './pages/Doctors';
import DoctorDetail from './pages/DoctorDetail';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import AdminDashboard from './pages/AdminDashboard';
import ContactUs from './pages/ContactUs';
import Policies from './pages/Policies';

// Data
import {
  INITIAL_PRODUCTS,
  INITIAL_DOCTORS,
  INITIAL_CASE_STUDIES,
  INITIAL_BLOGS,
  TESTIMONIALS,
  INITIAL_LEADS
} from './data/mockData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Dynamic Data States
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [doctors, setDoctors] = useState(INITIAL_DOCTORS);
  const [caseStudies, setCaseStudies] = useState(INITIAL_CASE_STUDIES);
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const [leads, setLeads] = useState(INITIAL_LEADS);

  // Handle URL-based admin routing via hash
  useEffect(() => {
    const checkPath = () => {
      const path = window.location.pathname;
      if (path === '/admin') {
        setActiveTab('admin');
      }
    };
    checkPath();
    // Also handle hash-based check
    const hash = window.location.hash;
    if (hash === '#/admin' || window.location.pathname === '/admin') {
      setActiveTab('admin');
    }
  }, []);

  // Intercept typing "/admin" in browser URL approach via keydown listener
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/admin') setActiveTab('admin');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Admin Handlers - Blogs
  const handleAddBlog = (newBlog) => setBlogs([newBlog, ...blogs]);
  const handleDeleteBlog = (id) => setBlogs(blogs.filter(b => b.id !== id));

  // Admin Handlers - Case Studies
  const handleAddCaseStudy = (newCase) => setCaseStudies([newCase, ...caseStudies]);
  const handleDeleteCaseStudy = (id) => setCaseStudies(caseStudies.filter(c => c.id !== id));

  // Admin Handlers - Doctors
  const handleAddDoctor = (newDoc) => setDoctors([...doctors, newDoc]);
  const handleDeleteDoctor = (id) => setDoctors(doctors.filter(d => d.id !== id));
  const handleEditDoctor = (id, updatedFields) => {
    setDoctors(doctors.map(d => d.id === id ? { ...d, ...updatedFields } : d));
  };

  // Admin Handlers - Products
  const handleAddProduct = (newProduct) => setProducts([newProduct, ...products]);
  const handleDeleteProduct = (id) => setProducts(products.filter(p => p.id !== id));
  const handleEditProduct = (id, updatedFields) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedFields } : p));
  };

  // Lead handler
  const handleAddLead = (newLead) => setLeads([newLead, ...leads]);

  // Render current view based on activeTab
  const renderCurrentView = () => {
    if (activeTab === 'home') {
      return (
        <Home
          products={products}
          doctors={doctors}
          caseStudies={caseStudies}
          blogs={blogs}
          testimonials={TESTIMONIALS}
          setActiveTab={setActiveTab}
          onAddLead={handleAddLead}
        />
      );
    }

    if (activeTab === 'about') return <AboutUs setActiveTab={setActiveTab} />;
    if (activeTab === 'dr-shikha') return <DrShikha setActiveTab={setActiveTab} />;

    if (activeTab === 'products') {
      return <Products products={products} setActiveTab={setActiveTab} />;
    }

    // Product Detail Page - internal PDP
    if (activeTab.startsWith('product-')) {
      const productId = activeTab.replace('product-', '');
      const productObj = products.find(p => p.id === productId);
      return (
        <ProductDetail
          product={productObj}
          setActiveTab={setActiveTab}
        />
      );
    }

    if (activeTab === 'vedique-diet') return <VediqueDiet setActiveTab={setActiveTab} />;

    if (activeTab === 'pricing') {
      return <Pricing testimonials={TESTIMONIALS} onAddLead={handleAddLead} />;
    }

    if (activeTab === 'prakriti') return <PrakritiAnalysis onAddLead={handleAddLead} />;

    if (activeTab === 'doctors') {
      return <Doctors doctors={doctors} setActiveTab={setActiveTab} />;
    }

    // Doctor Detail Page
    if (activeTab.startsWith('doctor-')) {
      const docId = activeTab.replace('doctor-', '');
      const docObj = doctors.find(d => d.id === docId);
      return <DoctorDetail doctor={docObj} setActiveTab={setActiveTab} onAddLead={handleAddLead} />;
    }

    if (activeTab === 'case-studies') {
      return <CaseStudies caseStudies={caseStudies} setActiveTab={setActiveTab} />;
    }

    // Case Study Detail Page
    if (activeTab.startsWith('case-study-')) {
      const csId = activeTab.replace('case-study-', '');
      const csObj = caseStudies.find(c => c.id === csId);
      return <CaseStudyDetail caseStudy={csObj} setActiveTab={setActiveTab} />;
    }

    if (activeTab === 'blogs') return <Blogs blogs={blogs} setActiveTab={setActiveTab} />;

    // Blog Detail Page
    if (activeTab.startsWith('blog-')) {
      const blogId = activeTab.replace('blog-', '');
      const blogObj = blogs.find(b => b.id === blogId);
      return <BlogDetail blog={blogObj} setActiveTab={setActiveTab} />;
    }

    // Admin Portal - accessible via URL /admin or typing admin
    if (activeTab === 'admin') {
      return (
        <AdminDashboard
          leads={leads}
          blogs={blogs}
          caseStudies={caseStudies}
          doctors={doctors}
          products={products}
          onAddBlog={handleAddBlog}
          onDeleteBlog={handleDeleteBlog}
          onAddCaseStudy={handleAddCaseStudy}
          onDeleteCaseStudy={handleDeleteCaseStudy}
          onAddDoctor={handleAddDoctor}
          onDeleteDoctor={handleDeleteDoctor}
          onEditDoctor={handleEditDoctor}
          onAddProduct={handleAddProduct}
          onDeleteProduct={handleDeleteProduct}
          onEditProduct={handleEditProduct}
        />
      );
    }

    if (activeTab === 'contact') return <ContactUs onAddLead={handleAddLead} />;

    if (activeTab.startsWith('policy-')) {
      const policyType = activeTab.replace('policy-', '');
      return <Policies initialPolicy={policyType} />;
    }

    // Fallback
    return (
      <Home
        products={products}
        doctors={doctors}
        caseStudies={caseStudies}
        blogs={blogs}
        testimonials={TESTIMONIALS}
        setActiveTab={setActiveTab}
        onAddLead={handleAddLead}
      />
    );
  };

  // Show admin if URL is /admin
  const isAdmin = activeTab === 'admin';

  return (
    <div className="app-main-layout">
      {!isAdmin && <Header activeTab={activeTab} setActiveTab={setActiveTab} />}

      {isAdmin && (
        <div className="admin-back-bar">
          <button onClick={() => setActiveTab('home')} className="admin-exit-btn">
            ← Exit Admin Portal
          </button>
          <span className="admin-url-hint">🔒 Access this portal via <code>/admin</code> URL</span>
        </div>
      )}

      <main className="app-content-body">
        {renderCurrentView()}
      </main>

      {!isAdmin && <Footer setActiveTab={setActiveTab} />}

      <style>{`
        .app-main-layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .app-content-body {
          flex: 1;
        }
        .admin-back-bar {
          background: #04140f;
          border-bottom: 1px solid rgba(212,175,55,0.3);
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .admin-exit-btn {
          background: rgba(212,175,55,0.15);
          color: var(--accent-gold);
          border: 1px solid rgba(212,175,55,0.4);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.84rem;
          font-weight: 700;
        }
        .admin-exit-btn:hover {
          background: var(--accent-gold);
          color: #07231a;
        }
        .admin-url-hint {
          font-size: 0.75rem;
          color: rgba(212,175,55,0.6);
        }
        .admin-url-hint code {
          background: rgba(212,175,55,0.1);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--accent-gold);
        }
      `}</style>
    </div>
  );
}
