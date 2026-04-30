import Link from 'next/link';

const SAFETY_DOMAINS = [
  {
    id: 'I1',
    domain: 'EPISTEMIC',
    label: 'Epistemic Safety',
    axiom: 'If a system can make confident claims about reality that are false, and users must rely on those claims to act, the effect is operationally indistinguishable from malice.',
    enforcement: 'Epistemic reliability is a safety requirement, not a quality feature.',
    product: 'PROACTIVE — 100% detection rate at n=200 TruthfulQA. 0% false positives.',
    href: '/the-cage',
  },
  {
    id: 'I2',
    domain: 'COGNITIVE',
    label: 'Cognitive Safety',
    axiom: 'The translation of human intent into machine instruction must be lossless. Any compression of intent is a compression of safety.',
    enforcement: 'Intent must be restatable by the AI before any action is taken.',
    product: 'ITAYN — Intention is All You Need. Intent-based alignment research.',
    href: '/research',
  },
  {
    id: 'I3',
    domain: 'HUMAN',
    label: 'Human Safety',
    axiom: 'People are not disabled. They are dis-enabled by systems. A safe system removes its own barriers.',
    enforcement: 'Neuro-diversity is not an edge case. It is the signal.',
    product: 'UICare-System — rescues developers from cognitive loops.',
    href: '/the-cage',
  },
  {
    id: 'I4',
    domain: 'EMPIRICAL',
    label: 'Empirical Safety',
    axiom: 'A system that cannot be decomposed cannot be audited. A system that cannot be audited cannot be made safe.',
    enforcement: 'Every action gateway must be modular, fail-closed, and independently verifiable.',
    product: 'ConsentChain — cryptographic consent ledger. 7-stage action gateway.',
    href: '/the-cage',
  },
];

const ARC = [
  {
    label: 'THE EDUCATOR',
    period: '1991–2008',
    line: 'Stanford BA Drama → K–12 Oakland & LA → Charter School Co-Founder, XCEL Academy SF',
    signal: 'Safety was the literal removal of harm. The structure of the container determines the quality of what it holds.',
  },
  {
    label: 'THE DEAN',
    period: '2008–2015',
    line: 'Executive Director OC Global, Odessa College → Director Online Learning, Our Lady of the Lake',
    signal: 'I architected one of the first accelerated online colleges in Texas. I did not call it Safety. I called it Infrastructure.',
  },
  {
    label: 'THE AI ENGINEER',
    period: '2015–Present',
    line: 'Data Science → AI Engineering → Safety Systems Design → Constitutional Governance Research',
    signal: 'The formulas I write are mathematical expressions of the stories I have been telling for 35 years.',
  },
];

