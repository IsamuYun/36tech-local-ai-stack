import React from 'react';

import companyLogo from '../../assets/image/about/36-Tech-Freedom-Logo.png';
import '../../css/about.css';

const founders = [
  {
    name: 'Weiqun Chen',
    role: 'Science, data, and applied AI',
    bio: 'Ph.D. in Chemical Engineering from UC Davis, B.S. in Materials Science from Tsinghua University, and nearly a decade as a working data scientist. She does not need your science explained to her—she has lived it.',
  },
  {
    name: 'Chunnan Yun',
    role: 'Production software and systems',
    bio: 'Twenty years building production software across finance, education, and online gaming—industries where systems have to be fast, secure, and right the first time.',
  },
];

const firstNinetyDays = [
  {
    number: '01',
    title: 'Executive AI orientation',
    body: 'We bring leadership from “we should probably do something about AI” to a clear, shared, hype-free view of where it creates real value for the company—and where it does not.',
  },
  {
    number: '02',
    title: 'Find the right first project',
    body: 'Together, we choose a high-value, low-risk pilot that can prove value without forcing the organization into a premature platform commitment.',
  },
  {
    number: '03',
    title: 'Prove it, then scale',
    body: 'We build the pilot, measure the result, document what worked, and expand only the capabilities that earn their place.',
  },
];

const pilotProjects = [
  {
    title: 'Supply chain and operations optimization',
    body: 'Use your own data to reduce cost, waste, delays, and operational guesswork.',
  },
  {
    title: 'Enterprise knowledge base',
    body: 'Turn expertise locked in senior people and scattered documents into a searchable, lasting company asset.',
  },
  {
    title: 'Internal AI assistant',
    body: 'Give the team a private Q&A system grounded in company knowledge, with answers available in seconds.',
  },
];

export default function AboutSection() {
  return (
    <section
      className="about-brochure"
      id="about-top"
      lang="en"
      aria-label="About 36 Tech Freedom"
      style={{ '--about-brand-image': `url("${companyLogo}")` }}
    >
      <header className="about-brochure-hero">
        <div className="about-brochure-shell">
          <div className="about-brochure-runhead">
            <span>36 <b>Tech</b> Freedom LLC</span>
            <span>Company profile · 2026</span>
          </div>

          <div className="about-brochure-hero-grid">
            <div className="about-brochure-hero-copy">
              <p className="about-brochure-eyebrow">AI-Powered Operations · Established 2018</p>
              <h1>Turning AI curiosity into AI capability.</h1>
              <p className="about-brochure-lead">
                By a team that understands your science, not just your software.
              </p>
              <div className="about-brochure-actions">
                <a className="about-brochure-primary" href="/en/contact">Start a conversation</a>
                <a className="about-brochure-secondary" href="#about-90-days">See your first 90 days</a>
              </div>
            </div>

            <div className="about-brochure-brand" aria-label="36 Tech Freedom logo">
              <img src={companyLogo} alt="36 Tech Freedom" />
              <p>Practical AI for companies built on science and rigor.</p>
            </div>
          </div>
        </div>
      </header>

      <section className="about-brochure-section about-brochure-company">
        <div className="about-brochure-shell">
          <div className="about-brochure-section-heading">
            <p className="about-brochure-eyebrow">Who we are</p>
            <h2>Small by design. Deep where it matters.</h2>
          </div>

          <div className="about-brochure-company-grid">
            <div className="about-brochure-company-copy">
              <p>
                36 Tech Freedom is a boutique technology firm in Irvine, California. We help mid-sized companies put AI and data to work—not as a buzzword, but as practical, measurable improvements to how the business actually runs.
              </p>
              <p>
                You work directly with the two people who do the work. For a company built on science and rigor, that removes the translation layer and the learning curve about your world.
              </p>
            </div>

            <div className="about-brochure-fact">
              <span>Our advantage</span>
              <strong>We speak both your science and your systems.</strong>
              <p>Domain understanding and production engineering stay in the same room from first conversation through launch.</p>
            </div>
          </div>

          <div className="about-brochure-founders" aria-label="Founding team">
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
            <p className="about-brochure-eyebrow">What we do</p>
            <h2>Your first 90 days with AI.</h2>
            <p>
              Most leadership teams do not need another vendor pitch. They need to understand what AI can and cannot do for their business before spending on the wrong thing. We start there.
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
              <p className="about-brochure-eyebrow">Common starting points</p>
              <h3>A first project that is valuable, measurable, and contained.</h3>
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
            <p className="about-brochure-eyebrow">How we work</p>
            <h2>Start small. Protect your data. Prove value before scaling.</h2>
            <p>We would rather earn the second project than oversell the first.</p>
          </article>

          <article>
            <p className="about-brochure-eyebrow">Our name</p>
            <h2>Find the essential move. Create freedom to focus.</h2>
            <p>
              “36 Tech Freedom” draws on the Thirty-Six Stratagems, a classic Chinese text on strategy and the belief that every situation has one essential, decisive move. Our job is to find yours in your data. Freedom is the goal: technology that lets you focus on what you do best while we handle the data and systems.
            </p>
          </article>
        </div>
      </section>

      <section className="about-brochure-contact" aria-labelledby="about-contact-title">
        <div className="about-brochure-shell">
          <div className="about-brochure-contact-panel">
            <div>
              <p className="about-brochure-eyebrow">Let&apos;s talk</p>
              <h2 id="about-contact-title">Bring us the business question that has been sitting between teams.</h2>
              <p>We will help you determine whether AI is the right move—and what a responsible first step looks like.</p>
            </div>

            <dl className="about-brochure-contact-list">
              <div><dt>Email</dt><dd><a href="mailto:yun@36techfreedom.com">yun@36techfreedom.com</a></dd></div>
              <div><dt>Web</dt><dd><a href="https://36techfreedom.com">36techfreedom.com</a></dd></div>
              <div><dt>Phone</dt><dd><a href="tel:+16263667032">626-366-7032</a></dd></div>
              <div><dt>Entity</dt><dd>36 Tech Freedom LLC · United States</dd></div>
            </dl>
          </div>
        </div>
      </section>
    </section>
  );
}
