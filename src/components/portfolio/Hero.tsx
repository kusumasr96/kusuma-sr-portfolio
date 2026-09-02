import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Mail } from "lucide-react";
import { DimensionalField } from "./DimensionalField";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = heroRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-heading", { opacity: 0, y: 30, duration: 0.8 }, 0.3)
        .from(".hero-subtitle", { opacity: 0, y: 40, duration: 0.9 }, 0.5)
        .from(".hero-desc", { opacity: 0, y: 30, duration: 0.8 }, 0.7)
        .from(".hero-buttons", { opacity: 0, y: 20, duration: 0.7 }, 0.9)
        .from(".hero-scroll", { opacity: 0, duration: 0.6 }, 1.1);

      // Parallax on scroll
      gsap.to(".hero-content-inner", {
        y: 80,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* DimensionalField Background */}
      <DimensionalField />

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(13,15,20,0.3)] via-[rgba(13,15,20,0.15)] to-[rgba(13,15,20,0.7)] pointer-events-none z-[1]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none z-[1]" />

      {/* Content */}
      <div className="hero-content-inner relative z-[2] text-center px-6 max-w-4xl mx-auto">
        <div className="hero-heading mb-6">
          <span className="inline-block clay-btn px-5 py-2 text-xs font-semibold tracking-[0.25em] uppercase text-primary/90 mb-8">
            Computer Science Engineering Student
          </span>
        </div>

        <h1 className="hero-subtitle text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-6">
          KUSUMA
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#6ee7b7]">
            SR
          </span>
        </h1>

        <p className="hero-desc text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Frontend Developer & CSE Student. Building modern web experiences,
          solving problems with code, and exploring AI-powered applications.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="clay-card-elevated px-8 py-4 rounded-2xl text-sm font-semibold text-white flex items-center gap-2.5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
          >
            <ExternalLink size={16} />
            View My Projects
          </button>
          <button
            onClick={scrollToContact}
            className="clay-btn px-8 py-4 rounded-2xl text-sm font-semibold text-white/80 flex items-center gap-2.5 hover:text-white transition-all duration-300"
          >
            <Mail size={16} />
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-medium">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
