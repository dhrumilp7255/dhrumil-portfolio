import { Home, User, Briefcase, Layers, Wrench, Mail,LayoutDashboard } from "lucide-react";
/*import { Layers } from "lucide-react";*/
const items = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "services", label: "Services", Icon: LayoutDashboard },
  { id: "resume", label: "Resume", Icon: Briefcase },
  { id: "projects", label: "Projects", Icon: Layers },
  { id: "skills", label: "Skills", Icon: Wrench },
  { id: "contact", label: "Contact", Icon: Mail },
];

export default function FloatingNav({ activeId, onGo }) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur-xl shadow-soft">
        {items.map(({ id, label, Icon }) => {
          const active = activeId === id;
          return (
            <button
              key={id}
              onClick={() => onGo(id)}
              className={[
                "group flex items-center gap-2 rounded-xl px-3 py-2 transition",
                active ? "bg-white/10 border border-white/15" : "hover:bg-white/5",
              ].join(" ")}
              title={label}
            >
              <Icon className={["h-4 w-4", active ? "opacity-100" : "opacity-70 group-hover:opacity-100"].join(" ")} />
              <span className={["text-xs", active ? "text-white" : "text-white/70 group-hover:text-white"].join(" ")}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
