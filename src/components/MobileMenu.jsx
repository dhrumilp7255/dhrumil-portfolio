import { X } from "lucide-react";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function MobileMenu({ open, activeId, onClose, onGo }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button
        aria-label="Close menu backdrop"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />
      <div className="absolute left-3 right-3 top-3 rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-soft">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="text-sm font-medium text-white/90">Menu</div>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-3">
          <div className="grid gap-2">
            {items.map((it) => {
              const active = it.id === activeId;
              return (
                <button
                  key={it.id}
                  onClick={() => {
                    onGo(it.id);
                    onClose();
                  }}
                  className={[
                    "text-left w-full rounded-2xl px-4 py-3 transition border",
                    active
                      ? "bg-white/10 border-white/15"
                      : "bg-white/5 border-white/10 hover:bg-white/10",
                  ].join(" ")}
                >
                  <div className="text-sm font-medium">{it.label}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
