import HeroSection from "@/components/heroSection/HeroSection";
import Track from "@/components/track/Track";
import Portfolio from "@/components/portfolio/Portfolio";
import Connect from "@/components/connect/Connect";
import Navbar from "@/components/navbar/Navbar";
import Invester from "@/components/invester/Invester";
import Trading from "@/components/trading/Trading";
import Security from "@/components/security/Security";
import Contacts from "@/components/contact/Contact";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Portfolio />
      <Connect />
      <Track />
      <Invester />
      <Trading />
      <Security />
      <Contacts />
    </div>
  );
}
