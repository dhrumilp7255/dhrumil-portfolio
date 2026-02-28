import { ExternalLink, MapPin, Github, Linkedin, Mail } from "lucide-react";

export default function ProfileCard({ resume, onGo }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 shadow-soft backdrop-blur-xl p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-3xl font-semibold leading-tight truncate">{resume.name}</div>
          {/* Open to work banner */}
<div className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-sm">
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
  </span>
  Seeking Full-Time Data Roles | May 2026
</div>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <img
          src="/profile.png"
          alt={`${resume.name} profile`}
          className="h-44 w-44 rounded-full object-cover border-2 border-white/40"
        />
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <div className="text-xs text-white/50">Specialization:</div>
          <div className="text-base text-white/90">{resume.title}{resume.subtitle ? ` | ${resume.subtitle}` : ""}</div>
        </div>

        <div>
          <div className="text-xs text-white/50 flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> Based in:
          </div>
          <div className="text-base text-white/90">{resume.location}</div>
        </div>

        <div className="flex items-center gap-3">
          <a
            className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition grid place-items-center"
            href={resume.github || "#"}
            target={resume.github ? "_blank" : undefined}
            rel="noreferrer"
            aria-label="GitHub"
            onClick={(e) => !resume.github && e.preventDefault()}
          >
            <Github className="h-4 w-4 opacity-80" />
          </a>
          <a
            className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition grid place-items-center"
            href={resume.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4 opacity-80" />
          </a>
          <a
            className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition grid place-items-center"
            href={`mailto:${resume.email}`}
            aria-label="Email"
          >
            <Mail className="h-4 w-4 opacity-80" />
          </a>
        </div>

        <button
          onClick={() => onGo("contact")}
          className="w-full rounded-2xl border border-white/15 bg-white/5 py-3 text-sm font-medium hover:bg-white/10 transition"
        >
          Let's Work!
        </button>
      </div>
    </div>
  );
}
