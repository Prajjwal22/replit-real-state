import { projects, contacts, testimonials, type Project, type Contact, type Testimonial, type InsertProject, type InsertContact, type InsertTestimonial } from "@shared/schema";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private contacts: Map<number, Contact>;
  private testimonials: Map<number, Testimonial>;
  private currentProjectId: number;
  private currentContactId: number;
  private currentTestimonialId: number;

  constructor() {
    this.projects = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.currentProjectId = 1;
    this.currentContactId = 1;
    this.currentTestimonialId = 1;

    // Initialize with KRPL PROJECTS portfolio
    this.initializeProjects();
    this.initializeTestimonials();
  }

  private initializeProjects() {
    const projectsData: InsertProject[] = [
      {
        name: "Essel Tower",
        developer: "Essel Group",
        location: "MG Road",
        sector: "Sector 28",
        description: "Premium commercial tower with modern amenities and strategic location in the heart of Gurugram's business district.",
        features: ["Commercial Spaces", "Modern Architecture", "Prime Location", "High Speed Elevators"],
        status: "Premium",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "commercial",
        amenities: ["24/7 Security", "Power Backup", "Parking", "Maintenance"],
        featured: true,
      },
      {
        name: "Platinum Tower",
        developer: "Platinum Group",
        location: "Golf Course Extension Road",
        sector: "Sector 65",
        description: "Luxury residential tower offering premium lifestyle with world-class amenities and stunning city views.",
        features: ["Luxury Apartments", "City Views", "Premium Amenities", "Vastu Compliant"],
        status: "Luxury",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "residential",
        amenities: ["Swimming Pool", "Gym", "Clubhouse", "Gardens", "Security"],
        featured: true,
      },
      {
        name: "Suncity Township",
        developer: "Suncity Builders",
        location: "Sohna Road",
        sector: "Sector 54",
        description: "Integrated township with residential, commercial, and recreational facilities spread across acres of green landscape.",
        features: ["Integrated Township", "Green Spaces", "Multiple Amenities", "Schools & Hospitals"],
        status: "Township",
        imageUrl: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "township",
        amenities: ["Schools", "Hospital", "Shopping Complex", "Sports Facilities", "Parks"],
        featured: true,
      },
      {
        name: "Suncity Vatsal Valley",
        developer: "Suncity Builders",
        location: "Sohna Road",
        sector: "Sector 83",
        description: "Premium residential project with spacious apartments and modern amenities in a serene environment.",
        features: ["Spacious Apartments", "Modern Design", "Green Environment", "Premium Location"],
        status: "Ready",
        imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "residential",
        amenities: ["Clubhouse", "Swimming Pool", "Gym", "Children's Play Area", "Security"],
        featured: false,
      },
      {
        name: "Paras Floret",
        developer: "Paras Buildtech",
        location: "Golf Course Extension Road",
        sector: "Sector 59",
        description: "Contemporary living spaces with lush green surroundings and modern amenities designed for comfortable living.",
        features: ["Contemporary Design", "Green Spaces", "Modern Amenities", "Prime Location"],
        status: "Ready",
        imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "residential",
        amenities: ["Landscaped Gardens", "Clubhouse", "Sports Facilities", "Security", "Power Backup"],
        featured: true,
      },
      {
        name: "DLF Aralias",
        developer: "DLF Limited",
        location: "Golf Course Road",
        sector: "DLF Phase 2",
        description: "Ultra-luxury apartments with world-class amenities in the heart of Gurugram's most prestigious location.",
        features: ["Ultra Luxury", "World Class Amenities", "Premium Location", "Iconic Design"],
        status: "Premium",
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "residential",
        amenities: ["Concierge Service", "Swimming Pool", "Spa", "Fine Dining", "Valet Parking"],
        featured: true,
      },
      {
        name: "Paras Manor",
        developer: "Paras Buildtech",
        location: "Golf Course Extension Road",
        sector: "Sector 1",
        description: "Elegant residential project offering premium lifestyle with thoughtfully designed apartments and modern facilities.",
        features: ["Premium Lifestyle", "Elegant Design", "Modern Facilities", "Strategic Location"],
        status: "Premium",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "residential",
        amenities: ["Clubhouse", "Swimming Pool", "Gym", "Landscaped Gardens", "24/7 Security"],
        featured: false,
      },
      {
        name: "Trevoc",
        developer: "Trevoc Group",
        location: "New Gurugram",
        sector: "Sector 56",
        description: "Innovative design meets luxury living with panoramic city views and premium amenities in this architectural marvel.",
        features: ["Innovative Design", "City Views", "Premium Amenities", "Architectural Marvel"],
        status: "Luxury",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "residential",
        amenities: ["Sky Lounge", "Infinity Pool", "Fitness Center", "Rooftop Gardens", "Concierge"],
        featured: true,
      },
      {
        name: "DLF Privana",
        developer: "DLF Limited",
        location: "New Gurugram",
        sector: "Sector 76",
        description: "Ultra-premium residences with exclusive amenities and unparalleled luxury in DLF's flagship development.",
        features: ["Ultra Premium", "Exclusive Amenities", "Flagship Development", "Unparalleled Luxury"],
        status: "Ultra Luxury",
        imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "residential",
        amenities: ["Private Elevator", "Butler Service", "Exclusive Clubhouse", "Wine Cellar", "Private Garden"],
        featured: true,
      },
      {
        name: "Birla Navya",
        developer: "Birla Estates",
        location: "Sohna Road",
        sector: "Sector 63A",
        description: "Thoughtfully designed homes by Birla Group with world-class infrastructure and sustainable living features.",
        features: ["Sustainable Living", "World Class Infrastructure", "Thoughtful Design", "Premium Brand"],
        status: "Premium",
        imageUrl: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        category: "residential",
        amenities: ["Eco-friendly Features", "Smart Home Technology", "Clubhouse", "Swimming Pool", "Jogging Track"],
        featured: true,
      },
    ];

    projectsData.forEach(project => {
      const id = this.currentProjectId++;
      this.projects.set(id, { ...project, id });
    });
  }

  private initializeTestimonials() {
    const testimonialsData: InsertTestimonial[] = [
      {
        name: "Rajesh Sharma",
        designation: "DLF Aralias Resident",
        message: "KRPL PROJECTS made our dream of owning a luxury apartment in DLF Aralias come true. Their expertise and dedication are unmatched.",
        rating: 5,
        project: "DLF Aralias",
      },
      {
        name: "Priya Gupta",
        designation: "Property Investor",
        message: "Exceptional service and deep market knowledge. They helped us find the perfect investment property at Paras Floret.",
        rating: 5,
        project: "Paras Floret",
      },
      {
        name: "Amit Kumar",
        designation: "Homeowner",
        message: "Professional, reliable, and trustworthy. KRPL PROJECTS delivered beyond our expectations for our Suncity Township purchase.",
        rating: 5,
        project: "Suncity Township",
      },
    ];

    testimonialsData.forEach(testimonial => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(project => project.featured);
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { ...insertContact, id, createdAt: new Date() };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = { ...testimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
