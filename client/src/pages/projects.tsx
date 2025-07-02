import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import ProjectCard from "@/components/ui/project-card";
import type { Project } from "@shared/schema";

export default function Projects() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const filteredProjects = projects?.filter((project) => {
    const categoryMatch = categoryFilter === "all" || project.category === categoryFilter;
    const statusMatch = statusFilter === "all" || project.status === statusFilter;
    return categoryMatch && statusMatch;
  });

  const uniqueStatuses = [...new Set(projects?.map(p => p.status) || [])];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="bg-brand-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Skeleton className="h-12 w-96 mx-auto mb-4 bg-blue-800" />
            <Skeleton className="h-6 w-[600px] mx-auto bg-blue-800" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <Skeleton className="w-full h-64" />
                <div className="p-6">
                  <Skeleton className="h-8 w-48 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Explore our complete portfolio of premium properties across Gurugram's most prestigious locations
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-brand-gray" />
            <span className="text-brand-navy font-medium">Filter by:</span>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="township">Township</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                {uniqueStatuses.map((status) => (
                  <SelectItem key={status} value={status}>{status}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-brand-gray">
            Showing {filteredProjects?.length || 0} of {projects?.length || 0} projects
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {filteredProjects?.length === 0 && (
          <div className="text-center py-16">
            <p className="text-brand-gray text-lg">No projects found matching your filters.</p>
            <Button 
              onClick={() => {
                setCategoryFilter("all");
                setStatusFilter("all");
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
