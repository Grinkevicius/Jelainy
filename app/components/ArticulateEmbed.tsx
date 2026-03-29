"use client";

import { useRef, useState, useEffect } from "react";

export default function ArticulateEmbed({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function onChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  function handleFullscreen() {
    if (containerRef.current) {
      containerRef.current.requestFullscreen();
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden shadow-xl bg-black"
      style={{ height: isFullscreen ? "100vh" : "650px" }}
    >
      <iframe
        src={src}
        width="100%"
        height="100%"
        allowFullScreen
        style={{ border: "none", display: "block" }}
        title={title}
      />
      <button
        onClick={isFullscreen ? () => document.exitFullscreen() : handleFullscreen}
        className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-2 transition-colors backdrop-blur-sm"
        aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      >
        {isFullscreen ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
            </svg>
            Exit Fullscreen
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            Fullscreen
          </>
        )}
      </button>
    </div>
  );
}
