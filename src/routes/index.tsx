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
import ogImage from "@/assets/og-image.jpg";

const SITE_URL = "https://studio-zahaa-elegance.lovable.app";
const TITLE = "Studio Zahaa | Institut de Beauté à Asnières-sur-Seine";
const DESCRIPTION =
  "Studio Zahaa, institut de beauté à Asnières-sur-Seine (92600). Soins visage, lifting coréen, laser diode, microblading, sourcils et cils. Réservation en ligne 24h/24. ⭐ 4.8/5";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "institut beauté Asnières, soin visage, lifting coréen, laser diode, microblading, sourcils, épilation laser, Studio Zahaa",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}${ogImage}` },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}${ogImage}` },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Studio Zahaa",
          url: SITE_URL,
          image: `${SITE_URL}${ogImage}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "99 Quai du Docteur Dervaux",
            addressLocality: "Asnières-sur-Seine",
            postalCode: "92600",
            addressRegion: "Hauts-de-Seine",
            addressCountry: "FR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "40",
          },
          priceRange: "€€",
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
            { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
          ],
          areaServed: [
            "Asnières-sur-Seine",
            "Clichy",
            "Levallois-Perret",
            "Courbevoie",
            "Colombes",
          ],
        }),
      },
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
