import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../../../css/ai-trainer.css';

const columns = [
  { id: 'todo', name: 'To do', status: 'todo' },
  { id: 'prog', name: 'In progress', status: 'prog' },
  { id: 'rev', name: 'In review', status: 'rev' },
  { id: 'done', name: 'Completed', status: 'done' },
];

const initialCards = [
  { id: 'c1', col: 'done', tag: 'Foundation · Selection', title: 'Select the AI toolchain and set up the environment', tools: ['Claude Code', 'Cursor'], owner: 'Shuhang Lin', initials: 'LS', role: 'Full stack / Cohort lead', desc: 'Compare the boundaries of candidate tools, use Claude Code for long-running tasks and Cursor for inline refactoring, then standardize the team development environment and access model.', skills: ['Choose the right AI tool for each task', 'Configure a reproducible AI development environment', 'Establish team-level tool usage standards'] },
  { id: 'c2', col: 'done', tag: 'Knowledge · Corpus', title: 'Import and clean the enterprise knowledge corpus', tools: ['Claude Code', 'RAG'], owner: 'Yifan Zhou', initials: 'ZY', role: 'Data / Trainee', desc: 'Extract company documents scattered across wikis, PDFs, and support tickets, remove duplicates, and split the material into semantically useful retrieval chunks.', skills: ['Document extraction and cleaning pipelines', 'Semantic chunking strategies for retrieval', 'Use AI to process unstructured data at scale'] },
  { id: 'c3', col: 'done', tag: 'Knowledge · Retrieval', title: 'Build the foundational RAG retrieval service', tools: ['RAG', 'Cursor'], owner: 'Yifan Zhou', initials: 'ZY', role: 'Data / Trainee', desc: 'Connect a vector database, embed documents, and implement similarity search to complete the first question-to-relevant-context retrieval loop.', skills: ['Embeddings and vector database operation', 'RAG retrieval pipeline implementation', 'AI-assisted retrieval service debugging'] },
  { id: 'c4', col: 'rev', tag: 'Knowledge · Quality', title: 'Evaluate RAG retrieval quality', tools: ['Prompt Engineering', 'RAG'], owner: 'Mo Chen', initials: 'CM', role: 'ML / Trainee', desc: 'Build an evaluation set, quantify retrieval precision and coverage, identify why irrelevant context is returned, and iterate on chunking and retrieval parameters.', skills: ['Design retrieval metrics and evaluation datasets', 'Find the root causes of RAG quality issues', 'Improve retrieval through measured iteration'] },
  { id: 'c5', col: 'rev', tag: 'Chatbot · Prompts', title: 'Review the Chatbot prompt templates', tools: ['Prompt Engineering', 'Claude Code'], owner: 'Mo Chen', initials: 'CM', role: 'ML / Trainee', desc: 'Standardize system prompts and response formats, handle missing answers, source citations, and clarification flows, then run a cross-team review.', skills: ['Structured prompt template design', 'Conversation edge cases and fallback behavior', 'Turn prompts into reusable team assets'] },
  { id: 'c6', col: 'prog', tag: 'Chatbot · Refactor', title: 'Refactor the retrieval service with Cursor', tools: ['Cursor', 'Claude Code'], owner: 'Shuhang Lin', initials: 'LS', role: 'Full stack / Cohort lead', desc: 'Refactor prototype retrieval code into maintainable modules, add caching and error handling, and use AI to generate test cases.', skills: ['AI-assisted code refactoring', 'Generate tests and edge cases with AI', 'Turn a prototype into production-ready code'] },
  { id: 'c7', col: 'prog', tag: 'Knowledge · Pipeline', title: 'Automate document chunking and cleaning', tools: ['Claude Code', 'RAG'], owner: 'Yifan Zhou', initials: 'ZY', role: 'Data / Trainee', desc: 'Package one-off cleaning scripts into a scheduled pipeline so new documents are ingested automatically and the knowledge base stays current.', skills: ['Turn scripts into automated pipelines', 'Design incremental update mechanisms', 'Use AI to investigate data pipeline failures'] },
  { id: 'c8', col: 'todo', tag: 'Chatbot · Conversation', title: 'Design the Chatbot conversation flow', tools: ['Prompt Engineering'], owner: 'Wan Su', initials: 'SW', role: 'Product / Trainee', desc: 'Map common user questions, design multi-turn paths and clarification strategies, and define how the assistant should guide users when confidence is low.', skills: ['Conversation flow and intent design', 'Multi-turn clarification strategies', 'Translate business scenarios into conversation requirements'] },
  { id: 'c9', col: 'todo', tag: 'Knowledge · Advanced', title: 'Add hybrid retrieval: vector plus keyword', tools: ['RAG', 'Cursor'], owner: 'Mo Chen', initials: 'CM', role: 'ML / Trainee', desc: 'Combine keyword search and reranking with vector retrieval to improve results for proper nouns, identifiers, and code snippets.', skills: ['Hybrid retrieval and reranking', 'Optimize retrieval for a specific domain', 'Validate technical approaches quickly with AI'] },
];

