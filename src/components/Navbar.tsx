import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(scrolled * 100);

      let current = "#home";
      for (const it of navItems) {
        const el = document.querySelector(it.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = it.href;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-nav">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient-cherry">Divyajothi</span>
          <span className="text-ink"> </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((it) => {
            const isActive = active === it.href;
            return (
              <a
                key={it.href}
                href={it.href}
                className="relative px-3 py-2 text-sm font-medium text-subtle hover:text-ink transition-colors"
              >
                {it.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 gradient-cherry rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href="/Divyajothi_S_Resume.pdf" target="_blank"
              rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-2 rounded-full gradient-cherry text-white px-5 py-2.5 text-sm font-semibold shadow-lg hover:scale-105 transition-all duration-300">
           <Download className="size-4" />
           View Resume
          </a>
          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex size-10 items-center justify-center rounded-full bg-white border border-hairline"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-hairline">
        <div className="h-px gradient-cherry" style={{ width: `${progress}%` }} />
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden glass-nav border-t border-hairline"
          >
            <div className="px-5 py-4 grid gap-1">
              {navItems.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-ink hover:bg-muted"
                >
                  {it.label}
                </a>
              ))}
             <a href="/Divyajothi_S_Resume.pdf" target="_blank"
                rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-cherry text-white px-4 py-2 text-sm font-medium">
                <Download className="size-4" />
                View Resume
             </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
