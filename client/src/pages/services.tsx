import { Home, TrendingUp, Key, Calculator, FileText, Search, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Home,
  TrendingUp,
  Key,
  Calculator,
  FileText,
  Search,
};

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Comprehensive real estate solutions designed to meet all your property investment and lifestyle needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <div key={service.title} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`${service.color} text-white rounded-full w-20 h-20 flex items-center justify-center mb-6`}>
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
                  <p className="text-brand-gray mb-6">{service.description}</p>
                  
                  {/* Service Features */}
                  <div className="space-y-2 mb-6">
                    {getServiceFeatures(service.title).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-brand-gray">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button asChild variant="outline" className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                    <Link href="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Our Process</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              A streamlined approach to ensure your real estate journey is smooth and successful
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-brand-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Consultation</h3>
              <p className="text-brand-gray">
                We understand your needs, budget, and preferences through detailed consultation
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Property Search</h3>
              <p className="text-brand-gray">
                We curate properties that match your criteria from our extensive portfolio
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Site Visits</h3>
              <p className="text-brand-gray">
                Guided site visits to help you experience the properties firsthand
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-3">Completion</h3>
              <p className="text-brand-gray">
                Complete documentation, financing, and handover with full support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-gray mb-8 max-w-3xl mx-auto">
            Contact our expert team today to discuss your real estate needs and discover how we can help you achieve your property goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-navy">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/projects">
                View Our Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function getServiceFeatures(serviceTitle: string): string[] {
  const features: Record<string, string[]> = {
    "Property Sales": [
      "Residential & commercial properties",
      "New launches & resale properties", 
      "Price negotiation support",
      "Market analysis & insights"
    ],
    "Investment Advisory": [
      "Portfolio diversification strategies",
      "ROI analysis & projections",
      "Market trend insights",
      "Risk assessment & mitigation"
    ],
    "Property Management": [
      "Tenant screening & management",
      "Maintenance & repairs coordination",
      "Rent collection & accounting",
      "Property marketing & leasing"
    ],
    "Loan Assistance": [
      "Home loan pre-approval",
      "Documentation support",
      "Bank liaison & follow-up",
      "Competitive interest rates"
    ],
    "Legal Support": [
      "Document verification",
      "Title clearance assistance",
      "Registration support",
      "Legal compliance guidance"
    ],
    "Property Valuation": [
      "Market-based valuations",
      "Investment potential assessment",
      "Comparative market analysis",
      "Professional valuation reports"
    ]
  };
  
  return features[serviceTitle] || [];
}
