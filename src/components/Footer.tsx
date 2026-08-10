import { Linkedin, Github, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline bg-white/50">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="font-display text-xl font-bold">
            <span className="text-gradient-cherry">Divyajothi S</span>
          </div>
          <p className="mt-1 text-sm text-subtle">Full-Stack Developer · AI &amp; Data Science</p>
        </div>
        <div className="text-sm text-subtle md:text-center">
          
        </div>
        <div className="flex md:justify-end items-center gap-3">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="inline-flex size-10 items-center justify-center rounded-full bg-white border border-hairline hover:border-cherry hover:text-cherry transition">
            <Mail className="size-4" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex size-10 items-center justify-center rounded-full bg-white border border-hairline hover:border-cherry hover:text-cherry transition">
            <Linkedin className="size-4" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex size-10 items-center justify-center rounded-full bg-white border border-hairline hover:border-cherry hover:text-cherry transition">
            <Github className="size-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 text-xs text-subtle flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {year} Divyajothi S. All rights reserved.</div>
          <div>Coimbatore, Tamil Nadu, India</div>
        </div>
      </div>
    </footer>
  );
}
