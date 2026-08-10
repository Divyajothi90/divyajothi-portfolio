import { motion } from "framer-motion";
import { Section } from "./Section";
import { stats } from "@/data/portfolio";
import { useCountUp } from "@/hooks/useCountUp";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Building Ideas.
          <br />
          <span className="text-gradient-cherry">Creating Impact.</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 text-lg text-subtle leading-relaxed"
        >
           B.Tech Artificial Intelligence &amp; Data Science Engineer with a strong
          specialization in Full-Stack Web Development. I build responsive, production-ready web
          applications using React, Tailwind CSS, REST APIs, and modern development workflows. My
          experience spans UI/UX design, frontend engineering, backend integration, and AI-driven
          problem solving. I enjoy developing scalable digital products that provide meaningful user
          experiences while continuously expanding my expertise in modern software engineering.
        </motion.p>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function Stat({
  label, value, suffix, decimals = 0, index,
}: { label: string; value: number; suffix?: string; decimals?: number; index: number }) {
  const { ref, display } = useCountUp(value, 1600, decimals);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl bg-white border border-hairline p-5 soft-shadow card-hover hover:-translate-y-1"
    >
      <div className="font-display text-3xl md:text-4xl font-bold">
        <span ref={ref} className="text-gradient-cherry">{display}</span>
        <span className="text-subtle text-xl">{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-medium text-subtle">{label}</div>
    </motion.div>
  );
}
