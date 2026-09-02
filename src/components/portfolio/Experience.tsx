import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

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
        stagger: 0.15,
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
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/20 to-transparent" />

          <div className="exp-item relative pl-16">
            {/* Timeline dot */}
            <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-primary/80 border-4 border-[var(--background)] shadow-lg shadow-primary/30" />

            <div className="clay-card-elevated p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">
                    Frontend Development Intern
                  </h3>
                  <p className="text-white/40 text-sm">
                    Professional Internship
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {[
                  "Built responsive web interfaces using modern frontend technologies",
                  "Implemented interactive UI components and implemented frontend functionality",
                  "Worked with React, JavaScript, and CSS frameworks on real-world projects",
                  "Completed practical development tasks and feature implementations",
                  "Deployed live web projects to production environments",
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
    </section>
  );
}