const docs = [
  { title: 'AI Toolchain Decision Record', desc: 'Why the team chose Claude Code plus Cursor', icon: 'ADR', keywords: 'tools selection claude cursor decision' },
  { title: 'Document Cleaning and Chunking Standard', desc: 'Corpus preprocessing and semantic splitting rules', icon: 'DOC', keywords: 'cleaning chunking corpus documents preprocessing' },
  { title: 'RAG Retrieval Service Architecture', desc: 'Vector database integration and retrieval flow', icon: 'RAG', keywords: 'rag retrieval vector architecture recall' },
  { title: 'Retrieval Quality Evaluation Guide', desc: 'Evaluation set construction and metric definitions', icon: 'QA', keywords: 'rag evaluation quality metrics retrieval accuracy' },
  { title: 'Chatbot Prompt Template Library', desc: 'System prompts, fallback behavior, and citation rules', icon: 'PR', keywords: 'prompt chatbot templates conversation fallback' },
  { title: 'Conversation Flow Design', desc: 'Multi-turn clarification paths and intent categories', icon: 'FLOW', keywords: 'conversation flow intent prompt multi turn' },
  { title: 'Hybrid Retrieval Design', desc: 'Vector plus keyword search and reranking', icon: 'HYB', keywords: 'rag hybrid retrieval keyword reranking vector' },
  { title: 'Launch and Operations Checklist', desc: 'Deployment, monitoring, and knowledge update process', icon: 'OPS', keywords: 'launch deployment operations updates monitoring pipeline' },
];

