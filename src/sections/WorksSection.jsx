import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

import aiWorkerImage from '../assets/image/works/ai-worker.jpeg';
import intro1 from '../assets/image/intro/intro-1.jpg';
import intro2 from '../assets/image/intro/intro-2.jpg';
import intro3 from '../assets/image/intro/intro-3.jpg';

const works = [
  {
    id: 'ai-worker',
    title: 'AI Worker 工作台：把零散任务收进一个协作界面',
    category: 'AI 工作流',
    summary:
      '把提示词、文件上下文、执行步骤和人工复核放在同一个工作台里，让小团队可以重复使用成熟流程，而不是每次从空白聊天开始。',
    duration: '项目样本',
    image: aiWorkerImage,
    imageAlt: 'AI worker interface illustration with coding panels',
    href: '/contact',
  },
  {
    id: 'local-ai-stack',
    title: 'Local AI Stack：小团队可维护的本地模型部署路径',
    category: '本地部署',
    summary:
      '从应用层、模型层、数据层到运行时和硬件层，拆解一套能在工作站上落地的本地 AI 工具链。',
    duration: '阅读 6 分钟',
    image: intro1,
    imageAlt: 'Connected AI workflow diagram',
    href: '/local-ai',
  },
  {
    id: 'healthcare-flow',
    title: 'Healthcare Flow：连接问诊、处方与交付的服务流程',
    category: '医疗健康',
    summary:
      '用一个可演示的业务流程界面串起预约、诊断、处方和履约节点，帮助团队先验证协作路径，再进入系统开发。',
    duration: '项目概念',
    image: intro2,
    imageAlt: 'Online healthcare workflow illustration',
    href: '/contact',
  },
  {
    id: 'freight-board',
    title: 'Freight Exception Board：把运输异常从邮件搬进看板',
    category: '物流供应链',
    summary:
      '把运输异常变成可追踪、可分派、可复盘的任务流，让运营团队能看到每个延误、改派和客户通知的当前状态。',
    duration: '项目概念',
    image: intro3,
    imageAlt: 'Logistics and freight workflow illustration',
    href: '/contact',
  },
];

function WorkRow({ item, index }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className="works-row" id={`works-${item.id}`}>
      <a className="works-media" href={item.href} aria-label={item.title}>
        <img src={item.image} alt={item.imageAlt} />
      </a>

      <div className="works-body">
        <div className="works-kicker">
          <span className="works-index">{number} / {String(works.length).padStart(2, '0')}</span>
          <span className="works-tag">{item.category}</span>
        </div>

        <h2>{item.title}</h2>
        <p className="works-summary">{item.summary}</p>

        <div className="works-foot">
          <span className="works-meta works-duration">
            <Clock className="works-meta-icon" aria-hidden="true" />
            {item.duration}
          </span>
          <a className="works-link" href={item.href}>
            查看项目
            <ArrowRight className="works-link-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function WorksSection() {
  return (
    <section className="works" id="works-top" aria-label="Works">
      <div className="works-container">
        <header className="works-hero">
          <p className="works-eyebrow">Works</p>
          <h1>可用的 AI 工作流作品。</h1>
          <p className="works-lead">
            从本地模型部署、业务流程原型到行业协作界面，把想法做成能演示、能验证、能继续迭代的页面。
          </p>
        </header>

        <div className="works-list" aria-label="Selected works">
          {works.map((item, index) => (
            <WorkRow key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
