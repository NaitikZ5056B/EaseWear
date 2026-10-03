"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Building2, HeartHandshake, Users } from "lucide-react";

export default function PartnersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate Firestore save and email trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-2xl text-center">
        <div className="inline-flex items-center justify-center p-6 bg-primary/10 rounded-full text-primary mb-8">
          <CheckCircle2 className="w-16 h-16" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your partnership enquiry has been successfully submitted. Our team will review your details and get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let's Make Fashion More Accessible.</h1>
        <p className="text-xl text-muted-foreground">
          We actively collaborate with organizations that share our vision for an inclusive and sustainable future. Join us in bringing adaptive fashion to those who need it most.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-secondary/20 p-8 rounded-3xl text-center flex flex-col items-center">
          <div className="p-4 bg-background rounded-full mb-4 shadow-sm">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold text-lg mb-2">Hospitals & Rehab Centers</h3>
          <p className="text-muted-foreground text-sm">Enhance patient dignity and ease the dressing process for caregivers.</p>
        </div>
        <div className="bg-secondary/20 p-8 rounded-3xl text-center flex flex-col items-center">
          <div className="p-4 bg-background rounded-full mb-4 shadow-sm">
            <HeartHandshake className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold text-lg mb-2">NGOs & Senior Orgs</h3>
          <p className="text-muted-foreground text-sm">Provide your community with access to affordable, dignified clothing options.</p>
        </div>
        <div className="bg-secondary/20 p-8 rounded-3xl text-center flex flex-col items-center">
          <div className="p-4 bg-background rounded-full mb-4 shadow-sm">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-bold text-lg mb-2">Accessibility Advocates</h3>
          <p className="text-muted-foreground text-sm">Collaborate on inclusive design, user testing, and community outreach.</p>
        </div>
      </div>

      <div className="bg-secondary/10 border rounded-3xl p-6 md:p-12 shadow-sm max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Partnership Enquiry Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <Input id="name" required placeholder="Jane Doe" className="h-12 bg-background" />
            </div>
            <div className="space-y-2">
              <label htmlFor="designation" className="text-sm font-medium">Designation</label>
              <Input id="designation" required placeholder="Director of Partnerships" className="h-12 bg-background" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="organization" className="text-sm font-medium">Organization Name</label>
            <Input id="organization" required placeholder="Organization XYZ" className="h-12 bg-background" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <Input id="email" type="email" required placeholder="jane@organization.org" className="h-12 bg-background" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
              <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="h-12 bg-background" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Organization Type</label>
            <Select>
              <SelectTrigger className="h-12 bg-background">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hospital">Hospital / Medical Institution</SelectItem>
                <SelectItem value="rehab">Rehabilitation Centre</SelectItem>
                <SelectItem value="ngo">NGO / Non-Profit</SelectItem>
                <SelectItem value="senior">Senior Citizen Organization</SelectItem>
                <SelectItem value="accessibility">Accessibility Organization</SelectItem>
                <SelectItem value="retail">Retail / Fashion Buyer</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Partnership Interest</label>
            <Select>
              <SelectTrigger className="h-12 bg-background">
                <SelectValue placeholder="Select interest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bulk">Bulk Purchasing / B2B</SelectItem>
                <SelectItem value="distribution">Distribution / Retail</SelectItem>
                <SelectItem value="design">Co-Design / Research</SelectItem>
                <SelectItem value="sponsorship">Sponsorship / Events</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea 
              id="message" 
              required
              placeholder="Tell us a bit about your organization and how you'd like to collaborate..." 
              className="min-h-[120px] bg-background resize-y"
            />
          </div>

          <Button type="submit" size="lg" className="w-full h-14 text-base rounded-xl mt-4" disabled={isSubmitting}>
            {isSubmitting ? "SUBMITTING..." : "BECOME A PARTNER"}
          </Button>
        </form>
      </div>
    </div>
  );
}
