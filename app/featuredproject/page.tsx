import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gray Areas | Jelainy",
  description:
    "A scenario-based e-learning experience designed to help managers navigate ambiguous workplace conduct concerns.",
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
              <span className="scribble-underline text-accent">
                Gray Areas:
              </span>{" "}
              A Manager&apos;s Guide to Navigating Workplace Conduct Concerns
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed animate-fade-in-up animation-delay-200">
              A scenario-based e-learning experience designed to help managers
              navigate ambiguous workplace conduct concerns. Using real-world
              situations, learners explore how small decisions can shape team
              culture, trust, and compliance outcomes.
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
              alt="Gray Areas E-Learning Project"
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
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  Responsibilities
                </p>
                <ul className="space-y-1">
                  {[
                    "Instructional Design",
                    "eLearning Development",
                    "Visual Design",
                    "Prototype Creation",
                  ].map((r) => (
                    <li key={r} className="text-foreground font-medium text-sm">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  Tools Used
                </p>
                <ul className="space-y-1">
                  {[
                    "Storyline 360",
                    "MindMeister",
                    "Canva",
                    "Microsoft Suite",
                  ].map((t) => (
                    <li key={t} className="text-foreground font-medium text-sm">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                  Type
                </p>
                <p className="text-foreground font-medium">Concept Project</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                  Audience
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  New and mid-level marketing managers responsible for responding
                  to employee concerns who may lack confidence handling situations
                  that require judgment, discretion, and balanced decision-making.
                </p>
              </div>
            </div>

            {/* Main content */}
            <div className="md:col-span-2 space-y-12">

              {/* The Problem */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  The Problem
                </h2>
                <p className="text-muted leading-relaxed">
                  At Northbridge Marketing Group, a fictitious marketing
                  corporation, managers are responsible for leading collaborative
                  teams in a fast-paced, high-visibility environment. In these
                  settings, workplace conduct concerns can arise during everyday
                  interactions.
                </p>
                <p className="text-muted leading-relaxed">
                  These situations are not always clearly defined as policy
                  violations, making them difficult for managers to address. As a
                  result, managers may incorrectly handle these issues, increasing
                  the risk to the organization and impacting team performance.
                  Despite this, many training courses focus primarily on policy
                  awareness rather than preparing managers to navigate these
                  tricky, real-world situations.
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  Solution
                </h2>
                <p className="text-muted leading-relaxed">
                  To solve the problem, I designed a scenario-based e-learning
                  experience that allows managers to practice responding to
                  workplace conduct concerns in a realistic, low-risk environment.
                </p>
                <p className="text-muted leading-relaxed">
                  I determined that scenario-based e-learning was the best
                  solution because:
                </p>
                <ul className="space-y-3">
                  {[
                    "The learner must make decisions and observe direct consequences of their actions",
                    "Each decision reflects different situations that managers may encounter in their positions",
                    "The learning experience is easily scalable and can be completed in various work environments (in-person, hybrid, remote)",
                    "Learners may revisit the material, and the material can be adapted to different departments and management levels, making it a cost-effective solution",
                    "In a real-world implementation, this experience could be further supported by follow-up resources or manager coaching to reinforce behavior change over time",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                      <span className="text-muted leading-relaxed text-sm">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
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
                      title: "Action Mapping",
                      desc: "I began by identifying the core performance problem and mapping out realistic workplace scenarios where managers must make decisions. I then explored the potential consequences, focusing on their impact on psychological safety, organizational risk, and team dynamics. From there, I identified the key behaviors that managers need to practice, ensuring that each interaction reinforces effective decision-making in ambiguous, real-world situations.",
                    },
                    {
                      step: "02",
                      title: "Text-Based Storyboard",
                      desc: 'After identifying the key decision points, I created a detailed storyboard to map out the learner experience. I wrote each scenario using natural, conversational dialogue to reflect realistic workplace interactions. At each decision point, learners choose how to respond and experience the consequences as the scenario unfolds. I also incorporated a "Manager Toolkit" that provides optional guidance, allowing learners to access support as needed while still encouraging independent decision-making.',
                    },
                    {
                      step: "03",
                      title: "Visual Mockups",
                      desc: "Using Canva, I developed the overall layout, style guide, and background mockups to establish a cohesive visual direction. I then implemented the interface in Articulate Storyline with a custom layout that feels more like a workplace environment than a traditional eLearning course — including a manager dashboard, progress indicators, and a persistent Manager Toolkit.",
                    },
                    {
                      step: "04",
                      title: "Prototyping",
                      desc: "I developed an interactive prototype to test the flow, functionality, and overall user experience — building core interactions including branching decision points, variable-driven progress indicators, and layered feedback. Throughout prototyping, I tested the experience to refine navigation, improve pacing, and ensure a smooth and intuitive user experience.",
                    },
                    {
                      step: "05",
                      title: "Development",
                      desc: "After incorporating feedback from the interactive prototype, I moved into full development in Articulate Storyline. I refined the interactions, finalized visual elements, and ensured all variables, triggers, and branching logic functioned as intended — polishing transitions and pacing to create a seamless and engaging learner experience.",
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
                  Results
                </h2>
                <p className="text-muted leading-relaxed">
                  This project demonstrates my ability to apply the ADDIE model
                  to design a performance-focused learning experience from
                  analysis through evaluation. By grounding the experience in
                  real-world decision-making, I was able to move beyond
                  knowledge-based training and focus on observable behaviors.
                </p>
                <p className="text-muted leading-relaxed">
                  The design supports multiple levels of the Kirkpatrick Model.
                  At Level 1 (Reaction), the immersive format is intended to
                  increase engagement and relevance. At Level 2 (Learning),
                  learners practice decision-making and receive immediate
                  feedback. At Level 3 (Behavior), the Manager Toolkit mirrors
                  on-the-job performance support to bridge the gap between
                  learning and real-world application.
                </p>
                <p className="text-muted leading-relaxed">
                  If implemented in a real-world setting, this solution could be
                  evaluated using learner decision patterns, completion rates,
                  time spent on key interactions, and follow-up assessments to
                  measure behavior change over time.
                </p>
              </div>

              {/* Takeaways */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-serif font-bold">
                  Takeaways
                </h2>
                <p className="text-muted leading-relaxed">
                  Managing this project end-to-end strengthened both my
                  instructional design and e-learning development skills. Working
                  through each phase of ADDIE reinforced the importance of
                  thoughtful planning, iterative design, and continuous
                  refinement throughout the process.
                </p>
                <p className="text-muted leading-relaxed">
                  One key takeaway was the value of designing for performance
                  rather than information. By focusing on real-world decisions and
                  consequences, I was able to create a more meaningful and
                  engaging experience that better reflects the complexity of
                  workplace situations. Creating a cohesive interface — including
                  custom layouts, progress indicators, and a persistent Manager
                  Toolkit — required careful attention to detail and reinforced
                  the importance of investing time in the analysis and design
                  phases.
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
