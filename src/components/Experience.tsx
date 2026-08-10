import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've contributed."
      subtitle="Internship experiences bridging design, engineering, and applied AI."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-hairline md:-translate-x-1/2" />
        <div className="space-y-10 md:space-y-16">
          {experience.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>div:first-child]:col-start-2" : ""}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 size-4 rounded-full gradient-cherry ring-4 ring-cream" />
                <div className="rounded-2xl bg-white border border-hairline p-6 soft-shadow card-hover hover:-translate-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cherry">
                    <Briefcase className="size-3.5" /> {e.period}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">{e.role}</h3>
                  <div className="text-subtle text-sm mt-0.5">{e.company}</div>
                  <ul className={`mt-4 space-y-2 text-sm text-subtle leading-relaxed ${i % 2 ? "" : "md:text-right"}`}>
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-2 md:justify-end">
                        <span className={`mt-2 size-1.5 rounded-full gradient-cherry shrink-0 ${i % 2 ? "" : "md:order-2 md:ml-2"}`} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
