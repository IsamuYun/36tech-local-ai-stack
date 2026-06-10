import React, { useEffect, useRef, useState } from 'react';

const marqueeItems = [
  'Prompt systems',
  'Evaluation loops',
  'Local-first workflows',
  'Small-team automation',
  'Interface craft',
];

const timelineItems = [
  {
    stage: '阶段 01',
    title: '开始记录重复工作流',
    description: '把写作、研究、代码审阅里的高频步骤拆成可复用任务，先做给自己用，再把失败案例写进笔记。',
    status: 'Research',
  },
  {
    stage: '阶段 02',
    title: '发布第一个面向用户的 AI 助手',
    description:
      '重点不是“生成更多内容”，而是让用户能看见输入、判断和修改路径，降低把结果交出去之前的不确定性。',
    status: 'Prototype',
  },
  {
    stage: '阶段 03',
    title: '把评估和版本记录做进产品',
    description: '每次 prompt、模型和界面变动都有对照样本；读者会看到这些取舍，而不是只看到发布公告。',
    status: 'Evaluation',
  },
  {
    stage: 'Now',
    title: '围绕小团队的工具链继续打磨',
    description: '当前关注：本地文件上下文、协作审阅、长任务恢复，以及让 AI 工具在日常工作里少打扰、多交付。',
    status: 'Shipping',
  },
];

const mentions = [
  {
    title: '独立开发周报',
    description: '持续拆解从想法、原型、收费到维护的完整过程，适合正在构建 AI 工具的个人和小团队。',
  },
  {
    title: '用户评价',
    description: '“它没有替我做决定，而是把我该检查的地方标出来。这比一个漂亮答案更有用。”',
  },
  {
    title: '媒体引用占位',
    description: '保留给真实媒体、播客或社区引用；没有来源前不伪造 logo 墙和夸张数字。',
  },
];

function Reveal({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component className={`home-ai-reveal ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

function AiToolsIntro() {
  return (
    <section className="home-ai-section home-ai-hero" id="ai-tools-top">
      <div className="home-ai-container home-ai-hero-split">
        <Reveal className="home-ai-hero-copy">
          <p className="home-ai-eyebrow">Independent AI Toolmaker · Weekly Field Notes</p>
          <h2>把 AI 工具做得更像可靠的工作台。</h2>
          <p className="home-ai-lead">
            我独立设计、开发、运营面向创作者和小团队的 AI 工具。这里记录真实构建过程、产品判断，以及一个轻量的 Chatbot 原型。
          </p>
          <div className="home-ai-hero-cta">
            <a className="home-ai-btn home-ai-btn-primary" href="#ai-tools-chatbot">
              试用 Chatbot
            </a>
            <a className="home-ai-btn home-ai-btn-secondary home-ai-btn-arrow" href="#ai-tools-timeline">
              看独立开发时间线
            </a>
          </div>
          <div className="home-ai-editorial-rule" aria-hidden="true" />
        </Reveal>

        <Reveal className="home-ai-hero-visual" aria-label="AI 工具独立开发者杂志封面式视觉">
          <div className="home-ai-cover-card">
            <div className="home-ai-cover-top">
              <span>ISSUE 01</span>
              <span>BUILDING IN PUBLIC</span>
            </div>
            <div className="home-ai-orbit" aria-hidden="true" />
            <div className="home-ai-mini-note">本周主题：从一个可复用 prompt，到一个真正可交付的产品界面。</div>
            <div className="home-ai-cover-title" aria-hidden="true">
              <span>AI</span>
              <span>TOOLS</span>
              <span>NOTES</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AiToolsMarquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="home-ai-marquee" aria-hidden="true">
      <div className="home-ai-marquee-track">
        {items.map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function AiToolsTimeline() {
  return (
    <section className="home-ai-section" id="ai-tools-timeline">
      <div className="home-ai-container">
        <Reveal className="home-ai-section-heading">
          <p className="home-ai-eyebrow">Timeline</p>
          <h2>从旁路脚本，到可被团队信任的 AI 产品。</h2>
          <p className="home-ai-lead">
            首页用时间线承载个人品牌：不夸张承诺，只展示这个独立开发者如何把问题、原型、反馈和发行串起来。
          </p>
        </Reveal>

        <div className="home-ai-timeline">
          {timelineItems.map((item) => (
            <Reveal as="article" className="home-ai-log-row" key={item.stage}>
              <span className="home-ai-meta home-ai-num">{item.stage}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className="home-ai-pull home-ai-meta">{item.status}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiToolsMentions() {
  return (
    <section className="home-ai-section" id="ai-tools-mentions">
      <div className="home-ai-container home-ai-quote-grid">
        <Reveal className="home-ai-quote-card">
          <div>
            <div className="home-ai-quote-mark" aria-hidden="true">
              "
            </div>
            <blockquote>这类工具最打动人的地方，不是炫技，而是把 AI 放回真实工作的节奏里。</blockquote>
          </div>
          <p className="home-ai-quote-author">— 早期用户反馈，产品内测记录</p>
        </Reveal>

        <div className="home-ai-mention-list">
          {mentions.map((mention) => (
            <Reveal as="article" className="home-ai-mention" key={mention.title}>
              <strong>{mention.title}</strong>
              <p>{mention.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiToolsChatbot() {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('提出一个工作流、prompt 或产品问题，生成结果会显示在这里。');
  const [message, setMessage] = useState({ state: '', text: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setMessage({ state: 'error', text: '请先输入一个问题。' });
      return;
    }

    setResult(
      [
        `问题：${trimmedQuestion}`,
        '结果：',
        '先明确这个工具要支持的用户决策，再定义输入上下文、输出格式，以及发布前必须验证的一个失败案例。',
      ].join('\n\n'),
    );
    setMessage({ state: 'success', text: '已在本地生成结果。' });
    setQuestion('');
  };

  return (
    <section className="home-ai-section" id="ai-tools-chatbot">
      <div className="home-ai-container">
        <Reveal className="home-ai-chatbot-panel">
          <div className="home-ai-chatbot-grid">
            <article className="home-ai-chatbot-result" aria-label="Chatbot 结果">
              <span className="home-ai-meta home-ai-num">RESULT</span>
              <div className="home-ai-chatbot-output" aria-live="polite">
                {result.split('\n').map((line, index) => (
                  <p key={`${line}-${index}`}>{line || '\u00a0'}</p>
                ))}
              </div>
            </article>

            <form className="home-ai-chatbot-form" noValidate onSubmit={handleSubmit}>
              <div className="home-ai-field">
                <label htmlFor="ai-tools-question-cn">问题</label>
                <textarea
                  className="home-ai-input home-ai-textarea"
                  id="ai-tools-question-cn"
                  name="question"
                  placeholder="我应该如何评估一个新的 AI 工作流？"
                  required
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                />
              </div>
              <button className="home-ai-btn home-ai-btn-primary" type="submit">
                Submit
              </button>
              <p className="home-ai-form-message" data-state={message.state} aria-live="polite">
                {message.text}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function AiToolsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const revealItems = Array.from(root.querySelectorAll('.home-ai-reveal'));

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-ai" ref={sectionRef} aria-label="AI tools field notes">
      <AiToolsIntro />
      <AiToolsMarquee />
      <AiToolsTimeline />
      <AiToolsMentions />
      <AiToolsChatbot />
    </section>
  );
}
