import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Code,
  Brain,
  Cpu,
  Puzzle,
  Lightbulb,
  Layers,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const INTERESTS = [
  { icon: Globe, label: "Frontend Development", color: "#7c9cf5" },
  { icon: Code, label: "Web Development", color: "#a78bfa" },
  { icon: Brain, label: "Artificial Intelligence", color: "#6ee7b7" },
  { icon: Cpu, label: "Java", color: "#fbbf24" },
  { icon: Puzzle, label: "Data Structures & Algorithms", color: "#f472b6" },
  { icon: Lightbulb, label: "Problem Solving", color: "#fb923c" },
  { icon: Layers, label: "Building Real-World Projects", color: "#38bdf8" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-heading > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });

      gsap.from(".about-interest", {
        opacity: 0,
        y: 20,
        scale: 0.9,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.07,
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="clay-section py-28 sm:py-36 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="about-heading text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Introduction
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-white/45 max-w-3xl mx-auto text-lg leading-relaxed">
            I am a 3rd-year Computer Science Engineering student passionate
            about building modern web applications and solving real-world
            problems through technology. I enjoy creating responsive,
            interactive and user-focused experiences while continuously
            improving my programming and problem-solving skills.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {INTERESTS.map((interest) => (
            <div
              key={interest.label}
              className="about-interest clay-card px-5 py-3 rounded-2xl flex items-center gap-3 group hover:scale-[1.04] transition-all duration-400 cursor-default"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-400 group-hover:scale-110"
                style={{
                  background: `${interest.color}15`,
                  boxShadow: `0 0 20px ${interest.color}10`,
                }}
              >
                <interest.icon
                  size={17}
                  style={{ color: interest.color }}
                  strokeWidth={1.8}
                />
              </div>
              <span className="text-white/65 text-sm font-medium group-hover:text-white transition-colors duration-300">
                {interest.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
