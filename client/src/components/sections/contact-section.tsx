import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { COMPANY_INFO } from "@/lib/constants";

const contactFormSchema = insertContactSchema.extend({
  firstName: insertContactSchema.shape.firstName.min(2, "First name must be at least 2 characters"),
  lastName: insertContactSchema.shape.lastName.min(2, "Last name must be at least 2 characters"),
  email: insertContactSchema.shape.email.email("Please enter a valid email address"),
  phone: insertContactSchema.shape.phone.min(10, "Please enter a valid phone number"),
  message: insertContactSchema.shape.message.min(10, "Message must be at least 10 characters"),
});

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-4">Contact Us</h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Ready to find your dream property? Get in touch with our expert team today
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-brand-navy mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-brand-blue text-white rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Office Address</h4>
                  <p className="text-brand-gray">{COMPANY_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-brand-gold text-white rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Phone</h4>
                  <p className="text-brand-gray">{COMPANY_INFO.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Email</h4>
                  <p className="text-brand-gray">{COMPANY_INFO.email}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-500 text-white rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Business Hours</h4>
                  <p className="text-brand-gray">{COMPANY_INFO.businessHours}</p>
                </div>
              </div>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Gurugram cityscape with modern buildings" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-6">Send us a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy font-semibold">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy font-semibold">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy font-semibold">Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-6">
                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy font-semibold">Interested In</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your interest" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="buying">Buying Property</SelectItem>
                            <SelectItem value="selling">Selling Property</SelectItem>
                            <SelectItem value="investment">Investment Advisory</SelectItem>
                            <SelectItem value="management">Property Management</SelectItem>
                            <SelectItem value="loan">Loan Assistance</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="mb-6">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-navy font-semibold">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4} 
                            placeholder="Tell us about your requirements" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-brand-navy" 
                  size="lg"
                  disabled={mutation.isPending}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {mutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
