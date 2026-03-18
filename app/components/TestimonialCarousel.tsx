"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Jelainy has an incredible ability to transform complex topics into engaging learning experiences. Her work consistently exceeds expectations.",
    name: "Alex M.",
    role: "Program Manager",
  },
  {
    quote:
      "Working with Jelainy was a game-changer for our team. She brought creativity, empathy, and strategic thinking to every project.",
    name: "Samira K.",
    role: "HR Director",
  },
  {
    quote:
      "Her instructional design work helped us improve learner engagement by over 40%. I can't recommend her enough.",
    name: "Jordan P.",
    role: "Training Lead",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <div className="relative max-w-2xl mx-auto text-center">
      {/* Quote */}
      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <p className="mt-6 font-semibold text-heading">{t.name}</p>
      <p className="text-sm text-muted">{t.role}</p>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-accent" : "bg-accent/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors"
        >
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
