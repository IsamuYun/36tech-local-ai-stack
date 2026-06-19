import React, { useEffect, useRef, useState } from 'react';

import AiToolsScrollDown from '../../../components/AiToolsScrollDown.jsx';

import intro1 from '../../../assets/image/intro/intro-1.jpg';
import intro2 from '../../../assets/image/intro/intro-2.jpg';
import intro3 from '../../../assets/image/intro/intro-3.jpg';
import intro4 from '../../../assets/image/intro/intro-4.jpg';
import focusWhatWeDo from '../../../assets/image/in-focus/what-we-do.jpg';
import focusHowWeDeliver from '../../../assets/image/in-focus/how-we-deliver.jpg';
import focusLocalAi from '../../../assets/image/in-focus/local-ai-deployment.jpg';
import focusLearnFromAi from '../../../assets/image/in-focus/ai-knowledge-base.jpg';

const introGallery = [
  {
    image: intro1,
    title: '工作流',
    description: '把重复步骤沉淀为可复用任务。',
  },
  {
    image: intro2,
    title: '原型',
    description: '快速发布首个面向用户的助手。',
  },
  {
    image: intro3,
    title: '评估',
    description: '每次变更都配上对照样本。',
  },
  {
    image: intro4,
    title: '交付',
    description: '为小团队打磨工具链。',
  },
];

const marqueeItems = [
  'Prompt systems',
  'Evaluation loops',
  'Local-first workflows',
  'Small-team automation',
  'Interface craft',
];

const inFocusItems = [
  {
    image: focusWhatWeDo,
    title: '我们做什么',
    href: '/services',
    content: 'AI 战略、数据分析、工作流自动化与定制 AI 智能体，为希望更高效运营的中型企业量身打造。',
  },
  {
    image: focusHowWeDeliver,
    title: '我们如何交付',
    href: '/works',
    content: '真实项目，真实结果。看看我们如何帮助企业把复杂数据变成清晰决策，把手动流程变成自动化工作流。',
  },
  {
    image: focusLocalAi,
    title: '本地企业的 AI',
    href: '/local-ai',
    content: '橙县企业面临独特挑战。我们把企业级 AI 解决方案带给本地公司，并提供只有本地合作伙伴才能做到的贴身支持。',
  },
  {
    image: focusLearnFromAi,
    title: '学习 AI',
    href: '/services',
    content: '不确定从哪里开始使用 AI？浏览我们的知识库，获取实用指南、应用场景和常见问题答案。',
  },
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;

    const mediaQuery = window.matchMedia('(max-width: 720px)');
    const update = () => setIsMobile(mediaQuery.matches);

    update();
    mediaQuery.addEventListener('change', update);

    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    // On mobile the accordion and auto-rotation are disabled.
    if (isPaused || isMobile) return undefined;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % introGallery.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [isPaused, isMobile]);

  const activeItem = introGallery[activeIndex];

  return (
    <section className="home-ai-section home-ai-hero" id="ai-tools-top">
      <div className="home-ai-container home-ai-hero-split">
        <Reveal className="home-ai-hero-visual" aria-label="AI 工具独立开发者图片画廊">
          <div className="home-ai-accordion-stage">
            <p className="home-ai-eyebrow">Ways we are making a difference</p>
            <div
              className="home-ai-accordion"
              onMouseEnter={() => !isMobile && setIsPaused(true)}
              onMouseLeave={() => !isMobile && setIsPaused(false)}
            >
              <ul>
                {introGallery.map((item, index) => (
                  <li
                    key={item.title}
                    className={index === activeIndex ? 'is-active' : ''}
                    style={{ backgroundImage: `url(${item.image})` }}
                    onMouseEnter={() => !isMobile && setActiveIndex(index)}
                  >
                  </li>
                ))}
              </ul>
            </div>

            <div className="home-ai-intro-active" aria-live="polite">
              <h4 key={`${activeItem.title}-title`}>{activeItem.title}</h4>
              <p key={`${activeItem.title}-desc`}>{activeItem.description}</p>
            </div>
          </div>
          <img
            className="home-ai-mobile-intro-image"
            src={intro4}
            alt="小团队 AI 工具开发场景"
          />
        </Reveal>
      </div>

    </section>
  );
}

function AiToolsInFocus() {
  return (
    <section className="home-ai-section home-ai-in-focus" id="ai-tools-in-focus">
      <div className="home-ai-container">
        <Reveal className="home-ai-section-heading">
          <p className="home-ai-eyebrow">聚焦</p>
        </Reveal>

        <div className="home-ai-focus-grid">
          {inFocusItems.map((item) => (
            <Reveal as="a" className="home-ai-focus-card" href={item.href} key={item.title}>
              <img src={item.image} alt="" aria-hidden="true" />
              <div className="home-ai-focus-body">
                <h3>{item.title}</h3>
                <div className="home-ai-focus-rule" aria-hidden="true" />
                <p>{item.content}</p>
              </div>
            </Reveal>
          ))}
        </div>
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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setMessage({ state: 'error', text: '请先输入一个问题。' });
      return;
    }

    setIsLoading(true);
    setMessage({ state: 'loading', text: 'Gemini 正在生成回答…' });

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmedQuestion, language: 'cn' }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || typeof data.answer !== 'string') {
        throw new Error(data.error || '暂时无法生成回答。');
      }

      setResult(data.answer);
      setMessage({ state: 'success', text: 'Gemini 已生成回答。' });
      setQuestion('');
    } catch (error) {
      setMessage({
        state: 'error',
        text: error instanceof Error ? error.message : '暂时无法生成回答。',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="home-ai-section" id="ai-tools-chatbot">
      <div className="home-ai-container">
        <Reveal className="home-ai-chatbot-panel">
          <div className="home-ai-chatbot-grid">
            <article className="home-ai-chatbot-result" aria-label="Chatbot 结果">
              <span className="home-ai-meta home-ai-num">RESULT</span>
              <div className="home-ai-chatbot-output" aria-live="polite" aria-busy={isLoading}>
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
                  maxLength={2000}
                  required
                  disabled={isLoading}
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                />
              </div>
              <button className="home-ai-btn home-ai-btn-primary" type="submit" disabled={isLoading}>
                {isLoading ? '生成中…' : '询问 Gemini'}
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
      <AiToolsScrollDown ariaLabel="滚动到聚焦内容" />
      <AiToolsMarquee />
      <AiToolsInFocus />
      <AiToolsChatbot />
      <AiToolsTimeline />
      <AiToolsMentions />

    </section>
  );
}
