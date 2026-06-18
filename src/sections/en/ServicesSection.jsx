import React from 'react';

const serviceLayerGeometry = [
  {
    labelX: 96,
    labelY: 402,
    line: 'M575.2 336.6h-84l-129.2 77H81.3',
    dotX: 574.1,
    dotY: 336.6,
  },
  {
    labelX: 858,
    labelY: 484,
    line: 'M744.7 495.6H967',
    dotX: 742.3,
    dotY: 495.6,
  },
  {
    labelX: 101,
    labelY: 655,
    line: 'M374.4 668.6H84.1',
    dotX: 376.8,
    dotY: 668.6,
  },
  {
    labelX: 894,
    labelY: 788,
    line: 'M773 736.9l64.6 64.6h171.7',
    dotX: 773,
    dotY: 736.9,
  },
  {
    labelX: 116,
    labelY: 939,
    line: 'M494.2 916.2l-135.9 37.9H99.1',
    dotX: 499,
    dotY: 913.2,
  },
];

const servicesCopy = {
  en: {
    sectionLabel: 'Services',
    imageTitle: 'What you manage with services',
    imageDescription:
      'An iceberg diagram showing AI strategy, smart data, AI knowledge base, AI workflow, and custom AI agent service layers.',
    modeWords: ['SERVICES', 'INFRASTRUCTURE', 'PLATFORM', 'FUNCTIONS'],
    manageSubtitle: 'WHAT YOU MANAGE',
    aasSubtitle: 'AS A SERVICE',
    cardStackLabel: 'Service responsibility layers',
    layerLabels: [
      'AI Strategy',
      'Smart Data',
      'AI Knowledge Base',
      'AI Workflow',
      'Custom AI Agents',
    ],
    cards: [
      {
        title: 'AI Strategy & Training',
        body:
          'Not sure where AI fits in your business? We assess your operations, identify high-impact opportunities, and build a clear roadmap - then train your team to execute it.',
      },
      {
        title: 'Smart Data Analytics',
        body:
          'Your data is scattered across CRM, ERP, and spreadsheets. We connect the dots and turn raw data into dashboards and insights your leadership team can act on.',
      },
      {
        title: 'AI Knowledge Base',
        body:
          'Your team should not have to dig through folders to find answers. We build an AI-powered knowledge system that gives employees and customers instant, accurate answers - 24/7.',
      },
      {
        title: 'AI Workflow Automation',
        body:
          'Every hour your team spends on repetitive tasks is an hour lost on real work. We identify manual bottlenecks and automate them - approvals, data entry, reporting, alerts.',
      },
      {
        title: 'Custom AI Agents',
        body:
          'Off-the-shelf tools do not understand your business. We build AI agents tailored to your specific workflows - ones that can pull data, take actions, and handle multi-step tasks across your systems.',
      },
    ],
  },
  cn: {
    sectionLabel: '服务',
    imageTitle: '以服务方式管理 AI 能力',
    imageDescription:
      '一张冰山示意图，展示 AI 战略、智能数据、AI 知识库、AI 工作流和定制 AI 智能体等服务层级。',
    modeWords: ['服务', '基础设施', '平台', '功能'],
    manageSubtitle: '你管理的部分',
    aasSubtitle: '即服务',
    cardStackLabel: '服务责任层级',
    layerLabels: [
      'AI 战略',
      '智能数据',
      'AI 知识库',
      'AI 工作流',
      '定制 AI 智能体',
    ],
    cards: [
      {
        title: 'AI 战略与培训',
        body:
          '不确定 AI 应该从哪里进入业务？我们会评估你的运营流程，找出高影响力机会，制定清晰路线图，并培训团队把它真正落地。',
      },
      {
        title: '智能数据分析',
        body:
          '你的数据可能分散在 CRM、ERP 和表格里。我们把这些数据连接起来，转化为管理层可以直接行动的仪表盘和洞察。',
      },
      {
        title: 'AI 知识库',
        body:
          '团队不应该为了找答案反复翻文件夹。我们构建 AI 驱动的知识系统，让员工和客户可以 24/7 获得即时、准确的回答。',
      },
      {
        title: 'AI 工作流自动化',
        body:
          '团队花在重复任务上的每一小时，都是从真正重要的工作中拿走的时间。我们识别手工瓶颈，并自动化审批、录入、报表和提醒。',
      },
      {
        title: '定制 AI 智能体',
        body:
          '通用工具不了解你的业务。我们构建贴合具体流程的 AI 智能体，让它能拉取数据、执行操作，并跨系统处理多步骤任务。',
      },
    ],
  },
};

