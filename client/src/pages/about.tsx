import { Award, Handshake, Users, Target, Eye, Heart } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About KRPL PROJECTS</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            {COMPANY_INFO.experience} years of excellence in transforming dreams into reality through premium real estate solutions
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Our Story
              </h2>
              <p className="text-lg text-brand-gray mb-6">
                Founded with a vision to revolutionize the real estate landscape in Gurugram, KRPL PROJECTS has grown from a small startup to one of the most trusted names in premium real estate. Our journey of {COMPANY_INFO.experience} years has been marked by unwavering commitment to excellence, integrity, and client satisfaction.
              </p>
              <p className="text-lg text-brand-gray mb-6">
                We specialize in luxury residential, commercial, and township projects, working exclusively with India's leading developers including DLF, Paras, Birla, Trevoc, and Suncity. Our deep understanding of the Gurugram market, combined with our personalized approach, has helped hundreds of families find their perfect homes and savvy investors build profitable portfolios.
              </p>
              <p className="text-lg text-brand-gray">
                Today, we stand proud as a company that has not only achieved remarkable growth but has also maintained the highest standards of professional ethics and customer service that our clients have come to expect and trust.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="KRPL Projects professional team" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Modern office building" 
                className="rounded-xl shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Client consultation meeting" 
                className="rounded-xl shadow-lg -mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Awards and recognition" 
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-blue text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Integrity</h3>
              <p className="text-brand-gray">
                We conduct our business with the highest ethical standards, ensuring transparency and honesty in every transaction and relationship.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-brand-gold text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Excellence</h3>
              <p className="text-brand-gray">
                We strive for excellence in every aspect of our service, from property selection to client support, ensuring exceptional experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Client-First</h3>
              <p className="text-brand-gray">
                Our clients' dreams and aspirations drive everything we do, and their satisfaction is our greatest measure of success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Why Choose KRPL PROJECTS</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Discover what sets us apart in the competitive real estate landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-brand-blue text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Proven Track Record</h3>
              <p className="text-brand-gray">
                With {COMPANY_INFO.experience} years of experience and {COMPANY_INFO.happyClients} satisfied clients, our track record speaks for itself in delivering successful real estate solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-brand-gold text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Trusted Partnerships</h3>
              <p className="text-brand-gray">
                Strong relationships with premier developers like DLF, Paras, Birla, and Trevoc ensure access to the best properties before they hit the market.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Expert Team</h3>
              <p className="text-brand-gray">
                Our team of experienced professionals provides expert guidance throughout your real estate journey, from initial consultation to final possession.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Market Expertise</h3>
              <p className="text-brand-gray">
                Deep knowledge of Gurugram's real estate market trends, pricing, and future development plans helps you make informed investment decisions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Personalized Service</h3>
              <p className="text-brand-gray">
                Every client receives personalized attention and customized solutions tailored to their specific needs, budget, and lifestyle preferences.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-indigo-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-brand-navy mb-4">End-to-End Support</h3>
              <p className="text-brand-gray">
                From property search and documentation to loan assistance and legal support, we provide comprehensive services under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{COMPANY_INFO.experience}</div>
              <div className="text-lg text-blue-200">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{COMPANY_INFO.projectsCount}</div>
              <div className="text-lg text-blue-200">Premium Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{COMPANY_INFO.happyClients}</div>
              <div className="text-lg text-blue-200">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-gold mb-2">{COMPANY_INFO.satisfaction}</div>
              <div className="text-lg text-blue-200">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
