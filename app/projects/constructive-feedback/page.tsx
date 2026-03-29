import Link from "next/link";
import ArticulateEmbed from "../../components/ArticulateEmbed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How To Give Constructive Feedback | Jelainy",
  description:
    "A microlearning experience helping managers build a practical, repeatable skill: delivering clear and constructive feedback.",
};

export default function ConstructiveFeedbackPage() {
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
              How To Give{" "}
              <span className="scribble-underline text-accent">Constructive Feedback</span>
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed animate-fade-in-up animation-delay-200">
              Using an ADDIE informed approach, this project focuses on helping
              managers build a practical, repeatable skill: delivering clear and
              constructive feedback.
            </p>
          </div>
        </div>
      </section>

      {/* ──── PROJECT IMAGE ──── */}
      <section className="bg-section-alt">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <ArticulateEmbed
            src="/articulate/constructivefeedback/index.html"
            title="Constructive Feedback Microlearning"
          />
        </div>
      </section>

      {/* ──── CONTENT ──── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Sidebar */}
            <div className="space-y-8 md:col-span-1">
              {[
                { label: "Role", value: "Learning Experience Designer" },
                { label: "Timeline", value: "1 to 2 Days" },
                { label: "Tools", value: "Articulate Rise 360" },
                { label: "Type", value: "Microlearning Concept Project" },
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
                  Managers often struggle to deliver constructive feedback that
                  is clear, actionable, and supportive. Feedback may be too
                  vague, overly critical, or avoided altogether, leading to
                  confusion, disengagement, and missed opportunities for employee
                  growth. Traditional training approaches often fail to provide
                  practical, in the moment guidance for these conversations.
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  Solution
                </h2>
                <p className="text-muted leading-relaxed">
                  I designed a quick microlearning experience that introduces a
                  simple 3 step framework for delivering effective feedback. The
                  module focuses on real world application, allowing learners to
                  practice identifying and delivering feedback through short,
                  scenario based interactions.
                </p>
              </div>

              {/* Process */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  My Process
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      step: "01",
                      title: "Analysis",
                      desc: "Identified a common performance gap in managerial communication and defined a focused learning objective centered on delivering clear, actionable feedback.",
                    },
                    {
                      step: "02",
                      title: "Design",
                      desc: "Structured the experience as a short, mobile friendly module built around a 3 step feedback framework. Incorporated realistic scenarios to support decision making and reinforce application.",
                    },
                    {
                      step: "03",
                      title: "Development",
                      desc: "Built the module in Articulate Rise using interactive blocks, knowledge checks, and a clean visual layout to support quick learning and usability.",
                    },
                    {
                      step: "04",
                      title: "Evaluation",
                      desc: "Designed with real world application in mind, including knowledge checks and reflection prompts. Effectiveness could be measured through improvements in feedback quality, employee engagement, and manager performance.",
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="bg-section-alt rounded-xl p-6 space-y-3"
                    >
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-2xl font-serif font-bold text-accent/30">{item.step}</span>
                        <h3 className="font-serif font-bold">{item.title}</h3>
                      </div>
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
                  This concept project was designed to be practical and
                  immediately applicable. Key outcomes include:
                </p>
                <ul className="space-y-3">
                  {[
                    "A clear, easy to apply 3 step feedback framework",
                    "Scenario based practice that reinforces real world application",
                    "A concise, mobile friendly design optimized for just in time learning",
                    "Strengthened ability to design efficient, performance focused microlearning experiences",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted leading-relaxed">
                  This project challenged me to design with simplicity and focus.
                  Unlike longer eLearning experiences, microlearning requires
                  prioritizing only the most essential content while still
                  ensuring meaningful application. I had to be intentional about
                  what to include and what to leave out.
                </p>
                <p className="text-muted leading-relaxed">
                  It also pushed me to think carefully about how to translate a
                  complex interpersonal skill into a clear, repeatable framework
                  that learners could quickly understand and apply, balancing the
                  time needed to complete the experience with the value it
                  provided. Additionally, this project further emphasized my
                  belief of designing for real world performance rather than just
                  for knowledge, using scenarios and examples to provide learners
                  with ways to implement the learning immediately.
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
            Want to see more <span className="scribble-underline text-accent">projects</span>?
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
