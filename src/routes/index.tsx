import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Zahaa — Institut de beauté à Asnières-sur-Seine" },
      {
        name: "description",
        content:
          "Studio Zahaa, institut de beauté haut de gamme à Asnières-sur-Seine. Soins du visage, techniques coréennes, laser, sourcils & cils. Réservez en ligne.",
      },
      { property: "og:title", content: "Studio Zahaa — Révélez votre beauté naturelle" },
      {
        property: "og:description",
        content:
          "Soins visage, lifting coréen, laser et plus encore — Asnières-sur-Seine. ⭐ 4.8/5",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
      />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster position="top-center" richColors />
      <div className="h-20 md:hidden" />
    </>
  );
}
