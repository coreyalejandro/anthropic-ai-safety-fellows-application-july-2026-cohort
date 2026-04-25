import styles from './resume.module.css';

const TIMELINE = [
  {
    era: 'EDUCATION',
    period: '1991–1997',
    role: 'BA Drama — Stanford University',
    org: 'Stanford University',
    highlights: [
      'First-generation college student. Navigated higher education as a neurodivergent Black man.',
      'Foundation in systems thinking, performance theory, and human behavior — not just technique.',
      'Developed early framework for cognitive accessibility and communication under pressure.',
      'Received Dean\'s Award for Service for op-ed column with Stanford Daily.',
    ],
    tags: ['Stanford', 'Systems Thinking', 'First-Gen', 'Human Behavior'],
  },
  {
    era: 'EDUCATOR',
    period: '1991–2008',
    role: 'Classroom Teacher → Instructional Coach → Technology Specialist',
    org: 'Oakland USD / Los Angeles USD / XCEL Academy (SF Charter)',
    highlights: [
      'Piloted mixed-grade collaborative learning models across K–4 (OUSD 1991–1997).',
      'Specialized in learning-disabled and second-language-learner pedagogy; GATE program lead (LAUSD 1997–2001).',
      'Joint district/school appointment: instructional technology integration — bridging policy and classroom practice (LAUSD 2001–2003).',
      'Co-founded XCEL Academy charter high school (SF Presidio); designed 9th-grade curriculum; hired and supervised faculty (2003–2004).',
      'Core insight emerged here: safety is the active prerequisite for learning — not a passive condition.',
    ],
    tags: ['K-20 Instruction', 'Instructional Design', 'Technology Integration', 'Special Education', 'Neurodiversity'],
  },
  {
    era: 'SYSTEMS',
    period: '2008–2015',
    role: 'Executive Director, OC Global → Director of Online Learning',
    org: 'Odessa College → Our Lady of the Lake University',
    highlights: [
      'Founded OC Global — equity-centered, data-driven, R&D-focused online college-within-a-college',
      'First school to broadcast live online courses using WebEx, a partnership which helped them pivot to e-learning.',   
      'Architected the redesign of 16 week core curriculum into accelerated 8-week and 4-week self-paced courses.',
      'Initiated institution-wide online course conversion across all degree-seeking and continuing education programs.',
      'Led accrediation program review and data analysis for distance education and online ADA/504 student services.',
      'Launched MobileU instructional design experiment using machine learning to deliver text message based courses',
      'Featured on Chronicle of Higher Education tech podcast, CBS 7, KWES coveragee, and BbWorld for innovation.',
    ],
    tags: ['Systems Architecture','Instructional Systems Design' ,'Modularization', 'Equity', 'ADA/504', 'LMS', 'UI/UX Design'],
    proof: '5,000+ learners annually | First accelerated online college in Texas | 100+ faculty',
  },
  {
    era: 'BRIDGE',
    period: '2018–2024',
    role: 'Training Design → Data Sciece/Machine Learning/ Engineering ',
    org: 'Snooze / Starbucks / Independent Researcher/Developer',
    highlights: [
      'Created "Aquatech Olympics" — gamified, ML-driven training system; improved service delivery and worker retention by 25%.',
      'Provided no-chargefull stack web design and development and daily operations for nonprofits, small business, and churches.',
      'Redesigned training and workflows to support neurodivergent employees, increasing their performance metrics by 20%.',
      'Served as internal and external community liaison between restaurant and local businesses and head office and team members.',
      'Initiated and led cross-functional team in opening the only 24-hour Starbucks at San Antonio Airport, boosting sales 34%.',
    ],
    tags: ['Data Science', 'Machine Learning', 'Stakeholder Engagement', 'Rubric Evaluation', 'Learning and Development'],
  },
  {
    era: 'AI/ML Engineering',
    period: '2022–Present',
    role: 'AI Safety and Governance Researcher / GenAI Developer',
    org: 'Independent AI Researcher and Developer',
    highlights: [
      'Unified Prompting Operating System (UPOS) - kernel-based platform-agnostic enterprise-wide prompting framework and dev tool.',
      'The-Living-Constitutiion - a neurodivergent-first vernance operating system  layer for enterprise-wide GenAI deployment.',
      'ConsentChain: cryptographic consent ledger with full 7-stage execution pipeline (validation → policy → revocation → exec → ledger).',
      'UICare (HUI): dual-agent behavioral intervention for neurodivergent developers during high-risk cognitive states.',
      'Clarity AI: teacher-style rubrics replacing black-box reward functions — accelerated dev cycles 109×, reduced fine-tuning costs 326×.',
      'Pioneered C-RSP (Constitutionally-Regulated Single Pass) — treating AI instructions as paired-artifact law.',
      'Designed Guardian Kernel: no action without forensic audit against the constitution.',
    ],
    tags: ['Constitutional AI', 'Agentic Safety', 'Governance', 'Intent Alignment', 'C-RSP', 'Multi-Agent'],
  },

];

