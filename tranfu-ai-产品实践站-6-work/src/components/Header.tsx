import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '产品', path: '/products' },
    { name: '资源', path: '/resources' },
    { name: '资讯', path: '/insights' },
    { name: '公开实验室', path: '/lab' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full py-4 transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-border-subtle shadow-sm' : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-inverse text-white flex items-center justify-center font-bold text-lg rounded-sm group-hover:scale-105 transition-transform logo-block">T</div>
          <span className="text-xl serif-heading font-bold tracking-tighter text-tx-primary">TRANFU</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                text-sm font-medium transition-colors relative py-1
                ${isActive ? 'text-tx-primary' : 'text-tx-tertiary hover:text-tx-primary'}
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-tx-primary 
                after:scale-x-0 after:transition-transform after:duration-300
                ${isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            to="/cobuild"
            className="hidden sm:inline-flex h-10 px-5 items-center justify-center bg-inverse text-white text-sm font-medium rounded-radius-button hover:bg-black transition-colors"
          >
            提交需求
          </Link>
          <button 
            className="md:hidden p-2 text-tx-primary hover:bg-surface rounded-radius-button transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-elevated border-b border-border-subtle overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => `text-lg font-bold serif-heading ${isActive ? 'text-accent-alert' : 'text-tx-primary'}`}
                >
                  {item.name}
                </NavLink>
              ))}
              <Link 
                to="/cobuild"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full h-12 flex items-center justify-center bg-inverse text-white rounded-radius-button font-bold"
              >
                提交需求
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
