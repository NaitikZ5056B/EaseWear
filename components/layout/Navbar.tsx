"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// removed visually-hidden // Might not exist, I'll use sr-only for title if needed. Wait, SheetTitle is required by Dialog.

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/shop", label: "SHOP" },
  { href: "/how-it-works", label: "HOW IT WORKS" },
  { href: "/about", label: "ABOUT" },
  { href: "/sustainability", label: "SUSTAINABILITY" },
  { href: "/impact", label: "IMPACT" },
  { href: "/partners", label: "PARTNERS" },
  { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="EaseWear Logo" width={40} height={40} className="w-10 h-10 object-contain" />
          <span className="text-xl font-bold tracking-tight text-primary">EaseWear</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline">
            <Link href="/partners">PARTNER WITH US</Link>
          </Button>
          <Button>
            <Link href="/shop">SHOP NOW</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden" render={<Button variant="ghost" size="icon" aria-label="Toggle Menu" />}>
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <span className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>Main navigation menu for mobile devices</SheetDescription>
            </span>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-2 py-1 text-lg font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-4">
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  <Link href="/partners">PARTNER WITH US</Link>
                </Button>
                <Button onClick={() => setIsOpen(false)}>
                  <Link href="/shop">SHOP NOW</Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
