import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

import SystemMigration from '../assets/image/works/system-migration.jpg';
import intro1 from '../assets/image/intro/intro-1.jpg';
import intro2 from '../assets/image/intro/intro-2.jpg';
import intro3 from '../assets/image/intro/intro-3.jpg';
import { buildLocalizedPath } from '../routes.js';

const worksContent = {
  cn: {
    heading: '可用的 AI 工作流作品。',
    lead: '从本地模型部署、业务流程原型到行业协作界面，把想法做成能演示、能验证、能继续迭代的页面。',
    listLabel: '精选作品',
    viewProject: '查看项目',
    items: [
      {
        id: 'ai-worker',
        title: 'AI Worker 工作台：把零散任务收进一个协作界面',
        category: 'AI 工作流',
        summary: '把提示词、文件上下文、执行步骤和人工复核放在同一个工作台里，让小团队可以重复使用成熟流程，而不是每次从空白聊天开始。',
        duration: '项目样本',
        imageAlt: '带有代码面板的 AI Worker 工作台界面',
        page: 'hikvision-aem-migration',
      },
      {
        id: 'local-ai-stack',
        title: 'Local AI Stack：小团队可维护的本地模型部署路径',
        category: '本地部署',
        summary: '从应用层、模型层、数据层到运行时和硬件层，拆解一套能在工作站上落地的本地 AI 工具链。',
        duration: '阅读 6 分钟',
        imageAlt: '相互连接的 AI 工作流示意图',
        page: 'local-ai',
      },
      {
        id: 'healthcare-flow',
        title: 'Healthcare Flow：连接问诊、处方与交付的服务流程',
        category: '医疗健康',
        summary: '用一个可演示的业务流程界面串起预约、诊断、处方和履约节点，帮助团队先验证协作路径，再进入系统开发。',
        duration: '项目概念',
        imageAlt: '在线医疗服务流程示意图',
        page: 'contact',
      },
      {
        id: 'freight-board',
        title: 'Freight Exception Board：把运输异常从邮件搬进看板',
        category: '物流供应链',
        summary: '把运输异常变成可追踪、可分派、可复盘的任务流，让运营团队能看到每个延误、改派和客户通知的当前状态。',
        duration: '项目概念',
        imageAlt: '物流运输异常管理流程示意图',
        page: 'contact',
      },
    ],
  },
  en: {
    heading: 'AI workflows built to be used.',
    lead: 'From local model deployment and business-flow prototypes to industry collaboration interfaces, each project turns an idea into something teams can demonstrate, validate, and keep improving.',
    listLabel: 'Selected works',
    viewProject: 'View project',
    items: [
      {
        id: 'ai-worker',
        title: 'AI Worker: one collaborative workspace for scattered tasks',
        category: 'AI Workflow',
        summary: 'Prompts, file context, execution steps, and human review live in one workspace, helping small teams reuse proven processes instead of restarting from an empty chat.',
        duration: 'Project sample',
        imageAlt: 'AI Worker interface with collaborative coding panels',
        page: 'hikvision-aem-migration',
      },
      {
        id: 'local-ai-stack',
        title: 'Local AI Stack: a maintainable deployment path for small teams',
        category: 'Local Deployment',
        summary: 'A practical local AI stack spanning applications, models, data, runtime, and hardware, designed to run and remain maintainable on a workstation.',
        duration: '6 min read',
        imageAlt: 'Connected local AI workflow diagram',
        page: 'local-ai',
      },
      {
        id: 'healthcare-flow',
        title: 'Healthcare Flow: connecting consultation, prescription, and delivery',
        category: 'Healthcare',
        summary: 'A demonstrable service flow connecting booking, diagnosis, prescription, and fulfillment so teams can validate collaboration before committing to system development.',
        duration: 'Project concept',
        imageAlt: 'Online healthcare service workflow illustration',
        page: 'contact',
      },
      {
        id: 'freight-board',
        title: 'Freight Exception Board: moving shipment issues out of email',
        category: 'Logistics',
        summary: 'Shipment exceptions become trackable, assignable, and reviewable work, giving operations teams a clear view of every delay, reroute, and customer notification.',
        duration: 'Project concept',
        imageAlt: 'Freight exception management workflow illustration',
        page: 'contact',
      },
    ],
  },
};

const workImages = {
  'ai-worker': SystemMigration,
  'local-ai-stack': intro1,
  'healthcare-flow': intro2,
  'freight-board': intro3,
};

function WorkRow({ item, index, language, total, viewProject }) {
  const number = String(index + 1).padStart(2, '0');
  const href = buildLocalizedPath(item.page, language);

  return (
    <article className="works-row" id={`works-${item.id}`}>
      <a className="works-media" href={href} aria-label={item.title}>
        <img src={workImages[item.id]} alt={item.imageAlt} />
      </a>

      <div className="works-body">
        <div className="works-kicker">
          <span className="works-index">{number} / {String(total).padStart(2, '0')}</span>
          <span className="works-tag">{item.category}</span>
        </div>

        <h2>{item.title}</h2>
        <p className="works-summary">{item.summary}</p>

        <div className="works-foot">
          <span className="works-meta works-duration">
            <Clock className="works-meta-icon" aria-hidden="true" />
            {item.duration}
          </span>
          <a className="works-link" href={href}>
            {viewProject}
            <ArrowRight className="works-link-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function WorksSection({ language = 'en' }) {
  const currentLanguage = language === 'cn' ? 'cn' : 'en';
  const content = worksContent[currentLanguage];

  return (
    <section
      className="works"
      id="works-top"
      lang={currentLanguage === 'cn' ? 'zh-CN' : 'en'}
      aria-label={content.listLabel}
    >
      <div className="works-container">
        <header className="works-hero">
          <p className="works-eyebrow">Works</p>
          <h1>{content.heading}</h1>
          <p className="works-lead">{content.lead}</p>
        </header>

        <div className="works-list" aria-label={content.listLabel}>
          {content.items.map((item, index) => (
            <WorkRow
              key={item.id}
              item={item}
              index={index}
              language={currentLanguage}
              total={content.items.length}
              viewProject={content.viewProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
