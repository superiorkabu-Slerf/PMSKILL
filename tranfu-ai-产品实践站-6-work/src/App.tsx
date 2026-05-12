/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { ResourceDesk } from './components/ResourceDesk';
import { ArticleSection } from './components/ArticleSection';
import { LabTimeline } from './components/LabTimeline';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ProductsPage } from './components/ProductsPage';
import { ResourcesPage } from './components/ResourcesPage';
import { InsightsPage } from './components/InsightsPage';
import { LabPage } from './components/LabPage';
import { CoBuildPage } from './components/CoBuildPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ProductUsePage } from './components/ProductUsePage';
import { ResourceDetailPage } from './components/ResourceDetailPage';
import { InsightDetailPage } from './components/InsightDetailPage';
import { LabDetailPage } from './components/LabDetailPage';
import { StageSummary } from './components/StageSummary';
import { EntrySection } from './components/EntrySection';
import { SocialSection } from './components/SocialSection';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <div className="max-w-[1120px] mx-auto px-6">
        <EntrySection />
        <ProductShowcase />
        <ResourceDesk />
        <ArticleSection
          onNavigate={(page) => {
            if (page === '资讯') navigate('/insights');
            if (page === '需求共建') navigate('/cobuild');
          }}
          onSelectInsight={(id) => navigate(`/insights/${id}`)}
        />
      </div>
      <LabTimeline />
      <div className="max-w-[1120px] mx-auto px-6">
        <StageSummary />
        <FAQSection />
      </div>
      <SocialSection />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-paper text-tx-secondary font-sans antialiased overflow-x-hidden">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/products/:id/use" element={<ProductUsePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/:id" element={<ResourceDetailPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:id" element={<InsightDetailPage />} />
            <Route path="/lab" element={<LabPage />} />
            <Route path="/lab/:id" element={<LabDetailPage />} />
            <Route path="/cobuild" element={<CoBuildPage />} />
          </Routes>
        </main>
        <Footer />
        <div className="version-stamp">
          v1.4 / build 2024.05
        </div>
      </div>
    </BrowserRouter>
  );
}
