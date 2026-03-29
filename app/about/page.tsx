import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jelainy",
  description: "Learn more about Jelainy a lifelong learner, dreamer, and problem solver passionate about learning experience design.",
};

const skills = [
  { name: "Learning Experience Design", icon: "💡" },
  { name: "eLearning Development", icon: "🖥️" },
  { name: "Curriculum Design", icon: "📚" },
  { name: "Facilitation & Training Delivery", icon: "🎤" },
  { name: "Stakeholder Collaboration", icon: "🤝" },
  { name: "Data-Informed Improvement", icon: "📈" },
  { name: "Program & Project Management", icon: "🗓️" },
  { name: "LMS Administration", icon: "⚙️" },
];

const timeline = [
  {
    year: "2024 – Present",
    title: "Instructional Designer & Team Lead",
    description:
      "Designed and implemented performance driven learning programs aligned with organizational goals, using data informed needs analysis and stakeholder collaboration to address performance gaps. Developed and facilitated blended learning experiences and professional development that improved engagement and instructional effectiveness.",
  },
  {
    year: "2017 – 2024",
    title: "Teacher & Team Leader",
    description:
      "Designed curriculum and learning experiences using backward design principles, creating aligned objectives, assessments, and blended learning materials. Led professional development initiatives and collaborated with stakeholders to improve performance outcomes and support continuous growth.",
  },
  {
    year: "2015 – 2017",
    title: "Teacher",
    description:
      "Developed standards aligned instruction using data driven strategies, creating assessments and learning materials to measure and improve learner performance. Collaborated with cross functional teams to align curriculum and instructional practices.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ──── HERO ──── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.65fr] gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-accent font-medium text-sm tracking-widest uppercase">
                About Me
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Curious, creative, and always looking for ways to{" "}
                <span className="scribble-underline text-accent">
                  learn and grow
                </span>
                .
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-lg">
                Hi, I&apos;m Jelainy. I design learning experiences with a
                creative, performance driven mindset, creating solutions that
                engage learners and drive real world results. I&apos;m passionate
                about building learning that is relevant, interactive, and
                purposeful, helping people connect with content and apply it
                confidently in real world situations.
              </p>
              <p className="text-lg text-muted leading-relaxed max-w-lg">
                When I&apos;m not designing, I&apos;m usually enjoying a cup of
                cafecito, reading a good book, or experimenting with new recipes
                in the kitchen.
              </p>
            </div>

            <div className="relative animate-scale-in animation-delay-200">
              <div className="relative w-full aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl shadow-accent/10">
                <Image
                  src="/family.jpeg"
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
              Thoughtful design.{" "}
              <span className="text-accent">Meaningful learning.</span>
            </h2>
            <p className="text-muted leading-relaxed">
              I believe the best learning experiences are engaging, relevant, and
              built with purpose. By combining creative thinking with strong
              instructional design foundations, using frameworks like ADDIE and
              SAM, I create learning that connects with people and makes a
              lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Analyze",
                desc: "I start by understanding the people behind the learning, their needs, the goals of the organization, and the performance gaps that matter most. This ensures that every solution has a purpose and is relevant.",
                icon: "🔍",
              },
              {
                title: "Design & Develop",
                desc: "I take insights and turn them into compelling, interactive learning experiences. With a passion for creativity and practical application, I develop learning solutions that are clear, relevant, and designed for performance.",
                icon: "✏️",
              },
              {
                title: "Iterate & Evaluate",
                desc: "I continually monitor the performance of learning and improve it over time. This ensures that every learning experience remains relevant and connected to the real world, meeting the ever-changing needs of people and performance gaps in the organization.",
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
            I&apos;m always open to new opportunities and collaborations.
            Let&apos;s connect and explore how we can create meaningful,
            impactful learning experiences together.
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
