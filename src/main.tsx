import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import "./styles.css";
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

const queryClient = new QueryClient();

function App() {
  useReveal();
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
