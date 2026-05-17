import heroImg from "@/assets/hero.jpg";
import { BOOKSY_URL } from "@/data/services";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Intérieur luxueux de l'institut de beauté Studio Zahaa à Asnières-sur-Seine"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-noir/40 via-noir/30 to-noir/70" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-24 text-center text-ivory">
        <span className="mb-6 text-xs uppercase tracking-[0.4em] text-gold">
          Institut de beauté · Asnières-sur-Seine
        </span>

        <h1 className="text-5xl leading-[1.05] sm:text-7xl md:text-8xl">
          Studio <span className="italic text-gradient-gold">Zahaa</span>
          <span className="sr-only"> – Institut de Beauté à Asnières-sur-Seine</span>
        </h1>

        <div className="my-8 h-px w-24 bg-gold" />

        <p className="max-w-xl font-serif text-xl italic text-ivory/90 sm:text-2xl">
          Révélez votre beauté naturelle.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
          <a
            href={BOOKSY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-widest text-noir transition-all hover:bg-gold-soft hover:scale-[1.02]"
          >
            Prendre rendez-vous
          </a>
          <a
            href="#services"
            className="rounded-full border border-ivory/40 px-8 py-4 text-sm font-medium uppercase tracking-widest text-ivory transition-all hover:border-ivory hover:bg-ivory/10"
          >
            Découvrir
          </a>
        </div>

        <div className="mt-14 flex items-center gap-3 text-ivory/85">
          <span className="text-gold text-lg tracking-widest">★★★★★</span>
          <span className="text-sm">
            <strong className="font-medium">4.8/5</strong> · 40 avis clients
          </span>
        </div>
      </div>
    </section>
  );
}
