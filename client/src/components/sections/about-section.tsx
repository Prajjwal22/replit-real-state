import { Award, Handshake, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
              15+ Years of Real Estate Excellence
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              KRPL PROJECTS has been a cornerstone of Gurugram's real estate landscape, delivering premium properties and exceptional service to discerning clients.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-brand-blue text-white rounded-full p-3 mr-4 flex-shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Proven Expertise</h3>
                  <p className="text-brand-gray">
                    Over 15 years of experience in Gurugram's premium real estate market with deep local knowledge.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-brand-gold text-white rounded-full p-3 mr-4 flex-shrink-0">
                  <Handshake className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Trusted Partnerships</h3>
                  <p className="text-brand-gray">
                    Strong relationships with leading developers like DLF, Paras, Birla, and other premium brands.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500 text-white rounded-full p-3 mr-4 flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-2">Client-Centric Approach</h3>
                  <p className="text-brand-gray">
                    Personalized service and end-to-end support from property selection to final possession.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="KRPL Projects professional team" 
              className="rounded-xl shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="KRPL Projects office building" 
              className="rounded-xl shadow-lg mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Client consultation meeting" 
              className="rounded-xl shadow-lg -mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Real estate awards and recognition" 
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
