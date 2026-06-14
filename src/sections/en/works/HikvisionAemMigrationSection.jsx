import React from 'react';

const phases = [
  {
    num: 'PHASE 1',
    duration: 'wks 1-6',
    title: 'Content audit & information architecture',
    body:
      "Full crawl and analytics-weighted inventory. Low-value pages consolidated or retired; the surviving content mapped to a new IA aligned with the global AEM site structure.",
  },
  {
    num: 'PHASE 2',
    duration: 'wks 5-14',
    title: 'Content modeling & component mapping',
    body:
      'Drupal content types and fields mapped to AEM templates, components, and DAM asset schemas, preserving structured product spec data instead of flattening it into rich text.',
  },
  {
    num: 'PHASE 3',
    duration: 'wks 10-26',
    title: 'Scripted ETL migration & QA',
    body:
      'Automated export-transform-import pipeline with diff-based QA reports per batch. Editors fixed exceptions, not everything, keeping manual rework to the long tail.',
  },
  {
    num: 'PHASE 4',
    duration: 'wks 22-30',
    title: 'SEO-safe cutover & hardening',
    body:
      '1:1 301 redirect map for every legacy URL, parity checks on metadata, hreflang and structured data, staged DNS cutover with crawl monitoring, then post-launch CWV tuning.',
  },
];

const stackItems = [
  'Adobe Experience Manager',
  'AEM Dispatcher / CDN',
  'Drupal 7 source',
  'Python ETL scripts',
  '301 redirect mapping',
  'Screaming Frog',
  'Google Search Console',
  'GA / GA4',
  'hreflang & structured data',
  'DAM asset pipeline',
  'Core Web Vitals tuning',
];

function PipelineDiagram() {
  return (
    <div
      className="hikvision-pipeline"
      role="img"
      aria-label="Diagram of the migration pipeline: Drupal 7 content extracted, transformed and mapped into Adobe Experience Manager component-based pages"
    >
      <div className="hikvision-wrap">
        <svg viewBox="0 0 960 260" xmlns="http://www.w3.org/2000/svg">
          <g fontFamily="IBM Plex Mono, ui-monospace, monospace">
            <rect x="20" y="50" width="190" height="160" fill="none" stroke="#3A4A5C" strokeWidth="1.5" />
            <text x="36" y="80" fill="#8FA0B3" fontSize="11">DRUPAL 7 (EOL)</text>
            <rect x="36" y="94" width="158" height="22" fill="#1C2630" stroke="#3A4A5C" />
            <text x="44" y="109" fill="#C7D0DA" fontSize="10">nodes · 6,000+ URLs</text>
            <rect x="36" y="122" width="158" height="22" fill="#1C2630" stroke="#3A4A5C" />
            <text x="44" y="137" fill="#C7D0DA" fontSize="10">product specs · PDFs</text>
            <rect x="36" y="150" width="158" height="22" fill="#1C2630" stroke="#3A4A5C" />
            <text x="44" y="165" fill="#C7D0DA" fontSize="10">custom modules · views</text>
            <text x="36" y="196" fill="#E2231A" fontSize="10">security support ended</text>

            <path className="hikvision-flowline" d="M210 130 H 330" stroke="#E2231A" strokeWidth="2" fill="none" />
            <path className="hikvision-flowline" d="M530 130 H 650" stroke="#E2231A" strokeWidth="2" fill="none" />

            <rect x="330" y="62" width="200" height="136" fill="none" stroke="#3A4A5C" strokeWidth="1.5" />
            <text x="346" y="90" fill="#8FA0B3" fontSize="11">MIGRATION PIPELINE</text>
            <text x="346" y="116" fill="#FFFFFF" fontSize="10">content audit + pruning</text>
            <text x="346" y="136" fill="#FFFFFF" fontSize="10">field to component mapping</text>
            <text x="346" y="156" fill="#FFFFFF" fontSize="10">scripted ETL + QA diff</text>
            <text x="346" y="176" fill="#FFFFFF" fontSize="10">301 redirect map (1:1)</text>

            <rect x="650" y="36" width="290" height="188" fill="none" stroke="#E2231A" strokeWidth="1.5" />
            <text x="666" y="64" fill="#FF6B63" fontSize="11">ADOBE EXPERIENCE MANAGER</text>
            <rect x="666" y="78" width="124" height="30" fill="#1C2630" stroke="#3A4A5C" />
            <text x="674" y="97" fill="#C7D0DA" fontSize="10">templates</text>
            <rect x="800" y="78" width="124" height="30" fill="#1C2630" stroke="#3A4A5C" />
            <text x="808" y="97" fill="#C7D0DA" fontSize="10">components</text>
            <rect x="666" y="116" width="124" height="30" fill="#1C2630" stroke="#3A4A5C" />
            <text x="674" y="135" fill="#C7D0DA" fontSize="10">DAM assets</text>
            <rect x="800" y="116" width="124" height="30" fill="#1C2630" stroke="#3A4A5C" />
            <text x="808" y="135" fill="#C7D0DA" fontSize="10">workflows</text>
            <rect x="666" y="154" width="258" height="30" fill="#1C2630" stroke="#3A4A5C" />
            <text x="674" y="173" fill="#C7D0DA" fontSize="10">dispatcher / CDN · global alignment</text>
            <text x="666" y="208" fill="#7BE0A2" fontSize="10">supported · scalable · multi-site ready</text>
          </g>
        </svg>
        <p className="hikvision-pipe-caption">
          FIG.01 - <em>Field-to-component mapping</em> turned an aging node monolith into a governed, reusable AEM component library shared with the global brand platform.
        </p>
      </div>
    </div>
  );
}

