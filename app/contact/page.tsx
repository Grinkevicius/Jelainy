"use client";

import { useState } from "react";
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to an API route or email service
    setSubmitted(true);
  }

  return (
    <>
      {/* ──── HERO ──── */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3 animate-fade-in">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight animate-fade-in-up">
            Let&apos;s create something{" "}
            <span className="scribble-underline text-accent">together</span>
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Have a project in mind, a question, or just want to say hello?
            I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ──── FORM + INFO ──── */}
      <section className="bg-section-alt">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card-bg rounded-2xl p-8 md:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <span className="text-5xl">✉️</span>
                  <h2 className="text-2xl font-serif font-bold">
                    Thank you!
                  </h2>
                  <p className="text-muted">
                    Your message has been sent. I&apos;ll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-accent/20 bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-accent/20 bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="w-full rounded-xl border border-accent/20 bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-accent/20 bg-background px-4 py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition resize-none"
                      placeholder="Tell me about your project or idea…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-white py-4 rounded-full font-semibold text-lg hover:bg-accent-dark transition-colors shadow-lg shadow-accent/20"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-10 md:py-4">
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">
                  Get in touch
                </h2>
                <p className="text-muted leading-relaxed">
                  Whether you have a specific project in mind or you&apos;re just
                  exploring possibilities, I&apos;m here to help. Fill out the
                  form or reach out directly.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:hello@jelainy.com" className="text-muted text-sm hover:text-accent transition-colors">hello@jelainy.com</a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">LinkedIn</p>
                    <a href="https://linkedin.com/in/jelainy" target="_blank" rel="noopener noreferrer" className="text-muted text-sm hover:text-accent transition-colors">linkedin.com/in/jelainy</a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted text-sm">Available remotely</p>
                  </div>
                </div>
              </div>

              {/* Fun note */}
              <div className="bg-accent-light/50 rounded-2xl p-6 border border-accent/10">
                <p className="text-sm text-foreground leading-relaxed">
                  💡 <span className="font-semibold">Quick note:</span> I
                  typically respond within 24–48 hours. For urgent inquiries,
                  feel free to connect with me on LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
