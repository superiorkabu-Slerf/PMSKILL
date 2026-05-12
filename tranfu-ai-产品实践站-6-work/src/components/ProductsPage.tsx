import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';

const AVAILABLE_STATUSES = ['可直接使用'] as const;
const IN_PROGRESS_STATUSES = ['验证中', '进行中', '研究中'] as const;
const ARCHIVED_STATUSES = ['已暂停', '已放弃'] as const;

const getPrimaryAction = (status: string) => {
  if (AVAILABLE_STATUSES.includes(status as (typeof AVAILABLE_STATUSES)[number])) {
    return '立即使用';
  }

  if (IN_PROGRESS_STATUSES.includes(status as (typeof IN_PROGRESS_STATUSES)[number])) {
    return '查看进展';
  }

  return '看判断记录';
};

const getSecondaryAction = (status: string) => {
  if (AVAILABLE_STATUSES.includes(status as (typeof AVAILABLE_STATUSES)[number])) {
    return '查看详情';
  }

  return null;
};

const getStatusTone = (status: string) => {
  if (status === '可直接使用') return 'text-accent-practical';
  if (IN_PROGRESS_STATUSES.includes(status as (typeof IN_PROGRESS_STATUSES)[number])) return 'text-accent-brand';
  return 'text-tx-tertiary';
};

const SECTION_CONFIG = [
  {
    title: '可直接使用',
    description: '现在就可以上手。',
    statuses: AVAILABLE_STATUSES,
  },
  {
    title: '进行中',
    description: '还不能直接用，但可以先看进展。',
    statuses: IN_PROGRESS_STATUSES,
  },
  {
    title: '已暂停 / 已放弃',
    description: '这些方向暂时不继续做了。',
    statuses: ARCHIVED_STATUSES,
  },
];

const FILTER_OPTIONS = [
  {
    label: '全部',
    matches: (_status: string) => true,
  },
  {
    label: '可直接使用',
    matches: (status: string) => AVAILABLE_STATUSES.includes(status as (typeof AVAILABLE_STATUSES)[number]),
  },
  {
    label: '进行中',
    matches: (status: string) => IN_PROGRESS_STATUSES.includes(status as (typeof IN_PROGRESS_STATUSES)[number]),
  },
  {
    label: '已放弃 / 已暂停',
    matches: (status: string) => ARCHIVED_STATUSES.includes(status as (typeof ARCHIVED_STATUSES)[number]),
  },
];

