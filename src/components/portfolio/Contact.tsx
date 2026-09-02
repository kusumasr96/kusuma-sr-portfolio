import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: el, start: "top 75%" },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="clay-section py-28 sm:py-36 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="contact-reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-lg mb-14">
            I&apos;m always interested in learning, building and exploring new
            opportunities in technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 contact-reveal">
          <a
            href="mailto:kusumasr926@gmail.com"
            className="clay-card-elevated px-8 py-5 rounded-2xl flex items-center gap-4 group hover:scale-[1.03] transition-all duration-300 min-w-[240px]"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
              <Mail size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-white/40 text-xs">Email</p>
              <p className="text-white text-sm font-medium">
                kusumasr926@gmail.com
              </p>
            </div>
            <ArrowRight
              size={16}
              className="text-white/20 ml-auto group-hover:text-primary/60 group-hover:translate-x-1 transition-all duration-300"
            />
          </a>

          <a
            href="https://github.com/kusumasr96"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-card-elevated px-8 py-5 rounded-2xl flex items-center gap-4 group hover:scale-[1.03] transition-all duration-300 min-w-[240px]"
          >
            <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-white/12 transition-colors">
              <Github size={18} className="text-white/70" />
            </div>
            <div className="text-left">
              <p className="text-white/40 text-xs">GitHub</p>
              <p className="text-white text-sm font-medium">
                github.com/kusumasr96
              </p>
            </div>
            <ArrowRight
              size={16}
              className="text-white/20 ml-auto group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/kusuma-sr-8b7614335/"
            target="_blank"
            rel="noopener noreferrer"
            className="clay-card-elevated px-8 py-5 rounded-2xl flex items-center gap-4 group hover:scale-[1.03] transition-all duration-300 min-w-[240px]"
          >
            <div className="w-11 h-11 rounded-xl bg-[#0a66c2]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a66c2]/25 transition-colors">
              <Linkedin size={18} className="text-[#0a66c2]" />
            </div>
            <div className="text-left">
              <p className="text-white/40 text-xs">LinkedIn</p>
              <p className="text-white text-sm font-medium">Kusuma SR</p>
            </div>
            <ArrowRight
              size={16}
              className="text-white/20 ml-auto group-hover:text-[#0a66c2]/60 group-hover:translate-x-1 transition-all duration-300"
            />
          </a>
        </div>

        <div className="mt-12 contact-reveal">
          <a
            href="mailto:kusumasr926@gmail.com"
            className="inline-flex items-center gap-2.5 clay-btn px-8 py-4 rounded-2xl text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
          >
            <Mail size={16} />
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