const serviceSectionCss = `
  .services-section {
    --services-bg: #0D47A1;
    --services-bg-deep: #054c59;
    --services-sky-a: #55c6d5;
    --services-sky-b: #29b889;
    --services-ice-a: #e9f6fb;
    --services-ice-b: #33d8fc;
    --services-ice-c: #0c6ca8;
    --services-label: #f6ffff;
    --services-hot: #ff6600;
    --services-accent: #db1935;
    width: 100vw;
    margin-inline: calc(50% - 50vw);
    background: var(--services-bg);
    color: var(--services-label);
    overflow: hidden;
  }

  .services-layout {
    width: min(100%, 1480px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: clamp(24px, 4vw, 52px);
    padding: clamp(24px, 4vw, 64px);
  }

  .services-stage {
    min-height: clamp(640px, 86vh, 940px);
    height: clamp(640px, 86vh, 940px);
    position: relative;
    isolation: isolate;
    overflow: hidden;
  }

  .services-iceberg-svg {
    display: block;
    width: 100%;
    height: 100%;
    font-family: var(--font-inter), "Heebo", "Montserrat", system-ui, sans-serif;
  }

  .services-sky-bk {
    transform-box: fill-box;
    transform-origin: 50% 0%;
    animation: servicesSkyShift 12s linear infinite;
  }

  .services-layer-line {
    fill: none;
    stroke: var(--services-label);
    stroke-width: 1.8;
    stroke-miterlimit: 10;
    opacity: 0.9;
  }

  .services-layer-dot {
    fill: var(--services-label);
  }

  .services-layer-dot-core {
    fill: var(--services-hot);
  }

  .services-layer-label,
  .services-ghost-label {
    fill: var(--services-label);
    font-weight: 900;
    letter-spacing: 0.3em;
  }

  .services-layer-label {
    font-size: 24px;
  }

  .services-ghost-label {
    font-size: 22px;
    opacity: 0.24;
    mix-blend-mode: multiply;
  }

  .services-mode-word {
    fill: var(--services-label);
    font-size: 60px;
    font-weight: 900;
    letter-spacing: 0.5em;
    opacity: 0;
    animation: servicesWordCycle 12s linear infinite;
    animation-delay: calc(var(--services-word-step) * 3s);
  }

  .services-mode-subtitle {
    fill: var(--services-accent);
    font-size: 24px;
    font-weight: 900;
    letter-spacing: 0.3em;
  }

  .services-mode-subtitle-manage {
    animation: servicesManageCycle 12s linear infinite;
  }

  .services-mode-subtitle-aas {
    opacity: 0;
    animation: servicesAasCycle 12s linear infinite;
  }

  .services-reflection {
    opacity: 0.5;
    mix-blend-mode: multiply;
  }

  .services-depth {
    opacity: 0.28;
    mix-blend-mode: multiply;
  }

  .services-bird {
    opacity: 0.5;
  }

  .services-card-stack {
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-self: center;
  }

  .services-card {
    color: #111827;
    background: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.82);
    border-radius: 2px;
    padding: clamp(18px, 2vw, 24px);
    box-shadow: 0 18px 42px rgba(4, 22, 58, 0.18);
  }

  .services-card h3 {
    margin: 0;
    color: #0f172a;
    font-size: clamp(17px, 1.2vw, 20px);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: 0;
    text-transform: uppercase;
    text-wrap: pretty;
  }

  .services-card-rule {
    width: 100%;
    height: 1px;
    margin: 13px 0 12px;
    background: #d7dce5;
  }

  .services-card p {
    margin: 0;
    color: #465568;
    font-size: 14px;
    line-height: 1.55;
    letter-spacing: 0;
    text-wrap: pretty;
  }

  .services-section[data-language="cn"] .services-mode-word {
    font-size: 54px;
    letter-spacing: 0.18em;
  }

  .services-section[data-language="cn"] .services-mode-subtitle {
    letter-spacing: 0.14em;
  }

  .services-section[data-language="cn"] .services-layer-label {
    letter-spacing: 0.08em;
  }

  .services-section[data-language="cn"] .services-card h3 {
    text-transform: none;
  }

  @keyframes servicesWordCycle {
    0%, 19% {
      opacity: 1;
    }
    25%, 100% {
      opacity: 0;
    }
  }

  @keyframes servicesManageCycle {
    0%, 17% {
      opacity: 1;
    }
    24%, 100% {
      opacity: 0;
    }
  }

  @keyframes servicesAasCycle {
    0%, 22% {
      opacity: 0;
    }
    28%, 94% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes servicesSkyShift {
    0%, 14% {
      transform: scaleY(1);
    }
    25%, 42% {
      transform: scaleY(1.45);
    }
    54%, 67% {
      transform: scaleY(0.95);
    }
    76%, 100% {
      transform: scaleY(0.73);
    }
  }

  @media (min-width: 1024px) {
    .services-layout {
      grid-template-columns: minmax(0, 1fr) minmax(360px, 430px);
      align-items: center;
      min-height: clamp(760px, calc(100vh - 110px), 980px);
    }

    .services-stage {
      min-height: clamp(700px, calc(100vh - 160px), 920px);
      height: clamp(700px, calc(100vh - 160px), 920px);
    }
  }

  @media (max-width: 900px) {
    .services-stage {
      min-height: min(860px, 110vh);
      height: min(860px, 110vh);
    }

    .services-mode-word {
      font-size: 46px;
      letter-spacing: 0.32em;
    }

    .services-mode-subtitle,
    .services-layer-label {
      font-size: 22px;
    }

    .services-card-stack {
      align-self: stretch;
    }
  }

  @media (max-width: 640px) {
    .services-stage {
      min-height: 720px;
      height: 720px;
    }

    .services-iceberg-svg {
      width: 150%;
      max-width: none;
      transform: translateX(-16%);
    }

    .services-mode-word {
      font-size: 38px;
      letter-spacing: 0.18em;
    }

    .services-mode-subtitle {
      font-size: 18px;
      letter-spacing: 0.2em;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .services-sky-bk,
    .services-mode-word,
    .services-mode-subtitle-manage,
    .services-mode-subtitle-aas {
      animation: none;
    }

    .services-mode-word {
      opacity: 0;
    }

    .services-mode-word-static,
    .services-mode-subtitle-manage {
      opacity: 1;
    }

    .services-mode-subtitle-aas {
      opacity: 0;
    }
  }
`;

