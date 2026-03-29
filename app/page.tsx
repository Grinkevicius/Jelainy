import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      {/* ──── HERO SECTION ──── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left – Copy */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">
                  Learning Experience Designer
                </p>
                <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="scribble-underline text-accent">
                    Jelainy
                  </span>
                  !
                </h1>
              </div>
              <p className="text-lg text-muted leading-relaxed max-w-lg">
                I design learning experiences that don&apos;t just inform, they
                engage, empower, and drive meaningful results.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
              >
                Let&apos;s Connect
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
            </div>

            {/* Right – Hero Image */}
            <div className="relative animate-scale-in animation-delay-200">
              <div className="relative w-full aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl shadow-accent/10">
                <Image
                  src="/jelainy.png"
                  alt="Jelainy – Learning Experience Designer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative blob */}
              <div className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-accent-light rounded-full blur-3xl opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* ──── FEATURED PROJECT ──── */}
      <section className="bg-section-alt">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <Link href="/featuredproject" className="group relative rounded-2xl overflow-hidden shadow-xl card-hover block aspect-video">
              <Image
                src="/articulate/story_content/thumbnail.jpg"
                alt="Gray Areas – Navigating Workplace Conduct"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.2]"
              />
              <div className="absolute inset-0 bg-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-lg flex items-center gap-2">
                  View Project
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* Project Info */}
            <div className="space-y-6">
              <p className="text-accent font-medium text-sm tracking-widest uppercase">
                Featured Project
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-snug">
                A scenario-based
                <br />
                <span className="text-accent">eLearning experience</span>{" "}
                designed to help managers handle workplace conduct issues
                effectively
              </h2>
              <p className="text-muted leading-relaxed">
                Using real-world scenarios, interactive decisions, and
                reflection, this project focuses on building a culture of
                respect while protecting the organization.
              </p>
              <Link
                href="/featuredproject"
                className="inline-flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-all"
              >
                Get The Details
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
            </div>
          </div>
        </div>
      </section>

      {/* ──── ABOUT ME ──── */}
      <section className="bg-section-alt">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            {/* About Copy */}
            <div className="space-y-6">
              <p className="text-accent font-medium text-sm tracking-widest uppercase">
                A Little About Me
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold leading-snug">
                Lifelong learner, dreamer, and problem-solver.
              </h2>
              <p className="text-muted leading-relaxed">
                Hi, I&apos;m Jelainy, a lifelong learner, dreamer, and
                problem-solver. I&apos;ve spent years honing my skills in
                analysis, design, development, instruction, evaluation, and
                presentation — all to facilitate growth.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-white transition-all"
              >
                Read On
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
            </div>

          </div>
        </div>
      </section>

      {/* ──── CTA SECTION ──── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          {/* Decorative scribble */}
          <svg
            className="mx-auto w-48 h-6 text-accent opacity-50"
            viewBox="0 0 200 12"
            fill="none"
          >
            <path
              d="M2 8 Q 50 2, 100 8 T 198 8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
            Let&apos;s make meaningful learning experiences{" "}
            <span className="text-accent">together</span>.
          </h2>
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
