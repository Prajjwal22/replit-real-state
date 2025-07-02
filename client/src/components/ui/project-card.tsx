import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
}

const statusColors = {
  "Premium": "bg-brand-gold",
  "Ready": "bg-green-500",
  "Township": "bg-blue-500",
  "Luxury": "bg-purple-500",
  "Ultra Luxury": "bg-red-500",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <img 
        src={project.imageUrl} 
        alt={`${project.name} - ${project.description}`}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-brand-navy">{project.name}</h3>
          <Badge 
            className={`${statusColors[project.status as keyof typeof statusColors] || 'bg-gray-500'} text-white`}
          >
            {project.status}
          </Badge>
        </div>
        <p className="text-brand-gray mb-4 line-clamp-2">{project.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-brand-gray">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{project.sector}</span>
          </div>
          <Button asChild variant="ghost" className="text-brand-blue hover:text-brand-navy p-0">
            <Link href={`/projects/${project.id}`}>
              View Details
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
