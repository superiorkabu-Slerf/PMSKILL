import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { RESOURCES } from '../data';

const FILTER_OPTIONS = [
  { label: '全部', value: '全部' },
  { label: '做判断', value: '先判断值不值得做' },
  { label: '写需求', value: '先把需求讲清楚' },
  { label: '调 Prompt', value: '先把 Prompt 调稳定' },
  { label: '理会议', value: '先把会议和决策理顺' },
  { label: '搭流程', value: '先整理成可复用流程' },
];

const getActionText = (resource: (typeof RESOURCES)[number]) => {
  if (resource.type === '提示词') return '直接复制';
  if (resource.type === 'Skill') return '查看 Skill';
  if (resource.type === 'Agent') return '查看 Agent';
  if (resource.type === 'MCP') return '查看 MCP';
  return '查看说明';
};

export const ResourcesPage = () => {
  const [filter, setFilter] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleResources = RESOURCES.filter((resource) => !['任务包', '方法模板'].includes(resource.type));

  const filteredResources = visibleResources.filter((resource) => {
    const matchesFilter = filter === '全部' || resource.problem_group === filter;
    const matchesSearch =
      normalizedQuery.length === 0 ||
      resource.name.toLowerCase().includes(normalizedQuery) ||
      resource.oneLiner.toLowerCase().includes(normalizedQuery) ||
      resource.problem_group.toLowerCase().includes(normalizedQuery);

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-paper min-h-screen">
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <span className="mono-label text-[12px] text-tx-tertiary uppercase mb-4 block">资源中心 / AI 资源</span>
          <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter">
            能直接复用的 AI 资源
          </h1>
          <p className="text-lg text-tx-secondary max-w-2xl leading-relaxed">
            Prompt、Skill、Agent 和 MCP，拿到就能开始用。
          </p>
        </div>
      </section>

      <section className="sticky top-[64px] z-30 bg-paper/80 backdrop-blur-md border-b border-border-subtle overflow-x-auto">
        <div className="max-w-[1120px] mx-auto px-6 min-h-16 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 whitespace-nowrap">
          <div className="flex items-center gap-6 overflow-x-auto">
            <span className="mono-label text-[11px] text-tx-tertiary uppercase tracking-widest">问题</span>
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.label}
                onClick={() => setFilter(option.value)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  filter === option.value ? 'text-tx-primary' : 'text-tx-tertiary hover:text-tx-primary'
                }`}
              >
                {option.label}
                {filter === option.value && (
                  <motion.div layoutId="resource-filter-underline" className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-tx-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="relative flex items-center min-w-[240px] lg:w-[280px]">
            <Search size={16} className="absolute left-0 text-tx-tertiary" />
            <input
              type="text"
              placeholder="搜索资源或问题..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full bg-transparent pl-7 py-2 text-sm text-tx-primary outline-none placeholder:text-tx-quaternary"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-[28px] serif-heading font-bold text-tx-primary mb-2">全部资源</h2>
            <p className="text-sm text-tx-tertiary">先按你要解决的问题找，再决定拿哪一条。</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, idx) => (
              <motion.button
                key={resource.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                className="group flex flex-col p-6 bg-elevated border border-border-subtle rounded-radius-card hover:border-border-strong hover:shadow-workshop hover:-translate-y-0.5 transition-all text-left"
                onClick={() => navigate(`/resources/${resource.id}`)}
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="mono-label text-[11px] text-accent-alert uppercase">
                    {resource.type}
                  </span>
                  <span className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-tertiary rounded-radius-badge">
                    {(FILTER_OPTIONS.find((option) => option.value === resource.problem_group)?.label) || resource.problem_group}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-tx-primary mb-3 leading-snug group-hover:text-accent-brand transition-colors">
                  {resource.name}
                </h3>

                <p className="text-sm text-tx-secondary mb-3 leading-relaxed">
                  {resource.oneLiner}
                </p>

                <p className="text-xs text-tx-tertiary mb-6 line-clamp-2 leading-relaxed">
                  {resource.problems[0]}
                </p>

                <div className="mt-auto pt-4 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-[12px] font-medium text-tx-primary group-hover:underline underline-offset-4">
                    {getActionText(resource)}
                  </span>
                  <ArrowRight size={14} className="text-tx-quaternary group-hover:text-tx-primary transition-colors" />
                </div>
              </motion.button>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-32 border border-dashed border-border-subtle rounded-radius-card mt-8">
              <p className="text-tx-tertiary mb-6">没有找到匹配的资源</p>
              <button
                onClick={() => {
                  setFilter('全部');
                  setSearchQuery('');
                }}
                className="h-10 px-6 bg-inverse text-white text-sm font-medium rounded-radius-button hover:bg-black transition-colors"
              >
                显示全部资源
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
