import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, ExternalLink, X, GraduationCap, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATES = [
  {
    id: "web-dev-ai",
    icon: GraduationCap,
    title: "Web Development with AI",
    type: "Certificate of Training",
    organization: "Internshala Trainings",
    date: "December 6, 2025",
    duration: "8-week online training",
    color: "#7c9cf5",
    image: "/certificates/web-development-ai.png",
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
    id: "hackhazards",
    icon: Trophy,
    title: "HACKHAZARDS 2026",
    type: "Certificate of Participation",
    organization: "NAMESPACE Community",
    date: "July 22, 2026",
    duration: null,
    color: "#fbbf24",
    image: "/certificates/hackhazards-2026.png",
    description:
      "Participated in HACKHAZARDS 2026, organized by NAMESPACE Community, gaining experience in innovation, technical excellence, problem-solving, and collaborative development throughout the hackathon.",
    technologies: [
      "Innovation",
      "Technical Problem-Solving",
      "Collaborative Development",
    ],
  },
];

function CertificateImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error || !loaded) {
    return (
      <div
        className={`bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 flex items-center justify-center ${className}`}
      >
        <Award size={32} className="text-white/10" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
    />
  );
}

export function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<(typeof CERTIFICATES)[number] | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (lightbox) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [lightbox, closeLightbox]);

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
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Training completions and hackathon participation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="cert-card clay-card-elevated rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500"
            >
              {/* Certificate image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/20">
                <CertificateImage
                  src={cert.image}
                  alt={`${cert.title} — ${cert.organization}`}
                  className="w-full h-full object-contain"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => setLightbox(cert)}
                    className="clay-card-elevated px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm"
                  >
                    <ExternalLink size={14} />
                    View Certificate
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: `${cert.color}18`,
                      boxShadow: `0 0 20px ${cert.color}10`,
                    }}
                  >
                    <cert.icon
                      size={18}
                      style={{ color: cert.color }}
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-white/40 text-xs mt-0.5">
                      {cert.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-white/35 mb-3">
                  <span className="font-medium text-white/50">
                    {cert.organization}
                  </span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>

                <p className="text-white/35 text-sm leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-lg text-white/45 border border-white/6"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setLightbox(cert)}
                  className="text-xs font-semibold text-primary/70 hover:text-primary flex items-center gap-1.5 transition-colors duration-300"
                >
                  <ExternalLink size={12} />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Certificate: ${lightbox.title}`}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Content */}
          <div
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 sm:right-0 sm:static sm:mb-3 sm:ml-auto clay-btn p-2.5 rounded-xl text-white/60 hover:text-white z-20 self-end"
              aria-label="Close certificate preview"
            >
              <X size={20} />
            </button>

            {/* Certificate image */}
            <div className="clay-card-elevated rounded-2xl overflow-hidden bg-black/30">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightbox.image}
                  alt={`${lightbox.title} — ${lightbox.organization}`}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.className =
                        "flex flex-col items-center justify-center py-20 gap-4";
                      fallback.innerHTML = `
                        <div class="w-16 h-16 rounded-2xl flex items-center justify-center" style="background: ${lightbox.color}18">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="${lightbox.color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
                        </div>
                        <p class="text-white/40 text-sm text-center max-w-md">
                          Certificate image not yet available.<br/>
                          Place the image at <code class="text-primary/60 bg-white/5 px-1.5 py-0.5 rounded text-xs">${lightbox.image}</code>
                        </p>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              {/* Info bar */}
              <div className="p-5 border-t border-white/5 flex flex-wrap items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${lightbox.color}18` }}
                >
                  <lightbox.icon
                    size={15}
                    style={{ color: lightbox.color }}
                    strokeWidth={1.8}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    {lightbox.title}
                  </p>
                  <p className="text-white/40 text-xs">
                    {lightbox.organization} — {lightbox.date}
                  </p>
                </div>
                <a
                  href={lightbox.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="clay-btn px-4 py-2 rounded-lg text-xs font-semibold text-white/70 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink size={12} />
                  Open Original
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
