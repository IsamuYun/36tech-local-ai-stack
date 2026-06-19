import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../../../css/ai-trainer.css';

const columns = [
  { id: 'todo', name: '待办', status: 'todo' },
  { id: 'prog', name: '进行中', status: 'prog' },
  { id: 'rev', name: '评审中', status: 'rev' },
  { id: 'done', name: '已完成', status: 'done' },
];

const initialCards = [
  { id: 'c1', col: 'done', tag: '阶段 · 选型', title: 'AI 工具链选型与环境搭建', tools: ['Claude Code', 'Cursor'], owner: '林书航', initials: 'LS', role: '全栈 / 学员组长', desc: '对比候选工具的能力边界，确定以 Claude Code 跑长链路任务、Cursor 做行内重构的协作方式，并统一团队的开发环境与权限。', skills: ['按任务选择合适的 AI 工具', '配置可复现的 AI 开发环境', '建立团队级的工具使用规范'] },
  { id: 'c2', col: 'done', tag: '知识库 · 语料', title: '企业知识库语料导入与清洗', tools: ['Claude Code', 'RAG'], owner: '周一帆', initials: 'ZY', role: '数据 / 学员', desc: '把分散在 Wiki、PDF 与工单里的企业文档统一抽取，去重清洗，按语义切分成适合检索的文档块。', skills: ['文档抽取与清洗 pipeline', '面向检索的语义分块策略', '用 AI 批量处理非结构化数据'] },
  { id: 'c3', col: 'done', tag: '知识库 · 检索', title: '搭建基础 RAG 检索服务', tools: ['RAG', 'Cursor'], owner: '周一帆', initials: 'ZY', role: '数据 / 学员', desc: '接入向量数据库，完成文档向量化与相似度检索，跑通「问题 → 召回相关文档块」的最小闭环。', skills: ['向量化与向量数据库使用', 'RAG 检索链路搭建', '用 AI 辅助调试检索服务'] },
  { id: 'c4', col: 'rev', tag: '知识库 · 质量', title: 'RAG 召回质量评估', tools: ['Prompt 工程', 'RAG'], owner: '陈墨', initials: 'CM', role: '算法 / 学员', desc: '构建评估集，量化召回的准确率与覆盖度，定位「答非所问」的根因，迭代分块与检索参数。', skills: ['设计检索评估指标与数据集', '定位 RAG 质量问题的根因', '用数据驱动迭代检索效果'] },
  { id: 'c5', col: 'rev', tag: 'Chatbot · 提示', title: 'Chatbot Prompt 模板评审', tools: ['Prompt 工程', 'Claude Code'], owner: '陈墨', initials: 'CM', role: '算法 / 学员', desc: '统一系统提示与回答格式，处理无答案、引用来源、追问澄清等边界情况，并做团队交叉评审。', skills: ['结构化 Prompt 模板设计', '处理对话的边界与兜底', 'Prompt 资产的团队化沉淀'] },
  { id: 'c6', col: 'prog', tag: 'Chatbot · 重构', title: '用 Cursor 重构检索服务', tools: ['Cursor', 'Claude Code'], owner: '林书航', initials: 'LS', role: '全栈 / 学员组长', desc: '把原型期的检索代码重构为可维护的模块，补齐缓存与错误处理，让 AI 辅助生成测试用例。', skills: ['AI 辅助的代码重构', '让 AI 生成测试与边界用例', '把原型工程化为可上线代码'] },
  { id: 'c7', col: 'prog', tag: '知识库 · 流水线', title: '文档分块与清洗自动化', tools: ['Claude Code', 'RAG'], owner: '周一帆', initials: 'ZY', role: '数据 / 学员', desc: '把一次性的清洗脚本封装成可定时运行的流水线，让新文档能自动入库，保持知识库新鲜度。', skills: ['把脚本工程化为自动流水线', '设计增量更新机制', '用 AI 排查数据流程异常'] },
  { id: 'c8', col: 'todo', tag: 'Chatbot · 对话', title: '设计 Chatbot 对话流', tools: ['Prompt 工程'], owner: '苏晚', initials: 'SW', role: '产品 / 学员', desc: '梳理用户高频问题，设计多轮对话路径与澄清策略，定义在不确定时如何引导用户。', skills: ['对话流与意图设计', '多轮澄清策略', '把业务场景翻译成对话需求'] },
  { id: 'c9', col: 'todo', tag: '知识库 · 进阶', title: '接入混合检索 (向量 + 关键词)', tools: ['RAG', 'Cursor'], owner: '陈墨', initials: 'CM', role: '算法 / 学员', desc: '在向量召回基础上叠加关键词检索与重排序，提升专有名词与代码片段类问题的命中率。', skills: ['混合检索与重排序', '针对场景优化召回策略', '用 AI 快速验证技术方案'] },
];

