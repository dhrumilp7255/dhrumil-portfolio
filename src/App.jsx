import { useEffect, useMemo, useState } from "react";
import { Menu, Sparkle } from "lucide-react";
import ProfileCard from "./components/ProfileCard";
import FloatingNav from "./components/FloatingNav";
import MobileMenu from "./components/MobileMenu";
import Section from "./components/Section";
import { resume } from "./data/resume";
import ServicesSection from "./components/ServicesSection";
import ProjectsGrid from "./components/ProjectsGrid";

function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || "home");

  useEffect(() => {
    const els = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
  .filter((e) => e.isIntersecting)
  .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];

if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { root: null, rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return [activeId];
}

const sectionTitle = {
  home: "Home",
  about: "About",
  services: "Services",
  experience: "Resume",
  projects: "Projects",
  skills: "Skills",
  contact: "Contact",
};

export default function App() {
  const sectionIds = useMemo(() => ["home", "about", "services", "resume", "projects", "skills", "contact"], []);
  const [activeId] = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#07070A] text-white">
      {/* soft background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-4 pt-4">
          <div className="rounded-2xl border border-white/10 bg-black/55 backdrop-blur-xl shadow-soft px-3 py-2 flex items-center justify-between">
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
            >
              <Menu className="h-4 w-4" />
            </button>
            <div className="text-sm font-medium text-white/90">{sectionTitle[activeId] ?? "Portfolio"}</div>
            <div className="w-9" />
          </div>
        </div>
      </div>

      <MobileMenu open={menuOpen} activeId={activeId} onClose={() => setMenuOpen(false)} onGo={goTo} />

      {/* Desktop floating nav */}
      <div className="hidden lg:block">
        <FloatingNav activeId={activeId} onGo={goTo} />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-2 lg:px-3 py-10 pt-24 lg:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-10">
            <ProfileCard resume={resume} onGo={goTo} />
          </div>

          <main className="space-y-2 pb-16">
            {/* LANDING / HERO */}
            <div id="home" className="scroll-mt-24">
  <div className="min-h-[calc(100vh-120px)] flex flex-col justify-center">
    <div className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4">
      <Sparkle className="h-4 w-4 opacity-80" />
      <span>{resume.hero.eyebrow}</span>
    </div>

    <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl">
      {resume.hero.headline}
    </h1>

    <div className="mt-7 flex flex-wrap gap-3">
      <button
        onClick={() => goTo("projects")}
        className="rounded-xl bg-white text-black font-medium px-6 py-3 text-sm hover:opacity-90 transition"
      >
        {resume.hero.ctaPrimary}
      </button>

      <button
  onClick={() => goTo("resume")}
  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
>
  View Experience
</button>
    </div>

    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left max-w-4xl">
      {resume.hero.stats.map((s) => (
        <div key={s.label}>
          <div className="text-4xl font-semibold tracking-tight">{s.value}</div>
          <div className="mt-2 text-sm text-white/70">{s.label}</div>
        </div>
      ))}
    </div>
  </div>
</div>

            {/* Rest of sections */}
            <Section id="about" title={resume.about.label} subtitle={resume.about.headline}>
  <div className="mx-auto max-w-3xl">
    <div className="space-y-5 text-white/75 leading-[1.9] text-[15px] md:text-base">
      {resume.about.paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </div>
  </div>
</Section>
            <Section
  id="services"
  title={resume.services.label}
  subtitle={resume.services.headline}
>
  <ServicesSection services={resume.services} />
</Section>
            <Section
  id="resume"
  title="Resume"
  subtitle="Career Snapshot"
>
  <div className="mx-auto max-w-6xl">
    {/* short intro paragraph */}
    <p className="mx-auto max-w-4xl text-center text-sm md:text-base text-white/65 leading-relaxed">
      Currently pursuing an M.S. in Information Systems & Operations Management in the U.S., with 2+ years of experience
      across analytics, reporting, and operational decision support. I focus on building reliable metrics, dashboards,
      and data pipelines that make performance visible and decisions faster.
    </p>

    <div className="mt-14 grid md:grid-cols-2 gap-12">
      {/* EDUCATION */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold">Education</h3>
        <div className="mt-6 border-l border-white/10 pl-6 space-y-10">
          {resume.education.map((e) => (
            <div key={e.school + e.degree} className="relative">
              <div className="absolute -left-[30px] top-2 h-3 w-3 rounded-full bg-white/25 border border-white/20" />
              <div className="text-sm text-white/50">{e.dates}</div>
              <div className="mt-2 text-lg font-semibold">{e.degree}</div>
              <div className="mt-1 text-sm text-white/70">{e.school}</div>
              {e.details ? (
                <div className="mt-2 text-sm text-white/60 leading-relaxed">{e.details}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* WORK EXPERIENCE */}
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold">Work Experience</h3>
        <div className="mt-6 border-l border-white/10 pl-6 space-y-10">
          {resume.experience.map((job) => (
            <div key={job.company + job.role} className="relative">
              <div className="absolute -left-[30px] top-2 h-3 w-3 rounded-full bg-white/25 border border-white/20" />
              <div className="text-sm text-white/50">{job.dates}</div>
              <div className="mt-2 text-lg font-semibold">{job.role}</div>
              <div className="mt-1 text-sm text-white/70">
                {job.company} • {job.location}
              </div>
              {job.bullets?.length ? (
                <ul className="mt-3 space-y-2 text-sm text-white/65 leading-relaxed">
                  {job.bullets.slice(0, 2).map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</Section>

            <Section
  id="projects"
  title="Projects"
  subtitle="Featured Projects"
>
  <ProjectsGrid projects={resume.projects} />
</Section>

            <Section id="skills" title="Skills" subtitle="Tools & technologies">
              <div className="grid md:grid-cols-2 gap-4">
                {resume.skills.map((s) => (
                  <div key={s.group} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold">
  <span className="opacity-80">
    {s.group === "Programming & Query" ? "💻" :
     s.group === "Data Engineering" ? "🧬" :
     s.group === "Analytics & BI" ? "📊" :
     s.group === "Cloud & Tools" ? "☁️" : "✨"}
  </span>
  <span>{s.group}</span>
</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.items.map((it) => (
                        <span key={it} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="contact" title="Contact Me" subtitle="Get In Touch">
  <div className="mx-auto max-w-5xl">
    {/* Top intro */}
    <div className="text-center">
      <p className="mt-2 text-white/60">
        Prefer direct contact? I’m always happy to connect and usually respond within{" "}
        <span className="text-white font-semibold">24 hours</span>.
      </p>

      <div className="mt-6 flex flex-col items-center gap-3 text-sm text-white/80">
        <a
          href={`mailto:${resume.email}`}
          className="inline-flex items-center gap-2 hover:text-white transition"
        >
          <span className="text-white/60">✉️</span>
          <span>{resume.email}</span>
        </a>

        <a
          href={resume.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 hover:text-white transition"
        >
          <span className="text-white/60">🔗</span>
          <span className="underline underline-offset-4">{resume.linkedinDisplay ?? "LinkedIn"}</span>
        </a>
      </div>
    </div>

    {/* Form */}
    <form
      className="mt-10 space-y-4"
      onSubmit={async (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const response = await fetch("https://formspree.io/f/mnjbgbrk", {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" },
  });

  if (response.ok) {
    form.reset();
    alert("Message sent successfully!");
  } else {
    alert("Something went wrong. Please try again.");
  }
}}
    >
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-sm outline-none placeholder:text-white/35 focus:border-white/25 focus:bg-black/45"
          placeholder="Your Name"
        />
        <input
          name="company"
          className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-sm outline-none placeholder:text-white/35 focus:border-white/25 focus:bg-black/45"
          placeholder="Company Name"
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="email"
          className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-sm outline-none placeholder:text-white/35 focus:border-white/25 focus:bg-black/45"
          placeholder="you@example.com"
          type="email"
        />
        <input
        name="location"
          className="w-full rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-sm outline-none placeholder:text-white/35 focus:border-white/25 focus:bg-black/45"
          placeholder="Location"
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        rows="8"
        className="w-full rounded-3xl border border-white/10 bg-black/35 px-5 py-5 text-sm outline-none placeholder:text-white/35 focus:border-white/25 focus:bg-black/45 resize-none"
        placeholder="Write your message here..."
      />

      {/* Bottom row */}
      <div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-4">
        <button className="w-full md:w-[360px] rounded-2xl bg-white py-4 text-sm font-semibold text-black hover:opacity-90 transition">
          Start a Conversation
        </button>

        <div className="text-xs text-white/50 md:text-right">
          Your message goes directly to my inbox.
        </div>
      </div>
    </form>
  </div>
</Section>
          </main>
        </div>
      </div>
    </div>
  );
}
