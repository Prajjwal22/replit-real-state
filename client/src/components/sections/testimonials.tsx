import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Testimonial } from "@shared/schema";

export default function Testimonials() {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-4 bg-blue-800" />
            <Skeleton className="h-6 w-[600px] mx-auto bg-blue-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-xl">
                <Skeleton className="h-6 w-32 mb-6" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                <div className="flex items-center">
                  <Skeleton className="h-12 w-12 rounded-full mr-4" />
                  <div>
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Hear from satisfied clients who've found their dream homes through KRPL PROJECTS
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="text-brand-gold text-2xl flex">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-brand-gray mb-6 italic">"{testimonial.message}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">{testimonial.name}</h4>
                  <p className="text-brand-gray text-sm">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
