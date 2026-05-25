import React from 'react';
import RawHtml from './RawHtml.jsx';

const markup = `
<!-- =========================================================
         THE STACK
         ========================================================= -->
    <section id="stack" class="stack-section">
      <aside class="stack-side">
        <p class="eyebrow"><span class="num">02</span>&nbsp;THE STACK</p>
        <h2>Five <span class="ital">essential</span> layers that power every local AI system.</h2>
        <p class="copy">From the watts coming out of the wall to the chat window your user sees, a working local deployment is the same stack a hyperscaler runs — just compressed onto your desk. Each layer below is interactive.</p>

        <div class="legend">
          <div class="row"><span class="dot" style="background:var(--L-apps)"></span>      <span class="name">Applications</span> · top of stack</div>
          <div class="row"><span class="dot" style="background:var(--L-models)"></span>    <span class="name">Models</span></div>
          <div class="row"><span class="dot" style="background:var(--L-data)"></span>      <span class="name">Data</span></div>
          <div class="row"><span class="dot" style="background:var(--L-runtime)"></span>   <span class="name">Runtime</span></div>
          <div class="row"><span class="dot" style="background:var(--L-hardware)"></span>  <span class="name">Hardware</span> · foundation</div>
        </div>

        <div class="stack-help">
          <b>Tip ·</b> click any slab to expand it. Hover any text — including this paragraph — and start typing to edit. Press <kbd>⌘E</kbd> to expand all, <kbd>⌘.</kbd> to collapse.
        </div>
      </aside>

      <div class="stack" id="stackEl">
        <!-- LAYER: APPLICATIONS -->
        <article class="layer" data-layer="applications" style="--c: var(--L-apps);">
          <div class="face" data-toggle>
            <div class="face-inner">
              <div class="lnum">L05</div>
              <div class="ltitle">
                <div class="name">Applications<span class="zh">应用</span></div>
                <div class="tagline">Local-first chat, RAG, agents and IDE copilots — the surface users touch.</div>
              </div>
              <div class="lmeta">UI · UX<br/>4 tools shown</div>
              <div class="chev">▾</div>
            </div>
          </div>
          <div class="detail">
            <div class="detail-inner">
              <div>
                <h4>What lives here</h4>
                <p class="desc">The application layer is where local AI becomes a product. Run a private ChatGPT-style UI for your team, build a RAG pipeline that never leaves your network, or wire a copilot into VS Code with the same OpenAI-compatible API your cloud code already speaks.</p>
                <div class="code-snip" data-lang="bash"><span class="cm"># Open WebUI bound to a local Ollama server</span>
docker run -d -p <span class="st">3000:8080</span> \\
  --add-host=host.docker.internal:host-gateway \\
  -v open-webui:/app/backend/data \\
  --name open-webui --restart always \\
  ghcr.io/open-webui/open-webui:main</div>
                <div class="extras">
                  <div class="row"><span class="k">Talks to</span><span class="v">Runtime layer · OpenAI-compatible HTTP</span></div>
                  <div class="row"><span class="k">Privacy</span><span class="v">100% local · no telemetry by default</span></div>
                  <div class="row"><span class="k">Latency</span><span class="v">~30 ms first token on M-series</span></div>
                </div>
              </div>
              <div>
                <h4>Tools we recommend</h4>
                <div class="tools-list">
                  <div class="tool">
                    <div class="image-slot" id="tool-open-webui" aria-label="Logo">
                      <img src="/logo/open-webui.svg" alt="Open WebUI" />
                    </div>
                    <div class="tool-main">
                      <div class="tool-name"><span class="ital">Open WebUI</span></div>
                      <div class="tool-note">Self-hosted ChatGPT-like front-end with multi-model, RAG and tool use.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-anythingllm" aria-label="Logo">
                      <img src="/logo/anything-llm.jpeg" alt="Anything LLM" />
                    </div>
                    <div class="tool-main">
                      <div class="tool-name"><span class="ital">Anything LLM</span></div>
                      <div class="tool-note">Workspace-scoped document chat with built-in embeddings and citations.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-continue" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Continue.<span class="ital">dev</span></div>
                      <div class="tool-note">In-editor code assistant for VS Code and JetBrains; bring-your-own model.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-lobechat" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Lobe<span class="ital">Chat</span></div>
                      <div class="tool-note">Plug-in based front-end with voice, vision and an agents marketplace.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- LAYER: MODELS -->
        <article class="layer" data-layer="models" style="--c: var(--L-models);">
          <div class="face" data-toggle>
            <div class="face-inner">
              <div class="lnum">L04</div>
              <div class="ltitle">
                <div class="name">Models<span class="zh">模型</span></div>
                <div class="tagline">Open-weight LLMs you can pull, quantize, fine-tune and run offline.</div>
              </div>
              <div class="lmeta">WEIGHTS<br/>5 families</div>
              <div class="chev">▾</div>
            </div>
          </div>
          <div class="detail">
            <div class="detail-inner">
              <div>
                <h4>What lives here</h4>
                <p class="desc">The brain of the system. Pick weights that fit your VRAM budget, your license tolerance and your task. Modern Q4 quantizations of 30–70B models fit comfortably in 24–48 GB and now hold their own against the closed frontier on most knowledge work.</p>
                <div class="code-snip" data-lang="shell"><span class="cm"># Pull and run a quantized 32B model via Ollama</span>
<span class="kw">ollama</span> pull qwen2.5:32b-instruct-q4_K_M
<span class="kw">ollama</span> run  qwen2.5:32b-instruct-q4_K_M \\
  <span class="st">"Summarize the design system in 3 bullets."</span></div>
                <div class="extras">
                  <div class="row"><span class="k">License</span><span class="v">Apache 2.0 · MIT · Llama Community</span></div>
                  <div class="row"><span class="k">Quant</span><span class="v">GGUF · GPTQ · AWQ · MLX · safetensors</span></div>
                  <div class="row"><span class="k">Footprint</span><span class="v">~4 GB (8B Q4) → ~140 GB (235B Q4)</span></div>
                </div>
              </div>
              <div>
                <h4>Tools we recommend</h4>
                <div class="tools-list">
                  <div class="tool">
                    <div class="image-slot" id="tool-llama" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Llama <span class="ital">3.3 70B</span></div>
                      <div class="tool-note">Meta's general-purpose flagship; 128k context, strong instruction tuning.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-qwen" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Qwen <span class="ital">2.5 32B</span></div>
                      <div class="tool-note">Best-in-class multilingual + code at 32B; runs at usable speed on a 4090.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-deepseek" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">DeepSeek <span class="ital">V3</span></div>
                      <div class="tool-note">671B MoE with 37B active params — frontier reasoning on a workstation.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-phi" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Phi-<span class="ital">4 14B</span></div>
                      <div class="tool-note">Reasoning-tuned small model; punches well above its weight on benchmarks.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-gemma" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Gemma <span class="ital">2 9B</span></div>
                      <div class="tool-note">Efficient mid-size with strong defaults for laptops and edge boxes.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- LAYER: DATA -->
        <article class="layer" data-layer="data" style="--c: var(--L-data);">
          <div class="face" data-toggle>
            <div class="face-inner">
              <div class="lnum">L03</div>
              <div class="ltitle">
                <div class="name">Data<span class="zh">数据</span></div>
                <div class="tagline">Embeddings, vector stores and the documents that ground every answer.</div>
              </div>
              <div class="lmeta">RAG · INDEX<br/>5 tools shown</div>
              <div class="chev">▾</div>
            </div>
          </div>
          <div class="detail">
            <div class="detail-inner">
              <div>
                <h4>What lives here</h4>
                <p class="desc">Models are only as honest as the context you put in front of them. The data layer covers ingestion, chunking, embedding, indexing and retrieval — the unglamorous plumbing that decides whether a private deployment can actually answer questions about your business.</p>
                <div class="code-snip" data-lang="python"><span class="cm"># Build a tiny local vector index with Chroma + bge-m3</span>
<span class="kw">import</span> chromadb
client = chromadb.PersistentClient(<span class="st">"./store"</span>)
col = client.get_or_create_collection(<span class="st">"docs"</span>)
col.add(documents=docs, ids=ids,
        embeddings=embed_model.encode(docs))</div>
                <div class="extras">
                  <div class="row"><span class="k">Embed dim</span><span class="v">384 · 768 · 1024 · 4096</span></div>
                  <div class="row"><span class="k">Index</span><span class="v">HNSW · IVF · ScaNN · DiskANN</span></div>
                  <div class="row"><span class="k">Footprint</span><span class="v">~1.5 KB per chunk @ 768 dims</span></div>
                </div>
              </div>
              <div>
                <h4>Tools we recommend</h4>
                <div class="tools-list">
                  <div class="tool">
                    <div class="image-slot" id="tool-qdrant" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Qdrant</div>
                      <div class="tool-note">Rust vector DB with on-disk HNSW, filtering and hybrid search.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-chroma" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Chroma</div>
                      <div class="tool-note">SQLite-backed embedded store; zero-ops for laptop-scale RAG.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-lancedb" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">LanceDB</div>
                      <div class="tool-note">Columnar format that stores vectors next to your other columns.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-bge" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">BGE-<span class="ital">M3</span></div>
                      <div class="tool-note">Multilingual, multi-vector embedding model — strong default for Chinese + English.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-nomic" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">nomic-<span class="ital">embed</span></div>
                      <div class="tool-note">768-dim Apache-2.0 embedder, fast on CPU, great everyday choice.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- LAYER: RUNTIME -->
        <article class="layer" data-layer="runtime" style="--c: var(--L-runtime);">
          <div class="face" data-toggle>
            <div class="face-inner">
              <div class="lnum">L02</div>
              <div class="ltitle">
                <div class="name">Runtime<span class="zh">运行时</span></div>
                <div class="tagline">Inference engines that turn weights into tokens — fast, batched, and quantized.</div>
              </div>
              <div class="lmeta">SERVE · BATCH<br/>5 engines</div>
              <div class="chev">▾</div>
            </div>
          </div>
          <div class="detail">
            <div class="detail-inner">
              <div>
                <h4>What lives here</h4>
                <p class="desc">The translator between math and tokens. A runtime loads model weights into the right memory, manages the KV cache, batches concurrent requests and exposes an HTTP API. Pick by workload: single-user laptops want llama.cpp/Ollama; multi-tenant servers want vLLM or TGI.</p>
                <div class="code-snip" data-lang="bash"><span class="cm"># Serve a model with vLLM on 2× GPUs, OpenAI-compatible</span>
<span class="kw">vllm</span> serve qwen2.5-32b-instruct \\
  --tensor-parallel-size <span class="st">2</span> \\
  --max-model-len <span class="st">32768</span> \\
  --gpu-memory-utilization <span class="st">0.92</span></div>
                <div class="extras">
                  <div class="row"><span class="k">API</span><span class="v">OpenAI-compatible (drop-in for sdk)</span></div>
                  <div class="row"><span class="k">Batching</span><span class="v">Continuous · PagedAttention · prefix cache</span></div>
                  <div class="row"><span class="k">Throughput</span><span class="v">3–80× over naive single-request HF</span></div>
                </div>
              </div>
              <div>
                <h4>Tools we recommend</h4>
                <div class="tools-list">
                  <div class="tool">
                    <div class="image-slot" id="tool-ollama" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Ollama</div>
                      <div class="tool-note">One-line model pulls, automatic quantization, OpenAI-shaped HTTP — the default for solo devs.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-llamacpp" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">llama.<span class="ital">cpp</span></div>
                      <div class="tool-note">The workhorse C++ engine behind half of the stack; GGUF, CPU+GPU, every platform.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-vllm" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">vLLM</div>
                      <div class="tool-note">PagedAttention + continuous batching — the choice for serving many users from one box.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-mlx" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">MLX</div>
                      <div class="tool-note">Apple's array framework with first-class Apple Silicon kernels and KV-cache reuse.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-lmstudio" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">LM <span class="ital">Studio</span></div>
                      <div class="tool-note">Desktop GUI for browsing, downloading and chatting with local models.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <!-- LAYER: HARDWARE -->
        <article class="layer" data-layer="hardware" style="--c: var(--L-hardware);">
          <div class="face" data-toggle>
            <div class="face-inner">
              <div class="lnum">L01</div>
              <div class="ltitle">
                <div class="name">Hardware<span class="zh">硬件</span></div>
                <div class="tagline">The silicon that decides your tokens-per-second and your model ceiling.</div>
              </div>
              <div class="lmeta">GPU · NPU<br/>5 platforms</div>
              <div class="chev">▾</div>
            </div>
          </div>
          <div class="detail">
            <div class="detail-inner">
              <div>
                <h4>What lives here</h4>
                <p class="desc">The single most expensive decision in the stack. VRAM (or unified memory) sets the largest model you can hold; memory bandwidth sets the speed you generate at. As a rule of thumb: a Q4 quant of an N-billion-parameter model wants roughly N/2 GB of RAM, plus headroom for the KV cache.</p>
                <div class="code-snip" data-lang="text"><span class="cm"># Rule-of-thumb VRAM budget at Q4_K_M</span>
8B   model →  ~5 GB    (laptop GPU / M2 Air)
14B  model →  ~9 GB    (RTX 4060Ti 16GB)
32B  model → ~20 GB    (RTX 4090 / M2 Max 32GB)
70B  model → ~42 GB    (2× 4090 / M3 Max 64GB)
235B model → ~140 GB   (M3 Ultra 192GB / MI300X)</div>
                <div class="extras">
                  <div class="row"><span class="k">Bottleneck</span><span class="v">Memory bandwidth, not flops</span></div>
                  <div class="row"><span class="k">Sweet spot</span><span class="v">24 GB VRAM · 32B Q4 @ ~40 tok/s</span></div>
                  <div class="row"><span class="k">Power draw</span><span class="v">35 W (laptop) → 750 W (4090 pair)</span></div>
                </div>
              </div>
              <div>
                <h4>Tools we recommend</h4>
                <div class="tools-list">
                  <div class="tool">
                    <div class="image-slot" id="tool-apple-m" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Apple <span class="ital">M-series</span></div>
                      <div class="tool-note">Unified memory up to 192 GB — runs models other consumer hardware can't even load.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-rtx-4090" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">NVIDIA <span class="ital">RTX 4090</span></div>
                      <div class="tool-note">24 GB VRAM, 1 TB/s bandwidth — the workstation sweet spot for 30B-class models.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-rtx-5090" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">NVIDIA <span class="ital">RTX 5090</span></div>
                      <div class="tool-note">32 GB Blackwell with 1.8 TB/s bandwidth; the new ceiling for prosumer LLM rigs.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-mi300x" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">AMD <span class="ital">MI300X</span></div>
                      <div class="tool-note">192 GB HBM3 — single-card 235B inference for the data-center crowd.</div>
                    </div>
                  </div>
                  <div class="tool">
                    <div class="image-slot" id="tool-jetson" aria-label="Logo"></div>
                    <div class="tool-main">
                      <div class="tool-name">Jetson <span class="ital">Orin</span></div>
                      <div class="tool-note">Embedded 64 GB module for robotics and on-device agents at the edge.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
`;

export default function StackSection() {
  return <RawHtml html={markup} />;
}
