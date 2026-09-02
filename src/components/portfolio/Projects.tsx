import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    num: "01",
    title: "Placement AI",
    desc: "An AI-powered placement assistant designed to help students prepare for placements through personalized guidance and resources.",
    tags: ["React", "AI", "JavaScript", "Web Development"],
    live: "https://placement-ai-ten.vercel.app/",
    github: "https://github.com/kusumasr96/placement-ai.git",
    color: "#7c9cf5",
  },
  {
    num: "02",
    title: "Property Post Maker",
    desc: "A web application that generates ready-to-share property posts from property details entered by the user. Features include property details input, location, price, highlights, automatic post generation, property imagery, and responsive design.",
    tags: ["React", "JavaScript", "Web Development", "Responsive"],
    live: null,
    github: "https://github.com/kusumasr96",
    color: "#a78bfa",
  },
  {
    num: "03",
    title: "Interactive Developer Portfolio",
    desc: "A cinematic interactive portfolio showcasing skills, projects, experience, and development journey with Three.js shaders and GSAP animations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Three.js", "GSAP"],
    live: null,
    github: "https://github.com/kusumasr96",
    color: "#6ee7b7",
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".projects-heading > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });

      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: el, start: "top 70%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="clay-section py-28 sm:py-36 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="projects-heading text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-lg">
            A selection of projects I&apos;ve built and contributed to.
          </p>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <div
              key={project.num}
              className="project-card clay-card-elevated p-8 sm:p-10 rounded-3xl group hover:scale-[1.01] transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Left side */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className="text-xs font-bold tracking-[0.2em] px-3 py-1 rounded-lg"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      {project.num}
                    </span>
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: project.color }}
                    />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-white/40 text-base leading-relaxed mb-6 max-w-2xl">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-lg text-white/50 border border-white/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clay-btn px-6 py-3 rounded-xl text-sm font-semibold text-white flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="clay-btn px-6 py-3 rounded-xl text-sm font-semibold text-white/70 flex items-center gap-2 hover:text-white hover:bg-white/5 transition-all duration-300"
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Right side — decorative preview area */}
                <div
                  className="hidden lg:block w-64 h-40 rounded-2xl flex-shrink-0 relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}12, ${project.color}06)`,
                    border: `1px solid ${project.color}15`,
                  }}
                >
                  <div className="absolute inset-0 grid-pattern opacity-40" />
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-white/20 tracking-wider">
                    {project.tags[0]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
