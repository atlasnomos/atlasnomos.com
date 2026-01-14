import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Kernel } from "@/components/Kernel";
import { Compliance } from "@/components/Compliance";
import { Sentinel } from "@/components/Sentinel";
import { Download } from "@/components/Download";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Kernel />
      <Compliance />
      <Testimonials />
      <FAQ />
      <Sentinel />
      <Download />
      <Download />
      <Footer />
    </main>
  );
}
