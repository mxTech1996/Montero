'use client';

import BenefitsSection from '@/components/organisms/Benefits';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import InfoSection from '@/components/organisms/Info';
import ConsultingIntro from '@/components/organisms/Intro';
import Navbar from '@/components/organisms/Navbar';
import ProductsShowcase from '@/components/organisms/Products';
import ServicesSlider from '@/components/organisms/Services';
import MinimalistTestimonials from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Navbar />
      <HeroSection />
      <ConsultingIntro />
      <ServicesSlider />
      <BenefitsSection />
      <ProductsShowcase />
      <InfoSection />
      <MinimalistTestimonials />
      <Footer />
    </main>
  );
}
