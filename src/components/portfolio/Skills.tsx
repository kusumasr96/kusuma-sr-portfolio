import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SKILL_GROUPS = [
  {
    title: "Programming",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS"],
    color: "#7c9cf5",
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Responsive Web Design"],
    color: "#a78bfa",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
    color: "#6ee7b7",
  },
  {
    title: "Core Concepts",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
    ],
    color: "#f472b6",
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".skills-heading > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });

      gsap.from(".skill-group", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="clay-section py-28 sm:py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="skills-heading text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-lg">
            A snapshot of the technologies and concepts I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="skill-group clay-card p-7 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: group.color }}
                />
                <h3 className="text-white font-semibold text-base tracking-wide">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill clay-btn px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/8 transition-all duration-300 rounded-xl cursor-default"
                    style={{
                      borderColor: `${group.color}20`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
