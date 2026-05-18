import { useEffect, useState } from "react";
import { reviews } from "@/data/services";

export function Reviews() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="bg-noir py-24 text-ivory md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-gold">Témoignages</span>
        <h2 className="mt-4 text-4xl md:text-5xl">Elles en parlent</h2>
        <div className="mx-auto my-8 h-px w-16 bg-gold" />

        <div className="relative mt-12 min-h-[280px]">
          {reviews.map((r, idx) => (
            <figure
              key={r.name}
              className={`absolute inset-0 transition-all duration-700 ${
                idx === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="text-gold text-xl tracking-[0.35em]">★★★★★</div>
              <blockquote className="mt-8 font-serif text-2xl italic leading-relaxed text-ivory/95 md:text-3xl">
                « {r.text} »
              </blockquote>
              <figcaption className="mt-8 text-sm uppercase tracking-[0.3em] text-ivory/60">
                — {r.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Avis ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-8 bg-gold" : "w-1.5 bg-ivory/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
