import { motion } from "framer-motion";
import { ExternalLink, Github, Target, Lightbulb, Layers } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work."
      subtitle="Case studies spanning full-stack web development, applied ML, and hardware-software integration."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
            className="group flex flex-col rounded-3xl bg-white border border-hairline overflow-hidden soft-shadow card-hover hover:-translate-y-1.5 hover:border-cherry"
          >
            <div className="relative aspect-[16/9] overflow-hidden">

  <img
    src={p.image}
    alt={p.title}
    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

  <div className="absolute top-5 left-5">
    <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-cherry">
      {p.tag}
    </span>
  </div>

  <div className="absolute bottom-5 left-5">
    <h3 className="text-2xl font-bold text-white">
      {p.title}
    </h3>
  </div>

</div>
            <div className="flex-1 p-6 flex flex-col gap-5">
              <div>
                <Row icon={Target} label="Problem" text={p.problem} />
                <Row icon={Lightbulb} label="Solution" text={p.solution} />
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cherry mb-2">
                  <Layers className="size-3.5" /> Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-muted text-ink border border-hairline">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="text-sm text-subtle space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full gradient-cherry shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Row({ icon: Icon, label, text }: { icon: React.ComponentType<{ className?: string }>; label: string; text: string }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cherry mb-1">
        <Icon className="size-3.5" /> {label}
      </div>
      <p className="text-sm text-subtle leading-relaxed">{text}</p>
    </div>
  );
}
