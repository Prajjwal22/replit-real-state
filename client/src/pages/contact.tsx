import ContactSection from "@/components/sections/contact-section";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Ready to start your real estate journey? Our expert team is here to help you every step of the way
          </p>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
}
