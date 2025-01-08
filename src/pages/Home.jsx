import Header from "../components/HeaderComponent";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-outfit">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}