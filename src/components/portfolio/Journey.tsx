import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Terminal, Sparkles, Trophy, Laptop } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const JOURNEY_ITEMS = [
  {
    icon: Globe,
    title: "Frontend Development",
    desc: "Building responsive and interactive web experiences with modern frameworks and tools.",
    color: "#7c9cf5",
  },
  {
    icon: Terminal,
    title: "Java & DSA",
    desc: "Developing programming and problem-solving skills through structured practice.",
    color: "#a78bfa",
  },
  {
    icon: Sparkles,
    title: "AI Projects",
    desc: "Exploring AI-powered applications and building practical solutions for real problems.",
    color: "#6ee7b7",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    desc: "Building innovative solutions under real-world constraints and tight deadlines.",
    color: "#fbbf24",
  },
  {
    icon: Laptop,
    title: "Internship Experience",
    desc: "Applying frontend development skills to practical, professional development tasks.",
    color: "#f472b6",
  },
];

export function Journey() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".journey-heading > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });

      gsap.from(".journey-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
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
      <div className="max-w-6xl mx-auto">
        <div className="journey-heading text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Growth
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Development Journey
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-lg">
            A timeline of my growth as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {JOURNEY_ITEMS.map((item) => (
            <div
              key={item.title}
              className="journey-card clay-card p-7 rounded-2xl group hover:scale-[1.03] transition-all duration-500 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `${item.color}18`,
                  boxShadow: `0 0 24px ${item.color}12`,
                }}
              >
                <item.icon
                  size={22}
                  style={{ color: item.color }}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
