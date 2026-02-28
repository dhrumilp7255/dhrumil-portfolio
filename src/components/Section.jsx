/*export default function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-5">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-white/60">{subtitle}</p> : null}
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 shadow-soft backdrop-blur-xl">
        <div className="p-5 md:p-6">{children}</div>
      </div>
    </section>
  );
}*/

/*export default function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-white/60">{subtitle}</p> : null}
      </div>

      {/* No blur box here *//*}
      <div>{children}</div>
    </section>
  );
}*/

/*import { Sparkle } from "lucide-react";

export default function Section({ id, title, children, subtitle }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      {/* Section Label (Centered like screenshot) *//*}
      <div className="flex items-center justify-center gap-2 text-sm text-white/70 mb-4">
        <Sparkle className="h-4 w-4 opacity-70" />
        <span>{title}</span>
      </div>

      {/* Optional Subtitle *//*}
      {subtitle && (
        <p className="text-center text-sm text-white/50 mb-12">
          {subtitle}
        </p>
      )}

      {/* Section Content *//*}
      <div>{children}</div>
    </section>
  );
}*/

import { Sparkle } from "lucide-react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12">
      
      {/* Small Label (like Introduction / Projects) */}
      <div className="flex items-center justify-center gap-2 text-sm text-white/60">
        <Sparkle className="h-4 w-4 opacity-70" />
        <span>{title}</span>
      </div>

      {/* Large Section Heading */}
      {subtitle && (
        <h2 className="mt-6 text-center text-2xl md:text-3xl font-semibold tracking-tight leading-snug max-w-1xl mx-auto">
  {subtitle}
</h2>
      )}

      {/* Content */}
      <div className="mt-14">
        {children}
      </div>
    </section>
  );
}
