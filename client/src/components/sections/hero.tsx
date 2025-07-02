import { Button } from "@/components/ui/button";
import { Building, Phone } from "lucide-react";
import { Link } from "wouter";
import { COMPANY_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.7), rgba(30, 58, 138, 0.8)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Premium Real Estate
          <span className="block text-brand-gold">in Gurugram</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
          With over {COMPANY_INFO.experience} years of excellence, {COMPANY_INFO.name} has been Gurugram's trusted partner in luxury real estate investments
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="bg-brand-gold hover:bg-yellow-500 text-white transform hover:scale-105 transition-all">
            <Link href="/projects">
              <Building className="mr-2 h-5 w-5" />
              Explore Projects
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Get Consultation
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">{COMPANY_INFO.experience}</div>
            <div className="text-sm md:text-base">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">{COMPANY_INFO.projectsCount}</div>
            <div className="text-sm md:text-base">Premium Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">{COMPANY_INFO.happyClients}</div>
            <div className="text-sm md:text-base">Happy Families</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-brand-gold mb-2">{COMPANY_INFO.satisfaction}</div>
            <div className="text-sm md:text-base">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
