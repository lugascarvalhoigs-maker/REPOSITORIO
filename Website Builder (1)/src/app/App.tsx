import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Logos } from "./components/Logos";
import { Features } from "./components/Features";
import { SocialProof } from "./components/SocialProof";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <SocialProof />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