const questions = [
  { q: 'How was this knowledge base built?', a: 'The team cleaned company documents, split them by meaning, embedded each chunk in a vector database, and used RAG to map user questions to the most relevant context.', src: 'Source: RAG Retrieval Service Architecture' },
  { q: 'Which AI tools did trainees use?', a: 'The core tools were Claude Code for longer task chains and Cursor for inline refactoring, supported by a vector database and retrieval evaluation framework.', src: 'Source: AI Toolchain Decision Record' },
  { q: 'How do you prevent fabricated answers?', a: 'The team created an evaluation set to measure retrieval quality and required every answer to cite sources or use an explicit fallback when the knowledge base has no answer.', src: 'Source: Retrieval Quality Evaluation Guide' },
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
    <section className="ai-trainer-case" lang="en" ref={rootRef} aria-label="AI-Trainer enterprise AI training case study">
      <header className="ai-trainer-hero">
        <div className="ai-trainer-wrap-wide">
          <div className="ai-trainer-hero-grid">
            <div className="ai-trainer-reveal is-visible">
              <span className="ai-trainer-eyebrow">Case study · Enterprise AI enablement</span>
              <h1>Turn AI-assisted development into <span>delivery-ready muscle memory</span>.</h1>
              <p className="ai-trainer-lead">Trainees do not sit through lectures. Over 12 weeks, they build a production-ready <strong>enterprise knowledge base</strong> and <strong>AI Chatbot</strong> from scratch, turning Claude Code, Cursor, RAG, and prompt engineering into a daily workflow.</p>
              <div className="ai-trainer-hero-cta">
                <a className="ai-trainer-button ai-trainer-button-primary" href="/en/contact">Book an enterprise demo</a>
                <a className="ai-trainer-button ai-trainer-button-ghost" href="#ai-trainer-board">Explore the training board →</a>
              </div>
              <div className="ai-trainer-hero-meta">
                <div><b>12 weeks</b><span>Project-based training</span></div>
                <div><b>1 system</b><span>A delivered knowledge platform</span></div>
                <div><b>6+</b><span>AI tools used in practice</span></div>
              </div>
            </div>

            <div className="ai-trainer-hero-visual ai-trainer-reveal is-visible" aria-hidden="true">
              <div className="ai-trainer-window-top"><span /><span /><span /><b>training-board.ai</b></div>
              <div className="ai-trainer-mini-columns">
                {[
                  { name: 'In progress', status: 'prog', cards: [['Cursor', true], ['RAG', false]] },
                  { name: 'In review', status: 'rev', cards: [['Prompt', true]] },
                  { name: 'Completed', status: 'done', cards: [['Claude', false], ['Corpus', true]] },
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
            <span className="ai-trainer-eyebrow">Project overview</span>
            <h2>Why teach AI through a real project?</h2>
            <p>Most AI training stops at demonstrations and demos. AI-Trainer turns a system the business genuinely needs—an internal knowledge base and intelligent Q&amp;A Chatbot—into a sequence of delivery tasks that make the tools habitual under real project pressure.</p>
          </div>
          <div className="ai-trainer-pillars ai-trainer-reveal">
            {[
              ['01', 'Driven by real delivery', 'Every trainee owns real board tasks: cleaning the corpus, building RAG, tuning retrieval, and designing conversation flows. There is no toy data; the outcome is a system that can launch.'],
              ['02', 'Toolchain in practice', 'One project connects Claude Code, Cursor, vector databases, and evaluation frameworks so trainees understand each tool’s boundaries and how the tools work together.'],
              ['03', 'Transferable capability', 'Training produces standard team workflows and reusable prompt assets that carry into product development after the program ends.'],
            ].map(([number, title, body]) => (
              <article className="ai-trainer-pillar" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>
            ))}
          </div>
          <div className="ai-trainer-journey ai-trainer-reveal">
            {[
              ['WEEK 1–2', 'Corpus and selection', 'Audit company documents and select the AI toolchain and stack.'],
              ['WEEK 3–6', 'Build the knowledge base', 'Chunk and embed documents, then complete the foundational RAG loop.'],
              ['WEEK 7–10', 'Build the Chatbot', 'Design conversation flows, prompt templates, and retrieval evaluation.'],
              ['WEEK 11–12', 'Review and deliver', 'Run quality reviews, launch the system, and document the team workflow.'],
            ].map(([week, title, body]) => (
              <div className="ai-trainer-journey-step" key={week}><span>{week}</span><b>{title}</b><p>{body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-trainer-block ai-trainer-board-section" id="ai-trainer-board">
        <div className="ai-trainer-wrap-wide">
          <div className="ai-trainer-section-head ai-trainer-reveal">
            <span className="ai-trainer-eyebrow">Training board · Interactive</span>
            <h2>How the training progresses</h2>
            <p>This is the project board trainees actually use. <strong>Drag cards</strong> to change status and <strong>open a card</strong> to see the tools and skills behind the task.</p>
          </div>
          <div className="ai-trainer-filterbar ai-trainer-reveal" aria-label="Filter by tool">
            <span>Filter by tool</span>
            {['all', 'Claude Code', 'Cursor', 'RAG', 'Prompt Engineering'].map((tool) => (
              <button className={filter === tool ? 'active' : ''} key={tool} type="button" onClick={() => setFilter(tool)}>{tool === 'all' ? 'All' : tool}</button>
            ))}
          </div>
          <div className="ai-trainer-board ai-trainer-reveal">
            {columns.map((column) => {
              const columnCards = cards.filter((card) => card.col === column.id && (filter === 'all' || card.tools.includes(filter)));
              return (
                <div className="ai-trainer-column" key={column.id} onDragOver={(event) => event.preventDefault()} onDrop={(event) => moveCard(event, column.id)}>
                  <div className="ai-trainer-column-head"><i data-status={column.status} /><b>{column.name}</b><span>{columnCards.length}</span></div>
                  {columnCards.map((card) => <TaskCard card={card} key={card.id} onDragStart={(event, cardId) => event.dataTransfer.setData('text/plain', cardId)} onOpen={setSelectedCard} />)}
                  {columnCards.length === 0 && <p className="ai-trainer-column-empty">Drop here</p>}
                </div>
              );
            })}
          </div>
          <p className="ai-trainer-board-foot ai-trainer-reveal"><kbd>Drag</kbd> move a card · <kbd>Open</kbd> view task details — status is saved automatically</p>
        </div>
      </section>

      <section className="ai-trainer-block" id="ai-trainer-outcome">
        <div className="ai-trainer-wrap">
          <div className="ai-trainer-section-head ai-trainer-reveal">
            <span className="ai-trainer-eyebrow">Delivered outcomes</span>
            <h2>What remains after the training</h2>
            <p>At the end of 12 weeks, trainees leave with more than a certificate. They have a searchable enterprise knowledge base and a Chatbot that can use it to answer real questions.</p>
          </div>
          <div className="ai-trainer-knowledge-grid ai-trainer-reveal">
            <div className="ai-trainer-panel">
              <div className="ai-trainer-panel-head"><b>Enterprise knowledge base</b><span>Search documents</span></div>
              <label className="ai-trainer-search"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Try: RAG, prompt, launch…" /></label>
              <div className="ai-trainer-doc-list">
                {filteredDocs.map((doc) => <div className="ai-trainer-doc" key={doc.title}><span>{doc.icon}</span><div><b>{doc.title}</b><p>{doc.desc}</p></div></div>)}
                {filteredDocs.length === 0 && <p className="ai-trainer-empty">No matching documents — try another keyword.</p>}
              </div>
            </div>
            <div className="ai-trainer-panel">
              <div className="ai-trainer-panel-head"><b>AI Chatbot preview</b><span>Knowledge-grounded · RAG</span></div>
              <div className="ai-trainer-chat" ref={chatRef}>
                <div className="ai-trainer-message bot">Hi, I am an assistant grounded in the company knowledge base. Ask me how this system was built.</div>
                {answers.map((answer) => <React.Fragment key={answer.q}><div className="ai-trainer-message user">{answer.q}</div><div className="ai-trainer-message bot">{answer.a}<span>{answer.src}</span></div></React.Fragment>)}
                <div className="ai-trainer-suggestions"><span>Suggested questions</span>{questions.map((item) => <button type="button" key={item.q} disabled={answers.some((answer) => answer.q === item.q)} onClick={() => askQuestion(item)}>{item.q}</button>)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-trainer-cta" id="ai-trainer-contact">
        <div className="ai-trainer-wrap">
          <div className="ai-trainer-cta-card ai-trainer-reveal">
            <h2>Build the same muscle memory across your team</h2>
            <p>Use one real project to turn AI-assisted development into a standard team workflow. We can tailor the training track to your business.</p>
            <div className="ai-trainer-hero-cta">
              <a className="ai-trainer-button ai-trainer-button-light" href="/en/contact">Book an enterprise demo</a>
              <a className="ai-trainer-button ai-trainer-button-line" href="/en/contact">Get the course outline</a>
            </div>
          </div>
        </div>
      </section>

      <div className={`ai-trainer-scrim ${selectedCard ? 'open' : ''}`} onClick={() => setSelectedCard(null)} aria-hidden="true" />
      <aside className={`ai-trainer-drawer ${selectedCard ? 'open' : ''}`} aria-hidden={!selectedCard} aria-label="Task details">
        {selectedCard && <>
          <div className="ai-trainer-drawer-head"><div><span>{columns.find((column) => column.id === selectedCard.col)?.name}</span><button type="button" onClick={() => setSelectedCard(null)} aria-label="Close task details">×</button></div><h3>{selectedCard.title}</h3></div>
          <div className="ai-trainer-drawer-body">
            <section><h4>Task brief</h4><p>{selectedCard.desc}</p></section>
            <section><h4>AI tools used</h4><div className="ai-trainer-drawer-tools">{selectedCard.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></section>
            <section><h4>Skills developed</h4>{selectedCard.skills.map((skill) => <div className="ai-trainer-skill" key={skill}><i />{skill}</div>)}</section>
            <section><h4>Task owner</h4><div className="ai-trainer-owner"><span>{selectedCard.initials}</span><div><b>{selectedCard.owner}</b><p>{selectedCard.role}</p></div></div></section>
          </div>
        </>}
      </aside>
    </section>
  );
}