const docs = [
  { title: '工具链选型决策记录', desc: '为什么选 Claude Code + Cursor 组合', icon: '选型', keywords: '工具 选型 claude cursor 决策' },
  { title: '文档清洗与分块规范', desc: '语料预处理与语义切分标准', icon: '语料', keywords: '清洗 分块 语料 文档 预处理' },
  { title: 'RAG 检索服务架构', desc: '向量库接入与召回链路说明', icon: 'RAG', keywords: 'rag 检索 向量 架构 召回' },
  { title: '召回质量评估手册', desc: '评估集构建与指标定义', icon: '评估', keywords: 'rag 评估 质量 指标 召回 准确' },
  { title: 'Chatbot Prompt 模板库', desc: '系统提示、兜底与引用来源规范', icon: '提示', keywords: 'prompt 提示 chatbot 模板 对话' },
  { title: '对话流设计文档', desc: '多轮澄清路径与意图分类', icon: '对话', keywords: '对话 流程 意图 prompt 多轮' },
  { title: '混合检索方案', desc: '向量 + 关键词 + 重排序', icon: '进阶', keywords: 'rag 混合 检索 关键词 重排序 向量' },
  { title: '上线与运维清单', desc: '部署、监控与知识库更新流程', icon: '上线', keywords: '上线 部署 运维 更新 监控 流水线' },
];

const questions = [
  { q: '这套知识库是怎么搭起来的？', a: '先把企业文档清洗、按语义分块，再向量化存入向量库，最后用 RAG 把用户问题映射到最相关的文档块。', src: '来源：RAG 检索服务架构' },
  { q: '学员用到了哪些 AI 工具？', a: '主线工具是 Claude Code（长链路任务）与 Cursor（行内重构），再配合向量数据库和召回评估框架。', src: '来源：工具链选型决策记录' },
  { q: '怎么保证回答不是瞎编的？', a: '我们建了评估集量化召回质量，并在 Prompt 里强制引用来源、对无答案的问题主动兜底。', src: '来源：召回质量评估手册' },
];

const boardStorageKey = 'aitrainer:board';

function getInitialBoard() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(boardStorageKey));
    if (saved && typeof saved === 'object') {
      return initialCards.map((card) => ({ ...card, col: saved[card.id] || card.col }));
    }
  } catch {
    // Local storage can be unavailable in privacy-restricted contexts.
  }
  return initialCards;
}

function TaskCard({ card, onDragStart, onOpen }) {
  return (
    <article
      className="ai-trainer-card"
      draggable
      onDragStart={(event) => onDragStart(event, card.id)}
      onClick={() => onOpen(card)}
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen(card);
        }
      }}
    >
      <span className="ai-trainer-tag">{card.tag}</span>
      <div className="ai-trainer-card-title">{card.title}</div>
      <div className="ai-trainer-card-foot">
        <div className="ai-trainer-tools">
          {card.tools.map((tool) => <span className="ai-trainer-tool" key={tool}>{tool}</span>)}
        </div>
        <div className="ai-trainer-avatar" title={card.owner}>{card.initials}</div>
      </div>
    </article>
  );
}

