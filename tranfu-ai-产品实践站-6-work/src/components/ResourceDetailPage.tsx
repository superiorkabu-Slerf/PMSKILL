import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { RESOURCES, PRODUCTS, INSIGHTS } from '../data';
import interfaceResearchMock from '../assets/interface-research-mock.svg';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Copy,
  Download,
  Package,
  Sparkles,
  BookOpen,
  ShieldAlert,
  Plus,
  Minus,
} from 'lucide-react';

const getPrimaryAction = (resource: (typeof RESOURCES)[number]) => {
  if (resource.type === '提示词') return '直接复制';
  if (resource.type === 'Agent') return '立即查看';
  return resource.action || '下载资源';
};

export const ResourceDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const resource = RESOURCES.find((item) => item.id === Number(id));

  if (!resource) {
    return (
      <div className="pt-32 text-center bg-paper min-h-screen">
        <p className="text-tx-tertiary mb-6">未找到该资源信息</p>
        <Link to="/resources" className="text-accent-brand font-medium">返回资源列表</Link>
      </div>
    );
  }

  const relatedProduct = PRODUCTS.find((product) => product.relatedResources?.includes(resource.id));
  const relatedInsight = INSIGHTS.find((insight) => insight.relatedResources?.includes(resource.id));
  const isSkill = resource.type === 'Skill';
  const isAgent = resource.type === 'Agent';
  const isMcp = resource.type === 'MCP';
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);
  const installMethods = isSkill || isAgent ? resource.installMethods || [] : [];
  const [activeInstallMethod, setActiveInstallMethod] = useState<string>(
    Array.isArray(installMethods) && installMethods.length > 0 ? installMethods[0].id : 'command'
  );
  const selectedInstallMethod =
    Array.isArray(installMethods) && installMethods.length > 0
      ? installMethods.find((item: any) => item.id === activeInstallMethod) || installMethods[0]
      : null;
  const linkedSkills = (resource.agentSkills || [])
    .map((skill: any) => {
      const detail = RESOURCES.find((item) => item.id === skill.resourceId);
      return detail ? { ...skill, detail } : skill;
    });
  const linkedAgents = RESOURCES.filter(
    (item) =>
      item.type === 'Agent' &&
      (item.agentSkills || []).some((skill: any) => skill.resourceId === resource.id)
  );
  const getRichImageSrc = (src: string) => {
    if (src === 'interface-research-mock') return interfaceResearchMock;
    return src;
  };

  return (
    <div className="bg-paper min-h-screen">
      <section className="pt-24 pb-16 border-b border-border-subtle">
        <div className="max-w-[1120px] mx-auto px-6">
          <Link to="/resources" className="inline-flex items-center gap-2 text-xs font-medium text-tx-tertiary hover:text-tx-primary transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            返回资源页
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="mono-label text-[11px] px-2 py-0.5 border border-accent-practical/20 text-accent-practical uppercase rounded-radius-badge">
                {resource.category}
              </span>
              {isSkill ? (
                <>
                  <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                    {resource.skillStatus || resource.maturity}
                  </span>
                  <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                    {resource.skillVersion || 'V1.0'}
                  </span>
                </>
              ) : isAgent ? (
                <>
                  <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                    {resource.agentStatus || resource.maturity}
                  </span>
                  <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                    {resource.agentVersion || 'V1.0'}
                  </span>
                </>
              ) : isMcp ? (
                <>
                  <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                    {resource.mcpStatus || resource.maturity}
                  </span>
                  <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                    {resource.mcpVersion || 'V1.0'}
                  </span>
                </>
              ) : (
                <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                  {resource.maturity}
                </span>
              )}
              {isSkill && resource.score?.overall && (
                <span className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-primary rounded-radius-badge">
                  安全 {resource.score.overall}
                </span>
              )}
            </div>
            <h1 className="text-[48px] serif-heading font-bold text-tx-primary mb-6 tracking-tighter leading-tight">
              {resource.name}
            </h1>
            <p className="text-xl text-tx-secondary leading-relaxed">
              {resource.oneLiner}
            </p>
            {isMcp && (
              <>
                <div className="mt-8 space-y-4 max-w-3xl">
                  <div className="text-sm text-tx-secondary">
                    适合人群：{resource.suitability}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-tx-secondary">
                    <div>状态：{resource.mcpStatus || '试运行'}</div>
                    <div>版本：{resource.mcpVersion || 'V1.0'}</div>
                    <div>更新时间：{resource.updatedAt || '2026-05'}</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-tx-secondary">
                    <div>维护者：{resource.owner || 'Kabu'}</div>
                    <a
                      href={resource.githubUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-tx-primary hover:text-accent-brand transition-colors"
                    >
                      <ArrowUpRight size={16} />
                      <span className="font-medium">{resource.githubLabel || '查看 GitHub 仓库'}</span>
                    </a>
                  </div>
                </div>
              </>
            )}
            {isAgent && (
              <>
                <div className="mt-8 space-y-4 max-w-3xl">
                  <div className="text-sm text-tx-secondary">
                    适合人群：{resource.suitability}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-tx-secondary">
                    <div>状态：{resource.agentStatus || '试运行'}</div>
                    <div>版本：{resource.agentVersion || 'V1.0'}</div>
                    <div>更新时间：{resource.updatedAt || '2026-05'}</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-tx-secondary">
                    <div>维护者：{resource.owner || 'Kabu'}</div>
                    <a
                      href={resource.githubUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-tx-primary hover:text-accent-brand transition-colors"
                    >
                      <ArrowUpRight size={16} />
                      <span className="font-medium">{resource.githubLabel || '查看 GitHub 仓库'}</span>
                    </a>
                  </div>
                </div>
                {selectedInstallMethod && (
                  <div className="mt-10 rounded-radius-card border border-border-subtle bg-surface p-6">
                    <div className="mb-5 text-[24px] serif-heading font-bold text-tx-primary">安装方式</div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      {installMethods.map((method: any) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setActiveInstallMethod(method.id)}
                          className={`rounded-radius-button border px-4 py-3 text-left transition-all ${
                            activeInstallMethod === method.id
                              ? 'border-tx-primary bg-paper shadow-sm'
                              : 'border-border-subtle bg-white hover:border-border-strong'
                          }`}
                        >
                          <div className="text-[14px] font-bold text-tx-primary">{method.label}</div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-5 rounded-radius-card border border-border-subtle bg-paper p-5">
                      {selectedInstallMethod.id === 'command' && (
                        <div className="rounded-radius-button border border-border-subtle bg-white px-4 py-4 md:flex md:items-center md:justify-between md:gap-4">
                          <div className="font-mono text-[16px] leading-relaxed text-tx-primary break-all">
                            $ {selectedInstallMethod.command}
                          </div>
                          <button className="mt-3 inline-flex h-10 items-center gap-2 rounded-full border border-border-subtle px-4 text-sm font-medium text-tx-primary transition-colors hover:border-border-strong hover:bg-paper md:mt-0">
                            <Copy size={16} />
                            {selectedInstallMethod.actionLabel}
                          </button>
                        </div>
                      )}

                      {selectedInstallMethod.id === 'package' && (
                        <div className="flex flex-col gap-4 rounded-radius-button border border-border-subtle bg-white px-4 py-4 md:flex-row md:items-center md:justify-between">
                          <div>
                            <div className="text-[17px] font-bold text-tx-primary">{selectedInstallMethod.packageName}</div>
                            <div className="mt-1 text-sm text-tx-tertiary">{selectedInstallMethod.packageMeta}</div>
                          </div>
                          <button className="inline-flex h-10 items-center gap-2 rounded-full border border-border-subtle px-4 text-sm font-medium text-tx-primary transition-colors hover:border-border-strong hover:bg-paper">
                            <Download size={16} />
                            {selectedInstallMethod.actionLabel}
                          </button>
                        </div>
                      )}

                      {selectedInstallMethod.id === 'platform' && (
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2.5">
                            {(selectedInstallMethod.platforms || []).map((platform: string) => (
                              <div
                                key={platform}
                                className="rounded-full border border-border-subtle bg-white px-4 py-2.5 text-sm font-medium text-tx-primary"
                              >
                                {platform}
                              </div>
                            ))}
                          </div>
                          <button className="inline-flex h-10 items-center rounded-full border border-border-subtle px-4 text-sm font-medium text-tx-primary transition-colors hover:border-border-strong hover:bg-white">
                            {selectedInstallMethod.actionLabel}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
            {isSkill && (
              <>
                <div className="mt-8 space-y-4 max-w-3xl">
                  <div className="text-sm text-tx-secondary">
                    适合人群：{resource.suitability}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-tx-secondary">
                    <div>状态：{resource.skillStatus || '试运行'}</div>
                    <div>版本：{resource.skillVersion || 'V1.0'}</div>
                    <div>更新时间：{resource.updatedAt || '2026-05'}</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-tx-secondary">
                    <div>维护者：{resource.owner || 'Kabu'}</div>
                    <a
                      href={resource.githubUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-tx-primary hover:text-accent-brand transition-colors"
                    >
                      <ArrowUpRight size={16} />
                      <span className="font-medium">{resource.githubLabel || '查看 GitHub 仓库'}</span>
                    </a>
                  </div>
                </div>
                {selectedInstallMethod && (
                  <div className="mt-10 rounded-radius-card border border-border-subtle bg-surface p-6">
                    <div className="mb-5 text-[24px] serif-heading font-bold text-tx-primary">安装方式</div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                      {installMethods.map((method: any) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => setActiveInstallMethod(method.id)}
                          className={`rounded-radius-button border px-4 py-3 text-left transition-all ${
                            activeInstallMethod === method.id
                              ? 'border-tx-primary bg-paper shadow-sm'
                              : 'border-border-subtle bg-white hover:border-border-strong'
                          }`}
                        >
                          <div className="text-[14px] font-bold text-tx-primary">{method.label}</div>
                        </button>
                      ))}
                    </div>

                    <div className="mt-5 rounded-radius-card border border-border-subtle bg-paper p-5">
                      {selectedInstallMethod.id === 'command' && (
                        <div>
                          <div className="rounded-radius-button border border-border-subtle bg-white px-4 py-4 md:flex md:items-center md:justify-between md:gap-4">
                            <div className="font-mono text-[16px] leading-relaxed text-tx-primary break-all">
                              $ {selectedInstallMethod.command}
                            </div>
                            <button className="mt-3 inline-flex h-10 items-center gap-2 rounded-full border border-border-subtle px-4 text-sm font-medium text-tx-primary transition-colors hover:border-border-strong hover:bg-paper md:mt-0">
                              <Copy size={16} />
                              {selectedInstallMethod.actionLabel}
                            </button>
                          </div>
                        </div>
                      )}

                      {selectedInstallMethod.id === 'package' && (
                        <div>
                          <div className="flex flex-col gap-4 rounded-radius-button border border-border-subtle bg-white px-4 py-4 md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="text-[17px] font-bold text-tx-primary">{selectedInstallMethod.packageName}</div>
                              <div className="mt-1 text-sm text-tx-tertiary">{selectedInstallMethod.packageMeta}</div>
                            </div>
                            <button className="inline-flex h-10 items-center gap-2 rounded-full border border-border-subtle px-4 text-sm font-medium text-tx-primary transition-colors hover:border-border-strong hover:bg-paper">
                              <Download size={16} />
                              {selectedInstallMethod.actionLabel}
                            </button>
                          </div>
                        </div>
                      )}

                      {selectedInstallMethod.id === 'platform' && (
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2.5">
                            {(selectedInstallMethod.platforms || []).map((platform: string) => (
                              <div
                                key={platform}
                                className="rounded-full border border-border-subtle bg-white px-4 py-2.5 text-sm font-medium text-tx-primary"
                              >
                                {platform}
                              </div>
                            ))}
                          </div>
                          <button className="inline-flex h-10 items-center rounded-full border border-border-subtle px-4 text-sm font-medium text-tx-primary transition-colors hover:border-border-strong hover:bg-white">
                            {selectedInstallMethod.actionLabel}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
            {!isSkill && !isAgent && (
              <p className="text-base text-tx-tertiary leading-relaxed mt-4 max-w-3xl">
                {resource.description}
              </p>
            )}
          </div>
        </div>
      </section>

      {isSkill ? (
        <section className="py-24">
          <div className="max-w-[1120px] mx-auto px-6 space-y-20">
            <div className="rounded-radius-card border border-border-subtle bg-white overflow-hidden">
              <div className="border-b border-border-subtle px-8 py-5 bg-surface">
                <div className="text-[13px] font-medium text-tx-tertiary">
                  说明文档
                </div>
              </div>
              <div className="h-[760px] overflow-y-auto px-8 py-10 md:px-12 md:py-12">
                <div className="mx-auto max-w-3xl space-y-6">
                  {(resource.richContent || []).map((block: any, index: number) => {
                    if (block.type === 'heading') {
                      return (
                        <h2 key={index} className="pt-2 text-[28px] serif-heading font-bold text-tx-primary tracking-tight">
                          {block.content}
                        </h2>
                      );
                    }

                    if (block.type === 'list') {
                      return (
                        <ul key={index} className="space-y-3 pl-5 text-[16px] leading-8 text-tx-secondary list-disc marker:text-tx-quaternary">
                          {block.items?.map((item: string, itemIndex: number) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    if (block.type === 'quote') {
                      return (
                        <blockquote
                          key={index}
                          className="border-l-4 border-border-strong bg-surface px-6 py-5 text-[16px] leading-8 text-tx-secondary"
                        >
                          {block.content}
                        </blockquote>
                      );
                    }

                    if (block.type === 'image') {
                      return (
                        <div key={index} className="overflow-hidden rounded-radius-card border border-border-subtle bg-surface">
                          <img
                            src={getRichImageSrc(block.src)}
                            alt={block.alt || 'README 示例图片'}
                            className="w-full object-cover"
                          />
                        </div>
                      );
                    }

                    return (
                      <p key={index} className="text-[16px] leading-8 text-tx-secondary">
                        {block.content}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[24px] serif-heading font-bold text-tx-primary mb-6">常见问题</h2>
              <div className="space-y-0 border-t border-border-subtle">
                {(resource.faqs || []).map((faq: { q: string; a: string }, index: number) => (
                  <div key={index} className="border-b border-border-subtle">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                      className="w-full py-6 flex items-center justify-between gap-6 text-left"
                    >
                      <span className="text-[18px] font-bold text-tx-primary">{faq.q}</span>
                      {openFaqIndex === index ? (
                        <Minus size={24} className="text-tx-quaternary shrink-0" />
                      ) : (
                        <Plus size={24} className="text-tx-quaternary shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="pb-6 pr-12 text-sm text-tx-tertiary leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {(relatedProduct || relatedInsight) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProduct && (
                  <div className="p-8 border border-border-subtle rounded-radius-card bg-surface">
                    <div className="flex items-center gap-3 mb-4 text-accent-brand">
                      <Package size={18} />
                      <h3 className="text-sm font-bold uppercase tracking-widest mono-label">关联产品</h3>
                    </div>
                    <button onClick={() => navigate(`/products/${relatedProduct.id}`)} className="text-left group">
                      <div className="text-[18px] font-bold text-tx-primary group-hover:text-accent-brand transition-colors mb-2">
                        {relatedProduct.name}
                      </div>
                      <div className="text-sm text-tx-tertiary leading-relaxed">
                        {relatedProduct.oneLiner}
                      </div>
                    </button>
                  </div>
                )}

                {relatedInsight && (
                  <div className="p-8 border border-border-subtle rounded-radius-card bg-surface">
                    <div className="flex items-center gap-3 mb-4 text-accent-alert">
                      <BookOpen size={18} />
                      <h3 className="text-sm font-bold uppercase tracking-widest mono-label">相关文章</h3>
                    </div>
                    <button onClick={() => navigate(`/insights/${relatedInsight.id}`)} className="text-left group">
                      <div className="text-[18px] font-bold text-tx-primary group-hover:text-accent-alert transition-colors mb-2">
                        {relatedInsight.title}
                      </div>
                      <div className="text-sm text-tx-tertiary leading-relaxed">
                        {relatedInsight.oneLiner || relatedInsight.summary}
                      </div>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      ) : isMcp ? (
        <section className="py-24">
          <div className="max-w-[1120px] mx-auto px-6 space-y-20">
            <div className="rounded-radius-card border border-border-subtle bg-white p-8">
              <h2 className="text-[24px] serif-heading font-bold text-tx-primary mb-6">这个 MCP 能提供什么</h2>
              <div className="space-y-4">
                {(resource.mcpCapabilities || []).map((item: string, index: number) => (
                  <p key={index} className="text-[16px] leading-8 text-tx-secondary">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-radius-card border border-border-subtle bg-white overflow-hidden">
              <div className="border-b border-border-subtle px-8 py-5 bg-surface">
                <div className="text-[13px] font-medium text-tx-tertiary">说明文档</div>
              </div>
              <div className="h-[760px] overflow-y-auto px-8 py-10 md:px-12 md:py-12">
                <div className="mx-auto max-w-3xl space-y-6">
                  {(resource.richContent || []).map((block: any, index: number) => {
                    if (block.type === 'heading') {
                      return (
                        <h2 key={index} className="pt-2 text-[28px] serif-heading font-bold text-tx-primary tracking-tight">
                          {block.content}
                        </h2>
                      );
                    }

                    if (block.type === 'list') {
                      return (
                        <ul key={index} className="space-y-3 pl-5 text-[16px] leading-8 text-tx-secondary list-disc marker:text-tx-quaternary">
                          {block.items?.map((item: string, itemIndex: number) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    if (block.type === 'quote') {
                      return (
                        <blockquote key={index} className="border-l-4 border-border-strong bg-surface px-6 py-5 text-[16px] leading-8 text-tx-secondary">
                          {block.content}
                        </blockquote>
                      );
                    }

                    if (block.type === 'image') {
                      return (
                        <div key={index} className="overflow-hidden rounded-radius-card border border-border-subtle bg-surface">
                          <img src={getRichImageSrc(block.src)} alt={block.alt || 'README 示例图片'} className="w-full object-cover" />
                        </div>
                      );
                    }

                    return (
                      <p key={index} className="text-[16px] leading-8 text-tx-secondary">
                        {block.content}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            {linkedAgents.length > 0 && (
              <div className="rounded-radius-card border border-border-subtle bg-white p-8">
                <h2 className="text-[24px] serif-heading font-bold text-tx-primary mb-3">这个 MCP 会接到哪些 Agent</h2>
                <p className="text-sm text-tx-tertiary mb-6">这些 Agent 会把它当成输入层，用来持续读取外部信息源。</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {linkedAgents.map((agent) => (
                    <div key={agent.id} className="rounded-radius-card border border-border-subtle bg-surface p-6">
                      <div className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-tertiary rounded-radius-badge mb-3 inline-flex">
                        Agent
                      </div>
                      <div className="text-[18px] font-bold text-tx-primary mb-3">{agent.name}</div>
                      <p className="text-sm leading-7 text-tx-secondary mb-5">{agent.oneLiner}</p>
                      <button
                        type="button"
                        onClick={() => navigate(`/resources/${agent.id}`)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-tx-primary hover:text-accent-brand transition-colors"
                      >
                        查看 Agent
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ) : isAgent ? (
        <section className="py-24">
          <div className="max-w-[1120px] mx-auto px-6 space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8">
              <div className="rounded-radius-card border border-border-subtle bg-white p-8">
                <h2 className="text-[24px] serif-heading font-bold text-tx-primary mb-6">这个 Agent 能帮你做什么</h2>
                <div className="space-y-4">
                  {(resource.agentCapabilities || []).map((item: string, index: number) => (
                    <p key={index} className="text-[16px] leading-8 text-tx-secondary">
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-radius-card border border-border-subtle bg-surface p-8">
                <h2 className="text-[24px] serif-heading font-bold text-tx-primary mb-6">调用方法</h2>
                <div className="space-y-4">
                  {(resource.invokeSteps || []).map((step: string, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-subtle text-sm font-bold text-tx-primary">
                        {index + 1}
                      </div>
                      <p className="text-[15px] leading-7 text-tx-secondary">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-radius-card border border-border-subtle bg-white p-5">
                  <div className="text-sm font-bold text-tx-primary mb-3">开始对话时可以直接这样说</div>
                  <div className="font-mono text-[14px] leading-7 whitespace-pre-wrap text-tx-secondary">
                    {resource.firstPrompt}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-radius-card border border-border-subtle bg-white p-8">
              <h2 className="text-[24px] serif-heading font-bold text-tx-primary mb-3">这个 Agent 是怎么组合起来的</h2>
              <p className="text-sm text-tx-tertiary mb-6">这里展示它调用了哪些能力模块，以及每一层各自负责什么。</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {linkedSkills.map((skill: any, index: number) => (
                  <div key={index} className="rounded-radius-card border border-border-subtle bg-surface p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="mono-label text-[11px] px-2 py-0.5 border border-border-subtle text-tx-tertiary rounded-radius-badge">
                        {skill.detail?.type || '模块'}
                      </span>
                      <span className="mono-label text-[11px] text-tx-quaternary uppercase tracking-widest">
                        第 {index + 1} 层
                      </span>
                    </div>
                    <div className="text-[18px] font-bold text-tx-primary mb-3">{skill.name}</div>
                    <p className="text-sm leading-7 text-tx-secondary mb-5">{skill.role}</p>
                    {skill.detail?.id && (
                      <button
                        type="button"
                        onClick={() => navigate(`/resources/${skill.detail.id}`)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-tx-primary hover:text-accent-brand transition-colors"
                      >
                        {skill.detail.type === 'MCP'
                          ? '查看 MCP'
                          : skill.detail.type === 'Agent'
                            ? '查看 Agent'
                            : '查看 Skill'}
                        <ArrowRight size={15} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-radius-card border border-border-subtle bg-white overflow-hidden">
              <div className="border-b border-border-subtle px-8 py-5 bg-surface">
                <div className="text-[13px] font-medium text-tx-tertiary">说明文档</div>
              </div>
              <div className="h-[760px] overflow-y-auto px-8 py-10 md:px-12 md:py-12">
                <div className="mx-auto max-w-3xl space-y-6">
                  {(resource.richContent || []).map((block: any, index: number) => {
                    if (block.type === 'heading') {
                      return (
                        <h2 key={index} className="pt-2 text-[28px] serif-heading font-bold text-tx-primary tracking-tight">
                          {block.content}
                        </h2>
                      );
                    }

                    if (block.type === 'list') {
                      return (
                        <ul key={index} className="space-y-3 pl-5 text-[16px] leading-8 text-tx-secondary list-disc marker:text-tx-quaternary">
                          {block.items?.map((item: string, itemIndex: number) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    if (block.type === 'quote') {
                      return (
                        <blockquote key={index} className="border-l-4 border-border-strong bg-surface px-6 py-5 text-[16px] leading-8 text-tx-secondary">
                          {block.content}
                        </blockquote>
                      );
                    }

                    if (block.type === 'image') {
                      return (
                        <div key={index} className="overflow-hidden rounded-radius-card border border-border-subtle bg-surface">
                          <img src={getRichImageSrc(block.src)} alt={block.alt || 'README 示例图片'} className="w-full object-cover" />
                        </div>
                      );
                    }

                    return (
                      <p key={index} className="text-[16px] leading-8 text-tx-secondary">
                        {block.content}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[24px] serif-heading font-bold text-tx-primary mb-6">常见问题</h2>
              <div className="space-y-0 border-t border-border-subtle">
                {(resource.faqs || []).map((faq: { q: string; a: string }, index: number) => (
                  <div key={index} className="border-b border-border-subtle">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                      className="w-full py-6 flex items-center justify-between gap-6 text-left"
                    >
                      <span className="text-[18px] font-bold text-tx-primary">{faq.q}</span>
                      {openFaqIndex === index ? (
                        <Minus size={24} className="text-tx-quaternary shrink-0" />
                      ) : (
                        <Plus size={24} className="text-tx-quaternary shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === index && (
                      <div className="pb-6 pr-12 text-sm text-tx-tertiary leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {(relatedProduct || relatedInsight) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProduct && (
                  <div className="p-8 border border-border-subtle rounded-radius-card bg-surface">
                    <div className="flex items-center gap-3 mb-4 text-accent-brand">
                      <Package size={18} />
                      <h3 className="text-sm font-bold uppercase tracking-widest mono-label">关联产品</h3>
                    </div>
                    <button onClick={() => navigate(`/products/${relatedProduct.id}`)} className="text-left group">
                      <div className="text-[18px] font-bold text-tx-primary group-hover:text-accent-brand transition-colors mb-2">
                        {relatedProduct.name}
                      </div>
                      <div className="text-sm text-tx-tertiary leading-relaxed">
                        {relatedProduct.oneLiner}
                      </div>
                    </button>
                  </div>
                )}

                {relatedInsight && (
                  <div className="p-8 border border-border-subtle rounded-radius-card bg-surface">
                    <div className="flex items-center gap-3 mb-4 text-accent-alert">
                      <BookOpen size={18} />
                      <h3 className="text-sm font-bold uppercase tracking-widest mono-label">相关文章</h3>
                    </div>
                    <button onClick={() => navigate(`/insights/${relatedInsight.id}`)} className="text-left group">
                      <div className="text-[18px] font-bold text-tx-primary group-hover:text-accent-alert transition-colors mb-2">
                        {relatedInsight.title}
                      </div>
                      <div className="text-sm text-tx-tertiary leading-relaxed">
                        {relatedInsight.oneLiner || relatedInsight.summary}
                      </div>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="py-20 border-b border-border-subtle">
          <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-12">
            <div className="space-y-8">
              <div className="border border-border-subtle rounded-radius-card p-8 bg-surface">
                <div className="flex items-center gap-3 mb-4 text-accent-brand">
                  <Sparkles size={18} />
                  <h2 className="text-sm font-bold uppercase tracking-widest mono-label">这个资源能帮你做什么</h2>
                </div>
                <p className="text-lg text-tx-primary leading-relaxed">
                  {resource.description}
                </p>
              </div>

              <div className="border border-border-subtle rounded-radius-card p-8 bg-paper">
                <div className="flex items-center gap-3 mb-4 text-accent-practical">
                  <Package size={18} />
                  <h2 className="text-sm font-bold uppercase tracking-widest mono-label">你可以直接拿到什么</h2>
                </div>
                <div className="space-y-3">
                  {resource.deliverables.map((item, index) => (
                    <div key={index} className="text-sm text-tx-secondary leading-relaxed">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="p-8 bg-inverse text-white rounded-radius-card shadow-workshop sticky top-24">
                <h3 className="mono-label text-[10px] text-tx-quaternary uppercase tracking-widest mb-6">先拿资源</h3>
                <div className="space-y-4">
                  <button className="w-full h-14 bg-white text-black font-bold text-sm rounded-radius-button hover:bg-tx-quaternary transition-all flex items-center justify-center gap-2 group">
                    {getPrimaryAction(resource)}
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      )}

      {!isSkill && !isAgent && (
        <section className="py-24">
          <div className="max-w-[1120px] mx-auto px-6 space-y-20">
            <div>
              <h2 className="text-[24px] serif-heading font-bold text-tx-primary mb-6">怎么使用</h2>
              <div className="p-8 bg-surface border border-border-subtle rounded-radius-card text-tx-secondary leading-relaxed">
                {resource.usage}
              </div>
            </div>

            <div>
              <h2 className="text-[24px] serif-heading font-bold text-tx-primary mb-6">适合什么场景</h2>
              <p className="text-tx-secondary leading-relaxed mb-6 max-w-3xl">
                {resource.suitability}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resource.problems.map((problem: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-5 bg-surface border border-border-subtle rounded-radius-card">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-brand mt-2 flex-shrink-0" />
                    <span className="text-sm text-tx-primary font-medium">{problem}</span>
                  </div>
                ))}
              </div>
            </div>

            {resource.boundaries && (
              <div>
                <h2 className="text-[24px] serif-heading font-bold text-tx-primary mb-6">使用前先看这里</h2>
                <div className="p-8 bg-accent-alert/5 border border-accent-alert/10 rounded-radius-card">
                  <ul className="space-y-4">
                    {resource.boundaries.map((boundary: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-accent-alert font-medium leading-relaxed">
                        <ShieldAlert size={16} className="mt-0.5 flex-shrink-0" />
                        {boundary}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {(relatedProduct || relatedInsight) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedProduct && (
                  <div className="p-8 border border-border-subtle rounded-radius-card bg-surface">
                    <div className="flex items-center gap-3 mb-4 text-accent-brand">
                      <Package size={18} />
                      <h3 className="text-sm font-bold uppercase tracking-widest mono-label">它来自哪个产品</h3>
                    </div>
                    <button onClick={() => navigate(`/products/${relatedProduct.id}`)} className="text-left group">
                      <div className="text-[18px] font-bold text-tx-primary group-hover:text-accent-brand transition-colors mb-2">
                        {relatedProduct.name}
                      </div>
                      <div className="text-sm text-tx-tertiary leading-relaxed">
                        {relatedProduct.oneLiner}
                      </div>
                    </button>
                  </div>
                )}

                {relatedInsight && (
                  <div className="p-8 border border-border-subtle rounded-radius-card bg-surface">
                    <div className="flex items-center gap-3 mb-4 text-accent-alert">
                      <BookOpen size={18} />
                      <h3 className="text-sm font-bold uppercase tracking-widest mono-label">相关文章</h3>
                    </div>
                    <button onClick={() => navigate(`/insights/${relatedInsight.id}`)} className="text-left group">
                      <div className="text-[18px] font-bold text-tx-primary group-hover:text-accent-alert transition-colors mb-2">
                        {relatedInsight.title}
                      </div>
                      <div className="text-sm text-tx-tertiary leading-relaxed">
                        {relatedInsight.oneLiner || relatedInsight.summary}
                      </div>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {!isMcp && (
      <section className="py-24 border-t border-border-subtle bg-surface">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-6">
            <h2 className="text-[32px] serif-heading font-bold text-tx-primary">更多可复用资源</h2>
            <Link to="/resources" className="text-sm font-bold text-tx-tertiary hover:text-tx-primary flex items-center gap-2">
              查看全部 <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {RESOURCES.filter((item) => item.id !== Number(id)).slice(0, 4).map((item) => (
              <Link key={item.id} to={`/resources/${item.id}`} className="p-6 bg-paper border border-border-subtle rounded-radius-card hover:border-border-strong hover:shadow-workshop transition-all group">
                <span className="mono-label text-[10px] text-tx-tertiary uppercase block mb-3">{item.type}</span>
                <h5 className="font-bold text-tx-primary mb-2 group-hover:text-accent-brand transition-colors leading-tight">{item.name}</h5>
              </Link>
            ))}
          </div>
        </div>
      </section>
      )}
    </div>
  );
};
