import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';

export const ProductShowcase = () => {
  const navigate = useNavigate();
  const availableProducts = PRODUCTS.filter((product) => product.status === '可直接使用');
  const featured = availableProducts[0];
  const others = availableProducts.slice(1, 3);

  if (!featured) {
    return null;
  }

  return (
    <section className="pt-32 pb-24">
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-[32px] serif-heading font-bold text-tx-primary">当前推荐产品</h2>
          <span className="mono-label text-[11px] text-tx-quaternary pt-2">/ 现在可用</span>
        </div>
        <p className="text-tx-tertiary text-base">先从已经上线、可以直接使用的 AI 产品开始。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 group"
        >
          <div className="hover-lift relative aspect-[16/10] bg-surface rounded-radius-card overflow-hidden border border-border-subtle group-hover:border-border-strong mb-8 shadow-sm">
            <button type="button" onClick={() => navigate(`/products/${featured.id}`)} className="w-full h-full text-left">
              <img 
                src={featured.image} 
                alt={featured.name} 
                className="w-full h-full object-cover opacity-95 group-hover:scale-[1.02] transition-all duration-700" 
              />
            </button>
            <div className="status-sticker">
              已上线
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="mono-label text-[11px] px-2 py-0.5 border border-tx-tertiary/20 text-tx-tertiary uppercase rounded-radius-badge">
                  已上线
                </span>
                {featured.labels?.map((label: string) => (
                  <span key={label} className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-tertiary rounded-radius-badge">
                    {label}
                  </span>
                ))}
              </div>
              <button type="button" onClick={() => navigate(`/products/${featured.id}`)} className="text-left">
                <h3 className="text-[32px] serif-heading font-bold text-tx-primary mb-4 group-hover:text-accent-brand transition-colors">
                  {featured.name}
                </h3>
              </button>
              <p className="text-tx-secondary text-lg max-w-xl">
                {featured.oneLiner}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() => navigate(featured.link)}
                className="hover-arrow text-tx-tertiary group-hover:text-tx-primary transition-colors flex items-center gap-2 font-medium"
              >
                立即使用 <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={() => navigate(`/products/${featured.id}`)}
                className="text-sm font-medium text-tx-tertiary hover:text-tx-primary transition-colors"
              >
                查看详情
              </button>
            </div>
          </div>
        </motion.div>

        <div className="md:col-span-4 flex flex-col gap-12 pt-0 md:pt-4">
          {others.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border-b border-border-subtle pb-8 last:border-0"
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="mono-label text-[11px] text-accent-practical uppercase">已上线</span>
                {product.labels?.map((label: string) => (
                  <span key={label} className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-tertiary rounded-radius-badge">
                    {label}
                  </span>
                ))}
              </div>
              <button type="button" onClick={() => navigate(`/products/${product.id}`)} className="text-left">
                <h4 className="text-[24px] serif-heading font-bold text-tx-primary mb-3 group-hover:text-accent-brand transition-colors">
                  {product.name}
                </h4>
              </button>
              <p className="text-sm text-tx-tertiary line-clamp-2 leading-relaxed mb-4">
                {product.oneLiner}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate(product.link)}
                  className="hover-arrow inline-flex items-center gap-2 text-sm font-medium text-tx-primary group-hover:underline underline-offset-4"
                >
                  立即使用
                  <ArrowRight size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="text-sm font-medium text-tx-tertiary hover:text-tx-primary transition-colors"
                >
                  查看详情
                </button>
              </div>
            </motion.div>
          ))}
          
          <Link 
            to="/products"
            className="flex items-center justify-center h-[44px] border border-border-default rounded-radius-button text-sm font-medium hover:bg-surface transition-all"
          >
            查看全部产品 →
          </Link>
        </div>
      </div>
    </section>
  );
};
