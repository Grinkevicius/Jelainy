import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Jelainy",
  description:
    "Explore Jelainy's portfolio of learning experience design projects, from eLearning modules to curriculum design.",
};

const projects = [
  {
    title: "Navigating Workplace Conduct",
    category: "Scenario Based Learning",
    description:
      "A scenario based eLearning experience designed to help managers navigate ambiguous workplace conduct concerns and make decisions with real consequences.",
    href: "/featuredproject",
    image: "/articulate/grayareas/story_content/thumbnail.jpg",
  },
  {
    title: "How To Give Constructive Feedback ",
    category: "Microlearning",
    description:
      "A microlearning experience introducing a simple 3-step framework for delivering clear, actionable, and supportive feedback.",
    href: "/projects/constructive-feedback",
    image: "/articulate/constructivefeedback/assets/stock-image-1.jpg",
  },
  {
    title: "APEX Needs Analysis",
    category: "Performance Consulting",
    description:
      "A performance consulting project identifying root causes of service inconsistencies and recommending targeted, non training solutions.",
    href: "/projects/apex-needs-analysis",
    image: "/articulate/apex/1.png",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ──── HERO ──── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 animate-fade-in">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight animate-fade-in-up">
            Designing learning that{" "}
            <span className="scribble-underline text-accent">makes an impact</span>
            .
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Every project is a chance to create meaningful, engaging experiences
            that solve real problems and support lasting growth. Here&apos;s a
            look at some of my work.
          </p>
        </div>
      </section>

      {/* ──── PROJECT GRID ──── */}
      <section className="bg-section-alt">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group bg-card-bg rounded-2xl overflow-hidden shadow-sm card-hover flex flex-col"
              >
                {/* Image header */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">View Project</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-serif font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                    View Project
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
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
            Have a project in <span className="scribble-underline text-accent">mind</span>?
          </h2>
          <p className="text-muted leading-relaxed">
            I&apos;d love to hear about it. Let&apos;s connect and explore how we
            can create something meaningful together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
          >
            Let&apos;s Talk
            <svg
              className="w-5 h-5"
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
        </div>
      </section>
    </>
  );
}
