import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATES = [
  {
    icon: GraduationCap,
    title: "Web Development with AI",
    type: "Certificate of Training",
    organization: "Internshala Trainings",
    duration: "8-week online training",
    date: "December 2025",
    color: "#7c9cf5",
    description:
      "Successfully completed an 8-week online training on Web Development with AI. The training covered HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, React, Final Project, and AI in Web Development.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "DBMS",
      "PHP",
      "JavaScript",
      "React",
      "AI in Web Development",
    ],
  },
  {
    icon: Trophy,
    title: "HACKHAZARDS 2026",
    type: "Certificate of Participation",
    organization: "NAMESPACE Community",
    duration: null,
    date: "July 2026",
    color: "#fbbf24",
    description:
      "Participated in HACKHAZARDS 2026, organized by NAMESPACE Community, gaining experience in innovation, technical excellence, problem-solving, and collaborative development throughout the hackathon.",
    technologies: [
      "Innovation",
      "Technical Problem-Solving",
      "Collaborative Development",
    ],
  },
];

export function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".cert-heading > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });

      gsap.from(".cert-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="clay-section py-28 sm:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="cert-heading text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Recognition
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Certificates &amp; Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.title}
              className="cert-card clay-card-elevated p-7 sm:p-8 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500"
            >
              {/* Decorative glow */}
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-700"
                style={{ background: `${cert.color}12` }}
              />

              <div className="relative">
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `${cert.color}18`,
                      boxShadow: `0 0 24px ${cert.color}12`,
                    }}
                  >
                    <cert.icon
                      size={22}
                      style={{ color: cert.color }}
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-white/40 text-xs mt-1">{cert.type}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/40 mb-4">
                  <span className="font-medium text-white/55">
                    {cert.organization}
                  </span>
                  <span className="text-white/15">•</span>
                  <span>{cert.date}</span>
                  {cert.duration && (
                    <>
                      <span className="text-white/15">•</span>
                      <span>{cert.duration}</span>
                    </>
                  )}
                </div>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-3 py-1.5 rounded-lg text-white/45 border border-white/6"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
