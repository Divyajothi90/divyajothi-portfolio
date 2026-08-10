import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic foundation.">
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl bg-white border border-hairline p-6 soft-shadow card-hover hover:-translate-y-1 hover:border-cherry"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-xl gradient-cherry text-white shrink-0">
                <GraduationCap className="size-6" />
              </span>
              <div className="flex-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-cherry">{e.period}</div>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink leading-snug">{e.degree}</h3>
                <div className="text-sm text-subtle mt-1">{e.school}</div>
                <div className="text-sm font-medium text-ink mt-2">{e.detail}</div>
                {e.highlights.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.highlights.map((h) => (
                      <span key={h} className="text-[11px] font-semibold px-2.5 py-1 rounded-full gradient-cherry text-white">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
