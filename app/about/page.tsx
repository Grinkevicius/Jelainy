import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jelainy",
  description:
    "Learn more about Jelainy — a lifelong learner, dreamer, and problem-solver passionate about learning experience design.",
};

const skills = [
  { name: "Instructional Design", icon: "📐" },
  { name: "E-Learning Development", icon: "💻" },
  { name: "Curriculum Design", icon: "📚" },
  { name: "Needs Analysis", icon: "🔍" },
  { name: "Storyboarding", icon: "🎬" },
  { name: "Visual Design", icon: "🎨" },
  { name: "LMS Administration", icon: "⚙️" },
  { name: "Project Management", icon: "📋" },
];

const timeline = [
  {
    year: "2024",
    title: "Senior Learning Experience Designer",
    description:
      "Leading end-to-end design of enterprise learning programs, mentoring junior designers, and driving adoption of learner-centered methodologies.",
  },
  {
    year: "2022",
    title: "Learning Experience Designer",
    description:
      "Designed scenario-based e-learning modules, conducted needs analyses, and collaborated with SMEs to create impactful training solutions.",
  },
  {
    year: "2020",
    title: "Instructional Designer",
    description:
      "Developed instructor-led and blended learning programs, created assessments, and managed LMS content for a global workforce.",
  },
  {
    year: "2018",
    title: "Training Coordinator",
    description:
      "Coordinated training logistics, gathered learner feedback, and supported the design team with content development.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ──── HERO ──── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-accent font-medium text-sm tracking-widest uppercase">
                About Me
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Lifelong learner, dreamer, and{" "}
                <span className="scribble-underline text-accent">
                  problem-solver
                </span>
                .
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-lg">
                I&apos;m Jelainy — a Learning Experience Designer who believes
                that great learning starts with empathy. I&apos;ve spent years
                honing my skills in analysis, design, development, instruction,
                evaluation, and presentation — all to facilitate growth.
              </p>
              <p className="text-muted leading-relaxed max-w-lg">
                When I&apos;m not designing learning experiences, you can find me
                exploring new ideas, diving into a good book, or dreaming up my
                next creative project.
              </p>
            </div>

            <div className="relative animate-scale-in animation-delay-200">
              <div className="relative w-full aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl shadow-accent/10">
                <Image
                  src="/images/about-placeholder.svg"
                  alt="About Jelainy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-48 h-48 bg-accent-light rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* ──── MY APPROACH ──── */}
      <section className="bg-section-alt">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-accent font-medium text-sm tracking-widest uppercase">
              My Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-snug">
              Design with <span className="text-accent">empathy</span>, build
              with purpose
            </h2>
            <p className="text-muted leading-relaxed">
              I believe every learning experience should be meaningful,
              accessible, and engaging. My process combines learner-centered
              design thinking with proven instructional frameworks like ADDIE and
              SAM to create experiences that truly stick.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Analyze",
                desc: "Understanding learner needs, business goals, and performance gaps through thorough research and stakeholder interviews.",
                icon: "🔍",
              },
              {
                title: "Design & Develop",
                desc: "Crafting storyboards, prototypes, and fully interactive e-learning modules using modern authoring tools.",
                icon: "✏️",
              },
              {
                title: "Evaluate & Iterate",
                desc: "Measuring impact through assessments, feedback, and analytics — then refining for continuous improvement.",
                icon: "📊",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="bg-card-bg rounded-2xl p-8 shadow-sm card-hover text-center space-y-4"
              >
                <span className="text-4xl">{step.icon}</span>
                <h3 className="text-xl font-serif font-bold">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── SKILLS ──── */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <p className="text-accent font-medium text-sm tracking-widest uppercase">
              Skills & Tools
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              What I bring to the table
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-card-bg border border-accent/10 rounded-xl p-5 text-center card-hover"
              >
                <span className="text-2xl mb-2 block">{skill.icon}</span>
                <p className="text-sm font-medium text-foreground">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── TIMELINE ──── */}
      <section className="bg-section-alt">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center space-y-4 mb-16">
            <p className="text-accent font-medium text-sm tracking-widest uppercase">
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              My Journey
            </h2>
          </div>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Vertical line */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent shrink-0 mt-1" />
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-accent/20" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-2">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-serif font-bold mt-1">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──── CTA ──── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
            Want to work <span className="text-accent">together</span>?
          </h2>
          <p className="text-muted leading-relaxed">
            I&apos;m always open to new opportunities and collaborations. Let&apos;s
            chat about how I can help bring your learning vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
          >
            Get In Touch
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
