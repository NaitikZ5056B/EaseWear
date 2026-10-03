export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: "Shirts" | "T-Shirts" | "Pants" | "Jeans" | "Tops" | "Plazo" | "Crop Tops";
  sizes: string[];
  colors: string[];
  adaptiveFeatures: string[];
  sustainabilityBadge: boolean;
  images: string[];
  inStock: boolean;
}

export const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "Magnetic Closure Formal Shirt",
    description: "A premium formal shirt featuring hidden magnetic closures behind faux buttons. Perfect for the office without the hassle of buttoning.",
    price: 1899,
    discountPrice: 1599,
    category: "Shirts",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue"],
    adaptiveFeatures: ["Magnetic Closures"],
    sustainabilityBadge: true,
    images: ["/placeholder.svg"],
    inStock: true,
  },
  {
    id: "prod-2",
    name: "Seated Fit Chino Pants",
    description: "Designed specifically for wheelchair users, featuring a higher back, lower front, and elasticated sides for maximum seated comfort.",
    price: 2199,
    category: "Pants",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Olive", "Khaki", "Navy"],
    adaptiveFeatures: ["Seated-Friendly", "Elastic Waistband"],
    sustainabilityBadge: true,
    images: ["/placeholder.svg"],
    inStock: true,
  },
  {
    id: "prod-3",
    name: "Easy-On Everyday T-Shirt",
    description: "Ultra-soft upcycled cotton t-shirt with a wider neckline and hidden velcro on the shoulder for easy dressing.",
    price: 899,
    category: "T-Shirts",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Beige"],
    adaptiveFeatures: ["Hidden Velcro", "One-Hand Dressing"],
    sustainabilityBadge: true,
    images: ["/placeholder.svg"],
    inStock: true,
  },
  {
    id: "prod-4",
    name: "Adaptive Wide-Leg Palazzo",
    description: "Flowy, comfortable palazzos with deep hidden pockets and side-zip closures with large ring pulls for limited grip.",
    price: 1499,
    category: "Plazo",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Maroon", "Charcoal"],
    adaptiveFeatures: ["Easy Pull Zippers"],
    sustainabilityBadge: false,
    images: ["/placeholder.svg"],
    inStock: true,
  }
];
