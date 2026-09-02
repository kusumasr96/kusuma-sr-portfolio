import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  Code,
  Globe,
  Trophy,
  Briefcase,
  Rocket,
  Circle,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    year: "2023",
    title: "Started My CSE Journey",
    icon: GraduationCap,
    color: "#7c9cf5",
    items: [
      "Began my Computer Science and Engineering journey",
      "Built a foundation in programming and computer science concepts",
    ],
  },
  {
    year: "2024",
    title: "Building My Programming Foundation",
    icon: Code,
    color: "#a78bfa",
    items: [
      "Strengthened programming fundamentals and problem-solving skills",
      "Started exploring web development",
      "Began building small projects",
      "Started developing frontend skills",
    ],
  },
  {
    year: "2025",
    title: "Web Development & AI Training",
    icon: Globe,
    color: "#6ee7b7",
    highlight: true,
    subtitle: "8-Week Web Development with AI Training",
    items: [
      "Successfully completed an 8-week training in Web Development with AI",
      "Gained hands-on exposure to HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, React",
      "Started building practical web projects",
      "Improved understanding of frontend and web development",
    ],
  },
  {
    year: "2026",
    title: "Hackathons, Projects & Professional Experience",
    icon: Trophy,
    color: "#fbbf24",
    highlight: true,
    events: [
      {
        label: "HACKHAZARDS 2026",
        items: [
          "Participated in HACKHAZARDS 2026 organized by NAMESPACE Community",
          "Gained experience in innovation, technical problem-solving and collaborative development",
          "Received a Certificate of Participation",
        ],
      },
      {
        label: "Placement AI",
        items: [
          "Built and deployed Placement AI, an AI-powered placement preparation platform",
          "Combined web development and AI to create a practical student-focused solution",
        ],
      },
      {
        label: "Web Development Internship",
        items: [
          "Currently working as a Web Development Intern",
          "Building responsive and interactive websites",
          "Working with modern web development technologies",
          "Completing practical development tasks and gaining real-world experience",
        ],
      },
    ],
  },
  {
    year: "Now",
    title: "Growing as a Developer",
    icon: Rocket,
    color: "#f472b6",
    current: true,
    items: [
      "Currently improving my Java, DSA, frontend development, AI and problem-solving skills",
      "Gaining professional experience through my Web Development Internship",
      "Building real-world projects and exploring new technologies",
    ],
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

      gsap.from(".timeline-node", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 65%" },
      });

      gsap.from(".timeline-card", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 65%" },
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
        <div className="journey-heading text-center mb-20">
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

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] sm:left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/25 to-primary/10" />

          <div className="space-y-12">
            {MILESTONES.map((milestone) => (
              <div key={milestone.year} className="relative flex gap-6 sm:gap-8">
                {/* Node */}
                <div className="timeline-node relative flex-shrink-0 flex flex-col items-center">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center z-10 transition-all duration-500 ${
                      milestone.current
                        ? "ring-2 ring-primary/40 ring-offset-2 ring-offset-[var(--background)]"
                        : ""
                    }`}
                    style={{
                      background: `${milestone.color}18`,
                      boxShadow: `0 0 30px ${milestone.color}15`,
                    }}
                  >
                    <milestone.icon
                      size={24}
                      style={{ color: milestone.color }}
                      strokeWidth={1.6}
                    />
                  </div>
                  {milestone.current && (
                    <span className="mt-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`timeline-card flex-1 rounded-2xl p-6 sm:p-7 ${
                    milestone.highlight || milestone.current
                      ? "clay-card-elevated"
                      : "clay-card"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-lg"
                      style={{
                        background: `${milestone.color}15`,
                        color: milestone.color,
                      }}
                    >
                      {milestone.year}
                    </span>
                    {milestone.current && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                        <Circle
                          size={6}
                          fill="currentColor"
                          className="text-emerald-400"
                        />
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2">
                    {milestone.title}
                  </h3>

                  {milestone.subtitle && (
                    <p className="text-primary/70 text-sm font-medium mb-3">
                      {milestone.subtitle}
                    </p>
                  )}

                  {/* Regular items */}
                  {milestone.items && (
                    <ul className="space-y-2 mt-3">
                      {milestone.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-white/45 text-sm leading-relaxed"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ background: `${milestone.color}60` }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Sub-events (2026) */}
                  {milestone.events && (
                    <div className="mt-4 space-y-4">
                      {milestone.events.map((event) => (
                        <div
                          key={event.label}
                          className="pl-4 border-l-2 border-white/8"
                        >
                          <p className="text-white/70 text-sm font-semibold mb-2">
                            {event.label}
                          </p>
                          <ul className="space-y-1.5">
                            {event.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-white/40 text-sm leading-relaxed"
                              >
                                <span
                                  className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                                  style={{ background: `${milestone.color}50` }}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
