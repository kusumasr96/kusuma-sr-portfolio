import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Mail, Github, Linkedin } from "lucide-react";
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
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-greeting", { opacity: 0, y: 20, duration: 0.6 }, 0.2)
        .from(".hero-heading", { opacity: 0, y: 30, duration: 0.8 }, 0.4)
        .from(".hero-subtitle", { opacity: 0, y: 30, duration: 0.8 }, 0.6)
        .from(".hero-desc", { opacity: 0, y: 20, duration: 0.7 }, 0.8)
        .from(".hero-buttons", { opacity: 0, y: 20, duration: 0.7 }, 1.0)
        .from(".hero-scroll", { opacity: 0, duration: 0.5 }, 1.2);

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

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <DimensionalField />

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(13,15,20,0.3)] via-[rgba(13,15,20,0.15)] to-[rgba(13,15,20,0.7)] pointer-events-none z-[1]" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none z-[1]" />

      <div className="hero-content-inner relative z-[2] text-center px-6 max-w-4xl mx-auto">
        <p className="hero-greeting text-sm font-medium tracking-[0.2em] uppercase text-primary/70 mb-4">
          Hello, I&apos;m
        </p>

        <h1 className="hero-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-4">
          Kusuma{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#6ee7b7]">
            SR
          </span>
        </h1>

        <p className="hero-subtitle text-xl sm:text-2xl font-semibold text-white/70 mb-5">
          Computer Science Engineering Student &amp; Web Developer
        </p>

        <p className="hero-desc text-base sm:text-lg text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          I build modern, responsive and interactive web experiences while
          continuously exploring AI, frontend development and software
          engineering.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <button
            onClick={() => scrollTo("#projects")}
            className="clay-card-elevated px-8 py-4 rounded-2xl text-sm font-semibold text-white flex items-center gap-2.5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
          >
            <ExternalLink size={16} />
            View My Projects
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="clay-btn px-8 py-4 rounded-2xl text-sm font-semibold text-white/80 flex items-center gap-2.5 hover:text-white transition-all duration-300"
          >
            <Mail size={16} />
            Contact Me
          </button>
          <a
            href="https://github.com/kusumasr96"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-btn px-8 py-4 rounded-2xl text-sm font-semibold text-white/80 flex items-center gap-2.5 hover:text-white transition-all duration-300"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kusuma-sr-8b7614335/"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-btn px-8 py-4 rounded-2xl text-sm font-semibold text-white/80 flex items-center gap-2.5 hover:text-white transition-all duration-300"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>

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
