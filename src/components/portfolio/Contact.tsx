import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.open(
      `mailto:kusumasr926@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="clay-section py-28 sm:py-36 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 contact-reveal">
          <span className="text-xs tracking-[0.3em] uppercase text-primary/70 font-semibold mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-lg">
            Have an idea, opportunity, or project? Let&apos;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact links */}
          <div className="lg:col-span-2 space-y-5 contact-reveal">
            <a
              href="mailto:kusumasr926@gmail.com"
              className="clay-card p-5 rounded-2xl flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">Email</p>
                <p className="text-white text-sm font-medium">
                  kusumasr926@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/kusumasr96"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-card p-5 rounded-2xl flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-white/12 transition-colors">
                <Github size={18} className="text-white/70" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">GitHub</p>
                <p className="text-white text-sm font-medium">
                  github.com/kusumasr96
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/kusuma-sr-8b7614335/"
              target="_blank"
              rel="noopener noreferrer"
              className="clay-card p-5 rounded-2xl flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0a66c2]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0a66c2]/25 transition-colors">
                <Linkedin size={18} className="text-[#0a66c2]" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">LinkedIn</p>
                <p className="text-white text-sm font-medium">
                  Kusuma SR
                </p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 clay-card-elevated p-7 rounded-2xl contact-reveal"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white/50 text-xs font-medium mb-2 tracking-wide"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white/50 text-xs font-medium mb-2 tracking-wide"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-white/50 text-xs font-medium mb-2 tracking-wide"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="clay-btn w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-all duration-300"
              >
                <Send size={15} />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