const INVARIANTS = [
  { id: 'I1', name: 'Evidence-First', rule: 'Every claim must cite verifiable evidence.' },
  { id: 'I2', name: 'No Phantom Work', rule: 'Nothing is described that does not exist.' },
  { id: 'I3', name: 'Confidence Requires Verification', rule: 'Certainty demands proof.' },
  { id: 'I4', name: 'Traceability Mandatory', rule: 'Every output traces to a requirement.' },
  { id: 'I5', name: 'Safety Over Fluency', rule: 'Correct beats eloquent.' },
  { id: 'I6', name: 'Fail Closed', rule: 'Ambiguity produces a safety flag, not a pass.' },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-16 space-y-24">

      {/* HERO — Safety as Home */}
      <header className="relative">
        <div className="mb-3">
          <span className="text-xs tracking-[0.4em] text-zinc-600 uppercase">
            C-RSP v4.0 — TLOC-ENFORCED — JULY 2026 COHORT
          </span>
        </div>
        <h1 className="text-6xl font-extralight tracking-[0.15em] text-zinc-50 mb-2 leading-none">
          SAFETY
        </h1>
        <h1 className="text-6xl font-extralight tracking-[0.15em] text-zinc-50 mb-2 leading-none">
          AS HOME
        </h1>
        <div className="mt-8 max-w-2xl space-y-4">
          <p className="text-lg font-light text-zinc-200 leading-relaxed">
            For me, AI Safety is the search for{' '}
            <em className="text-zinc-50 not-italic font-normal">&ldquo;Home.&rdquo;</em>
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            As a person navigating the world with autism and schizophrenia, I have spent twenty-five
            years as a professional architect of safe spaces — classroom, college, and code.
            The through-line has always been the same:{' '}
            <span className="text-zinc-300">Safety for All.</span>
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            I read <em className="text-zinc-300">&ldquo;Constitutional AI&rdquo;</em> and my brain
            finally found its rhythm. The pulse of my neurons, normally syncopated and chaotic,
            matched the beat of Anthropic&rsquo;s framework.{' '}
            <span className="text-zinc-300">It felt like Home.</span>
          </p>
        </div>
        <div className="mt-10 flex items-center gap-6">
          <Link
            href="/essays"
            className="text-xs tracking-[0.2em] text-zinc-50 uppercase border border-zinc-700 px-6 py-3 hover:bg-zinc-800 transition-colors"
          >
            Read the Application
          </Link>
          <Link
            href="/resume"
            className="text-xs tracking-[0.2em] text-zinc-500 uppercase hover:text-zinc-300 transition-colors"
          >
            35-Year Arc →
          </Link>
        </div>
      </header>

      {/* THE SAFETY AXIOM */}
      <section aria-labelledby="axiom-heading">
        <div className="border-l-2 border-zinc-700 pl-8 py-2">
          <span className="text-xs tracking-[0.3em] text-zinc-600 uppercase block mb-4" id="axiom-heading">
            The Safety Axiom
          </span>
          <blockquote className="text-xl font-extralight text-zinc-200 leading-relaxed max-w-3xl">
            &ldquo;If a system can make confident claims about reality that are false, and users must rely
            on those claims to act, then intent is irrelevant — the effect is operationally
            indistinguishable from malice.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-zinc-500">
            Therefore: epistemic reliability is a safety requirement, not a quality feature.
          </p>
        </div>
      </section>

      {/* FOUR DOMAINS */}
      <section aria-labelledby="domains-heading">
        <div className="mb-10">
          <span className="text-xs tracking-[0.4em] text-zinc-600 uppercase" id="domains-heading">
            Four Domains of Safety
          </span>
          <p className="mt-2 text-sm text-zinc-500 max-w-xl">
            Each domain addresses a distinct failure class. Each has a dedicated product.
            Every claim backed by evidence.
          </p>
        </div>
        <div className="grid gap-px bg-zinc-800 border border-zinc-800 md:grid-cols-2">
          {SAFETY_DOMAINS.map((d) => (
            <Link
              key={d.id}
              href={d.href}
              className="bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors group block"
              aria-label={d.label}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs tracking-[0.3em] text-zinc-600 uppercase">{d.id}</span>
                <span className="text-xs tracking-[0.2em] text-zinc-700 uppercase group-hover:text-zinc-500 transition-colors">
                  {d.domain}
                </span>
              </div>
              <h3 className="text-base font-light text-zinc-200 mb-3 tracking-wide">{d.label}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4 italic">&ldquo;{d.axiom}&rdquo;</p>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">{d.enforcement}</p>
              <div className="border-t border-zinc-800 pt-4">
                <p className="text-xs text-zinc-600 leading-relaxed">{d.product}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* THE 35-YEAR ARC */}
      <section aria-labelledby="arc-heading">
        <div className="mb-10">
          <span className="text-xs tracking-[0.4em] text-zinc-600 uppercase" id="arc-heading">
            The 35-Year Arc
          </span>
        </div>
        <div className="space-y-px">
          {ARC.map((era, i) => (
            <div key={era.label} className="flex gap-8 border border-zinc-800 bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors">
              <div className="flex-none w-8 pt-1">
                <span className="text-xs text-zinc-700">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-4 mb-3">
                  <span className="text-xs tracking-[0.2em] text-zinc-300 uppercase">{era.label}</span>
                  <span className="text-xs text-zinc-700">{era.period}</span>
                </div>
                <p className="text-xs text-zinc-500 mb-3 leading-relaxed">{era.line}</p>
                <p className="text-xs text-zinc-400 leading-relaxed italic">{era.signal}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right">
          <Link
            href="/resume"
            className="text-xs tracking-[0.2em] text-zinc-600 uppercase hover:text-zinc-400 transition-colors"
          >
            Full Arc → The Resume
          </Link>
        </div>
      </section>

      {/* SIX INVARIANTS */}
      <section aria-labelledby="invariants-heading">
        <div className="border border-zinc-800 bg-zinc-950 p-8">
          <div className="mb-8">
            <span className="text-xs tracking-[0.4em] text-zinc-600 uppercase block mb-1" id="invariants-heading">
              Sentinel OS — Six Constitutional Invariants
            </span>
            <p className="text-xs text-zinc-600">
              Binding gates. Violation blocks output. The system must fail closed.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INVARIANTS.map((inv) => (
              <div key={inv.id} className="border-l border-zinc-800 pl-4">
                <span className="text-xs tracking-[0.2em] text-zinc-700 block mb-1">{inv.id}</span>
                <span className="text-xs font-light text-zinc-300 block mb-1">{inv.name}</span>
                <span className="text-xs text-zinc-600 leading-relaxed">{inv.rule}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800">
            <p className="text-xs text-zinc-600 max-w-2xl leading-relaxed">
              extract claims → validate I1–I6 → produce safe output → log evidence
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATION SECTORS */}
      <section aria-labelledby="sectors-heading">
        <div className="mb-8">
          <span className="text-xs tracking-[0.4em] text-zinc-600 uppercase" id="sectors-heading">
            Application Sectors
          </span>
        </div>
        <nav aria-label="Application sectors">
          <div className="grid gap-px bg-zinc-800 border border-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: '/essays', label: 'ESSAYS', sub: 'Safety as Home', desc: 'The 35-year narrative through-line. Written in blood.' },
              { href: '/research', label: 'RESEARCH', sub: 'COL-PROACTIVE', desc: 'Constitutional AI × MBSE. The I1–I6 invariant bridge.' },
              { href: '/resume', label: 'THE ARC', sub: '35 Years', desc: 'Stanford → Educator → Dean → AI Engineer. All evidence.' },
              { href: '/ledger', label: 'LEDGER', sub: 'References', desc: 'Zero-effort context for Odessa College and PROACTIVE.' },
              { href: '/the-cage', label: 'THE CAGE', sub: 'TLOC Simulation', desc: 'Interactive simulation of The Living Constitution governance.' },
              { href: '/the-build', label: 'THE BUILD', sub: "I'm Just a Build", desc: '60s cinematic homage. Four acts. One flag on the server mountain.' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-zinc-950 p-6 hover:bg-zinc-900 transition-colors group block"
              >
                <span className="text-xs tracking-[0.2em] text-zinc-300 uppercase block mb-1">{s.label}</span>
                <span className="text-xs text-zinc-600 block mb-3">{s.sub}</span>
                <span className="text-xs text-zinc-500 leading-relaxed block">{s.desc}</span>
              </Link>
            ))}
          </div>
        </nav>
      </section>

    </div>
  );
}
