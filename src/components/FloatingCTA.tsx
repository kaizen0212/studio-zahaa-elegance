import { BOOKSY_URL } from "@/data/services";

export function FloatingCTA() {
  return (
    <a
      href={BOOKSY_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 left-4 right-4 z-40 rounded-full bg-noir px-6 py-4 text-center text-sm font-medium uppercase tracking-widest text-ivory shadow-2xl md:hidden"
    >
      Réserver
    </a>
  );
}
