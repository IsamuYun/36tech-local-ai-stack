import React from 'react';

import companyLogo from '../../assets/image/about/36-Tech-Freedom-Logo.png';
import '../../css/about.css';

const founders = [
  {
    name: 'Weiqun Chen',
    role: '科学、数据与应用 AI',
    bio: '加州大学戴维斯分校化学工程博士、清华大学材料科学学士，并拥有近十年的一线数据科学经验。她不需要你从头解释业务背后的科学，因为她真正做过这些工作。',
  },
  {
    name: 'Chunnan Yun',
    role: '生产软件与系统工程',
    bio: '拥有二十年生产级软件开发经验，横跨金融、教育与在线游戏行业。这些行业共同要求系统足够快速、安全，并且从一开始就必须正确。',
  },
];

const firstNinetyDays = [
  {
    number: '01',
    title: '管理层 AI 认知对齐',
    body: '帮助管理团队从“我们可能应该做点 AI”走向清晰、统一且不受炒作影响的判断：AI 在哪些地方能为企业创造真实价值，又在哪些地方并不适合。',
  },
  {
    number: '02',
    title: '找到正确的第一个项目',
    body: '共同选择一个高价值、低风险的试点，在避免过早绑定大型平台的同时，用可控范围证明实际价值。',
  },
  {
    number: '03',
    title: '先验证，再扩展',
    body: '完成试点、衡量结果、记录有效方法，只扩展那些已经证明值得投入的能力。',
  },
];

const pilotProjects = [
  {
    title: '供应链与运营优化',
    body: '利用企业自己的数据，减少成本、浪费、延误与运营中的主观猜测。',
  },
  {
    title: '企业知识库',
    body: '把资深员工经验和分散文档中的知识，转化为可搜索、可持续积累的企业资产。',
  },
  {
    title: '内部 AI 助手',
    body: '基于企业自身知识构建私有问答系统，让团队能够在几秒内获得有依据的答案。',
  },
];

