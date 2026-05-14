import { BOOKSY_URL } from "@/data/services";

export function Booking() {
  return (
    <section id="booking" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-background to-secondary" />
      <div className="mx-auto max-w-3xl px-6 text-center reveal">
        <span className="text-xs uppercase tracking-[0.4em] text-gold">Réservation</span>
        <h2 className="mt-4 text-4xl md:text-6xl">
          Offrez-vous un <span className="italic text-gradient-gold">moment</span>
        </h2>
        <div className="mx-auto my-8 h-px w-16 bg-gold" />
        <p className="text-foreground/75 text-lg">
          Réservez votre rendez-vous en quelques clics, 24h/24 et 7j/7 sur Booksy.
        </p>
        <a
          href={BOOKSY_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block rounded-full bg-noir px-10 py-5 text-sm font-medium uppercase tracking-widest text-ivory transition-all hover:bg-noir/90 hover:scale-[1.02]"
        >
          Réserver en ligne sur Booksy
        </a>
      </div>
    </section>
  );
}
