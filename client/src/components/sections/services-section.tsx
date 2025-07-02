import { Home, TrendingUp, Key, Calculator, FileText, Search } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Home,
  TrendingUp,
  Key,
  Calculator,
  FileText,
  Search,
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Our Services</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to your investment and lifestyle needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div key={service.title} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className={`${service.color} text-white rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-brand-gray">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
