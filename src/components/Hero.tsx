import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin, ArrowRight, Download} from "lucide-react";
import portraitAsset from "@/assets/images/profile.png";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* animated gradient bg */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 size-[520px] rounded-full opacity-30 blur-3xl gradient-cherry" />
        <div className="absolute top-40 -right-32 size-[480px] rounded-full opacity-20 blur-3xl"
             style={{ background: "radial-gradient(circle, #D72638 0%, transparent 70%)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* Left */}
        <div> 
         <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-sm font-medium tracking-[0.2em] uppercase text-subtle"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-2 text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight"
          >
            DIVYAJOTHI <span className="text-gradient-cherry">S</span>
            <span className="block mt-3 text-2xl md:text-3xl font-semibold text-subtle">Full-Stack Developer &amp; AI Solutions</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 space-y-1"
          >
            {profile.roles.map((r) => (
              <p key={r} className="text-lg md:text-xl font-medium text-ink">{r}</p>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-subtle leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full gradient-cherry text-white px-5 py-3 text-sm font-medium soft-shadow hover:translate-y-[-1px] transition-transform">
              View Projects <ArrowRight className="size-4" />
            </a>
            <a href="/Divyajothi_S_Resume.pdf" target="_blank"rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-white border border-hairline px-5 py-3 text-sm font-medium text-ink hover:border-cherry transition">
              <Download className="size-4" />
                     View Resume
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-3 text-sm font-medium hover:opacity-90 transition">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 grid grid-cols-2 gap-3 max-w-xl"
          >
            <ContactCard icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactCard icon={Linkedin} label="LinkedIn" value="Divyajothi" href={profile.linkedin} />
            <ContactCard icon={MapPin} label="Location" value="Coimbatore, TN" />
          </motion.div>
        </div>

        {/* Right */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute -inset-2 rounded-[2rem] gradient-cherry opacity-25 blur-2xl" />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[2rem] p-1.5 gradient-cherry soft-shadow-lg"
            >
              <div className="rounded-[1.75rem] overflow-hidden bg-cream">
                <img
                  src={portraitAsset}
                  alt="Portrait of Divyajothi S"
                  className="w-full h-[520px] object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>

            {/* Floating card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -left-6 md:-left-10 top-16 bg-white rounded-2xl px-4 py-3 soft-shadow-lg border border-hairline"
            >
              <div className="text-xs font-medium text-subtle">CGPA</div>
              <div className="text-2xl font-bold text-gradient-cherry font-display">9.28<span className="text-base text-subtle">/10</span></div>
              
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="absolute -right-4 md:-right-8 bottom-16 bg-white rounded-2xl px-4 py-3 soft-shadow-lg border border-hairline max-w-[220px]"
            >
              <div className="text-xs font-medium text-subtle"></div>
              <div className="text-sm font-semibold text-ink leading-tight mt-0.5">
                Artificial Intelligence &amp; Data Science
              </div>
              <div className="text-[11px] font-medium text-cherry mt-1">2023 – 2027</div>
            </motion.div>

            {/* particles */}
            {[...Array(6)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute size-2 rounded-full gradient-cherry"
                style={{
                  top: `${10 + i * 14}%`,
                  left: `${-10 + i * 22}%`,
                }}
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 rounded-xl bg-white border border-hairline px-3 py-2.5 card-hover hover:border-cherry hover:-translate-y-0.5">
      <span className="inline-flex size-9 items-center justify-center rounded-lg gradient-cherry text-white">
        <Icon className="size-4" />
      </span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-wider text-subtle font-medium">{label}</div>
        <div className="text-sm font-medium text-ink truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner;
}