function LeaderLine({ line, dotX, dotY }) {
  return (
    <g>
      <path className="services-layer-line" d={line} />
      <circle className="services-layer-dot" cx={dotX} cy={dotY} r="5.8" />
      <circle className="services-layer-dot-core" cx={dotX} cy={dotY} r="2.4" />
    </g>
  );
}

function SkyDetails() {
  return (
    <g>
      <path fill="#f5fffd" d="M292.3 280.1l-21.4-10.8-39.5 24.1 39.5-13.9 21.4.6z" />
      <path fill="#f6ffff" d="M177.1 290.9l30.4-21.6 29.6 10.2 10.8 3.8-16.5 10.1-17.3-15.3-37 12.8z" />
      <path fill="#66a0b0" d="M231.4 293.4l9.5-3.4-26.8-11.9 17.3 15.3z" />
      <g className="services-bird">
        <path fill="#f5fffd" d="M189.2 234.1l-12.1-8.2-22.4 15.7 22.4-7.8 12.1.3z" />
        <path fill="#f6ffff" d="M123.9 240.2l17.3-14.3 16.7 7.9 5.4 1.8-8.6 6-9.8-8.7-21 7.3z" />
        <path fill="#66a0b0" d="M154.7 241.6l5.4-1.9-15.2-6.8 9.8 8.7z" />
      </g>
      <g className="services-bird">
        <path fill="#f5fffd" d="M884.8 326.2l-12.1-8.2-22.4 15.7 22.4-7.8 12.1.3z" />
        <path fill="#f6ffff" d="M819.5 332.3l17.2-14.3 16.8 7.9 5.4 1.8-8.6 6-9.9-8.6-20.9 7.2z" />
        <path fill="#66a0b0" d="M850.3 333.7l5.3-1.8-15.2-6.8 9.9 8.6z" />
      </g>
    </g>
  );
}

