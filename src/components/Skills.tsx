import { motion } from "framer-motion";
import { Section } from "./Section";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools of the craft."
      subtitle="A working toolkit across full-stack web development, applied AI/ML, UI/UX, and modern developer workflows."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g, i) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative rounded-2xl bg-white border border-hairline p-6 soft-shadow card-hover hover:-translate-y-1 hover:border-cherry"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex size-11 items-center justify-center rounded-xl gradient-cherry text-white">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display font-semibold text-lg text-ink">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted text-ink border border-hairline"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