export default function AiTrainerCaseStudySection() {
  const rootRef = useRef(null);
  const chatRef = useRef(null);
  const [cards, setCards] = useState(getInitialBoard);
  const [filter, setFilter] = useState('all');
  const [selectedCard, setSelectedCard] = useState(null);
  const [search, setSearch] = useState('');
  const [answers, setAnswers] = useState([]);

  const filteredDocs = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return docs;
    return docs.filter((doc) => `${doc.title} ${doc.desc} ${doc.keywords}`.toLowerCase().includes(query));
  }, [search]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    root.querySelectorAll('.ai-trainer-reveal:not(.is-visible)').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCard(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [answers]);

  const saveBoard = (nextCards) => {
    setCards(nextCards);
    try {
      window.localStorage.setItem(boardStorageKey, JSON.stringify(Object.fromEntries(nextCards.map((card) => [card.id, card.col]))));
    } catch {
      // Keep the board usable even when persistence is blocked.
    }
  };

  const moveCard = (event, columnId) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('text/plain');
    if (!cardId) return;
    saveBoard(cards.map((card) => card.id === cardId ? { ...card, col: columnId } : card));
  };

  const askQuestion = (item) => {
    if (answers.some((answer) => answer.q === item.q)) return;
    setAnswers((current) => [...current, item]);
  };

  return (
    <section className="ai-trainer-case" ref={rootRef} aria-label="AI-Trainer 企业 AI 训练案例研究">
      <header className="ai-trainer-hero">
        <div className="ai-trainer-wrap-wide">
          <div className="ai-trainer-hero-grid">
            <div className="ai-trainer-reveal is-visible">
              <span className="ai-trainer-eyebrow">案例研究 · 企业 AI 赋能</span>
              <h1>把 AI 辅助开发，<br />变成<span>能交付的肌肉记忆</span>。</h1>
              <p className="ai-trainer-lead">学员不是听课，而是用 12 周时间从零搭建一套真实可用的<strong>企业知识库</strong>与<strong>AI Chatbot</strong>。在这条真实项目主线上，他们把 Claude Code、Cursor、RAG 与 Prompt 工程练成日常工作流。</p>
              <div className="ai-trainer-hero-cta">
                <a className="ai-trainer-button ai-trainer-button-primary" href="/cn/contact">预约企业演示</a>
                <a className="ai-trainer-button ai-trainer-button-ghost" href="#ai-trainer-board">查看训练看板 →</a>
              </div>
              <div className="ai-trainer-hero-meta">
                <div><b>12 周</b><span>项目制训练周期</span></div>
                <div><b>1 套</b><span>真实交付的知识库系统</span></div>
                <div><b>6+</b><span>实战掌握的 AI 工具</span></div>
              </div>
            </div>

            <div className="ai-trainer-hero-visual ai-trainer-reveal is-visible" aria-hidden="true">
              <div className="ai-trainer-window-top"><span /><span /><span /><b>training-board.ai</b></div>
              <div className="ai-trainer-mini-columns">
                {[
                  { name: '进行中', status: 'prog', cards: [['Cursor', true], ['RAG', false]] },
                  { name: '评审中', status: 'rev', cards: [['Prompt', true]] },
                  { name: '已完成', status: 'done', cards: [['Claude', false], ['语料', true]] },
                ].map((column) => (
                  <div className="ai-trainer-mini-column" key={column.name}>
                    <div className="ai-trainer-mini-heading"><i data-status={column.status} />{column.name}</div>
                    {column.cards.map(([label, wide], index) => (
                      <div className="ai-trainer-mini-card" key={`${label}-${index}`}>
                        <span className={wide ? 'wide' : ''} /><span /><b>{label}</b>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="ai-trainer-block" id="ai-trainer-overview">
        <div className="ai-trainer-wrap">
          <div className="ai-trainer-section-head ai-trainer-reveal">
            <span className="ai-trainer-eyebrow">项目概览</span>
            <h2>为什么用「真实项目」来教 AI？</h2>
            <p>市面上的 AI 培训停留在演示和 Demo。AI-Trainer 把一个企业真实需要的系统——内部知识库 + 智能问答 Chatbot——拆解成训练任务，让学员在交付压力下，把工具用成习惯。</p>
          </div>
          <div className="ai-trainer-pillars ai-trainer-reveal">
            {[
              ['01', '真实项目驱动', '每位学员认领看板上的真实任务：清洗语料、搭建 RAG、调优检索、设计对话流。没有玩具数据，交付的是能上线的系统。'],
              ['02', '工具链实战', '在同一条主线里贯通 Claude Code、Cursor、向量数据库与评估框架，理解每个工具的边界与协作方式，而非孤立地学语法。'],
              ['03', '能力可迁移', '训练沉淀为团队的标准工作流与 Prompt 资产，项目结束后能直接复用到自家产品研发，而不是随培训一起结束。'],
            ].map(([number, title, body]) => (
              <article className="ai-trainer-pillar" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
          <div className="ai-trainer-journey ai-trainer-reveal">
            {[
              ['WEEK 1–2', '语料与选型', '梳理企业文档，确定 AI 工具链与技术栈。'],
              ['WEEK 3–6', '搭建知识库', '文档分块、向量化，跑通基础 RAG 检索。'],
              ['WEEK 7–10', '构建 Chatbot', '设计对话流、Prompt 模板与召回评估。'],
              ['WEEK 11–12', '评审与交付', '质量评审、上线，并沉淀团队工作流。'],
            ].map(([week, title, body]) => (
              <div className="ai-trainer-journey-step" key={week}><span>{week}</span><b>{title}</b><p>{body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-trainer-block ai-trainer-board-section" id="ai-trainer-board">
        <div className="ai-trainer-wrap-wide">
          <div className="ai-trainer-section-head ai-trainer-reveal">
            <span className="ai-trainer-eyebrow">训练看板 · 可交互</span>
            <h2>训练是如何推进的</h2>
            <p>这就是学员真实使用的项目看板。<strong>拖动卡片</strong>切换状态，<strong>点击卡片</strong>查看任务背后掌握的技能与工具。</p>
          </div>
          <div className="ai-trainer-filterbar ai-trainer-reveal" aria-label="按工具筛选">
            <span>按工具筛选</span>
            {['all', 'Claude Code', 'Cursor', 'RAG', 'Prompt 工程'].map((tool) => (
              <button className={filter === tool ? 'active' : ''} key={tool} type="button" onClick={() => setFilter(tool)}>{tool === 'all' ? '全部' : tool}</button>
            ))}
          </div>
          <div className="ai-trainer-board ai-trainer-reveal">
            {columns.map((column) => {
              const columnCards = cards.filter((card) => card.col === column.id && (filter === 'all' || card.tools.includes(filter)));
              return (
                <div className="ai-trainer-column" key={column.id} onDragOver={(event) => event.preventDefault()} onDrop={(event) => moveCard(event, column.id)}>
                  <div className="ai-trainer-column-head"><i data-status={column.status} /><b>{column.name}</b><span>{columnCards.length}</span></div>
                  {columnCards.map((card) => <TaskCard card={card} key={card.id} onDragStart={(event, cardId) => event.dataTransfer.setData('text/plain', cardId)} onOpen={setSelectedCard} />)}
                  {columnCards.length === 0 && <p className="ai-trainer-column-empty">拖到这里</p>}
                </div>
              );
            })}
          </div>
          <p className="ai-trainer-board-foot ai-trainer-reveal"><kbd>拖动</kbd> 移动卡片 · <kbd>点击</kbd> 查看任务详情 — 状态会自动记住</p>
        </div>
      </section>

      <section className="ai-trainer-block" id="ai-trainer-outcome">
        <div className="ai-trainer-wrap">
          <div className="ai-trainer-section-head ai-trainer-reveal">
            <span className="ai-trainer-eyebrow">交付成果</span>
            <h2>训练沉淀下来的东西</h2>
            <p>12 周结束时，学员手里不只是证书，而是一套可检索的企业知识库，和一个真正会用它回答问题的 Chatbot。下面是两者的真实形态。</p>
          </div>
          <div className="ai-trainer-knowledge-grid ai-trainer-reveal">
            <div className="ai-trainer-panel">
              <div className="ai-trainer-panel-head"><b>企业知识库</b><span>搜索文档</span></div>
              <label className="ai-trainer-search"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="试试搜索：RAG、Prompt、上线…" /></label>
              <div className="ai-trainer-doc-list">
                {filteredDocs.map((doc) => <div className="ai-trainer-doc" key={doc.title}><span>{doc.icon}</span><div><b>{doc.title}</b><p>{doc.desc}</p></div></div>)}
                {filteredDocs.length === 0 && <p className="ai-trainer-empty">没有匹配的文档 — 换个关键词试试。</p>}
              </div>
            </div>
            <div className="ai-trainer-panel">
              <div className="ai-trainer-panel-head"><b>AI Chatbot 预览</b><span>基于知识库 · RAG</span></div>
              <div className="ai-trainer-chat" ref={chatRef}>
                <div className="ai-trainer-message bot">嗨，我是基于公司知识库训练的助手。问我关于这套系统是怎么搭起来的吧。</div>
                {answers.map((answer) => <React.Fragment key={answer.q}><div className="ai-trainer-message user">{answer.q}</div><div className="ai-trainer-message bot">{answer.a}<span>{answer.src}</span></div></React.Fragment>)}
                <div className="ai-trainer-suggestions"><span>建议提问</span>{questions.map((item) => <button type="button" key={item.q} disabled={answers.some((answer) => answer.q === item.q)} onClick={() => askQuestion(item)}>{item.q}</button>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-trainer-cta" id="ai-trainer-contact">
        <div className="ai-trainer-wrap">
          <div className="ai-trainer-cta-card ai-trainer-reveal">
            <h2>让你的团队也练成这套肌肉记忆</h2>
            <p>用一个真实项目，把 AI 辅助开发沉淀为团队的标准工作流。我们可以基于你们的业务定制训练主线。</p>
            <div className="ai-trainer-hero-cta">
              <a className="ai-trainer-button ai-trainer-button-light" href="/cn/contact">预约企业演示</a>
              <a className="ai-trainer-button ai-trainer-button-line" href="/cn/contact">获取课程大纲</a>
            </div>
          </div>
        </div>
      </section>

      <div className={`ai-trainer-scrim ${selectedCard ? 'open' : ''}`} onClick={() => setSelectedCard(null)} aria-hidden="true" />
      <aside className={`ai-trainer-drawer ${selectedCard ? 'open' : ''}`} aria-hidden={!selectedCard} aria-label="任务详情">
        {selectedCard && <>
          <div className="ai-trainer-drawer-head"><div><span>{columns.find((column) => column.id === selectedCard.col)?.name}</span><button type="button" onClick={() => setSelectedCard(null)} aria-label="关闭任务详情">×</button></div><h3>{selectedCard.title}</h3></div>
          <div className="ai-trainer-drawer-body">
            <section><h4>任务说明</h4><p>{selectedCard.desc}</p></section>
            <section><h4>用到的 AI 工具</h4><div className="ai-trainer-drawer-tools">{selectedCard.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></section>
            <section><h4>学员掌握的技能</h4>{selectedCard.skills.map((skill) => <div className="ai-trainer-skill" key={skill}><i />{skill}</div>)}</section>
            <section><h4>负责学员</h4><div className="ai-trainer-owner"><span>{selectedCard.initials}</span><div><b>{selectedCard.owner}</b><p>{selectedCard.role}</p></div></div></section>
          </div>
        </>}
      </aside>
    </section>
  );
}
