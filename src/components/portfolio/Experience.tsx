import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Circle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".exp-heading > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });

      gsap.from(".exp-item", {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="clay-section py-28 sm:py-36 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="exp-heading text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Career
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/20 to-transparent" />

          <div className="exp-item relative pl-16">
            {/* Pulsing dot */}
            <div className="absolute left-4 top-8 flex items-center justify-center">
              <span className="absolute w-4 h-4 rounded-full bg-primary/80 border-4 border-[var(--background)] shadow-lg shadow-primary/30" />
              <span className="absolute w-4 h-4 rounded-full bg-primary/40 animate-ping" />
            </div>

            <div className="clay-card-elevated p-8 rounded-2xl relative overflow-hidden">
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/6 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Web Development Intern
                    </h3>
                    <p className="text-white/40 text-sm">Professional Role</p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                    <Circle size={7} fill="currentColor" className="text-emerald-400" />
                    Currently Working
                  </span>
                </div>

                <p className="text-white/45 text-sm leading-relaxed mb-5">
                  Currently working as a Web Development Intern, gaining
                  hands-on experience by building responsive and interactive
                  websites, working with modern web technologies, and completing
                  practical development tasks.
                </p>

                <div className="flex flex-wrap gap-3 mb-5">
                  {[
                    "Web Development",
                    "Frontend Development",
                    "Responsive Web Design",
                    "Modern Web Technologies",
                    "Practical Project Development",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-lg text-white/50 border border-white/8"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5">
                  {[
                    "Building responsive and interactive websites using modern web technologies",
                    "Implementing frontend functionality and UI components",
                    "Working with React, JavaScript, and CSS frameworks",
                    "Completing practical development tasks and feature implementations",
                    "Gaining real-world professional development experience",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-white/50 text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
