"use client";

import { useState } from "react";
import Link from "next/link";
import { mockProducts } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, SlidersHorizontal, Leaf, Activity } from "lucide-react";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = mockProducts.filter((p) => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
      
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 shrink-0 space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5" /> Filters
          </h2>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search products..." 
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Category</h3>
          <div className="space-y-2 text-sm">
            {["All", "Shirts", "T-Shirts", "Pants", "Jeans", "Plazo"].map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="category" className="accent-primary" defaultChecked={cat === "All"} />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Adaptive Features</h3>
          <div className="space-y-2 text-sm">
            {["Magnetic Closures", "Hidden Velcro", "Elastic Waistband", "Easy Pull Zippers", "Seated-Friendly"].map((feature) => (
              <label key={feature} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-primary rounded-sm" />
                <span>{feature}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Size</h3>
          <div className="flex flex-wrap gap-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <Badge key={size} variant="outline" className="cursor-pointer hover:bg-secondary">
                {size}
              </Badge>
            ))}
          </div>
        </div>
      </aside>

      {/* Product Grid Area */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-muted-foreground">Showing {filteredProducts.length} products</p>
          <div className="w-48">
            <Select defaultValue="featured">
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group border-border shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-[4/5] bg-secondary/30 relative flex items-center justify-center p-4">
                <span className="text-muted-foreground text-sm">[PLACEHOLDER - Image]</span>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.adaptiveFeatures.slice(0, 1).map(feat => (
                    <Badge key={feat} className="bg-primary text-primary-foreground font-medium flex items-center gap-1 shadow-sm">
                      <Activity className="w-3 h-3" /> {feat}
                    </Badge>
                  ))}
                  {product.sustainabilityBadge && (
                    <Badge variant="secondary" className="bg-background text-foreground border-border flex items-center gap-1 shadow-sm">
                      <Leaf className="w-3 h-3 text-green-600" /> Upcycled
                    </Badge>
                  )}
                </div>
                
                {/* Wishlist */}
                <button className="absolute top-3 right-3 p-2 bg-background rounded-full shadow-sm text-muted-foreground hover:text-destructive transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              
              <CardContent className="p-5 flex flex-col flex-1">
                <Link href={`/product/${product.id}`} className="block mb-2 group-hover:text-primary transition-colors">
                  <h3 className="font-semibold text-lg line-clamp-1">{product.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground line-clamp-1 mb-4 flex-1">{product.description}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  {product.discountPrice ? (
                    <>
                      <span className="font-bold text-lg">₹{product.discountPrice}</span>
                      <span className="text-sm text-muted-foreground line-through">₹{product.price}</span>
                    </>
                  ) : (
                    <span className="font-bold text-lg">₹{product.price}</span>
                  )}
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button className="flex-1">
                    <Link href={`/product/${product.id}`}>Add to Cart</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            No products found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}
