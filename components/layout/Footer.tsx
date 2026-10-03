import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Camera, MessageCircle, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Socials */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-2xl font-bold text-foreground">
            EaseWear
          </Link>
          <p className="text-sm">Adaptive Fashion. Sustainable Future.</p>
          <div className="flex gap-4 mt-2">
            <Link href="https://instagram.com/ease.wear.pvt" aria-label="Instagram" className="hover:text-primary transition-colors">
              <Camera className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors">
              <Globe className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors">
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Briefcase className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-foreground">Quick Links</h3>
          <Link href="/shop" className="text-sm hover:text-primary transition-colors">Shop Adaptive Wear</Link>
          <Link href="/how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</Link>
          <Link href="/about" className="text-sm hover:text-primary transition-colors">Our Story</Link>
          <Link href="/impact" className="text-sm hover:text-primary transition-colors">Impact</Link>
          <Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link>
        </div>

        {/* Legal & Corporate */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-foreground">Legal & Corporate</h3>
          <Link href="/legal/privacy-policy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/legal/terms-and-conditions" className="text-sm hover:text-primary transition-colors">Terms & Conditions</Link>
          <Link href="/legal/accessibility" className="text-sm hover:text-primary transition-colors">Accessibility Statement</Link>
          <Link href="/investor-relations" className="text-sm hover:text-primary transition-colors mt-2 text-foreground font-medium">Investor Relations</Link>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-foreground">Stay Updated</h3>
          <p className="text-sm mb-2">Join our newsletter for updates on adaptive fashion and sustainability.</p>
          <form className="flex flex-col gap-2">
            <Input type="email" placeholder="Your email address" aria-label="Email address for newsletter" required />
            <Button type="submit" className="w-full">Subscribe</Button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 mt-12 pt-8 border-t border-border/50 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} EaseWear Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
