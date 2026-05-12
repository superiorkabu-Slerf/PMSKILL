import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../data';

export const ProductUsePage = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((item) => item.id === Number(id));

  if (!product || product.status !== '可直接使用') {
    return (
      <div className="pt-32 text-center bg-paper min-h-screen">
        <p className="text-tx-tertiary mb-6">这个产品暂时没有可直接使用的入口</p>
        <Link to="/products" className="text-accent-brand font-medium">返回产品页</Link>
      </div>
    );
  }

  return (
    <div className="bg-paper min-h-screen">
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <Link to={`/products/${product.id}`} className="inline-flex items-center gap-2 text-xs font-medium text-tx-tertiary hover:text-tx-primary transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            返回产品页
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="mono-label text-[11px] px-2 py-0.5 border border-accent-practical/20 text-accent-practical uppercase rounded-radius-badge">
                可直接使用
              </span>
              {product.labels?.map((label: string) => (
                <span key={label} className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-tertiary rounded-radius-badge">
                  {label}
                </span>
              ))}
            </div>
            <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter leading-tight">
              {product.name}
            </h1>
            <p className="text-xl text-tx-secondary leading-relaxed">
              {product.oneLiner}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="rounded-[28px] border border-border-subtle bg-white overflow-hidden shadow-sm">
            <div className="h-14 border-b border-border-subtle flex items-center justify-between px-6 bg-surface">
              <div className="text-sm font-medium text-tx-primary">模拟产品页</div>
              <div className="mono-label text-[10px] text-tx-quaternary uppercase">Product Mock</div>
            </div>
            <div className="p-6 md:p-8">
              <div className="rounded-[24px] overflow-hidden border border-border-subtle bg-surface">
                <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
