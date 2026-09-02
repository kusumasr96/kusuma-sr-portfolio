import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".edu-heading > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });

      gsap.from(".edu-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="clay-section py-28 sm:py-36 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="edu-heading text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Education
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Academic Background
          </h2>
        </div>

        <div className="edu-card clay-card-elevated p-10 rounded-3xl relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/8 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-start gap-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/15 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/10">
              <BookOpen size={28} className="text-primary" strokeWidth={1.5} />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Bachelor of Engineering
              </h3>
              <p className="text-primary/80 font-semibold text-lg mb-2">
                Computer Science &amp; Engineering
              </p>
              <p className="text-white/40 text-sm mb-6">Currently in 3rd Year</p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Full-Stack Development",
                  "Data Structures & Algorithms",
                  "AI & Machine Learning",
                  "Operating Systems",
                  "DBMS",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="clay-btn px-4 py-2 text-xs text-white/50 rounded-xl"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
