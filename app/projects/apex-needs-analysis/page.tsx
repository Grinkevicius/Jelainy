import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "APEX Needs Analysis | Jelainy",
  description:
    "A performance analysis identifying root causes of service inconsistencies and recommending targeted, non-training solutions.",
};

export default function ApexNeedsAnalysisPage() {
  return (
    <>
      {/* ──── HERO ──── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 animate-fade-in">
              Portfolio Project
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight animate-fade-in-up">
              <span className="scribble-underline text-accent">
                APEX
              </span>{" "}
              Needs Analysis
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed animate-fade-in-up animation-delay-200">
              A performance consulting project identifying the root causes of
              inconsistent customer service and recommending targeted solutions
              beyond traditional training.
            </p>
          </div>
        </div>
      </section>

      {/* ──── PROJECT IMAGE ──── */}
      <section className="bg-section-alt">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/project-placeholder.svg"
              alt="APEX Needs Analysis Project"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ──── CONTENT ──── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Sidebar */}
            <div className="space-y-8 md:col-span-1">
              {[
                {
                  label: "Role",
                  value: "Learning Experience Designer / Performance Consultant",
                },
                { label: "Timeline", value: "1–2 Weeks" },
                { label: "Tools", value: "Canva" },
                { label: "Type", value: "Concept Project" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Main content */}
            <div className="md:col-span-2 space-y-12">

              {/* The Problem */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  The Problem
                </h2>
                <p className="text-muted leading-relaxed">
                  The customer relations department at APEX Financial Services
                  identified inconsistencies in service across the customer
                  support team. Based on call recordings and Customer Satisfaction
                  (CSAT) scores, the department was able to identify issues with
                  team members providing incomplete and unclear information. The
                  inconsistency in service led to an increase in customer
                  complaints and lower satisfaction scores.
                </p>
                <p className="text-muted leading-relaxed">
                  The initial request was to develop a training program to address
                  these inconsistencies. However, further analysis revealed that
                  environmental and system factors — along with knowledge gaps —
                  contributed to the inconsistencies.
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  Solution
                </h2>
                <p className="text-muted leading-relaxed">
                  To address these concerns, a performance analysis was conducted
                  to help identify the root causes of the inconsistencies and make
                  recommendations to resolve the issues.
                </p>
                <p className="text-muted leading-relaxed">
                  Rather than implementing a training-first approach, the final
                  recommendations focused on performance environment and support
                  systems — including a redesign of the knowledge base, a
                  performance support tool, and targeted practice opportunities.
                  These solutions would enable employees to make quick and accurate
                  decisions when interacting with clients.
                </p>
              </div>

              {/* Process */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  My Process
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      step: "01",
                      title: "Analysis & Discovery",
                      desc: "Conducted stakeholder consultation and reviewed available performance data to identify gaps in service consistency. Differentiated between skill-based issues and environmental or system constraints.",
                    },
                    {
                      step: "02",
                      title: "Root Cause Analysis",
                      desc: "Identified three primary contributing factors: skill gaps in handling complex client scenarios, environmental pressures (high call volume, time constraints), and ineffective systems (outdated and difficult-to-navigate knowledge base).",
                    },
                    {
                      step: "03",
                      title: "Solution Design",
                      desc: "Developed a set of targeted recommendations focused on performance support rather than traditional training, including knowledge base improvements, decision aids, and coaching strategies.",
                    },
                    {
                      step: "04",
                      title: "Visual Case Development",
                      desc: "Created a visually structured consulting case using Canva to communicate findings, recommendations, and expected impact in a clear and stakeholder-friendly format.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="bg-section-alt rounded-xl p-6 space-y-3"
                    >
                      <span className="text-3xl font-serif font-bold text-accent/30">
                        {item.step}
                      </span>
                      <h3 className="font-serif font-bold">{item.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results & Takeaways */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  Results &amp; Takeaways
                </h2>
                <p className="text-muted leading-relaxed">
                  While this was a concept project, it was designed to reflect a
                  realistic performance consulting scenario. Key outcomes include:
                </p>
                <ul className="space-y-3">
                  {[
                    "Demonstrated ability to diagnose performance issues beyond training requests",
                    "Applied a performance consulting approach aligned with real business needs",
                    "Designed a clear, visually engaging case study for stakeholder communication",
                    "Incorporated data-informed thinking and evaluation strategies",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted leading-relaxed">
                  By using an ADDIE-informed approach, this project challenged me
                  to think beyond training requests and focus on what may be
                  impacting learner performance in real-world situations. Through
                  this process, I was able to determine the inhibiting factors and
                  make more effective recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="bg-section-alt">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
            Want to see more <span className="text-accent">projects</span>?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
            >
              View Portfolio
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-accent text-accent px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-white transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
