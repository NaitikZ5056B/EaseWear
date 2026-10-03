"use client";

import { use, useState } from "react";
import Link from "next/link";
import { mockProducts } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Truck, RefreshCcw, ShieldCheck, Minus, Plus, ShoppingCart, Info, Star, Leaf } from "lucide-react";

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = mockProducts.find((p) => p.id === id) || mockProducts[0];

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    "[PLACEHOLDER - Front View]",
    "[PLACEHOLDER - Back View]",
    "[PLACEHOLDER - Adaptive Feature Close-up]",
    "[PLACEHOLDER - Worn View]",
    "[PLACEHOLDER - Feature Demo]"
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Breadcrumbs */}
      <nav className="text-sm text-muted-foreground mb-8">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
          <li>/</li>
          <li><span className="text-foreground font-medium">{product.name}</span></li>
        </ol>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-secondary/30 rounded-2xl flex items-center justify-center border relative overflow-hidden group">
            <span className="text-muted-foreground font-medium">{images[activeImage]}</span>
            <button className="absolute top-4 right-4 p-3 bg-background/80 backdrop-blur rounded-full hover:text-destructive transition-colors z-10 shadow-sm">
              <Heart className="w-5 h-5" />
            </button>
            {product.sustainabilityBadge && (
              <Badge className="absolute top-4 left-4 bg-background text-foreground border-border z-10 shadow-sm">
                Upcycled Materials
              </Badge>
            )}
          </div>
          
          <div className="grid grid-cols-5 gap-2">
            {images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`aspect-square bg-secondary/30 rounded-lg flex items-center justify-center text-xs text-center border-2 transition-all p-1 ${activeImage === idx ? 'border-primary' : 'border-transparent hover:border-primary/50'}`}
              >
                <span className="text-muted-foreground/50 line-clamp-2 leading-tight px-1">Img {idx+1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-muted-foreground">(24 Reviews)</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-foreground">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              {product.discountPrice ? (
                <>
                  <span className="text-2xl font-bold">₹{product.discountPrice}</span>
                  <span className="text-lg text-muted-foreground line-through">₹{product.price}</span>
                  <Badge variant="destructive" className="ml-2">Save ₹{product.price - product.discountPrice}</Badge>
                </>
              ) : (
                <span className="text-2xl font-bold">₹{product.price}</span>
              )}
            </div>
            
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="space-y-6 flex-1">
            {/* Adaptive Features Highlights */}
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2 text-primary">
                <Info className="w-4 h-4" /> Adaptive Features
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.adaptiveFeatures.map(feat => (
                  <li key={feat} className="text-sm flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sizes */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-sm">Select Size</span>
                <Link href="#" className="text-sm text-primary hover:underline">Size Guide</Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-medium transition-colors ${
                      selectedSize === size 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-border hover:border-primary/50 bg-background text-foreground'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <div className="flex items-center border rounded-full h-14 bg-background">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 h-full flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 h-full flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <Button className="flex-1 h-14 rounded-full text-base font-medium shadow-sm group">
                <ShoppingCart className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Add to Cart
              </Button>
            </div>
            
            <Button variant="outline" className="w-full h-14 rounded-full text-base font-medium border-primary/20 hover:bg-primary/5">
              Buy it Now
            </Button>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-border text-sm text-muted-foreground mt-8">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-primary" />
                <span>Free delivery across India</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCcw className="w-5 h-5 text-primary" />
                <span>14-day easy returns</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Secure payments</span>
              </div>
              <div className="flex items-center gap-3">
                <span className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className="font-medium text-foreground">{product.inStock ? 'In Stock, Ready to Ship' : 'Out of Stock'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-24 max-w-4xl mx-auto">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full h-auto flex flex-wrap justify-start gap-2 bg-transparent border-b p-0 rounded-none mb-8">
            <TabsTrigger value="description" className="text-base rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-4 py-3">Description</TabsTrigger>
            <TabsTrigger value="adaptive" className="text-base rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-4 py-3">Adaptive Features</TabsTrigger>
            <TabsTrigger value="sustainability" className="text-base rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-4 py-3">Sustainability</TabsTrigger>
            <TabsTrigger value="care" className="text-base rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-4 py-3">Care Instructions</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="text-muted-foreground leading-relaxed space-y-4 pt-4">
            <p>Our {product.name} is meticulously designed to offer both style and supreme comfort. It bridges the gap between conventional fashion and specialized needs.</p>
            <p>{product.description}</p>
          </TabsContent>
          
          <TabsContent value="adaptive" className="pt-4">
            <ul className="space-y-4">
              {product.adaptiveFeatures.map(feat => (
                <li key={feat} className="flex gap-4 p-4 bg-muted rounded-xl">
                  <div className="bg-primary/10 p-2 rounded-lg h-fit text-primary">
                    <Info className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feat}</h4>
                    <p className="text-sm text-muted-foreground">Specifically integrated to support easy dressing, allowing independence for those with limited dexterity or mobility constraints.</p>
                  </div>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="sustainability" className="text-muted-foreground leading-relaxed pt-4">
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2"><Leaf className="text-green-600" /> Upcycled Collection</h4>
              <p className="mb-4">This product is part of our circular fashion initiative. We source high-quality surplus or pre-loved garments and professionally refurbish them, integrating our adaptive closures.</p>
              <ul className="list-disc pl-5 space-y-2 text-sm font-medium">
                <li>Saves approximately 2,700 liters of water per garment.</li>
                <li>Reduces textile waste sent to landfills.</li>
                <li>Promotes a sustainable lifecycle without compromising quality.</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="care" className="text-muted-foreground leading-relaxed pt-4">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Before Washing:</strong> Always close all magnetic fasteners and velcro completely to prevent snagging or damage to other garments.</li>
              <li>Machine wash cold with like colors.</li>
              <li>Tumble dry on low heat or hang dry to preserve adaptive closures.</li>
              <li>Do not iron directly over magnetic or velcro closures.</li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>

      {/* Reviews Section Mockup */}
      <div className="mt-24 pt-16 border-t">
        <h2 className="text-2xl font-bold mb-8">Customer Reviews</h2>
        <div className="bg-muted p-8 rounded-2xl text-center">
          <p className="text-muted-foreground">[PLACEHOLDER - Reviews Module to be integrated here with Real Testimonials]</p>
        </div>
      </div>
    </div>
  );
}
