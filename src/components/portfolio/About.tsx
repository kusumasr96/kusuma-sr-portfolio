import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Code, Coffee, Brain } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    icon: GraduationCap,
    title: "3rd Year CSE",
    desc: "Computer Science Engineering student with a passion for technology and innovation.",
    color: "#7c9cf5",
  },
  {
    icon: Code,
    title: "Frontend Developer",
    desc: "Building responsive, interactive web experiences with modern frameworks.",
    color: "#a78bfa",
  },
  {
    icon: Coffee,
    title: "Java + DSA",
    desc: "Strengthening problem-solving skills through data structures and algorithms.",
    color: "#6ee7b7",
  },
  {
    icon: Brain,
    title: "AI & Web Projects",
    desc: "Exploring AI-powered applications and building practical web solutions.",
    color: "#f472b6",
  },
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
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });

      gsap.from(".about-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        },
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
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="about-heading text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Introduction
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-lg leading-relaxed">
            I am a Computer Science Engineering student passionate about
            building modern web experiences and practical software solutions. I
            enjoy working with frontend technologies, learning Java and Data
            Structures &amp; Algorithms, and exploring AI-powered applications.
          </p>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="about-card clay-card p-7 rounded-2xl group hover:scale-[1.03] transition-all duration-500 cursor-default"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                style={{
                  background: `${card.color}18`,
                  boxShadow: `0 0 24px ${card.color}15`,
                }}
              >
                <card.icon
                  size={22}
                  style={{ color: card.color }}
                  strokeWidth={1.8}
                />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {card.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
