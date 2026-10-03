"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Package, MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { Suspense } from "react";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "ORD-" + Math.floor(100000 + Math.random() * 900000);

  // Mock data for the order
  const amount = 3698;
  const address = "123, Adaptive Way, Inclusive City, State - 400001";
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="bg-muted p-8 md:p-12 rounded-3xl text-center mb-8">
        <CheckCircle2 className="w-20 h-20 mx-auto text-green-500 mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground mb-8">Thank you for shopping with EaseWear. Your order has been successfully placed and is being processed.</p>
        
        <div className="inline-block bg-background px-6 py-3 rounded-full border border-border shadow-sm mb-8">
          <span className="text-sm text-muted-foreground">Order ID:</span>
          <span className="ml-2 font-bold font-mono">{orderId}</span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="bg-secondary/30 p-6 rounded-2xl border">
          <h3 className="font-semibold flex items-center gap-2 mb-4">
            <Package className="w-5 h-5 text-primary" /> Order Details
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex justify-between">
              <span>Magnetic Closure Formal Shirt (M)</span>
              <span>1</span>
            </li>
            <li className="flex justify-between">
              <span>Easy-On Everyday T-Shirt (L)</span>
              <span>2</span>
            </li>
            <li className="pt-2 mt-2 border-t flex justify-between font-bold text-foreground text-base">
              <span>Total Amount</span>
              <span>₹{amount}</span>
            </li>
          </ul>
        </div>

        <div className="bg-secondary/30 p-6 rounded-2xl border space-y-6">
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-primary" /> Delivery Address
            </h3>
            <p className="text-sm text-muted-foreground">{address}</p>
          </div>
          
          <div>
            <h3 className="font-semibold flex items-center gap-2 mb-2">
              <CalendarDays className="w-5 h-5 text-primary" /> Estimated Delivery
            </h3>
            <p className="text-sm font-medium text-foreground">
              {estimatedDelivery.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" className="rounded-full h-14 px-8">
          <Link href={`/track-order?orderId=${orderId}`}>Track Order <ArrowRight className="ml-2 w-4 h-4" /></Link>
        </Button>
        <Button size="lg" variant="outline" className="rounded-full h-14 px-8 bg-background">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center">Loading...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
