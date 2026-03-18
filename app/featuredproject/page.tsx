import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Project | Jelainy",
  description:
    "A deep dive into a scenario-based e-learning experience designed to bolster employee engagement.",
};

export default function FeaturedProjectPage() {
  return (
    <>
      {/* ──── HERO ──── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 animate-fade-in">
              Featured Project
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight animate-fade-in-up">
              A scenario-based{" "}
              <span className="scribble-underline text-accent">
                e-learning experience
              </span>{" "}
              designed to bolster employee engagement
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed animate-fade-in-up animation-delay-200">
              This concept project was created to teach managers how to foster a
              culture of employee engagement and value positively through
              real-world scenarios and interactive decision points.
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
              alt="Employee Engagement E-Learning Project"
              width={1200}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ──── OVERVIEW ──── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Sidebar details */}
            <div className="space-y-8 md:col-span-1">
              {[
                { label: "Role", value: "Learning Experience Designer" },
                { label: "Timeline", value: "6 weeks" },
                {
                  label: "Tools",
                  value: "Articulate Storyline, Figma, Miro",
                },
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
                  Research shows that disengaged employees cost organizations
                  billions in lost productivity each year. Many managers lack the
                  skills and awareness needed to create an environment where
                  employees feel valued, heard, and motivated. Traditional
                  compliance-style training wasn&apos;t moving the needle.
                </p>
              </div>

              {/* The Solution */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  The Solution
                </h2>
                <p className="text-muted leading-relaxed">
                  I designed a scenario-based e-learning module that puts
                  managers in realistic workplace situations. Learners make
                  decisions at critical moments and see the consequences of their
                  choices play out — building empathy, self-awareness, and
                  practical engagement skills.
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
                      title: "Research & Analysis",
                      desc: "Reviewed engagement literature, conducted SME interviews, and identified key learning objectives.",
                    },
                    {
                      step: "02",
                      title: "Storyboarding",
                      desc: "Mapped branching scenarios with multiple decision paths and consequence screens using Miro.",
                    },
                    {
                      step: "03",
                      title: "Visual Design",
                      desc: "Created a warm, approachable visual style in Figma with illustrated characters and clean UI.",
                    },
                    {
                      step: "04",
                      title: "Development",
                      desc: "Built the interactive module in Articulate Storyline with branching logic, audio narration, and assessments.",
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

              {/* Results */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  Results & Takeaways
                </h2>
                <p className="text-muted leading-relaxed">
                  While this was a concept project, it was designed to be
                  portfolio-ready and production-viable. Key outcomes include:
                </p>
                <ul className="space-y-3">
                  {[
                    "Realistic branching scenarios that mirror actual workplace situations",
                    "Reflective assessment moments that encourage self-evaluation",
                    "Accessible design following WCAG 2.1 AA guidelines",
                    "Positive peer feedback on narrative quality and visual design",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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
