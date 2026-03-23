import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About - Colossal Hub",
  description: "Learn about our mission, values, and the team behind Colossal Hub.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </>
  );
}