function Iceberg() {
  return (
    <g>
      <path className="services-reflection" fill="url(#servicesReflection)" d="M339.9 628.5l140 716.6h77.4L339.9 628.5z" />
      <path className="services-depth" fill="var(--services-bg)" d="M884.6 1343.1c-34.3-123.9-54.3-272.4-54.3-431.9 0-99 7.7-193.8 21.8-281L813 595.9l-475.1 30.6 217.4 716.6z" />
      <path className="services-depth" fill="url(#servicesReflection)" d="M830.3 911.2c0 159.5 20 308 54.3 431.9h189.1c-73.2-87.6-122.6-203.1-134-332.7-8.5-96.8 5.2-189.5 36.4-271.5l-124-108.7c-14.1 87.2-21.8 182-21.8 281z" />

      <g>
        <path fill="url(#servicesIceBlue)" d="M842.7 669.7L798.4 719h-.4v-95.6c-.5-1.4-7.4-17.3-15.1-35.8-.7-1.8-12.9-48.9-13.6-50.7l40.5 46.6 32.9 86.2z" />
        <path fill="url(#servicesIceDeep)" d="M639.8 578.8l-4.2 272.3-72.1 135 33.6 45.4 44.3-97.8 32.3-66.1 23.6-209.8-57.5-79z" />
        <path fill="url(#servicesIceMid)" d="M697.3 657.8l-57.4-79H690l7.3 79z" />
        <path fill="url(#servicesIceLight)" d="M543.4 808.5l-12 157.3-57.7-153.4 21.5-228.9h47.1l1.1 225z" />
        <path fill="url(#servicesIceBlue)" d="M421.4 775.1L338.7 660l-7.4-43.5 42.3-34.4 67 1.4-19.2 191.6z" />
        <path fill="url(#servicesIceDark)" d="M531.4 965.8l-57.7-153.4-52.3-37.3 52 109.6 57.8 166.5.2-85.4z" />
        <path fill="url(#servicesIceMid)" d="M673.7 867.6l-32.3 66.1 2 153.6 35.3-121.5-5-98.2z" />
        <path fill="url(#servicesIceDeep)" d="M800.1 721.3l4.8-81.6-18.8-55.3h-.4l-45.2-1.3 11.6 45.5-6.1 103.6-67.3 233.6 109.9-174.3 11.5-70.2z" />
        <path fill="url(#servicesIceBlue)" d="M640.2 578.8l-11.9.5-13.6-87.6-38.3 91.3-34.1 62.9 1.1 162.6-12.2 242.7 32.3-65.1 72.1-135 4.6-272.3z" />
        <path fill="url(#servicesIceMid)" d="M676.5 595.2l-36.7-16.4-.3 18.5-.9 53.7-23.9-159.3 35-25.3 13 23.9 13.8 104.9z" />
        <path fill="url(#servicesIceTop)" d="M570.4 597.5h-29.8l17.5-109.9 56.6 4.1-44.3 105.8z" />
        <path fill="url(#servicesIceCap)" d="M614.7 491.7l-23.9-20-7-54.3 23.3-12 41.8 52.3.8 8.7-35 25.3z" />
        <path fill="url(#servicesIceLight)" d="M541 597.6l-43.2 4.6 20.8-109.5 22.4 104.9z" />
        <path fill="url(#servicesIceMid)" d="M558.1 425.5v62.1l-17.2 109.7-22.3-104.6 10.3-7.7 29.2-59.5z" />
        <path fill="url(#servicesIceDeep)" d="M740.7 583.5l-19-0.4-18.9-2.8-18.2-119.7-34.9 5.8 26.8 128.8h15.1l5.7 62.6-23.6 209.8 5 98.2L746 732.2l6.1-103.6-11.4-45.1z" />
        <path fill="url(#servicesIceTop)" d="M764.6 597.6l-41.7-2.4-33.9-88.9-4.4-45.7 72.7 29.5-12.8 50.6 20.1 56.9z" />
        <path fill="url(#servicesIceCap)" d="M558.1 425.5l-48.6 61.9-43-26 40.8-12 67.1-114-16.3 90.1z" />
        <path fill="url(#servicesIceLight)" d="M558.1 487.6v-62.1l16.3-90.1 9.4 82 7 54.3 23.9 20-56.6-4.1z" />
        <path fill="url(#servicesIceMid)" d="M583.8 417.4l23.3-12-32.7-70 9.4 82z" />
        <path fill="url(#servicesIceTop)" d="M607.1 405.4l41.8 52.3 4.3-61.8-46.1 9.5z" />
        <path fill="url(#servicesIceBlue)" d="M649.7 466.4l-.8-8.7 4.3-61.8 31.4 64.7-34.9 5.8z" />
        <path fill="url(#servicesIceLight)" d="M447.7 597.5l-62.9-2.3 10.2-32.6 64.5-56.3-11.8 91.2z" />
        <path fill="url(#servicesIceDeep)" d="M466.5 461.4l-13.3 85.4-49.4 109.7 17.6 118.6 52.3 37.3L493.5 602l4.4.2 11.6-114.8-43-26z" />
        <path fill="url(#servicesIceMid)" d="M574.4 589.8l-32.6 69.7v-69.7h.4l60.9-70.5-28.7 70.5z" />
        <path fill="url(#servicesIceBlue)" d="M541.8 734.7l1.6 73.8-4.4 57.9-27.5-119.6 30.8-88.3 1.4 76.2h-1.9z" />
        <path fill="url(#servicesIceDeep)" d="M608 651l31.2-34.5.6 83.5 11.5 105.7L627 878l6.7-84-26-29.9-16.4-47.8 19.7-23.6-3-41.7z" />
      </g>
    </g>
  );
}