export default function AboutSection() {
  return (
    <section
      className="about-brochure"
      id="about-top"
      lang="zh-CN"
      aria-label="关于 36 Tech Freedom"
      style={{ '--about-brand-image': `url("${companyLogo}")` }}
    >
      <header className="about-brochure-hero">
        <div className="about-brochure-shell">
          <div className="about-brochure-runhead">
            <span>36 <b>Tech</b> Freedom LLC</span>
            <span>公司简介 · 2026</span>
          </div>

          <div className="about-brochure-hero-grid">
            <div className="about-brochure-hero-copy">
              <p className="about-brochure-eyebrow">AI 驱动运营 · 成立于 2018 年</p>
              <h1>把对 AI 的好奇，转化为真正的 AI 能力。</h1>
              <p className="about-brochure-lead">
                我们理解你的科学与业务，不只是你的软件。
              </p>
              <div className="about-brochure-actions">
                <a className="about-brochure-primary" href="/cn/contact">开始交流</a>
                <a className="about-brochure-secondary" href="#about-90-days">查看 AI 落地前 90 天</a>
              </div>
            </div>

            <div className="about-brochure-brand" aria-label="36 Tech Freedom 标志">
              <img src={companyLogo} alt="36 Tech Freedom" />
              <p>为重视科学与严谨的企业，打造真正实用的 AI。</p>
            </div>
          </div>
        </div>
      </header>

      <section className="about-brochure-section about-brochure-company">
        <div className="about-brochure-shell">
          <div className="about-brochure-section-heading">
            <p className="about-brochure-eyebrow">我们是谁</p>
            <h2>保持精简是我们的主动选择，在关键处保持足够深度。</h2>
          </div>

          <div className="about-brochure-company-grid">
            <div className="about-brochure-company-copy">
              <p>
                36 Tech Freedom 是一家位于加州尔湾的精品技术公司。我们帮助中型企业真正用好 AI 与数据——不是把它们当作流行词，而是转化为企业日常运营中可衡量、可持续的改进。
              </p>
              <p>
                客户直接与真正执行项目的两位创始人合作。对于建立在科学与严谨之上的企业，这意味着更少的沟通转译，也不需要让服务商从头学习你的行业世界。
              </p>
            </div>

            <div className="about-brochure-fact">
              <span>我们的优势</span>
              <strong>我们既理解你的科学，也理解支撑业务的系统。</strong>
              <p>从第一次沟通到正式上线，领域理解与生产级工程能力始终在同一个团队中。</p>
            </div>
          </div>

          <div className="about-brochure-founders" aria-label="创始团队">
            {founders.map((founder, index) => (
              <article className="about-brochure-founder" key={founder.name}>
                <span className="about-brochure-index">0{index + 1}</span>
                <p className="about-brochure-founder-role">{founder.role}</p>
                <h3>{founder.name}</h3>
                <p>{founder.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-brochure-section about-brochure-ninety" id="about-90-days">
        <div className="about-brochure-shell">
          <div className="about-brochure-section-heading about-brochure-ninety-heading">
            <p className="about-brochure-eyebrow">我们做什么</p>
            <h2>你的 AI 落地前 90 天。</h2>
            <p>
              大多数管理团队不需要另一次供应商推销。他们需要先理解 AI 对自身业务能做什么、不能做什么，再决定把预算投入在哪里。我们从这里开始。
            </p>
          </div>

          <div className="about-brochure-path">
            {firstNinetyDays.map((step) => (
              <article className="about-brochure-step" key={step.number}>
                <span className="about-brochure-index">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>

          <div className="about-brochure-pilots">
            <div>
              <p className="about-brochure-eyebrow">常见起点</p>
              <h3>从一个有价值、可衡量、边界清晰的项目开始。</h3>
            </div>
            <div className="about-brochure-pilot-list">
              {pilotProjects.map((pilot) => (
                <article key={pilot.title}>
                  <h4>{pilot.title}</h4>
                  <p>{pilot.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-brochure-section about-brochure-approach">
        <div className="about-brochure-shell about-brochure-approach-grid">
          <article>
            <p className="about-brochure-eyebrow">我们的工作方式</p>
            <h2>从小处开始，保护你的数据，在扩展前证明价值。</h2>
            <p>我们更愿意凭第一个项目的成果赢得第二次合作，而不是在一开始过度承诺。</p>
          </article>

          <article>
            <p className="about-brochure-eyebrow">我们的名字</p>
            <h2>找到决定性的一步，获得专注核心业务的自由。</h2>
            <p>
              “36 Tech Freedom”源自中国经典策略著作《三十六计》，它表达了一个信念：每种局面都有一个关键而决定性的行动。我们的工作，就是从你的数据中找到这一步。Freedom 代表最终目标——让技术帮助你专注于最擅长的事情，而数据与系统交给我们处理。
            </p>
          </article>
        </div>
      </section>

      <section className="about-brochure-contact" aria-labelledby="about-contact-title-cn">
        <div className="about-brochure-shell">
          <div className="about-brochure-contact-panel">
            <div>
              <p className="about-brochure-eyebrow">聊一聊</p>
              <h2 id="about-contact-title-cn">把那个长期卡在不同团队之间的业务问题带给我们。</h2>
              <p>我们会帮助你判断 AI 是否是正确选择，以及负责任的第一步应该是什么。</p>
            </div>

            <dl className="about-brochure-contact-list">
              <div><dt>邮箱</dt><dd><a href="mailto:yun@36techfreedom.com">yun@36techfreedom.com</a></dd></div>
              <div><dt>网站</dt><dd><a href="https://36techfreedom.com">36techfreedom.com</a></dd></div>
              <div><dt>电话</dt><dd><a href="tel:+16263667032">626-366-7032</a></dd></div>
              <div><dt>主体</dt><dd>36 Tech Freedom LLC · 美国</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </section>
  );
}
