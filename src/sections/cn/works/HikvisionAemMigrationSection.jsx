import React from 'react';

const phases = [
  {
    num: '阶段 1',
    duration: '第 1–6 周',
    title: '内容审计与信息架构',
    body:
      '对全站进行完整爬取，并结合分析数据确定内容权重。合并或下线低价值页面，将保留内容映射到与全球 AEM 站点结构一致的新信息架构。',
  },
  {
    num: '阶段 2',
    duration: '第 5–14 周',
    title: '内容建模与组件映射',
    body:
      '将 Drupal 内容类型和字段映射到 AEM 模板、组件与 DAM 资产结构，保留结构化产品规格数据，避免将其扁平化为富文本。',
  },
  {
    num: '阶段 3',
    duration: '第 10–26 周',
    title: '脚本化 ETL 迁移与质量验证',
    body:
      '建立自动化导出、转换、导入流水线，并为每个批次生成差异化质量报告。编辑只需处理异常项，将人工返工集中在真正的长尾问题上。',
  },
  {
    num: '阶段 4',
    duration: '第 22–30 周',
    title: 'SEO 安全切换与上线加固',
    body:
      '为每个旧 URL 建立一对一 301 重定向，检查元数据、hreflang 与结构化数据的一致性，分阶段切换 DNS 并监控抓取，最后完成上线后的核心网页指标优化。',
  },
];

const stackItems = [
  'Adobe Experience Manager',
  'AEM Dispatcher / CDN',
  'Drupal 7 源站',
  'Python ETL 脚本',
  '301 重定向映射',
  'Screaming Frog',
  'Google Search Console',
  'GA / GA4',
  'hreflang 与结构化数据',
  'DAM 资产流水线',
  '核心网页指标优化',
];

function PipelineDiagram() {
  return (
    <div
      className="hikvision-pipeline"
      role="img"
      aria-label="迁移流程图：从 Drupal 7 提取内容，完成转换和映射后，导入基于组件的 Adobe Experience Manager 页面"
    >
      <div className="hikvision-wrap">
        <svg viewBox="0 0 960 260" xmlns="http://www.w3.org/2000/svg">
          <g fontFamily="IBM Plex Mono, PingFang SC, Microsoft YaHei, ui-monospace, monospace">
            <rect x="20" y="50" width="190" height="160" fill="none" stroke="#3A4A5C" strokeWidth="1.5" />
            <text x="36" y="80" fill="#8FA0B3" fontSize="11">DRUPAL 7（已停服）</text>
            <rect x="36" y="94" width="158" height="22" fill="#1C2630" stroke="#3A4A5C" />
            <text x="44" y="109" fill="#C7D0DA" fontSize="10">节点 · 6,000+ URL</text>
            <rect x="36" y="122" width="158" height="22" fill="#1C2630" stroke="#3A4A5C" />
            <text x="44" y="137" fill="#C7D0DA" fontSize="10">产品规格 · PDF</text>
            <rect x="36" y="150" width="158" height="22" fill="#1C2630" stroke="#3A4A5C" />
            <text x="44" y="165" fill="#C7D0DA" fontSize="10">自定义模块 · 视图</text>
            <text x="36" y="196" fill="#E2231A" fontSize="10">安全支持已结束</text>

            <path className="hikvision-flowline" d="M210 130 H 330" stroke="#E2231A" strokeWidth="2" fill="none" />
            <path className="hikvision-flowline" d="M530 130 H 650" stroke="#E2231A" strokeWidth="2" fill="none" />

            <rect x="330" y="62" width="200" height="136" fill="none" stroke="#3A4A5C" strokeWidth="1.5" />
            <text x="346" y="90" fill="#8FA0B3" fontSize="11">迁移流水线</text>
            <text x="346" y="116" fill="#FFFFFF" fontSize="10">内容审计 + 精简</text>
            <text x="346" y="136" fill="#FFFFFF" fontSize="10">字段到组件映射</text>
            <text x="346" y="156" fill="#FFFFFF" fontSize="10">脚本化 ETL + QA 差异</text>
            <text x="346" y="176" fill="#FFFFFF" fontSize="10">301 重定向映射（1:1）</text>

            <rect x="650" y="36" width="290" height="188" fill="none" stroke="#E2231A" strokeWidth="1.5" />
            <text x="666" y="64" fill="#FF6B63" fontSize="11">ADOBE EXPERIENCE MANAGER</text>
            <rect x="666" y="78" width="124" height="30" fill="#1C2630" stroke="#3A4A5C" />
            <text x="674" y="97" fill="#C7D0DA" fontSize="10">模板</text>
            <rect x="800" y="78" width="124" height="30" fill="#1C2630" stroke="#3A4A5C" />
            <text x="808" y="97" fill="#C7D0DA" fontSize="10">组件</text>
            <rect x="666" y="116" width="124" height="30" fill="#1C2630" stroke="#3A4A5C" />
            <text x="674" y="135" fill="#C7D0DA" fontSize="10">DAM 资产</text>
            <rect x="800" y="116" width="124" height="30" fill="#1C2630" stroke="#3A4A5C" />
            <text x="808" y="135" fill="#C7D0DA" fontSize="10">工作流</text>
            <rect x="666" y="154" width="258" height="30" fill="#1C2630" stroke="#3A4A5C" />
            <text x="674" y="173" fill="#C7D0DA" fontSize="10">Dispatcher / CDN · 全球对齐</text>
            <text x="666" y="208" fill="#7BE0A2" fontSize="10">持续支持 · 可扩展 · 多站点就绪</text>
          </g>
        </svg>
        <p className="hikvision-pipe-caption">
          图 01 — <em>字段到组件映射</em>将老化的节点式单体架构，转化为一套受治理、可复用，并与全球品牌平台共享的 AEM 组件库。
        </p>
      </div>
    </div>
  );
}

