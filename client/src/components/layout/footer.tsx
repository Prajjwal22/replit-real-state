import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_ITEMS } from "@/lib/constants";
import logoPath from "@assets/WhatsApp Image 2025-06-30 at 16.16.31_1751447837515.jpeg";

export default function Footer() {
  const featuredProjects = [
    "DLF Aralias",
    "Paras Floret", 
    "Suncity Township",
    "Trevoc",
    "Birla Navya",
  ];

  return (
    <footer className="bg-brand-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoPath} 
                alt={`${COMPANY_INFO.name} Logo`} 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <h3 className="text-3xl font-bold">{COMPANY_INFO.name}</h3>
            </div>
            <p className="text-blue-200 mb-6 max-w-md">{COMPANY_INFO.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-brand-blue hover:bg-brand-gold transition-colors p-3 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-brand-blue hover:bg-brand-gold transition-colors p-3 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-brand-blue hover:bg-brand-gold transition-colors p-3 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-brand-blue hover:bg-brand-gold transition-colors p-3 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-blue-200 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Featured Projects</h4>
            <ul className="space-y-2">
              {featuredProjects.map((project) => (
                <li key={project}>
                  <Link href="/projects" className="text-blue-200 hover:text-white transition-colors">
                    {project}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200">&copy; 2024 {COMPANY_INFO.name}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
