import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Plataforma E-Commerce",
    description:
      "Plataforma de e-commerce desenvolvida por Davi e João com carrinho, pagamentos e painel administrativo. Construída com React, Node.js e PostgreSQL.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Aplicativo Gerenciador de Tarefas",
    description:
      "Aplicação moderna de gerenciamento de tarefas com drag-and-drop, categorias e sincronização em tempo real via WebSockets.",
    tags: ["React", "TypeScript", "Socket.io", "Tailwind"],
    color: "from-violet-500/20 to-violet-500/5",
  },
  {
    title: "API REST Financeira",
    description:
      "API robusta desenvolvida para controle financeiro com autenticação JWT, rate limiting e documentação Swagger.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    color: "from-amber-500/20 to-amber-500/5",
  },
  {
    title: "Dashboard de Analytics",
    description:
      "Dashboard interativo criado por Davi e João com visualizações de dados em tempo real, gráficos avançados e filtros dinâmicos.",
    tags: ["React", "Recharts", "TanStack Query", "Tailwind"],
    color: "from-rose-500/20 to-rose-500/5",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-mono tracking-[0.25em] uppercase mb-3">
            02. Projetos
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            O que nós <span className="text-primary">construímos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`gradient-border rounded-2xl p-7 bg-gradient-to-br ${project.color} group hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-bold text-xl text-foreground">
                  {project.title}
                </h3>
                <div className="flex gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="#" aria-label="Demo" className="hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono"
                  >
                    {tag}
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