import { ArrowUpRight } from "lucide-react";

import { useEffect, useState } from "react";

function ProjectCard({ p }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!p.images || p.images.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % p.images.length);
    }, 2000); // change speed here (2000ms = 2s)

    return () => clearInterval(interval);
  }, [p.images]);

  return (
    <a
      href={p.github}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-black/30 transition duration-300 hover:border-white/20"
    >

     {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={p.images?.[index] ?? p.images?.[0]}
          alt={p.name}
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />

        {/* Optional: makes it look cleaner on dark UI */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 text-sm font-medium text-white border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">
              View Project <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs text-white/50">{p.date}</div>
        <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
        <p className="mt-3 text-sm text-white/65 leading-relaxed">{p.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {(p.tech || []).map((t) => (
            <span
              key={t}
              className="text-xs text-white/70 border border-white/10 px-3 py-1 rounded-full bg-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function ProjectsGrid({ projects = [] }) {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.slice(0, 4).map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>
    </div>
  );
}