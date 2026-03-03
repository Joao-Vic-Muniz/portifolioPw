import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-mono tracking-[0.25em] uppercase mb-3">
            04. Contato
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Vamos <span className="text-primary">conversar?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Davi e João estão abertos a oportunidades freelance, projetos colaborativos
            ou até mesmo uma boa conversa sobre tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {sent ? (
              <div className="flex-1 flex items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-12 text-center">
                <div>
                  <div className="text-4xl mb-3">🎉</div>
                  <p className="font-display font-bold text-xl text-primary mb-2">
                    Mensagem enviada!
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Responderemos em breve.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Seu nome"
                    className="w-full rounded-xl bg-card border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="w-full rounded-xl bg-card border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-muted-foreground">
                    Mensagem
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Sua mensagem..."
                    className="w-full rounded-xl bg-card border border-border px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow"
                >
                  <Send size={16} /> Enviar Mensagem
                </button>
              </>
            )}
          </form>

          {/* Info */}
          <div className="flex flex-col gap-6 justify-center">
            <div>
              <h3 className="font-display font-bold text-xl mb-2">
                Informações de contato
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Prefere falar diretamente? Entre em contato com Davi e João pelas
                redes sociais ou por e-mail.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, label: "contato@email.com", href: "mailto:contato@email.com" },
                { icon: Github, label: "github.com/daviejoao", href: "https://github.com" },
                { icon: Linkedin, label: "linkedin.com/in/daviejoao", href: "https://linkedin.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}