const TECHNICAL_STACK = [
  { category: 'Languages', items: ['TypeScript', 'Python', 'SQL', 'Bash'] },
  { category: 'Frameworks', items: ['Next.js', 'Turborepo', 'Prisma', 'FastAPI', 'Axolotl', 'DSPy'] },
  { category: 'AI/ML', items: ['Constitutional AI', 'RLHF/RLAIF', 'RAG / Agentic AI', 'LLM Evaluation', 'TruthfulQA', 'CoT-Self-Instruct'] },
  { category: 'Infrastructure', items: ['Docker', 'GitLab CI/CD', 'Vercel', 'Qdrant', 'Neo4j', 'Supabase'] },
  { category: 'Governance', items: ['C-RSP', 'Zero-Shot OS', 'UPOS-7-VS', 'CARE Protocol', 'SentinelOS'] },
];

const EDUCATION = [
  { credential: 'IBM RAG and Agentic AI Specialization', year: 'Oct 2025' },
  { credential: 'Building AI Agents and Agentic Workflows Specialization — IBM', year: 'Sep 2025' },
  { credential: 'Data Science Foundations Specialization — IBM & University of London', year: '2025' },
  { credential: 'MasterTrack Certificate — Instructional Design', org: 'University of Illinois, Urbana-Champaign', year: '2024' },
  { credential: 'Google UX Design Professional Certificate', year: '2023' },
  { credential: 'MS Education — Online Teaching & Learning (Exemplary Thesis: LGBTQ+ Student Support)', org: 'Cal State East Bay', year: '' },
  { credential: 'Teaching Credential', org: 'University of San Francisco', year: '' },
  { credential: 'BA Drama', org: 'Stanford University', year: '' },
  { credential: '46 semester credits toward EdD in Educational Leadership (P–12)', org: 'UT San Antonio', year: '' },
];

export default function ResumePage() {
  return (
    <article className="mx-auto max-w-7xl px-8 py-16" aria-labelledby="resume-title">

      <header className="mb-16">
        <div className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-3">C-RSP v4.0 — Module 6</div>
        <h1 id="resume-title" className="text-5xl font-extralight tracking-[0.15em] text-zinc-50 mb-4">
          THE ARC
        </h1>
        <p className="text-sm font-light text-zinc-300 max-w-2xl leading-relaxed">
          35 years compressed into evidence. Stanford → Educator → Dean → AI Engineer.
          Every transition was a safety problem in disguise.
        </p>
      </header>

      {/* Timeline */}
      <section className="mb-16" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-10">
          Career Timeline
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-700" aria-hidden="true" />

          <div className="space-y-0">
            {TIMELINE.map((node, index) => (
              <div key={node.era} className="relative pl-10 pb-10">
                {/* Era dot */}
                <div
                  className="absolute left-[-4px] top-2 w-2 h-2 bg-zinc-500"
                  aria-hidden="true"
                />

                <div
                  className={`border p-8 ${
                    index === TIMELINE.length - 1
                      ? styles['timeline-item-last']
                      : styles['timeline-item-default']
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-4 mb-1">
                        <span className="text-xs tracking-[0.25em] text-zinc-400 font-medium">{node.era}</span>
                        <time className="text-xs text-zinc-500">{node.period}</time>
                      </div>
                      <h3 className="text-base font-light tracking-wide text-zinc-100">{node.role}</h3>
                      <div className="text-xs text-zinc-500 mt-0.5">{node.org}</div>
                    </div>
                    {node.proof && (
                      <div className="hidden md:block text-right max-w-xs">
                        <div className="text-xs text-zinc-500 leading-relaxed border-l border-zinc-700 pl-3">{node.proof}</div>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-2 mb-4" role="list">
                    {node.highlights?.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed" role="listitem">
                        <span className="text-zinc-600 shrink-0 mt-0.5">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4" role="list" aria-label="Tags">
                    {node.tags?.map((tag) => (
                      <span
                        key={tag}
                        role="listitem"
                        className="text-[10px] tracking-wider text-zinc-500 border border-zinc-700 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        className={`mb-8 border p-8 ${styles['section-default']}`}
        aria-labelledby="education-heading"
      >
        <h2 id="education-heading" className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-6">
          Education & Certifications
        </h2>
        <div className="space-y-2">
          {EDUCATION.map((item, i) => (
            <div key={i} className="flex items-start gap-4 text-xs">
              <span className="text-zinc-600 shrink-0 mt-0.5">—</span>
              <div>
                <span className="text-zinc-300">{item.credential}</span>
                {item.org && <span className="text-zinc-600"> — {item.org}</span>}
                {item.year && <span className="text-zinc-600"> ({item.year})</span>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Stack */}
      <section
        className={`border p-8 ${styles['section-default']}`}
        aria-labelledby="stack-heading"
      >
        <h2 id="stack-heading" className="text-xs tracking-[0.3em] text-zinc-500 uppercase mb-8">
          Technical Stack
        </h2>
        <div className="grid gap-6 md:grid-cols-5">
          {TECHNICAL_STACK.map((group) => (
            <div key={group.category}>
              <div className="text-xs tracking-wider text-zinc-600 mb-3">{group.category}</div>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <div key={item} className="text-xs text-zinc-400">{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
