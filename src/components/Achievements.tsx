import { motion } from "framer-motion";
import { Section } from "./Section";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition & leadership.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-hairline p-6 soft-shadow card-hover hover:-translate-y-1 hover:border-cherry text-center"
            >
              <span className="inline-flex size-14 items-center justify-center rounded-2xl gradient-cherry text-white mx-auto">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 font-display font-semibold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm text-subtle leading-relaxed">{a.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
