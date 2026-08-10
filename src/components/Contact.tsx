import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const email = fd.get("email");
    const subject = fd.get("subject") || "Portfolio inquiry";
    const message = fd.get("message");
    const body = `From: ${name} <${email}>%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(String(subject))}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" eyebrow="Contact">
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.05]">
            Let's build something <span className="text-gradient-cherry">meaningful</span> together.
          </h2>
          <p className="mt-5 text-subtle leading-relaxed max-w-lg">
            Open to Full-Stack Developer roles, AI-focused internships, and collaborations on
            impactful web products. Reach out and I'll respond within a day.
          </p>

          <div className="mt-8 space-y-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 group">
              <span className="inline-flex size-10 items-center justify-center rounded-xl gradient-cherry text-white"><Mail className="size-4" /></span>
              <span className="text-ink font-medium group-hover:text-cherry transition">{profile.email}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
              <span className="inline-flex size-10 items-center justify-center rounded-xl gradient-cherry text-white"><Linkedin className="size-4" /></span>
              <span className="text-ink font-medium group-hover:text-cherry transition">LinkedIn / Divyajothi</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 group">
              <span className="inline-flex size-10 items-center justify-center rounded-xl gradient-cherry text-white"><Github className="size-4" /></span>
              <span className="text-ink font-medium group-hover:text-cherry transition">GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={onSubmit}
          className="rounded-3xl bg-white border border-hairline p-7 soft-shadow-lg space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="name" label="Name" required />
            <Field name="email" label="Email" type="email" required />
          </div>
          <Field name="subject" label="Subject" />
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-subtle">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full rounded-xl bg-cream border border-hairline px-4 py-3 text-sm focus:outline-none focus:border-cherry focus:ring-4 focus:ring-cherry/10 transition"
              placeholder="Tell me about your project or role…"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full gradient-cherry text-white px-6 py-3 text-sm font-semibold soft-shadow hover:opacity-95 transition"
          >
            {sent ? <><CheckCircle2 className="size-4" /> Message ready — check your mail app</> : <><Send className="size-4" /> Send Message</>}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-subtle">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl bg-cream border border-hairline px-4 py-3 text-sm focus:outline-none focus:border-cherry focus:ring-4 focus:ring-cherry/10 transition"
      />
    </div>
  );
}
