import { useEffect, useRef, useCallback } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const FOOTER_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/kusumasr96",
    color: "#e8eaf0",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kusuma-sr-8b7614335/",
    color: "#0a66c2",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:kusumasr926@gmail.com",
    color: "#7c9cf5",
  },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const footer = footerRef.current;
      if (!footer) return;

      const rect = footer.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      if (bgTextRef.current) {
        bgTextRef.current.style.transform = `translate(${x * 20}px, ${y * 15}px)`;
      }
    },
    []
  );

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    footer.addEventListener("mousemove", handleMouseMove);
    return () => footer.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  // Magnetic hover for buttons
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const buttons = buttonsRef.current;

    const handleEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transition = "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
    };

    const handleMove = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };

    const handleLeave = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      el.style.transition =
        "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.transform = "translate(0, 0)";
    };

    buttons.forEach((btn) => {
      if (!btn) return;
      btn.addEventListener("mouseenter", handleEnter);
      btn.addEventListener("mousemove", handleMove as EventListener);
      btn.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      buttons.forEach((btn) => {
        if (!btn) return;
        btn.removeEventListener("mouseenter", handleEnter);
        btn.removeEventListener("mousemove", handleMove as EventListener);
        btn.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden py-28 sm:py-36 px-6"
    >
      {/* Aurora glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary/10 via-accent/5 to-transparent rounded-full blur-3xl animate-aurora pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Background text */}
      <div
        ref={bgTextRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] sm:text-[14vw] font-black text-white/[0.02] tracking-tight whitespace-nowrap select-none pointer-events-none transition-transform duration-100 ease-out"
      >
        KUSUMA
      </div>

      {/* Marquee */}
      <div className="absolute top-8 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.4em] uppercase text-white/[0.06] font-medium"
            >
              Frontend Developer &bull; CSE Student &bull; AI Explorer &bull;
              Problem Solver &bull;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Let&apos;s create something
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#6ee7b7]">
            amazing.
          </span>
        </h2>

        <p className="text-white/35 text-lg mb-12 max-w-lg mx-auto">
          Always open to new opportunities, collaborations, and conversations.
        </p>

        {/* Magnetic buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {FOOTER_LINKS.map((link, i) => (
            <a
              key={link.label}
            ref={(el: HTMLAnchorElement | null) => {
              buttonsRef.current[i] = el;
            }}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="clay-card-elevated px-8 py-4 rounded-2xl text-sm font-semibold text-white/80 hover:text-white flex items-center gap-3 transition-colors duration-300"
            >
              <link.icon size={18} />
              {link.label}
            </a>
          ))}

          <button
            ref={(el: HTMLButtonElement | null) => {
              buttonsRef.current[3] = el;
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="clay-card-elevated px-8 py-4 rounded-2xl text-sm font-semibold text-white/80 hover:text-white flex items-center gap-3 transition-colors duration-300"
          >
            <ArrowUp size={18} />
            Back to Top
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Footer text */}
        <p className="text-white/25 text-xs tracking-wide">
          &copy; 2026 Kusuma SR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
