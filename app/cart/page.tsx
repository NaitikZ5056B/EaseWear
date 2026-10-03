"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mockProducts } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";

export default function CartPage() {
  // Mock cart items based on our mock data
  const [cartItems, setCartItems] = useState([
    {
      id: "cart-1",
      product: mockProducts[0],
      size: "M",
      quantity: 1
    },
    {
      id: "cart-2",
      product: mockProducts[2],
      size: "L",
      quantity: 2
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + ((item.product.discountPrice || item.product.price) * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 150; // Free shipping over 2000
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-24 bg-muted rounded-3xl">
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-muted-foreground opacity-50" />
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Button size="lg" className="rounded-full">
            <Link href="/shop">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium text-muted-foreground uppercase tracking-wider">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-3 text-right">Total</div>
            </div>

            {cartItems.map((item) => {
              const price = item.product.discountPrice || item.product.price;
              const itemTotal = price * item.quantity;
              
              return (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center py-6 border-b">
                  <div className="col-span-1 md:col-span-6 flex gap-4">
                    <div className="w-24 h-32 bg-secondary/30 rounded-xl flex-shrink-0 flex items-center justify-center border">
                      <span className="text-xs text-muted-foreground text-center">Image</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <Link href={`/product/${item.product.id}`} className="font-semibold text-lg hover:text-primary transition-colors line-clamp-2">
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">Size: {item.size}</p>
                      <p className="text-sm font-medium mt-2 md:hidden">₹{price}</p>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-destructive hover:underline mt-auto flex items-center gap-1 w-fit"
                      >
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-3 flex md:justify-center items-center">
                    <div className="flex items-center border rounded-full h-10 bg-background">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 h-full flex items-center text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 h-full flex items-center text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="col-span-1 md:col-span-3 text-left md:text-right font-bold text-lg">
                    <span className="md:hidden text-sm font-normal text-muted-foreground mr-2">Total:</span>
                    ₹{itemTotal}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-muted/50 border-none shadow-none rounded-3xl overflow-hidden sticky top-24">
              <CardHeader className="bg-muted/80 pb-6 border-b border-border/50">
                <CardTitle className="text-xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                  <span className="font-medium">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping Estimate</span>
                  <span className="font-medium">{shipping === 0 ? <span className="text-green-600">Free</span> : `₹${shipping}`}</span>
                </div>
                
                {shipping > 0 && (
                  <div className="text-xs text-muted-foreground bg-background p-3 rounded-xl border border-border/50">
                    Add ₹{2000 - subtotal} more to your cart to get free shipping!
                  </div>
                )}
                
                <div className="pt-4 mt-4 border-t flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold">₹{total}</span>
                </div>
                <p className="text-xs text-muted-foreground text-right">Tax included. Shipping calculated at checkout.</p>
              </CardContent>
              <CardFooter className="flex-col gap-4">
                <Button size="lg" className="w-full rounded-full h-14 text-base">
                  <Link href="/checkout">Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                
                <div className="w-full flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                  <ShieldCheck className="w-4 h-4" /> Secure Checkout
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
