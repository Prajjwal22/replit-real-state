# KRPL PROJECTS - Real Estate Website

## Overview

KRPL PROJECTS is a premium real estate agency website built as a full-stack application showcasing luxury properties in Gurugram. The application features a modern React frontend with a Node.js/Express backend, designed to help clients discover and inquire about premium real estate investments.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: Hot module replacement with Vite integration

### Design System
- **UI Library**: shadcn/ui with Radix UI primitives
- **Theme**: Custom brand colors (navy blue, gold, gray palette)
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Icons**: Lucide React icon library

## Key Components

### Pages
- **Home**: Hero section, featured projects, about, services, testimonials, contact
- **Projects**: Filterable project gallery with search and category filters
- **Project Detail**: Individual project pages with full specifications
- **About**: Company history, values, and team information
- **Services**: Comprehensive service offerings
- **Contact**: Contact form and company information

### Data Models
- **Projects**: Property listings with images, descriptions, features, and amenities
- **Contacts**: Customer inquiry forms with validation
- **Testimonials**: Client reviews and ratings

### UI Components
- Reusable project cards with hover effects
- Contact forms with validation
- Navigation with mobile responsive menu
- Loading skeletons for better UX
- Toast notifications for user feedback

## Data Flow

1. **Frontend Requests**: React components use TanStack Query to fetch data
2. **API Layer**: Express.js routes handle HTTP requests
3. **Data Storage**: Currently uses in-memory storage (MemStorage class)
4. **Database Ready**: Drizzle schema defined for PostgreSQL migration
5. **Response Handling**: JSON responses with proper error handling

### API Endpoints
- `GET /api/projects` - List all projects
- `GET /api/projects/featured` - Featured projects only
- `GET /api/projects/:id` - Single project details
- `POST /api/contacts` - Create contact inquiry
- `GET /api/testimonials` - Customer testimonials

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript
- Express.js server framework
- Drizzle ORM with PostgreSQL dialect
- Neon Database serverless connection

### UI and Styling
- Tailwind CSS for styling
- shadcn/ui component system
- Radix UI primitives
- Lucide React icons
- Various UI components (forms, dialogs, etc.)

### Development Tools
- Vite for build tooling and HMR
- ESBuild for server bundling
- TypeScript for type safety
- Replit integration plugins

### Validation and Forms
- Zod for schema validation
- React Hook Form for form management
- hookform/resolvers for Zod integration

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- Express server with TypeScript execution via tsx
- Hot reloading for both client and server code
- Replit development banner integration

### Production Build
- Vite build for optimized frontend bundle
- ESBuild for server bundle compilation
- Static file serving from Express
- Environment-based configuration

### Database Strategy
- Drizzle migrations ready for PostgreSQL
- Environment variable configuration
- Production database provisioning required
- Connection pooling via Neon Database

### Build Commands
- `npm run dev` - Development with hot reloading
- `npm run build` - Production build (client + server)
- `npm run start` - Production server
- `npm run db:push` - Database schema updates

## Changelog

Changelog:
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.