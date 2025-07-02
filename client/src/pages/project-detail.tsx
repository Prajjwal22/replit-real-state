import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, MapPin, Building2, Users, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@shared/schema";

export default function ProjectDetail() {
  const { id } = useParams();
  
  const { data: project, isLoading } = useQuery<Project>({
    queryKey: [`/api/projects/${id}`],
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <Skeleton className="w-full h-96" />
            <div className="p-8">
              <Skeleton className="h-12 w-96 mb-4" />
              <Skeleton className="h-6 w-full mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Skeleton className="h-8 w-32 mb-4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
                <div>
                  <Skeleton className="h-8 w-32 mb-4" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-brand-navy mb-4">Project Not Found</h1>
          <p className="text-brand-gray mb-6">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const statusColors = {
    "Premium": "bg-brand-gold",
    "Ready": "bg-green-500",
    "Township": "bg-blue-500",
    "Luxury": "bg-purple-500",
    "Ultra Luxury": "bg-red-500",
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.name}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold text-brand-navy mb-2">{project.name}</h1>
                <div className="flex items-center text-brand-gray mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{project.location}, {project.sector}</span>
                </div>
              </div>
              <Badge 
                className={`${statusColors[project.status as keyof typeof statusColors] || 'bg-gray-500'} text-white text-lg px-4 py-2`}
              >
                {project.status}
              </Badge>
            </div>
            
            <p className="text-lg text-brand-gray mb-8">{project.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center">
                  <Building2 className="mr-2 h-6 w-6" />
                  Project Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-brand-gray">Developer:</span>
                    <span className="font-semibold text-brand-navy">{project.developer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">Category:</span>
                    <span className="font-semibold text-brand-navy capitalize">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">Location:</span>
                    <span className="font-semibold text-brand-navy">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-gray">Sector:</span>
                    <span className="font-semibold text-brand-navy">{project.sector}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-brand-gray">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4 flex items-center">
                <Users className="mr-2 h-6 w-6" />
                Amenities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-brand-gray">
                    <CheckCircle className="h-4 w-4 mr-2 text-brand-blue" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Interested in this project?</h3>
                <p className="text-brand-gray mb-6">Get in touch with our experts for more information and site visits.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-navy">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/projects">View More Projects</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
