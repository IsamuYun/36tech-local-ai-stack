import React from 'react';

const layers = [
  {
    id: 'applications',
    color: 'var(--L-apps)',
    level: 'L01',
    title: 'Applications',
    titleZh: '应用',
    tagline: 'Local-first chat, RAG, agents and IDE copilots — the surface users touch.',
    meta: (
      <>
        UI · UX
        <br />4 tools shown
      </>
    ),
    description:
      'The application layer is where local AI becomes a product. Run a private ChatGPT-style UI for your team, build a RAG pipeline that never leaves your network, or wire a copilot into VS Code with the same OpenAI-compatible API your cloud code already speaks.',
    codeLang: 'bash',
    code: (
      <>
        <span className="cm"># Open WebUI bound to a local Ollama server</span>
        {`\ndocker run -d -p `}
        <span className="st">3000:8080</span>
        {` \\
  --add-host=host.docker.internal:host-gateway \\
  -v open-webui:/app/backend/data \\
  --name open-webui --restart always \\
  ghcr.io/open-webui/open-webui:main`}
      </>
    ),
    extras: [
      ['Talks to', 'Runtime layer · OpenAI-compatible HTTP'],
      ['Privacy', '100% local · no telemetry by default'],
      ['Latency', '~30 ms first token on M-series'],
    ],
    tools: [
      {
        id: 'tool-open-webui',
        image: '/logo/open-webui.svg',
        imageAlt: 'Open WebUI',
        name: (
          <span className="ital">Open WebUI</span>
        ),
        note: 'Self-hosted ChatGPT-like front-end with multi-model, RAG and tool use.',
      },
      {
        id: 'tool-anythingllm',
        image: '/logo/anything-llm.jpeg',
        imageAlt: 'Anything LLM',
        name: (
          <span className="ital">Anything LLM</span>
        ),
        note: 'Workspace-scoped document chat with built-in embeddings and citations.',
      },
      {
        id: 'tool-continue',
        name: (
          <>
            Continue.<span className="ital">dev</span>
          </>
        ),
        note: 'In-editor code assistant for VS Code and JetBrains; bring-your-own model.',
      },
      {
        id: 'tool-lobechat',
        name: (
          <>
            Lobe<span className="ital">Chat</span>
          </>
        ),
        note: 'Plug-in based front-end with voice, vision and an agents marketplace.',
      },
    ],
  },
  {
    id: 'models',
    color: 'var(--L-models)',
    level: 'L02',
    title: 'Models',
    titleZh: '模型',
    tagline: 'Open-weight LLMs you can pull, quantize, fine-tune and run offline.',
    meta: (
      <>
        WEIGHTS
        <br />5 families
      </>
    ),
    description:
      'The brain of the system. Pick weights that fit your VRAM budget, your license tolerance and your task. Modern Q4 quantizations of 30–70B models fit comfortably in 24–48 GB and now hold their own against the closed frontier on most knowledge work.',
    codeLang: 'shell',
    code: (
      <>
        <span className="cm"># Pull and run a quantized 32B model via Ollama</span>
        {'\n'}
        <span className="kw">ollama</span>
        {' pull qwen2.5:32b-instruct-q4_K_M\n'}
        <span className="kw">ollama</span>
        {` run  qwen2.5:32b-instruct-q4_K_M \\
  `}
        <span className="st">"Summarize the design system in 3 bullets."</span>
      </>
    ),
    extras: [
      ['License', 'Apache 2.0 · MIT · Llama Community'],
      ['Quant', 'GGUF · GPTQ · AWQ · MLX · safetensors'],
      ['Footprint', '~4 GB (8B Q4) → ~140 GB (235B Q4)'],
    ],
    tools: [
      {
        id: 'tool-llama',
        name: (
          <>
            Llama <span className="ital">3.3 70B</span>
          </>
        ),
        note: "Meta's general-purpose flagship; 128k context, strong instruction tuning.",
      },
      {
        id: 'tool-qwen',
        name: (
          <>
            Qwen <span className="ital">2.5 32B</span>
          </>
        ),
        note: 'Best-in-class multilingual + code at 32B; runs at usable speed on a 4090.',
      },
      {
        id: 'tool-deepseek',
        name: (
          <>
            DeepSeek <span className="ital">V3</span>
          </>
        ),
        note: '671B MoE with 37B active params — frontier reasoning on a workstation.',
      },
      {
        id: 'tool-phi',
        name: (
          <>
            Phi-<span className="ital">4 14B</span>
          </>
        ),
        note: 'Reasoning-tuned small model; punches well above its weight on benchmarks.',
      },
      {
        id: 'tool-gemma',
        name: (
          <>
            Gemma <span className="ital">2 9B</span>
          </>
        ),
        note: 'Efficient mid-size with strong defaults for laptops and edge boxes.',
      },
    ],
  },
  {
    id: 'data',
    color: 'var(--L-data)',
    level: 'L03',
    title: 'Data',
    titleZh: '数据',
    tagline: 'Embeddings, vector stores and the documents that ground every answer.',
    meta: (
      <>
        RAG · INDEX
        <br />5 tools shown
      </>
    ),
    description:
      'Models are only as honest as the context you put in front of them. The data layer covers ingestion, chunking, embedding, indexing and retrieval — the unglamorous plumbing that decides whether a private deployment can actually answer questions about your business.',
    codeLang: 'python',
    code: (
      <>
        <span className="cm"># Build a tiny local vector index with Chroma + bge-m3</span>
        {'\n'}
        <span className="kw">import</span>
        {' chromadb\nclient = chromadb.PersistentClient('}
        <span className="st">"./store"</span>
        {')\ncol = client.get_or_create_collection('}
        <span className="st">"docs"</span>
        {`)\ncol.add(documents=docs, ids=ids,
        embeddings=embed_model.encode(docs))`}
      </>
    ),
    extras: [
      ['Embed dim', '384 · 768 · 1024 · 4096'],
      ['Index', 'HNSW · IVF · ScaNN · DiskANN'],
      ['Footprint', '~1.5 KB per chunk @ 768 dims'],
    ],
    tools: [
      {
        id: 'tool-qdrant',
        name: 'Qdrant',
        note: 'Rust vector DB with on-disk HNSW, filtering and hybrid search.',
      },
      {
        id: 'tool-chroma',
        name: 'Chroma',
        note: 'SQLite-backed embedded store; zero-ops for laptop-scale RAG.',
      },
      {
        id: 'tool-lancedb',
        name: 'LanceDB',
        note: 'Columnar format that stores vectors next to your other columns.',
      },
      {
        id: 'tool-bge',
        name: (
          <>
            BGE-<span className="ital">M3</span>
          </>
        ),
        note: 'Multilingual, multi-vector embedding model — strong default for Chinese + English.',
      },
      {
        id: 'tool-nomic',
        name: (
          <>
            nomic-<span className="ital">embed</span>
          </>
        ),
        note: '768-dim Apache-2.0 embedder, fast on CPU, great everyday choice.',
      },
    ],
  },
  {
    id: 'runtime',
    color: 'var(--L-runtime)',
    level: 'L04',
    title: 'Runtime',
    titleZh: '运行时',
    tagline: 'Inference engines that turn weights into tokens — fast, batched, and quantized.',
    meta: (
      <>
        SERVE · BATCH
        <br />5 engines
      </>
    ),
    description:
      'The translator between math and tokens. A runtime loads model weights into the right memory, manages the KV cache, batches concurrent requests and exposes an HTTP API. Pick by workload: single-user laptops want llama.cpp/Ollama; multi-tenant servers want vLLM or TGI.',
    codeLang: 'bash',
    code: (
      <>
        <span className="cm"># Serve a model with vLLM on 2× GPUs, OpenAI-compatible</span>
        {'\n'}
        <span className="kw">vllm</span>
        {` serve qwen2.5-32b-instruct \\
  --tensor-parallel-size `}
        <span className="st">2</span>
        {` \\
  --max-model-len `}
        <span className="st">32768</span>
        {` \\
  --gpu-memory-utilization `}
        <span className="st">0.92</span>
      </>
    ),
    extras: [
      ['API', 'OpenAI-compatible (drop-in for sdk)'],
      ['Batching', 'Continuous · PagedAttention · prefix cache'],
      ['Throughput', '3–80× over naive single-request HF'],
    ],
    tools: [
      {
        id: 'tool-ollama',
        name: 'Ollama',
        note: 'One-line model pulls, automatic quantization, OpenAI-shaped HTTP — the default for solo devs.',
      },
      {
        id: 'tool-llamacpp',
        name: (
          <>
            llama.<span className="ital">cpp</span>
          </>
        ),
        note: 'The workhorse C++ engine behind half of the stack; GGUF, CPU+GPU, every platform.',
      },
      {
        id: 'tool-vllm',
        name: 'vLLM',
        note: 'PagedAttention + continuous batching — the choice for serving many users from one box.',
      },
      {
        id: 'tool-mlx',
        name: 'MLX',
        note: "Apple's array framework with first-class Apple Silicon kernels and KV-cache reuse.",
      },
      {
        id: 'tool-lmstudio',
        name: (
          <>
            LM <span className="ital">Studio</span>
          </>
        ),
        note: 'Desktop GUI for browsing, downloading and chatting with local models.',
      },
    ],
  },
  {
    id: 'hardware',
    color: 'var(--L-hardware)',
    level: 'L05',
    title: 'Hardware',
    titleZh: '硬件',
    tagline: 'The silicon that decides your tokens-per-second and your model ceiling.',
    meta: (
      <>
        GPU · NPU
        <br />5 platforms
      </>
    ),
    description:
      'The single most expensive decision in the stack. VRAM (or unified memory) sets the largest model you can hold; memory bandwidth sets the speed you generate at. As a rule of thumb: a Q4 quant of an N-billion-parameter model wants roughly N/2 GB of RAM, plus headroom for the KV cache.',
    codeLang: 'text',
    code: (
      <>
        <span className="cm"># Rule-of-thumb VRAM budget at Q4_K_M</span>
        {`\n8B   model →  ~5 GB    (laptop GPU / M2 Air)
14B  model →  ~9 GB    (RTX 4060Ti 16GB)
32B  model → ~20 GB    (RTX 4090 / M2 Max 32GB)
70B  model → ~42 GB    (2× 4090 / M3 Max 64GB)
235B model → ~140 GB   (M3 Ultra 192GB / MI300X)`}
      </>
    ),
    extras: [
      ['Bottleneck', 'Memory bandwidth, not flops'],
      ['Sweet spot', '24 GB VRAM · 32B Q4 @ ~40 tok/s'],
      ['Power draw', '35 W (laptop) → 750 W (4090 pair)'],
    ],
    tools: [
      {
        id: 'tool-apple-m',
        name: (
          <>
            Apple <span className="ital">M-series</span>
          </>
        ),
        note: "Unified memory up to 192 GB — runs models other consumer hardware can't even load.",
      },
      {
        id: 'tool-rtx-4090',
        name: (
          <>
            NVIDIA <span className="ital">RTX 4090</span>
          </>
        ),
        note: '24 GB VRAM, 1 TB/s bandwidth — the workstation sweet spot for 30B-class models.',
      },
      {
        id: 'tool-rtx-5090',
        name: (
          <>
            NVIDIA <span className="ital">RTX 5090</span>
          </>
        ),
        note: '32 GB Blackwell with 1.8 TB/s bandwidth; the new ceiling for prosumer LLM rigs.',
      },
      {
        id: 'tool-mi300x',
        name: (
          <>
            AMD <span className="ital">MI300X</span>
          </>
        ),
        note: '192 GB HBM3 — single-card 235B inference for the data-center crowd.',
      },
      {
        id: 'tool-jetson',
        name: (
          <>
            Jetson <span className="ital">Orin</span>
          </>
        ),
        note: 'Embedded 64 GB module for robotics and on-device agents at the edge.',
      },
    ],
  },
];

