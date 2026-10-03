"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockProducts } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck, Lock } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  // Hardcoded cart for demo checkout
  const cartItems = [
    { id: "cart-1", product: mockProducts[0], size: "M", quantity: 1 },
    { id: "cart-2", product: mockProducts[2], size: "L", quantity: 2 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + ((item.product.discountPrice || item.product.price) * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 150;
  const total = subtotal + shipping;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Mocking Razorpay delay
    setTimeout(() => {
      // For MVP Phase 1, we just redirect to the confirmation page
      router.push("/order-confirmation?orderId=ORD-982347");
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex items-center gap-2 text-muted-foreground mb-8">
        <Lock className="w-5 h-5" />
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Secure Checkout</h1>
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-3 space-y-8">
          <form id="checkout-form" onSubmit={handleCheckout} className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Contact Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-sm font-medium mb-1 block">First Name</label>
                  <Input required placeholder="First name" className="h-12 bg-muted/50 border-transparent focus-visible:border-primary" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-sm font-medium mb-1 block">Last Name</label>
                  <Input required placeholder="Last name" className="h-12 bg-muted/50 border-transparent focus-visible:border-primary" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <Input required type="email" placeholder="Email address" className="h-12 bg-muted/50 border-transparent focus-visible:border-primary" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-sm font-medium mb-1 block">Phone Number</label>
                  <Input required type="tel" placeholder="Phone number" className="h-12 bg-muted/50 border-transparent focus-visible:border-primary" />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-sm font-medium mb-1 block">Address</label>
                  <Input required placeholder="Address Line 1" className="h-12 bg-muted/50 border-transparent focus-visible:border-primary" />
                </div>
                <div className="col-span-2">
                  <Input placeholder="Apartment, suite, etc. (optional)" className="h-12 bg-muted/50 border-transparent focus-visible:border-primary" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-sm font-medium mb-1 block">City</label>
                  <Input required placeholder="City" className="h-12 bg-muted/50 border-transparent focus-visible:border-primary" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-sm font-medium mb-1 block">State</label>
                  <Input required placeholder="State" className="h-12 bg-muted/50 border-transparent focus-visible:border-primary" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="text-sm font-medium mb-1 block">PIN Code</label>
                  <Input required placeholder="PIN Code" className="h-12 bg-muted/50 border-transparent focus-visible:border-primary" />
                </div>
              </div>
            </div>

            {/* Payment (Mock Razorpay) */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold border-b pb-2">Payment</h2>
              <div className="bg-secondary/30 border rounded-xl p-6 text-center">
                <ShieldCheck className="w-12 h-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Razorpay Secure Checkout</h3>
                <p className="text-sm text-muted-foreground mb-4">You will be redirected to a secure payment gateway to complete your purchase using UPI, Card, Net Banking, or Wallet.</p>
                <div className="inline-flex items-center gap-1 text-xs font-medium text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                  [TEST MODE ENABLED FOR MVP]
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 rounded-full text-lg shadow-sm"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing Securely..." : `Pay ₹${total}`}
            </Button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-2">
          <div className="bg-muted p-8 rounded-3xl sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-16 h-20 bg-background rounded-lg border flex items-center justify-center relative">
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm line-clamp-1">{item.product.name}</h4>
                    <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                  </div>
                  <div className="font-medium text-sm">
                    ₹{(item.product.discountPrice || item.product.price) * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-border/50 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 mt-6 border-t font-bold">
              <span className="text-lg">Total</span>
              <span className="text-2xl">₹{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
