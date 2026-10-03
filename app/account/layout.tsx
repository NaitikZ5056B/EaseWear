"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { User, Package, MapPin, Heart, Settings, LogOut, ShieldCheck } from "lucide-react";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: "/account", label: "Dashboard", icon: User },
    { href: "/account/orders", label: "My Orders", icon: Package },
    { href: "/account/wishlist", label: "Wishlist", icon: Heart },
    { href: "#", label: "Addresses", icon: MapPin },
    { href: "#", label: "Settings", icon: Settings },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Nav */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-muted/50 rounded-2xl p-6 border mb-6 text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-primary text-2xl font-bold">
              EW
            </div>
            <h2 className="font-bold text-lg">John Doe</h2>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive 
                      ? "bg-primary text-primary-foreground font-medium" 
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors mt-4">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
