import { Code2, Cpu, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    desc: "Interfaces modernas desenvolvidas por Davi e João com React, TypeScript e animações fluidas.",
  },
  {
    icon: Cpu,
    title: "Backend",
    desc: "APIs robustas criadas com Node.js, Express e bancos de dados SQL/NoSQL.",
  },
  {
    icon: Globe,
    title: "DevOps",
    desc: "Deploy contínuo utilizando Docker, CI/CD e serviços em nuvem.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-primary text-sm font-mono tracking-[0.25em] uppercase mb-3">
              01. Sobre nós
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Construindo o futuro,{" "}
              <span className="text-primary">linha por linha</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Somos Davi e João, desenvolvedores full stack apaixonados por criar
              produtos digitais que combinam desempenho técnico com design
              excepcional. Trabalhamos em projetos modernos focados em
              performance, escalabilidade e experiência do usuário.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Quando não estamos codando, estamos estudando novas tecnologias,
              desenvolvendo projetos próprios e evoluindo constantemente como
              desenvolvedores.
            </p>
            <a
              href="#contact"
              className="inline-block px-7 py-3 rounded-full border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
            >
              Entrar em Contato
            </a>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="gradient-border rounded-xl p-5 flex gap-4 items-start hover:bg-surface-raised transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}