import Hero from "@/components/sections/hero";
import FeaturedProjects from "@/components/sections/featured-projects";
import AboutSection from "@/components/sections/about-section";
import ServicesSection from "@/components/sections/services-section";
import Testimonials from "@/components/sections/testimonials";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}
