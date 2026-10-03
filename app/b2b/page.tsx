"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Package, Tag, Zap } from "lucide-react";
import Link from "next/link";

export default function B2BPage() {
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
        <h1 className="text-4xl font-bold mb-4">Quote Request Received</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your interest. Our B2B sales team will review your requirements and provide a customized quote within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Column: Info */}
        <div className="w-full lg:w-5/12 space-y-10 lg:sticky lg:top-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Adaptive Fashion for Institutions.</h1>
            <p className="text-lg text-muted-foreground">
              EaseWear partners with healthcare institutions, senior living communities, and NGOs to provide accessible clothing in bulk, ensuring dignified dressing at scale.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Bulk Order Pricing</h3>
                <p className="text-muted-foreground text-sm mt-1">We offer tiered institutional pricing for orders exceeding 50 units. Ideal for hospitals and care homes.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Institutional Customization</h3>
                <p className="text-muted-foreground text-sm mt-1">Need specific closures or unbranded hospital wear? We offer facility-specific customizations on bulk orders.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                <Tag className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Explore the Catalogue</h3>
                <p className="text-muted-foreground text-sm mt-1 mb-3">Review our existing line of adaptive garments to find the right fit for your community.</p>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Link href="/shop">View Catalogue</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full lg:w-7/12">
          <div className="bg-secondary/10 border rounded-3xl p-6 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold mb-8">Pricing Enquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="organization" className="text-sm font-medium">Organization Name</label>
                <Input id="organization" required placeholder="XYZ Hospital / NGO" className="h-12 bg-background" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Contact Person</label>
                  <Input id="name" required placeholder="Jane Doe" className="h-12 bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input id="email" type="email" required placeholder="jane@organization.org" className="h-12 bg-background" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="h-12 bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="quantity" className="text-sm font-medium">Estimated Quantity</label>
                  <Select>
                    <SelectTrigger className="h-12 bg-background">
                      <SelectValue placeholder="Select quantity range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10-50">10 - 50 units</SelectItem>
                      <SelectItem value="51-200">51 - 200 units</SelectItem>
                      <SelectItem value="201-500">201 - 500 units</SelectItem>
                      <SelectItem value="500+">500+ units</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="product" className="text-sm font-medium">Product Interest</label>
                <Input id="product" placeholder="E.g., Magnetic Shirts, Easy-On Trousers" className="h-12 bg-background" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Additional Details / Custom Requirements</label>
                <Textarea 
                  id="message" 
                  required
                  placeholder="Tell us about the specific needs of your institution..." 
                  className="min-h-[120px] bg-background resize-y"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-base rounded-xl mt-4" disabled={isSubmitting}>
                {isSubmitting ? "SUBMITTING..." : "REQUEST B2B QUOTE"}
              </Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
