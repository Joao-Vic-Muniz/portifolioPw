import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      {/* Decorative orbs */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl float-anim" />
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-primary/5 blur-2xl float-anim" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 section-reveal">
        <p className="text-primary text-sm font-mono tracking-[0.3em] uppercase mb-4 glow-text">
          Olá, me chamo
        </p>
        <h1 className="text-6xl md:text-8xl font-display font-extrabold leading-none mb-4">
          Alex <span className="text-primary glow-text">Silva</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-2">
          Desenvolvedor Full Stack
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Transformo ideias em experiências digitais elegantes com React, Node.js e paixão por UI/UX.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow pulse-glow-anim"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-primary/40 text-foreground hover:border-primary hover:text-primary transition-colors font-semibold"
          >
            Fale Comigo
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "mailto:alex@email.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
