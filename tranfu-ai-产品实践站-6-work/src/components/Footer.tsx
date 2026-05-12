import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data';

const FOOTER_PRODUCTS = PRODUCTS.filter((product) => product.status === '可直接使用').map((product) => ({
  name: product.name,
  path: `/products/${product.id}`,
}));

const FOOTER_LINKS = [
  { label: '首页', path: '/' },
  { label: '产品', path: '/products' },
  { label: '资源', path: '/resources' },
  { label: '资讯', path: '/insights' },
  { label: '公开实验室', path: '/lab' },
  { label: '关于我们', path: '/about' },
];

const FOOTER_CHANNELS = [
  { label: '需求共建', path: '/cobuild' },
  { label: '微信', path: '#' },
  { label: 'GitHub', path: '#' },
  { label: 'X', path: '#' },
  { label: '小红书', path: '#' },
];

export const Footer = () => {
  return (
    <footer className="pt-16 pb-8 border-t border-border-subtle bg-paper">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-10 pb-12">
          <div className="xl:pr-6">
            <Link to="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="w-8 h-8 bg-inverse text-white flex items-center justify-center font-bold text-sm rounded-sm group-hover:scale-105 transition-transform logo-block">
                T
              </div>
              <span className="text-lg font-bold serif-heading text-tx-primary tracking-tighter">TRANFU</span>
            </Link>
            <p className="text-sm text-tx-tertiary leading-relaxed max-w-xs">
              持续上线可直接使用的 AI 产品，也把做产品过程中沉淀出的资源和经验公开出来。
            </p>
          </div>

          <div>
            <div className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest mb-5">
              产品
            </div>
            <div className="space-y-3">
              {FOOTER_PRODUCTS.map((product) => (
                <Link
                  key={product.name}
                  to={product.path}
                  className="group hover-lift flex items-center justify-between gap-4 p-4 rounded-radius-card border border-border-subtle bg-surface"
                >
                  <div className="text-sm font-bold text-tx-primary">{product.name}</div>
                  <ArrowUpRight size={16} className="text-tx-quaternary group-hover:text-tx-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest mb-5">
              页面导航
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="text-sm text-tx-tertiary hover:text-tx-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest mb-5">
              保持联系
            </div>
            <div className="space-y-3">
              {FOOTER_CHANNELS.map((item) =>
                item.path.startsWith('/') ? (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="flex items-center justify-between text-sm text-tx-tertiary hover:text-tx-primary transition-colors border-b border-border-subtle pb-3"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.path}
                    className="flex items-center justify-between text-sm text-tx-tertiary hover:text-tx-primary transition-colors border-b border-border-subtle pb-3"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border-subtle flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-[11px] mono-label text-tx-quaternary uppercase tracking-widest">
            <span>© 2024 TRANFU WORKBENCH</span>
            <span className="hidden md:inline-block opacity-30">|</span>
            <span className="text-[10px] tracking-normal normal-case">浙ICP备2024090101号-1</span>
          </div>
          <div className="text-xs text-tx-quaternary">
            把 AI 从「看过」变成「用上」
          </div>
        </div>
      </div>
    </footer>
  );
};
