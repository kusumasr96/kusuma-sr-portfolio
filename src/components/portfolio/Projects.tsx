import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Sparkles, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".projects-heading > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });

      gsap.from(".featured-project", {
        opacity: 0,
        y: 50,
        scale: 0.97,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });

      gsap.from(".project-card", {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 60%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="clay-section py-28 sm:py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="projects-heading text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-lg">
            Projects I&apos;ve built to solve real problems.
          </p>
        </div>

        {/* ── FEATURED: Placement AI ── */}
        <div className="featured-project clay-card-elevated p-8 sm:p-10 rounded-3xl mb-8 relative overflow-hidden group hover:scale-[1.01] transition-all duration-500">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/15 transition-all duration-700" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] uppercase px-3 py-1.5 rounded-lg bg-primary/15 text-primary">
                  <Star size={12} fill="currentColor" />
                  Featured
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <span className="text-xs text-white/30 font-medium tracking-wide">
                  Live on Vercel
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                Placement AI
              </h3>

              <p className="text-white/40 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                An AI-powered placement preparation platform designed to help
                students prepare for technical placements through an interactive
                and practical web experience.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "React",
                  "AI",
                  "JavaScript",
                  "Web Development",
                  "Vercel",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-lg text-white/50 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://placement-ai-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-card-elevated px-7 py-3.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
                <a
                  href="https://github.com/kusumasr96/placement-ai.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn px-7 py-3.5 rounded-xl text-sm font-semibold text-white/70 flex items-center gap-2 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  <Github size={15} />
                  GitHub
                </a>
              </div>
            </div>

            {/* Preview area */}
            <div className="hidden lg:flex w-72 h-48 rounded-2xl flex-shrink-0 relative overflow-hidden border border-primary/10 items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,156,245,0.08), rgba(167,139,250,0.05))",
              }}
            >
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="relative flex flex-col items-center gap-2">
                <Sparkles size={28} className="text-primary/40" />
                <span className="text-[11px] font-mono text-white/25 tracking-widest uppercase">
                  AI-Powered
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Property Post Maker ── */}
        <div className="project-card clay-card-elevated p-8 sm:p-10 rounded-3xl group hover:scale-[1.01] transition-all duration-500">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold tracking-[0.2em] px-3 py-1 rounded-lg bg-accent/15 text-accent">
                  Internship Project
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                Property Post Maker
              </h3>

              <p className="text-white/40 text-base leading-relaxed mb-6 max-w-2xl">
                A web application that generates ready-to-share property posts
                from user-provided property details such as property type,
                location, price, and highlights. Developed as part of my Web
                Development Internship.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "React",
                  "JavaScript",
                  "Responsive UI",
                  "Dynamic Content",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-lg text-white/50 border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-5 text-sm text-white/40">
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  Dynamic content generation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  Responsive UI
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-accent/60" />
                  Image-based presentation
                </span>
              </div>
            </div>

            <div
              className="hidden lg:block w-64 h-40 rounded-2xl flex-shrink-0 relative overflow-hidden border border-accent/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(167,139,250,0.08), rgba(110,231,183,0.04))",
              }}
            >
              <div className="absolute inset-0 grid-pattern opacity-40" />
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white/20 tracking-wider">
                Internship
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
