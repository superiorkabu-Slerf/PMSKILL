import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bell,
  BookOpen,
  ExternalLink,
  Github,
  Mail,
  MessageCircle,
  Play,
  Rss,
  Send,
  Users,
} from 'lucide-react';

type SocialChannel = {
  name: string;
  hint: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const SOCIAL_CHANNELS: SocialChannel[] = [
  { name: '小红书', hint: '看最近发布和使用场景', href: 'https://www.xiaohongshu.com/search_result?keyword=Tranfu', icon: MessageCircle },
  { name: 'X / Twitter', hint: '看即时更新和轻量动态', href: 'https://x.com/search?q=Tranfu', icon: Send },
  { name: 'Bilibili', hint: '看更完整的讲解和演示', href: 'https://search.bilibili.com/all?keyword=Tranfu', icon: Play },
  { name: '知乎', hint: '看长文判断和经验整理', href: 'https://www.zhihu.com/search?type=content&q=Tranfu', icon: BookOpen },
  { name: 'GitHub', hint: '看项目代码和结构沉淀', href: 'https://github.com/search?q=tranfu', icon: Github },
];

const QrPlaceholder = ({ label }: { label: string }) => (
  <div className="w-[88px] h-[88px] min-w-[88px] min-h-[88px] rounded-md border border-border-subtle bg-[linear-gradient(45deg,#ece8e0_25%,transparent_25%,transparent_50%,#ece8e0_50%,#ece8e0_75%,transparent_75%,transparent)] bg-[length:12px_12px] flex items-center justify-center text-[10px] text-tx-quaternary text-center leading-snug p-2 shrink-0">
    {label}
  </div>
);

const UpdatePanel = ({
  email,
  setEmail,
  open,
}: {
  email: string;
  setEmail: (value: string) => void;
  open: boolean;
}) => (
  <div
    className={`hidden md:block absolute top-0 right-full mr-4 z-30 transition-all duration-200 ${
      open ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none'
    }`}
  >
    <div className="w-[360px] max-w-[calc(100vw-48px)] p-4 rounded-2xl border border-border-subtle bg-white shadow-overlay">
      <div className="mono-label text-[10px] text-tx-quaternary uppercase tracking-widest mb-4">
        更新渠道
      </div>
      <div className="grid gap-3">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border-subtle">
          <QrPlaceholder label="微信二维码待替换" />
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-7 h-7 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-tx-primary">
                <Users size={14} />
              </div>
              <div className="text-sm font-bold text-tx-primary">微信更新群</div>
            </div>
            <div className="text-[11px] text-tx-tertiary leading-relaxed">
              扫码加入后，可以第一时间接收产品和资源更新。
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-surface border border-border-subtle">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-tx-primary">
              <Mail size={14} />
            </div>
            <div className="text-sm font-bold text-tx-primary">邮箱订阅</div>
          </div>
          <div className="text-[11px] text-tx-tertiary leading-relaxed mb-3">
            输入邮箱后可接入邮件订阅，按周接收重点文章和阶段进展。
          </div>
          <div className="flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="输入你的邮箱"
              className="flex-1 h-10 px-3 rounded-lg border border-border-subtle bg-white text-sm text-tx-primary placeholder:text-tx-quaternary outline-none focus:border-border-bold"
            />
            <button
              type="button"
              className="h-10 px-4 rounded-lg bg-inverse text-white text-sm font-medium whitespace-nowrap"
            >
              订阅更新
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MobileUpdatePanel = ({
  email,
  setEmail,
}: {
  email: string;
  setEmail: (value: string) => void;
}) => (
  <div className="md:hidden mt-4 p-5 rounded-2xl border border-border-subtle bg-white">
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <QrPlaceholder label="微信二维码待替换" />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-tx-primary">
              <Users size={14} />
            </div>
            <div className="text-sm font-bold text-tx-primary">微信更新群</div>
          </div>
          <div className="text-[11px] text-tx-tertiary mt-1">扫码加入后，可以第一时间接收产品和资源更新。</div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-surface border border-border-subtle">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-tx-primary">
            <Mail size={14} />
          </div>
          <div className="text-sm font-bold text-tx-primary">邮箱订阅</div>
        </div>
        <div className="text-[11px] text-tx-tertiary leading-relaxed mb-3">
          输入邮箱后可接入邮件订阅，按周接收重点文章和阶段进展。
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="输入你的邮箱"
            className="h-10 px-3 rounded-lg border border-border-subtle bg-white text-sm text-tx-primary placeholder:text-tx-quaternary outline-none focus:border-border-bold"
          />
          <button type="button" className="h-10 rounded-lg bg-inverse text-white text-sm font-medium">
            订阅更新
          </button>
        </div>
      </div>
    </div>
  </div>
);

const SocialHoverPanel = ({
  open,
}: {
  open: boolean;
}) => (
  <div
    className={`hidden md:block absolute top-0 left-full ml-4 z-30 transition-all duration-200 ${
      open ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'
    }`}
  >
    <div className="w-[340px] max-w-[calc(100vw-48px)] p-4 rounded-2xl border border-border-subtle bg-white shadow-overlay">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="mono-label text-[10px] text-tx-quaternary uppercase tracking-widest">
          社媒渠道
        </div>
        <div className="text-[11px] text-tx-tertiary">
          点击任一平台，前往对应账号
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {SOCIAL_CHANNELS.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 p-3 rounded-xl bg-surface border border-border-subtle hover:border-border-bold transition-all"
            >
              <div className="min-w-0 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-tx-primary shrink-0">
                  <Icon size={15} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-tx-primary">{item.name}</div>
                  <div className="text-[11px] text-tx-tertiary leading-relaxed">{item.hint}</div>
                </div>
              </div>
              <ExternalLink size={14} className="text-tx-quaternary group-hover:text-tx-primary shrink-0 transition-colors" />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

const MobileSocialPanel = () => (
  <div className="md:hidden mt-4 p-5 rounded-2xl border border-border-subtle bg-white">
    <div className="text-[11px] text-tx-tertiary mb-4">点击任一平台，前往对应账号</div>
    <div className="space-y-3">
      {SOCIAL_CHANNELS.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-3 p-3 rounded-xl bg-surface border border-border-subtle"
          >
            <div className="min-w-0 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-border-subtle flex items-center justify-center text-tx-primary shrink-0">
                <Icon size={15} />
              </div>
              <div>
                <div className="text-sm font-bold text-tx-primary">{item.name}</div>
                <div className="text-[11px] text-tx-tertiary mt-1">{item.hint}</div>
              </div>
            </div>
            <ExternalLink size={14} className="text-tx-quaternary shrink-0" />
          </a>
        );
      })}
    </div>
  </div>
);

export const SocialSection = () => {
  const [openPanel, setOpenPanel] = useState<'updates' | 'social' | null>(null);
  const [email, setEmail] = useState('');
  const updatesRef = useRef<HTMLDivElement | null>(null);
  const socialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const insideUpdates = updatesRef.current?.contains(target);
      const insideSocial = socialRef.current?.contains(target);

      if (!insideUpdates && !insideSocial) {
        setOpenPanel(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenPanel(null);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <section className="py-24 bg-bg-warm-white border-y border-text-title/5">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-[32px] serif-heading font-bold text-text-title mb-4">
            想第一时间拿到新产品试用和新资源更新？
          </h2>
          <p className="text-text-muted leading-relaxed">
            这里更像首页最后的更新承接层。你可以继续获取更新、提交需求，或者直接找到适合关注的社媒渠道。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div
            ref={updatesRef}
            className="relative"
          >
            <button
              type="button"
              onClick={() => setOpenPanel((current) => (current === 'updates' ? null : 'updates'))}
              className="w-full text-left flex flex-col gap-6 p-8 bg-bg-main rounded-2xl border border-text-title/5 hover:border-brand-blue/30 transition-all h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue-bg text-brand-blue flex items-center justify-center gentle-float">
                <Bell size={22} />
              </div>
              <div>
                <p className="text-lg font-bold text-text-title mb-2">获取更新</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  优先获取新产品试用、最新资源、重点文章和阶段进展。
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm font-medium text-text-title transition-all">
                查看更新渠道
                <ArrowRight size={16} />
              </div>
            </button>

            <UpdatePanel email={email} setEmail={setEmail} open={openPanel === 'updates'} />
            <MobileUpdatePanel email={email} setEmail={setEmail} />
          </div>

          <Link
            to="/cobuild"
            className="group flex flex-col gap-6 p-8 bg-bg-main rounded-2xl border border-text-title/5 hover:border-brand-blue/30 transition-all hover-lift"
          >
            <div className="w-12 h-12 rounded-xl bg-accent-green/20 text-accent-green-dark flex items-center justify-center gentle-float">
              <MessageCircle size={22} />
            </div>
            <div>
              <p className="text-lg font-bold text-text-title mb-2">提交需求</p>
              <p className="text-sm text-text-muted leading-relaxed">告诉我们你现在想解决什么问题，适合的题目会继续进入共建。</p>
            </div>
            <div className="mt-auto flex items-center gap-2 text-sm font-medium text-text-title group-hover:gap-3 transition-all">
              提交需求
              <ArrowRight size={16} />
            </div>
          </Link>

          <div
            ref={socialRef}
            className="relative"
          >
            <button
              type="button"
              onClick={() => setOpenPanel((current) => (current === 'social' ? null : 'social'))}
              className="w-full text-left flex flex-col gap-6 p-8 bg-bg-main rounded-2xl border border-text-title/5 hover:border-brand-blue/30 transition-all h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-orange/20 text-accent-orange-dark flex items-center justify-center gentle-float">
                <Rss size={22} />
              </div>
              <div>
                <p className="text-lg font-bold text-text-title mb-2">关注社媒</p>
                <p className="text-sm text-text-muted leading-relaxed">
                  在你常用的平台里继续关注我们的产品、资源和更新。
                </p>
              </div>
              <div className="mt-auto flex items-center gap-2 text-sm font-medium text-text-title transition-all">
                点击前往社媒账号
                <ArrowRight size={16} />
              </div>
            </button>

            <SocialHoverPanel open={openPanel === 'social'} />
            <MobileSocialPanel />
          </div>
        </div>
      </div>
    </section>
  );
};
