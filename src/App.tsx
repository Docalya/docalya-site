import Header from "./components/Header";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Unsubscribe from "./components/Unsubscribe";

export default function App() {
  // Si l'URL est /desinscription, on affiche la page de désinscription
  if (window.location.pathname.startsWith("/desinscription")) {
    return <Unsubscribe />;
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header />
      <main>
        <Hero />
        <Offer />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}