import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BenefitsStrip } from "@/components/BenefitsStrip";
import { Philosophy } from "@/components/Philosophy";
import { WhyDecant } from "@/components/WhyDecant";
import { Catalog } from "@/components/Catalog";
import { HowToOrder } from "@/components/HowToOrder";
import { Faq } from "@/components/Faq";
import { AboutDecant } from "@/components/AboutDecant";
import { RepeatedCta } from "@/components/RepeatedCta";
import { Footer } from "@/components/Footer";
import { perfumes } from "@/lib/perfumes";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BenefitsStrip />
        <Philosophy />
        <WhyDecant />
        <Catalog perfumes={perfumes} />
        <HowToOrder />
        <AboutDecant />
        <Faq />
        <RepeatedCta />
      </main>
      <Footer />
    </>
  );
}