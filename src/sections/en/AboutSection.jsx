import React from 'react';

import companyLogo from '../../assets/logo/36-tech-logo.png';

const aboutCopy = {
  en: {
    sectionLabel: 'About Us',
    eyebrow: 'About Us',
    companyName: '36 Tech Freedom LLC',
    founded: 'Founded in 2018',
    body: [
      '36 Tech Freedom LLC was founded in 2018 to help small and mid-sized businesses turn practical AI into daily operating capacity. We work with leaders who need better visibility, faster decisions, and fewer repetitive tasks, but do not want a black-box platform dropped into the business without context.',
      'Our work starts with the way a company already operates. We map the workflows, data sources, approvals, customer questions, and reporting habits that shape the business today. From there, we design AI-Powered services that fit the real environment: AI strategy and training, smart data analytics, AI knowledge bases, workflow automation, and custom AI agents that support multi-step tasks across existing systems.',
      'For many growing companies, the challenge is not access to AI. The challenge is knowing where AI creates measurable value, how to keep people in control, and how to deploy tools without overwhelming the team. We focus on that middle ground. We build clear, maintainable solutions; document how they work; train the people who will use them; and keep improving after launch. The goal is reliable AI-Powered operations that businesses can understand, own, and scale.',
    ],
  },
  cn: {
    sectionLabel: '关于我们',
    eyebrow: '关于我们',
    companyName: '36 Tech Freedom LLC',
    founded: '成立于 2018 年',
    body: [
      '36 Tech Freedom LLC 成立于 2018 年，专注于帮助中小企业把 AI-Powered 能力落到真实业务中。我们服务的客户通常已经意识到团队需要更清晰的数据、更快速的决策和更少的重复劳动，但不希望把一个不了解业务语境的黑盒平台直接塞进日常流程。',
      '我们的工作从企业现有的运营方式开始。我们会梳理工作流、数据来源、审批节点、客户问题、报表习惯和团队协作方式，再据此设计真正适配业务现场的 AI-Powered 服务，包括 AI 战略与培训、智能数据分析、AI 知识库、工作流自动化，以及能够跨系统处理多步骤任务的定制 AI 智能体。',
      '对很多成长型企业来说，难点不是“有没有 AI”，而是 AI 应该用在哪里、如何产生可衡量价值、怎样让员工保持掌控感，以及如何在不增加团队负担的前提下完成落地。36 Tech Freedom LLC 关注的正是这个中间地带：我们构建清晰、可维护的解决方案，记录系统如何工作，培训真正使用它的人，并在上线后持续优化。我们的目标不是追逐每一次模型更新，而是帮助企业建立能够理解、拥有并扩展的 AI-Powered 运营能力。',
    ],
  },
};

const aboutSectionCss = `
  .about-section {
    --about-bg: #0D47A1;
    --about-panel: #1565C0;
    --about-label: #f6ffff;
    --about-card: #ffffff;
    --about-ink: #0f172a;
    --about-muted: #465568;
    --about-rule: #d7dce5;
    width: 100vw;
    margin-inline: calc(50% - 50vw);
    position: relative;
    isolation: isolate;
    overflow: hidden;
    background: var(--about-bg);
    color: var(--about-label);
  }

  .about-section::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    background:
      linear-gradient(180deg, rgba(21, 101, 192, 0.78), rgba(13, 71, 161, 0) 48%),
      repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0 1px, transparent 1px 92px);
  }

  .about-section::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -180px;
    z-index: -1;
    width: min(1120px, 88vw);
    height: 340px;
    transform: translateX(-50%) skewY(-5deg);
    background: var(--about-panel);
    opacity: 0.58;
  }

  .about-layout {
    width: min(100%, 1480px);
    min-height: clamp(660px, calc(100vh - 110px), 900px);
    margin: 0 auto;
    padding: clamp(40px, 7vw, 96px) clamp(24px, 4vw, 64px);
    display: grid;
    place-items: center;
  }

  .about-card {
    width: min(100%, 940px);
    background: var(--about-card);
    color: var(--about-ink);
    border: 1px solid rgba(255, 255, 255, 0.82);
    border-radius: 2px;
    padding: clamp(26px, 4.5vw, 58px);
    box-shadow: 0 28px 72px rgba(4, 22, 58, 0.28);
  }

  .about-eyebrow {
    margin: 0 0 clamp(20px, 3vw, 34px);
    color: #1565C0;
    font-family: var(--font-inter), "Noto Sans SC", "PingFang SC", system-ui, sans-serif;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.24em;
    text-align: center;
    text-transform: uppercase;
  }

  .about-brand-lockup {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(16px, 3vw, 28px);
  }

  .about-logo {
    width: clamp(76px, 9vw, 112px);
    height: clamp(76px, 9vw, 112px);
    display: block;
    object-fit: contain;
    flex: none;
  }

  .about-company-name {
    margin: 0;
    max-width: 720px;
    color: var(--about-ink);
    font-size: clamp(28px, 5vw, 56px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0;
    text-wrap: balance;
  }

  .about-rule {
    width: 100%;
    height: 1px;
    margin: clamp(24px, 4vw, 40px) 0 clamp(20px, 3vw, 32px);
    background: var(--about-rule);
  }

  .about-founded {
    margin: 0 0 18px;
    color: #1565C0;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .about-body {
    display: grid;
    gap: 16px;
  }

  .about-body p {
    margin: 0;
    color: var(--about-muted);
    font-size: clamp(16px, 1.25vw, 18px);
    line-height: 1.78;
    letter-spacing: 0;
    text-wrap: pretty;
  }

  .about-section[data-language="cn"] .about-founded {
    letter-spacing: 0.12em;
  }

  .about-section[data-language="cn"] .about-body p {
    line-height: 1.9;
  }

  @media (max-width: 720px) {
    .about-layout {
      min-height: auto;
      padding-block: 44px;
    }

    .about-card {
      padding: 24px;
    }

    .about-brand-lockup {
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about-company-name {
      font-size: clamp(30px, 10vw, 42px);
    }
  }
`;

export default function AboutSection({ language = 'en' }) {
  const copy = aboutCopy[language] || aboutCopy.en;

  return (
    <section
      className="about-section"
      id="about-top"
      aria-label={copy.sectionLabel}
      data-language={language}
    >
      <style>{aboutSectionCss}</style>
      <div className="about-layout">
        <article className="about-card">
          <p className="about-eyebrow">{copy.eyebrow}</p>
          <div className="about-brand-lockup">
            <img className="about-logo" src={companyLogo} alt="" aria-hidden="true" />
            <h1 className="about-company-name">{copy.companyName}</h1>
          </div>
          <div className="about-rule" aria-hidden="true" />
          <p className="about-founded">{copy.founded}</p>
          <div className="about-body">
            {copy.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