function CodeSnippet({ lang, children }) {
  return (
    <div className="code-snip" data-lang={lang}>
      {children}
    </div>
  );
}

function ExtrasList({ rows }) {
  return (
    <div className="extras">
      {rows.map(([key, value]) => (
        <div className="row" key={key}>
          <span className="k">{key}</span>
          <span className="v">{value}</span>
        </div>
      ))}
    </div>
  );
}

function ToolCard({ tool }) {
  return (
    <div className="tool">
      <div className="image-slot" id={tool.id} aria-label="Logo">
        {tool.image ? <img src={tool.image} alt={tool.imageAlt} /> : null}
      </div>
      <div className="tool-main">
        <div className="tool-name">{tool.name}</div>
        <div className="tool-note">{tool.note}</div>
      </div>
    </div>
  );
}

function StackLayer({ layer }) {
  return (
    <article className="layer" data-layer={layer.id} style={{ '--c': layer.color }}>
      <div className="face" data-toggle>
        <div className="face-inner">
          <div className="lnum">{layer.level}</div>
          <div className="ltitle">
            <div className="name">
              {layer.title}
              <span className="zh">{layer.titleZh}</span>
            </div>
            <div className="tagline">{layer.tagline}</div>
          </div>
          <div className="lmeta">{layer.meta}</div>
          <div className="chev">▾</div>
        </div>
      </div>

      <div className="detail">
        <div className="detail-inner">
          <div>
            <h4>What lives here</h4>
            <p className="desc">{layer.description}</p>
            <CodeSnippet lang={layer.codeLang}>{layer.code}</CodeSnippet>
            <ExtrasList rows={layer.extras} />
          </div>
          <div>
            <h4>Tools we recommend</h4>
            <div className="tools-list">
              {layer.tools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function StackSection() {
  return (
    <section id="stack" className="stack-section">
      <div className="stack" id="stackEl">
        {layers.map((layer) => (
          <StackLayer key={layer.id} layer={layer} />
        ))}
      </div>
    </section>
  );
}
