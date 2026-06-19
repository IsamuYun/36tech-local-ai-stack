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
    title: 'Workflows',
    description: 'Repeatable steps captured as reusable tasks.',
  },
  {
    image: intro2,
    title: 'Prototypes',
    description: 'First user-facing assistants, shipped fast.',
  },
  {
    image: intro3,
    title: 'Evaluation',
    description: 'Comparison samples paired with every change.',
  },
  {
    image: intro4,
    title: 'Shipping',
    description: 'Refined toolchains for small teams.',
  },
];

const marqueeItems = [
  'Prompt systems',
  'Evaluation loops',
  'Local-first workflows',
  'Small-team automation',
  'Interface craft',
];

// Fill the content fields manually when the final copy is ready.
const inFocusItems = [
  {
    image: focusWhatWeDo,
    title: 'What We Do',
    href: '/services',
    content: 'AI strategy, data analytics, workflow automation, and custom AI agents — tailored for mid-size businesses ready to work smarter',
  },
  {
    image: focusHowWeDeliver,
    title: 'How We Deliver',
    href: '/works',
    content: 'Real projects, real results. See how we\'ve helped businesses turn complex data into clear decisions and manual processes into automated workflows',
  },
  {
    image: focusLocalAi,
    title: 'AI for Local Business',
    href: '/local-ai',
    content: 'Orange County businesses face unique challenges. We bring enterprise-level AI solutions to local companies — with the hands-on support that only a local partner can provide',
  },
  {
    image: focusLearnFromAi,
    title: 'Learn from AI',
    href: '/services',
    content: 'Not sure where to start with AI? Browse our knowledge base for practical guides, use cases, and answers',
  },
];

const timelineItems = [
  {
    stage: 'Stage 01',
    title: 'Start logging repeatable workflows',
    description:
      'Break recurring steps in writing, research, and code review into reusable tasks. Use them privately first, then write down the failure cases.',
    status: 'Research',
  },
  {
    stage: 'Stage 02',
    title: 'Ship the first user-facing AI assistant',
    description:
      'The goal is not to generate more content. It is to make inputs, judgment, and revision paths visible so users can reduce uncertainty before handing work off.',
    status: 'Prototype',
  },
  {
    stage: 'Stage 03',
    title: 'Build evaluation and version history into the product',
    description:
      'Every prompt, model, and interface change is paired with comparison samples. Readers see the tradeoffs, not only the launch notes.',
    status: 'Evaluation',
  },
  {
    stage: 'Now',
    title: 'Keep refining toolchains for small teams',
    description:
      'Current focus: local file context, collaborative review, long-task recovery, and making AI tools less interruptive and more useful in daily work.',
    status: 'Shipping',
  },
];

const mentions = [
  {
    title: 'Independent builder notes',
    description:
      'A running breakdown of the full path from idea and prototype to pricing and maintenance, written for people building practical AI tools.',
  },
  {
    title: 'User feedback',
    description:
      '"It did not make the decision for me. It showed me exactly what I needed to check, which was more useful than a polished answer."',
  },
  {
    title: 'Media mentions placeholder',
    description:
      'Reserved for real media, podcast, or community references. No fabricated logo walls or inflated numbers before sources exist.',
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
        <Reveal className="home-ai-hero-visual" aria-label="Image gallery of independent AI toolmaking">

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
            alt="Small-team AI toolmaking scenes"
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
          <p className="home-ai-eyebrow">Start Here</p>
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
          <h2>From side scripts to AI products teams can trust.</h2>
          <p className="home-ai-lead">
            The timeline carries the personal brand without inflated promises. It shows how problems, prototypes, feedback, and releases connect.
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
            <blockquote>The most compelling part is not the technical flash. It is putting AI back into the rhythm of real work.</blockquote>
          </div>
          <p className="home-ai-quote-author">- Early user feedback, private beta notes</p>
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
  const [result, setResult] = useState(
    'Ask a workflow, prompt, or product question. The generated result will appear here.',
  );
  const [message, setMessage] = useState({ state: '', text: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      setMessage({ state: 'error', text: 'Enter a question before submitting.' });
      return;
    }

    setResult(
      [
        `Question: ${trimmedQuestion}`,
        'Result:',
        'Start by naming the user decision this tool should support. Then define the input context, the expected output shape, and one failure case to evaluate before shipping.',
      ].join('\n\n'),
    );
    setMessage({ state: 'success', text: 'Result generated locally.' });
    setQuestion('');
  };

  return (
    <section className="home-ai-section" id="ai-tools-chatbot">
      <div className="home-ai-container">
        <Reveal className="home-ai-chatbot-panel">
          <div className="home-ai-chatbot-grid">
            <article className="home-ai-chatbot-result" aria-label="Chatbot result">
              <span className="home-ai-meta home-ai-num">RESULT</span>
              <div className="home-ai-chatbot-output" aria-live="polite">
                {result.split('\n').map((line, index) => (
                  <p key={`${line}-${index}`}>{line || '\u00a0'}</p>
                ))}
              </div>
            </article>

            <form className="home-ai-chatbot-form" noValidate onSubmit={handleSubmit}>
              <div className="home-ai-field">
                <label htmlFor="ai-tools-question">Question</label>
                <textarea
                  className="home-ai-input home-ai-textarea"
                  id="ai-tools-question"
                  name="question"
                  placeholder="How should I evaluate a new AI workflow?"
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

export default function HomeSection() {
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
      <AiToolsInFocus />
      <AiToolsMarquee />
      <AiToolsScrollDown ariaLabel="Scroll to In Focus" />


      <AiToolsChatbot />
      <AiToolsTimeline />
      <AiToolsMentions />

    </section>
  );
}

// <AiToolsInFocus />
// <AiToolsMarquee />