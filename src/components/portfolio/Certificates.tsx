import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, GraduationCap, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATES = [
  {
    icon: GraduationCap,
    title: "Web Development with AI Training",
    subtitle: "8-Week Training — Successfully Completed",
    color: "#7c9cf5",
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
    subtitle: "Certificate of Participation",
    color: "#fbbf24",
    technologies: ["Innovation", "Technical Problem-Solving", "Collaborative Development"],
    organizer: "Organized by NAMESPACE Community",
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
    <section
      ref={sectionRef}
      className="clay-section py-28 sm:py-36 px-6"
    >
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
              className="cert-card clay-card-elevated p-8 rounded-2xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-500"
            >
              {/* Decorative corner glow */}
              <div
                className="absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-700"
                style={{ background: `${cert.color}12` }}
              />

              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
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
                    <h3 className="text-white font-bold text-base">
                      {cert.title}
                    </h3>
                    <p className="text-white/40 text-xs mt-0.5">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>

                {cert.organizer && (
                  <p className="text-white/35 text-sm mb-4 italic">
                    {cert.organizer}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {cert.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1.5 rounded-lg text-white/50 border border-white/8"
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
