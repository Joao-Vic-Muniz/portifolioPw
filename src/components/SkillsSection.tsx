const skills = [
  { name: "React", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "PostgreSQL", level: 75 },
  { name: "Docker", level: 70 },
  { name: "GraphQL", level: 68 },
  { name: "AWS", level: 65 },
];

const tools = [
  "VS Code", "Git", "Figma", "Postman", "Linux",
  "Vercel", "Supabase", "Prisma", "Vite", "Jest",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-mono tracking-[0.25em] uppercase mb-3">
            03. Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Nossas <span className="text-primary">habilidades</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bars */}
          <div className="flex flex-col gap-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-primary font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 glow"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools grid */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-muted-foreground uppercase tracking-wider text-sm">
              Ferramentas & Tecnologias que Davi e João utilizam
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="gradient-border rounded-xl px-4 py-3 text-center text-sm font-medium hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}