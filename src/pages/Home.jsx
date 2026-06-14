import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Technologies from "../components/Technologies/Technologies";
import SuccessCases from "../components/SuccessCases/SuccessCases";
import Benefits from "../components/Benefits/Benefits";
import CTA from "../components/CTA/CTA";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <SuccessCases />
      <Benefits />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />

    </>
  );
}

export default Home;