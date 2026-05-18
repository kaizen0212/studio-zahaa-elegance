import { useState } from "react";
import { categories } from "@/data/services";

export function Services() {
  const [active, setActive] = useState<string>("all");
  const visible = active === "all" ? categories : categories.filter((c) => c.id === active);

  return (
    <section id="services" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Carte des soins</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Nos prestations</h2>
          <div className="mx-auto my-8 h-px w-16 bg-gold" />
          <p className="mx-auto max-w-2xl text-foreground/70">
            Une sélection de soins signature, pensés sur-mesure pour révéler l'éclat de votre peau.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal mt-12 flex flex-wrap justify-center gap-2">
          <FilterChip active={active === "all"} onClick={() => setActive("all")}>
            Tout voir
          </FilterChip>
          {categories.map((c) => (
            <FilterChip key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>
              {c.label} {c.emoji}
            </FilterChip>
          ))}
        </div>

        <div className="mt-16 space-y-20">
          {visible.map((cat) => (
            <div key={cat.id} className="reveal">
              <div className="mb-8 flex items-baseline justify-between border-b border-border pb-4">
                <h3 className="text-2xl md:text-3xl">
                  {cat.label} {cat.emoji && <span className="ml-2">{cat.emoji}</span>}
                </h3>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {cat.services.length} soins
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.services.map((s) => (
                  <article
                    key={s.name}
                    className="group flex flex-col justify-between gap-4 border border-border bg-card p-6 transition-all hover:border-gold hover:shadow-[0_8px_30px_-12px_oklch(0.74_0.11_78_/_0.35)]"
                  >
                    <div>
                      <h4 className="font-serif text-xl leading-snug">{s.name}</h4>
                      <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                        {s.duration}
                      </p>
                    </div>
                    <div className="flex items-end justify-between">
                      <span className="font-serif text-3xl text-gradient-gold">{s.price}</span>
                      <span className="text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
                        Réserver →
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm transition-all ${
        active
          ? "bg-noir text-ivory"
          : "border border-border bg-background text-foreground/70 hover:border-gold hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
