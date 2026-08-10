import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mb-14 md:mb-20"
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-cherry">
                <span className="size-1.5 rounded-full gradient-cherry" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.05]">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-5 text-base md:text-lg text-subtle leading-relaxed">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
