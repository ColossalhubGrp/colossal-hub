import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PrimaryFeatures from "@/components/PrimaryFeatures";
import SecondaryFeatures from "@/components/SecondaryFeatures";
import WhyTeamsChoose from "@/components/WhyTeamsChoose";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
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
        <WhyTeamsChoose />
        <Testimonials />
        <CallToAction />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