export const ProductsPage = () => {
  const [filter, setFilter] = useState<string>('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProducts = PRODUCTS.filter((product) => {
    const activeFilter = FILTER_OPTIONS.find((option) => option.label === filter) ?? FILTER_OPTIONS[0];
    const matchesFilter = activeFilter.matches(product.status);
    const matchesSearch =
      normalizedQuery.length === 0 ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.oneLiner.toLowerCase().includes(normalizedQuery);

    return matchesFilter && matchesSearch;
  });

  const groupedSections = SECTION_CONFIG.map((section) => ({
    ...section,
    products: filteredProducts.filter((product) =>
      section.statuses.includes(product.status as (typeof section.statuses)[number])
    ),
  })).filter((section) => section.products.length > 0);

  return (
    <div className="bg-paper min-h-screen">
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <span className="mono-label text-[12px] text-tx-tertiary uppercase mb-4 block">产品中心 / AI 产品</span>
          <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter">
            少走弯路，直接找到能帮你干活的 AI 产品
          </h1>
          <p className="text-lg text-tx-secondary max-w-2xl leading-relaxed">
            有的现在就能用，有的还在推进中，但每个产品都能让你更快判断值不值得继续看。
          </p>
        </div>
      </section>

      <section className="sticky top-[64px] z-30 bg-paper/80 backdrop-blur-md border-b border-border-subtle overflow-x-auto">
        <div className="max-w-[1120px] mx-auto px-6 min-h-16 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 whitespace-nowrap">
          <div className="flex items-center gap-6 overflow-x-auto">
            <span className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest">状态</span>
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.label}
                onClick={() => setFilter(option.label)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  filter === option.label ? 'text-tx-primary' : 'text-tx-tertiary hover:text-tx-primary'
                }`}
              >
                {option.label}
                {filter === option.label && (
                  <motion.div layoutId="filter-underline" className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-tx-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="relative flex items-center min-w-[240px] lg:w-[280px]">
            <Search size={16} className="absolute left-0 text-tx-tertiary" />
            <input
              type="text"
              placeholder="搜索产品..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full bg-transparent pl-7 py-2 text-sm text-tx-primary outline-none placeholder:text-tx-quaternary"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6 space-y-24">
          {groupedSections.map((section) => (
            <div key={section.title}>
              <div className="mb-10">
                <h2 className="text-[32px] serif-heading font-bold text-tx-primary mb-2">{section.title}</h2>
                <p className="text-sm text-tx-tertiary">{section.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {section.products.map((product, idx) => {
                  const primaryAction = getPrimaryAction(product.status);
                  const secondaryAction = getSecondaryAction(product.status);
                  const isAvailable = product.status === '可直接使用';

                  return (
                    <motion.article
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group"
                    >
                      <div className="aspect-[16/8.5] bg-surface rounded-radius-card overflow-hidden border border-border-subtle group-hover:border-border-strong transition-all mb-5">
                        <button type="button" onClick={() => navigate(`/products/${product.id}`)} className="w-full h-full text-left">
                          <img
                            src={product.image}
                            alt={product.name}
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              isAvailable
                                ? 'opacity-100 saturate-100'
                                : 'grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100'
                            }`}
                          />
                        </button>
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className={`mono-label text-[11px] uppercase ${getStatusTone(product.status)}`}>
                            {product.status}
                          </span>
                          {product.estimatedLaunch && (
                            <span className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-tertiary rounded-radius-badge">
                              {product.estimatedLaunch}
                            </span>
                          )}
                          {product.labels?.map((label: string) => (
                            <span key={label} className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-tertiary rounded-radius-badge">
                              {label}
                            </span>
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => navigate(`/products/${product.id}`)}
                          className="text-left"
                        >
                          <h3 className="text-[24px] serif-heading font-bold text-tx-primary mb-3 group-hover:text-accent-brand transition-colors">
                            {product.name}
                          </h3>
                        </button>

                        <p className="text-tx-secondary text-base leading-relaxed mb-3 line-clamp-2">
                          {product.oneLiner}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 border-t border-border-subtle pt-4 mt-8">
                          <button
                            type="button"
                            onClick={() => navigate(product.link)}
                            className="flex items-center gap-2 text-sm font-medium text-tx-primary group-hover:gap-3 transition-all"
                          >
                            {primaryAction}
                            <ArrowRight size={16} />
                          </button>
                          {secondaryAction && (
                            <button
                              type="button"
                              onClick={() => navigate(`/products/${product.id}`)}
                              className="text-sm font-medium text-tx-tertiary hover:text-tx-primary transition-colors"
                            >
                              {secondaryAction}
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <div className="text-center py-32 border border-dashed border-border-subtle rounded-radius-card">
              <p className="text-tx-tertiary mb-6">没有找到匹配的产品</p>
              <button
                onClick={() => {
                  setFilter('全部');
                  setSearchQuery('');
                }}
                className="h-10 px-6 bg-inverse text-white text-sm font-medium rounded-radius-button hover:bg-black transition-colors"
              >
                显示全部产品
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1120px] mx-auto px-6">
          <button
            type="button"
            onClick={() => navigate('/cobuild')}
            className="group relative w-full overflow-hidden rounded-radius-card border border-[#d9d2c5] bg-[linear-gradient(135deg,#f7f1e7_0%,#efe6d6_55%,#e5dcc9_100%)] p-10 text-left shadow-[0_20px_60px_rgba(61,47,34,0.08)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_80px_rgba(61,47,34,0.14)] md:p-12"
          >
            <div className="pointer-events-none absolute right-[-40px] top-[-36px] h-40 w-40 rounded-full bg-white/40 blur-2xl" />
            <div className="pointer-events-none absolute bottom-[-54px] right-12 h-32 w-32 rounded-full bg-[#d9c6a2]/45 blur-2xl" />

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-black/10 bg-white/55 px-3 py-1">
                  <span className="mono-label text-[11px] uppercase tracking-widest text-tx-secondary">需求共建</span>
                </div>
                <h2 className="mb-4 text-[34px] leading-tight tracking-tight text-tx-primary transition-colors group-hover:text-[#2f3f78] md:text-[44px]">
                  没找到刚好能用的？
                  <br />
                  把你的需求提出来，我们一起把它做出来。
                </h2>
                <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#544b40] md:text-lg">
                  如果你已经有明确问题、反复卡住的流程，或者想验证一个值得做的方向，这里就是下一步入口。
                </p>
                <div className="flex flex-wrap gap-3">
                  {['真实问题优先', '可继续沟通', '适合题目会进入共建'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white/60 px-3 py-1.5 text-[12px] font-medium text-[#4f463b]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 lg:items-end">
                <div className="rounded-2xl border border-black/10 bg-white/65 p-4 text-sm leading-relaxed text-[#544b40]">
                  适合带着真实问题来，而不是只留一个模糊想法。
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-[#1f2a44] px-6 py-3.5 text-sm font-semibold text-white transition-all group-hover:bg-[#243357] group-hover:pr-7">
                  提交你的需求
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};
