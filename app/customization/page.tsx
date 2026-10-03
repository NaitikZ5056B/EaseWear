"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Upload } from "lucide-react";
import Link from "next/link";

export default function CustomizationPage() {
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
        <h1 className="text-4xl font-bold mb-4">Request Received</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for reaching out. Our design team is reviewing your customization request and will get back to you within 48 hours to discuss the details and pricing.
        </p>
        <Button size="lg" className="rounded-full px-8">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Request Customization</h1>
        <p className="text-lg text-muted-foreground">
          Need a specific modification? Tell us about your requirements, and we'll craft a garment tailored specifically to your needs.
        </p>
      </div>

      <div className="bg-secondary/10 border rounded-3xl p-6 md:p-10 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <Input id="name" required placeholder="Jane Doe" className="h-12 bg-background" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <Input id="email" type="email" required placeholder="jane@example.com" className="h-12 bg-background" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
            <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="h-12 bg-background" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Base Product</label>
              <Select>
                <SelectTrigger className="h-12 bg-background">
                  <SelectValue placeholder="Select a product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="magnetic-shirt">Classic Magnetic Shirt</SelectItem>
                  <SelectItem value="velcro-blouse">Hidden Velcro Blouse</SelectItem>
                  <SelectItem value="seated-trousers">Seated-Friendly Trousers</SelectItem>
                  <SelectItem value="elastic-pants">Elastic Comfort Pants</SelectItem>
                  <SelectItem value="other">Other (specify below)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Size</label>
              <Select>
                <SelectTrigger className="h-12 bg-background">
                  <SelectValue placeholder="Select your size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="xs">XS</SelectItem>
                  <SelectItem value="s">S</SelectItem>
                  <SelectItem value="m">M</SelectItem>
                  <SelectItem value="l">L</SelectItem>
                  <SelectItem value="xl">XL</SelectItem>
                  <SelectItem value="xxl">XXL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Preferred Closure</label>
            <Select>
              <SelectTrigger className="h-12 bg-background">
                <SelectValue placeholder="Select closure type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="magnetic">Magnetic Closures</SelectItem>
                <SelectItem value="velcro">Hidden Velcro</SelectItem>
                <SelectItem value="snap">Snap Buttons</SelectItem>
                <SelectItem value="other">Other / Not sure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="mobility" className="text-sm font-medium">Mobility or Dressing Requirements</label>
            <Textarea 
              id="mobility" 
              required
              placeholder="E.g., I have limited dexterity in my left hand and need closures on the right side only." 
              className="min-h-[100px] bg-background resize-y"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="customization" className="text-sm font-medium">Specific Customization Needed</label>
            <Textarea 
              id="customization" 
              required
              placeholder="Describe the exact modification you are looking for..." 
              className="min-h-[100px] bg-background resize-y"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Upload Reference (Optional)</label>
            <div className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center text-center bg-background hover:bg-secondary/5 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground">SVG, PNG, JPG or GIF (max. 5MB)</p>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full h-14 text-base rounded-xl mt-4" disabled={isSubmitting}>
            {isSubmitting ? "SUBMITTING..." : "REQUEST CUSTOMIZATION"}
          </Button>
        </form>
      </div>
    </div>
  );
}