export default function ServicesSection({ language = 'en' }) {
  const copy = servicesCopy[language] || servicesCopy.en;
  const managementLayers = serviceLayerGeometry.map((layer, index) => ({
    ...layer,
    label: copy.layerLabels[index],
  }));

  return (
    <section
      className="services-section"
      id="services-top"
      aria-label={copy.sectionLabel}
      data-language={language}
    >
      <style>{serviceSectionCss}</style>
      <div className="services-layout">
        <div className="services-stage">
          <svg
            className="services-iceberg-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="5 5 1155 1315"
            role="img"
            aria-labelledby="services-iceberg-title services-iceberg-desc"
          >
          <title id="services-iceberg-title">{copy.imageTitle}</title>
          <desc id="services-iceberg-desc">
            {copy.imageDescription}
          </desc>
          <defs>
            <linearGradient id="servicesReflection" x1="315.83" x2="716.72" y1="666.8" y2="2007.76" gradientUnits="userSpaceOnUse">
              <stop offset=".01" stopColor="#add6de" />
              <stop offset=".35" stopColor="#cee7eb" />
              <stop offset=".77" stopColor="#f2f8fa" />
              <stop offset="1" stopColor="#ffffff" />
            </linearGradient>
            <linearGradient id="servicesSky" x1="53.91" x2="1227.96" y1="23.1" y2="623.21" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#55c6d5" />
              <stop offset=".45" stopColor="#4bc3c4" />
              <stop offset=".99" stopColor="#29b889" />
            </linearGradient>
            <radialGradient id="servicesWaterGlow" cx="622.01" cy="802.2" r="408.92" gradientUnits="userSpaceOnUse">
              <stop offset=".01" stopColor="#00243f" />
              <stop offset=".14" stopColor="#002743" stopOpacity=".83" />
              <stop offset=".78" stopColor="#003456" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="servicesIceBlue" x1="817.67" x2="785.48" y1="545.04" y2="705.38" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#21daff" />
              <stop offset="1" stopColor="#0c6ca8" />
            </linearGradient>
            <linearGradient id="servicesIceMid" x1="666.38" x2="694.71" y1="583.84" y2="684.16" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#88e6f2" />
              <stop offset="1" stopColor="#00a0d1" />
            </linearGradient>
            <linearGradient id="servicesIceLight" x1="500.74" x2="536.29" y1="597.89" y2="1087.24" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#3bd8f7" />
              <stop offset="1" stopColor="#b4edf3" />
            </linearGradient>
            <linearGradient id="servicesIceDark" x1="521.36" x2="433.52" y1="1055.85" y2="693.53" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#0a4868" />
              <stop offset="1" stopColor="#1182b2" />
            </linearGradient>
            <linearGradient id="servicesIceDeep" x1="657.96" x2="812.44" y1="686.79" y2="870.02" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#0c6ca8" />
              <stop offset="1" stopColor="#21daff" />
            </linearGradient>
            <linearGradient id="servicesIceTop" x1="513.92" x2="557.46" y1="5751.74" y2="5708.2" gradientTransform="matrix(1 0 0 -1 2 6145.62)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#d0f4ff" />
              <stop offset="1" stopColor="#e9f6fb" />
            </linearGradient>
            <linearGradient id="servicesIceCap" x1="556.6" x2="657.93" y1="5747.41" y2="5646.08" gradientTransform="matrix(1 0 0 -1 2 6145.62)" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#9ce3ec" />
              <stop offset="1" stopColor="#60dbf2" />
            </linearGradient>
          </defs>

          <g>
            <path fill="#1565C0" d="M2 79.3h1160v1261.79H2z" />
            <path fill="#1565C0" d="M2 79.3h1160v1265.79H2z" opacity=".51" />
            <path
              className="services-sky-bk"
              fill="url(#servicesSky)"
              stroke="#12aec9"
              strokeMiterlimit="10"
              strokeWidth="4"
              d="M2 2v582.1l120.6 13.4h128.2l175.7-13.7 82.8 9.5 191.4-9.2 88.5 9.2h84.6L982 585l46.8 8.3 133.2-9.2V2H2z"
            />
            <circle cx="622" cy="802.2" r="408.9" fill="url(#servicesWaterGlow)" />

            <SkyDetails />
            <Iceberg />

            <g>
              {managementLayers.map((layer) => (
                <LeaderLine key={layer.label} line={layer.line} dotX={layer.dotX} dotY={layer.dotY} />
              ))}
              <text className="services-ghost-label" transform="translate(188.2 1144.1)">
                INTEL
              </text>
              {managementLayers.map((layer) => (
                <text
                  className="services-layer-label"
                  key={layer.label}
                  x={layer.labelX}
                  y={layer.labelY}
                >
                  {layer.label}
                </text>
              ))}
            </g>

            <g>
              {copy.modeWords.map((word, index) => (
                <text
                  className={`services-mode-word${index === 0 ? ' services-mode-word-static' : ''}`}
                  key={word}
                  style={{ '--services-word-step': index }}
                  transform="translate(590 208.3)"
                  textAnchor="middle"
                >
                  {word}
                </text>
              ))}

              <text className="services-mode-subtitle services-mode-subtitle-manage" transform="translate(420 260.7)">
                {copy.manageSubtitle}
              </text>
              <text
                className="services-mode-subtitle services-mode-subtitle-aas"
                transform="translate(600 260.7)"
                textAnchor="middle"
              >
                {copy.aasSubtitle}
              </text>
            </g>
          </g>
          </svg>
        </div>

        <div className="services-card-stack" aria-label={copy.cardStackLabel}>
          {copy.cards.map((card) => (
            <article className="services-card" key={card.title}>
              <h3>{card.title}</h3>
              <div className="services-card-rule" aria-hidden="true" />
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
