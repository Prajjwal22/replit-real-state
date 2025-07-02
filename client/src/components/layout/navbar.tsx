import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { COMPANY_INFO, NAVIGATION_ITEMS } from "@/lib/constants";
import logoPath from "@assets/WhatsApp Image 2025-06-30 at 16.16.31_1751447837515.jpeg";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src={logoPath} 
                alt={`${COMPANY_INFO.name} Logo`} 
                className="h-12 w-auto object-contain"
              />
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-brand-navy">{COMPANY_INFO.name}</h1>
                <p className="text-xs text-brand-gray">{COMPANY_INFO.tagline}</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    location === item.href
                      ? "text-brand-navy"
                      : "text-brand-gray hover:text-brand-blue"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-brand-blue hover:bg-brand-navy">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        location === item.href
                          ? "text-brand-navy"
                          : "text-brand-gray hover:text-brand-blue"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-brand-blue hover:bg-brand-navy mt-4">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
