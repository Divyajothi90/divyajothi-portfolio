import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MouseGlow } from "@/components/MouseGlow";

export const Route = createFileRoute("/")({
  component: Portfolio,

  head: () => ({
    meta: [
      {
        title: "Divyajothi S — Full-Stack Developer & AI Solutions",
      },
      {
        name: "description",
        content:
          "Portfolio of Divyajothi S — Final-year B.Tech AI & Data Science student and Full-Stack Developer building production-ready web applications and AI-powered software.",
      },
      {
        property: "og:title",
        content: "Divyajothi S — Full-Stack Developer & AI Solutions",
      },
      {
        property: "og:description",
        content:
          "Full-Stack Developer specializing in React, Tailwind CSS, REST APIs, and applied AI/ML. Class Topper, CGPA 9.28/10.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        rel: "canonical",
        href: "/",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Divyajothi S",
          jobTitle: "Full-Stack Developer",
          url: "https://divyajothi-s.lovable.app/",
          sameAs: [
            "https://www.linkedin.com/in/divyajothi786/",
            "https://github.com/Divyajothi90",
          ],
        }),
      },
    ],
  }),
});

function Portfolio() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />

      <MouseGlow />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}