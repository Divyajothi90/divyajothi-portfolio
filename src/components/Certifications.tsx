import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified skills."
      subtitle="Industry-recognized certifications validating my AI and development foundations."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative overflow-hidden rounded-2xl bg-white border border-hairline p-6 soft-shadow card-hover hover:-translate-y-1 hover:border-cherry"
          >
            <div
              aria-hidden
              className="absolute -right-8 -top-8 size-32 rounded-full gradient-cherry opacity-10"
            />

            <BadgeCheck className="size-8 text-cherry" />

            <h3 className="mt-4 font-display text-base font-semibold text-ink leading-snug">
              {c.name}
            </h3>

            <div className="mt-2 flex items-center justify-between text-xs text-subtle">
              <span className="font-medium">{c.issuer}</span>
              <span>{c.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}