import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SkipToContent } from "@/components/layout/SkipToContent";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EaseWear | Adaptive Fashion. Sustainable Future.",
  description: "Clothing Should Adapt to People. Not People to Clothing. Stylish, upcycled adaptive clothing for independent living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