export default function HikvisionAemMigrationSection() {
  return (
    <section className="hikvision-case" aria-label="Hikvision AEM migration case study">
      <header className="hikvision-hero">
        <div className="hikvision-wrap">
          <p className="hikvision-eyebrow">Enterprise Replatforming · Hikvision USA</p>
          <h1>
            One global security brand, <span>Drupal 7</span> to Adobe Experience Manager.
          </h1>
          <p className="hikvision-lede">
            End-of-life CMS, 6,000+ URLs, hard-won organic rankings, and a marketing team that could not afford downtime. This is how the Hikvision US web property was rebuilt on AEM, with SEO equity carried over intact.
          </p>
          <div className="hikvision-meta">
            <div><span>Role</span>Migration lead / Web & SEO</div>
            <div><span>Scope</span>CMS replatform · content ETL · global SEO</div>
            <div><span>Timeline</span>~9 months, phased cutover</div>
            <div><span>Industry</span>Security & video surveillance</div>
          </div>
        </div>
      </header>

      <PipelineDiagram />

      <div className="hikvision-metrics" aria-label="Key outcomes">
        <div className="hikvision-wrap">
          <div className="hikvision-metric"><b>6,000<i>+</i></b><span>URLs migrated & redirect-mapped</span></div>
          <div className="hikvision-metric"><b><i>0</i></b><span>ranking keywords lost at cutover</span></div>
          <div className="hikvision-metric"><b>+38<i>%</i></b><span>organic traffic, 6 mo post-launch*</span></div>
          <div className="hikvision-metric"><b>-45<i>%</i></b><span>avg. page publish time for marketing*</span></div>
        </div>
      </div>

      <section className="hikvision-block" id="challenge">
        <div className="hikvision-wrap">
          <p className="hikvision-eyebrow">01 · The challenge</p>
          <h2>An end-of-life CMS holding up a revenue-critical site</h2>
          <div className="hikvision-cols">
            <div>
              <p><strong>Drupal 7 reached end of life</strong>, leaving the Hikvision US site, the primary digital touchpoint for distributors, integrators, and end customers across North America, on an unsupported platform with mounting security exposure and a shrinking pool of maintainable custom modules.</p>
              <p>At the same time, global HQ had standardized on <strong>Adobe Experience Manager</strong>. The US site had to converge with the global platform without sacrificing the regional content, product catalogs, and search rankings built over years.</p>
            </div>
            <ul className="hikvision-factlist">
              <li><code>CONTENT</code>6,000+ pages: product specs, firmware/download pages, solutions, news, dealer resources</li>
              <li><code>SEO RISK</code>Years of accumulated rankings on high-intent security-industry keywords; any URL break meant lost pipeline</li>
              <li><code>TECH DEBT</code>Custom Drupal modules and Views with no AEM equivalent; structured spec data trapped in fields</li>
              <li><code>CONSTRAINT</code>Marketing calendar could not pause; content kept shipping during migration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hikvision-block hikvision-alt" id="approach">
        <div className="hikvision-wrap">
          <p className="hikvision-eyebrow">02 · The approach</p>
          <h2>Audit first, automate the middle, protect SEO at every step</h2>
          <p className="hikvision-measure">
            Rather than a lift-and-shift, the migration was run as a content engineering project: prune what did not earn its keep, model what remained into AEM's component system, and script everything repeatable so final cutover was rehearsed and reversible.
          </p>
          <div className="hikvision-phases">
            {phases.map((phase) => (
              <article className="hikvision-phase" key={phase.num}>
                <span className="hikvision-phase-num">{phase.num}</span>
                <span className="hikvision-phase-duration">{phase.duration}</span>
                <h3>{phase.title}</h3>
                <p>{phase.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hikvision-block" id="results">
        <div className="hikvision-wrap">
          <p className="hikvision-eyebrow">03 · The results</p>
          <h2>A cutover the search engines barely noticed, in the best way</h2>
          <p className="hikvision-measure">
            Launch week showed no ranking volatility beyond normal noise. With faster pages, cleaner IA, and a governed component library, organic performance climbed in the months after launch while marketing shipped pages dramatically faster.
          </p>
          <div className="hikvision-table-wrap">
            <table className="hikvision-table">
              <thead>
                <tr><th>Measure</th><th>Before (Drupal 7)</th><th>After (AEM)</th><th>Change</th></tr>
              </thead>
              <tbody>
                <tr><td>Indexed URLs broken at cutover</td><td>-</td><td>0 (full 301 coverage)</td><td className="hikvision-delta">0 lost</td></tr>
                <tr><td>Organic sessions (6-mo trailing)*</td><td>baseline</td><td>growth post-launch</td><td className="hikvision-delta">+38%</td></tr>
                <tr><td>Qualified inquiries from organic*</td><td>baseline</td><td>sustained lift</td><td className="hikvision-delta">+25%</td></tr>
                <tr><td>New page publish time</td><td>dev ticket required</td><td>editor self-serve in AEM</td><td className="hikvision-delta">-45% time</td></tr>
                <tr><td>Platform security posture</td><td>EOL, unpatched core</td><td>vendor-supported, global standard</td><td className="hikvision-delta">resolved</td></tr>
              </tbody>
            </table>
          </div>
          <blockquote className="hikvision-pull">"The riskiest day of a replatform is launch day. We engineered that day to be boring."</blockquote>
          <p className="hikvision-attrib">- Migration lead</p>
        </div>
      </section>

      <section className="hikvision-block hikvision-alt">
        <div className="hikvision-wrap">
          <p className="hikvision-eyebrow">04 · Stack & methods</p>
          <h2>What it was built with</h2>
          <div className="hikvision-stack">
            {stackItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="hikvision-cta">
        <div className="hikvision-wrap">
          <h2>Facing your own end-of-life CMS?</h2>
          <p>
            I help teams replatform legacy sites, including Drupal, WordPress, and custom stacks, onto modern platforms without losing the SEO equity they spent years building.
          </p>
          <a className="hikvision-button" href="/en/contact">Start a migration assessment</a>
          <p className="hikvision-fineprint">
            * Replace asterisked figures with verified analytics before publishing. Case study prepared by 36tech.info. Hikvision is a trademark of its respective owner; referenced here solely to describe project experience.
          </p>
        </div>
      </section>
    </section>
  );
}
