import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PrimaryFeatures from "@/components/PrimaryFeatures";
import SecondaryFeatures from "@/components/SecondaryFeatures";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Testimonials />
        <CallToAction />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