export default function HikvisionAemMigrationSection() {
  return (
    <section className="hikvision-case" lang="zh-CN" aria-label="海康威视 AEM 迁移案例研究">
      <header className="hikvision-hero">
        <div className="hikvision-wrap">
          <p className="hikvision-eyebrow">企业平台迁移 · 海康威视美国</p>
          <h1>
            同一个全球安防品牌，从 <span>Drupal 7</span> 迁移到 Adobe Experience Manager。
          </h1>
          <p className="hikvision-lede">
            生命周期终止的 CMS、6,000 多个 URL、来之不易的自然搜索排名，以及无法承受停机的营销团队。这是海康威视美国网站如何在完整保留 SEO 权重的前提下，重建到 AEM 的过程。
          </p>
          <div className="hikvision-meta">
            <div><span>角色</span>迁移负责人 / Web 与 SEO</div>
            <div><span>范围</span>CMS 平台迁移 · 内容 ETL · 全球 SEO</div>
            <div><span>周期</span>约 9 个月，分阶段切换</div>
            <div><span>行业</span>安防与视频监控</div>
          </div>
        </div>
      </header>

      <PipelineDiagram />

      <div className="hikvision-metrics" aria-label="关键成果">
        <div className="hikvision-wrap">
          <div className="hikvision-metric"><b>6,000<i>+</i></b><span>完成迁移并配置重定向的 URL</span></div>
          <div className="hikvision-metric"><b><i>0</i></b><span>切换时丢失排名的关键词</span></div>
          <div className="hikvision-metric"><b>+38<i>%</i></b><span>上线 6 个月后的自然流量*</span></div>
          <div className="hikvision-metric"><b>-45<i>%</i></b><span>营销页面平均发布时间*</span></div>
        </div>
      </div>

      <section className="hikvision-block" id="challenge">
        <div className="hikvision-wrap">
          <p className="hikvision-eyebrow">01 · 挑战</p>
          <h2>生命周期终止的 CMS，支撑着直接影响营收的关键网站</h2>
          <div className="hikvision-cols">
            <div>
              <p><strong>Drupal 7 已结束生命周期</strong>。海康威视美国网站是北美经销商、集成商和终端客户的主要数字触点，却仍运行在停止支持的平台上，安全风险不断上升，可维护自定义模块的资源也越来越少。</p>
              <p>与此同时，全球总部已经统一采用 <strong>Adobe Experience Manager</strong>。美国站必须接入全球平台，同时不能牺牲多年积累的区域内容、产品目录和搜索排名。</p>
            </div>
            <ul className="hikvision-factlist">
              <li><code>内容规模</code>6,000 多个页面：产品规格、固件与下载、解决方案、新闻和经销商资源</li>
              <li><code>SEO 风险</code>多年积累的高意向安防行业关键词排名；任何 URL 中断都可能造成业务线索流失</li>
              <li><code>技术债务</code>自定义 Drupal 模块和 Views 在 AEM 中没有直接对应方案；结构化规格数据被锁在字段中</li>
              <li><code>业务约束</code>营销日程不能暂停；迁移期间仍需持续发布内容</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hikvision-block hikvision-alt" id="approach">
        <div className="hikvision-wrap">
          <p className="hikvision-eyebrow">02 · 方法</p>
          <h2>先审计，中间环节自动化，全程保护 SEO</h2>
          <p className="hikvision-measure">
            这次迁移并非简单搬运，而是作为内容工程项目推进：清理没有保留价值的内容，将剩余内容建模到 AEM 组件系统，并将所有可重复环节脚本化，使最终切换能够提前演练，也可以安全回退。
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
          <p className="hikvision-eyebrow">03 · 成果</p>
          <h2>一次几乎未被搜索引擎察觉的切换，这正是理想结果</h2>
          <p className="hikvision-measure">
            上线首周的排名波动没有超过正常范围。页面更快、信息架构更清晰、组件库治理更完善，使自然搜索表现持续提升，同时营销团队发布页面的速度也显著加快。
          </p>
          <div className="hikvision-table-wrap">
            <table className="hikvision-table">
              <thead>
                <tr><th>指标</th><th>迁移前（Drupal 7）</th><th>迁移后（AEM）</th><th>变化</th></tr>
              </thead>
              <tbody>
                <tr><td>切换时失效的已收录 URL</td><td>—</td><td>0（完整 301 覆盖）</td><td className="hikvision-delta">0 个丢失</td></tr>
                <tr><td>自然搜索会话（后续 6 个月）*</td><td>基准值</td><td>上线后增长</td><td className="hikvision-delta">+38%</td></tr>
                <tr><td>来自自然搜索的有效询盘*</td><td>基准值</td><td>持续提升</td><td className="hikvision-delta">+25%</td></tr>
                <tr><td>新页面发布时间</td><td>需要开发工单</td><td>编辑可在 AEM 自助完成</td><td className="hikvision-delta">时间减少 45%</td></tr>
                <tr><td>平台安全状态</td><td>生命周期终止、核心未修补</td><td>厂商支持、全球统一标准</td><td className="hikvision-delta">风险解除</td></tr>
              </tbody>
            </table>
          </div>
          <blockquote className="hikvision-pull">“平台迁移风险最高的一天是上线日。我们的工程目标，就是让这一天平静得没有新闻。”</blockquote>
          <p className="hikvision-attrib">— 迁移负责人</p>
        </div>
      </section>

      <section className="hikvision-block hikvision-alt">
        <div className="hikvision-wrap">
          <p className="hikvision-eyebrow">04 · 技术栈与方法</p>
          <h2>项目采用的技术与工具</h2>
          <div className="hikvision-stack">
            {stackItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="hikvision-cta">
        <div className="hikvision-wrap">
          <h2>你的团队也在面对生命周期终止的 CMS 吗？</h2>
          <p>
            我帮助团队将 Drupal、WordPress 和自定义技术栈等旧网站迁移到现代平台，同时保护多年积累的 SEO 权重。
          </p>
          <a className="hikvision-button" href="/cn/contact">开始迁移评估</a>
          <p className="hikvision-fineprint">
            * 发布前请使用已验证的分析数据替换带星号的数字。本案例研究由 36tech.info 编制。Hikvision 是其各自所有者的商标，此处仅用于说明项目经历。
          </p>
        </div>
      </section>
    </section>
  );
}
