import { Layers, PieChart, GitBranch, BadgeCheck } from "lucide-react";

const ICONS = {
  layers: Layers,
  pie: PieChart,
  pipeline: GitBranch,
  badge: BadgeCheck,
};

function ServiceCard({ title, desc, tools, icon }) {
  const Icon = ICONS[icon] || Layers;

  return (
    <div className="rounded-3xl border border-white/10 bg-black/25 p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
          <Icon className="h-5 w-5 text-white/80" />
        </div>
      </div>

      <div className="mt-5 text-sm text-blue-300/90">{tools}</div>
    </div>
  );
}

export default function ServicesSection({ services }) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="grid md:grid-cols-2 gap-6">
        {services.cards.map((c) => (
          <ServiceCard
            key={c.title}
            title={c.title}
            desc={c.desc}
            tools={c.tools}
            icon={c.icon}
          />
        ))}
      </div>
    </div>
  );
}