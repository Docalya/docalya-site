import Header from "./components/Header";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
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
