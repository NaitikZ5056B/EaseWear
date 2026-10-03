"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, PackageCheck, CheckCircle2, Circle } from "lucide-react";

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialOrderId = searchParams.get("orderId") || "";
  
  const [orderId, setOrderId] = useState(initialOrderId);
  const [contactInfo, setContactInfo] = useState("");
  const [isTracking, setIsTracking] = useState(!!initialOrderId);

  // Mock Pipeline
  const pipeline = [
    { id: "placed", label: "Order Placed", date: "Oct 12, 10:30 AM", completed: true },
    { id: "processing", label: "Processing", date: "Oct 12, 11:15 AM", completed: true },
    { id: "quality", label: "Quality Check", date: "Oct 13, 09:00 AM", completed: true },
    { id: "packed", label: "Packed", date: "Oct 13, 02:45 PM", completed: true },
    { id: "shipped", label: "Shipped", date: "Oct 14, 08:30 AM", completed: false },
    { id: "out", label: "Out for Delivery", date: "Pending", completed: false },
    { id: "delivered", label: "Delivered", date: "Pending", completed: false }
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) {
      router.push(`/track-order?orderId=${orderId}`);
      setIsTracking(true);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Track Your Order</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Enter your Order ID and the phone number or email used during checkout to get real-time status updates.</p>
      </div>

      <div className="bg-muted/50 p-8 rounded-3xl mb-12">
        <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
          <Input 
            required 
            placeholder="Order ID (e.g., ORD-123456)" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="h-12 bg-background" 
          />
          <Input 
            placeholder="Email or Phone Number" 
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            className="h-12 bg-background" 
          />
          <Button type="submit" className="h-12 px-8 shrink-0">
            <Search className="w-4 h-4 mr-2" /> Track
          </Button>
        </form>
      </div>

      {isTracking && (
        <Card className="border-border shadow-sm overflow-hidden">
          <CardHeader className="bg-secondary/20 border-b pb-6">
            <CardTitle className="flex justify-between items-center">
              <span>Order Details: <span className="text-primary font-mono ml-2">{orderId}</span></span>
              <Badge variant="outline" className="bg-background">Estimated Delivery: Oct 15</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-8 md:p-12">
            
            <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-10">
              {pipeline.map((step, index) => {
                const isLastCompleted = step.completed && (!pipeline[index+1] || !pipeline[index+1].completed);
                return (
                  <div key={step.id} className="relative pl-8">
                    {/* Timeline Node */}
                    <div className={`absolute -left-[17px] top-1 bg-background rounded-full p-1 border-2 ${
                      step.completed ? 'border-primary text-primary' : 'border-muted-foreground/30 text-muted-foreground/30'
                    }`}>
                      {step.completed ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Circle className="w-5 h-5 fill-current opacity-20" />
                      )}
                    </div>

                    <div className={step.completed ? 'opacity-100' : 'opacity-50'}>
                      <h3 className={`font-semibold text-lg ${isLastCompleted ? 'text-primary' : 'text-foreground'}`}>
                        {step.label}
                      </h3>
                      <p className="text-sm text-muted-foreground">{step.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
              <PackageCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Your package has been packed.</h4>
                <p className="text-sm text-muted-foreground">It is currently awaiting pickup by our shipping partner. You will receive an SMS and email notification once it is shipped.</p>
              </div>
            </div>

          </CardContent>
        </Card>
      )}
    </div>
  );
}

import { Badge } from "@/components/ui/badge";

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="text-center py-24">Loading...</div>}>
      <TrackOrderContent />
    </Suspense>
  );
}
