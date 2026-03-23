import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact - Colossal Hub",
  description: "Get in touch with the Colossal Hub team.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
