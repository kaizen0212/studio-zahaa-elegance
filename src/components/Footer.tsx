export function Footer() {
  return (
    <footer className="bg-noir py-16 text-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-baseline gap-2">
              <span className="font-serif text-3xl">Studio</span>
              <span className="font-serif text-3xl italic text-gradient-gold">Zahaa</span>
            </a>
            <p className="mt-4 text-sm text-ivory/60">
              L'écrin de beauté d'Asnières-sur-Seine.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gold">Liens rapides</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#services" className="text-ivory/80 hover:text-ivory">Prestations</a></li>
              <li><a href="#booking" className="text-ivory/80 hover:text-ivory">Réserver</a></li>
              <li><a href="#contact" className="text-ivory/80 hover:text-ivory">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gold">Adresse</p>
            <p className="mt-4 font-serif text-lg">99 Quai du Docteur Dervaux</p>
            <p className="font-serif text-lg">92600 Asnières-sur-Seine</p>
          </div>
        </div>
        <div className="gold-divider mt-12" />
        <p className="mt-8 text-center text-xs uppercase tracking-widest text-ivory/50">
          © 2025 Studio Zahaa — Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
