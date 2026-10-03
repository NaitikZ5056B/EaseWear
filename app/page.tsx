"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Magnet, Scissors, CheckCircle2, Leaf, Heart, Recycle, Users, Shirt, Activity, TrendingUp, Search, ShoppingBag } from "lucide-react";

// Fade-in animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 overflow-hidden bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full py-12">
          <motion.div 
            className="z-10 space-y-8 text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="px-4 py-1.5 text-sm mb-4 border-primary/20 bg-background/50 backdrop-blur-sm">
                Adaptive Fashion. Sustainable Future.
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
              Clothing Should Adapt to People.<br />
              <span className="text-primary">Not People to Clothing.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground">
              Stylish, upcycled adaptive clothing designed with magnetic closures and accessible fits. Experience independence and comfort without compromising on style.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="text-base h-14 px-8 rounded-full">
                <Link href="/shop">SHOP ADAPTIVE WEAR</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 rounded-full bg-background">
                <Link href="/about">DISCOVER EASEWEAR</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 pt-4 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-1 bg-background px-3 py-1 rounded-full shadow-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Adaptive Design</span>
              <span className="flex items-center gap-1 bg-background px-3 py-1 rounded-full shadow-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Easy Dressing</span>
              <span className="flex items-center gap-1 bg-background px-3 py-1 rounded-full shadow-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Sustainable Fashion</span>
              <span className="flex items-center gap-1 bg-background px-3 py-1 rounded-full shadow-sm"><CheckCircle2 className="w-4 h-4 text-primary" /> Designed for Independence</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative z-10 w-full h-[500px] lg:h-[700px] hidden md:block rounded-3xl overflow-hidden shadow-2xl border border-border"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image 
              src="/hero-clothes.png" 
              alt="EaseWear Adaptive Clothing" 
              fill 
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold mb-16"
          >
            Dressing Shouldn't Depend on Ability.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center text-left">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-muted p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10"><Activity className="w-32 h-32" /></div>
              <Badge variant="destructive" className="mb-6">Conventional Clothing</Badge>
              <h3 className="text-xl font-semibold mb-4">The Struggle</h3>
              <p className="text-muted-foreground mb-6">Buttons and zippers require fine motor skills, turning a daily routine into a frustrating challenge that often requires dependence on others.</p>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3 text-destructive"><XIcon className="w-5 h-5" /> Difficult Fasteners</li>
                <li className="flex items-center gap-3 text-destructive"><XIcon className="w-5 h-5" /> Restricted Mobility</li>
                <li className="flex items-center gap-3 text-destructive"><XIcon className="w-5 h-5" /> Loss of Independence</li>
              </ul>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="bg-primary/5 border border-primary/20 p-8 rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 text-primary"><Heart className="w-32 h-32" /></div>
              <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary">EaseWear Solution</Badge>
              <h3 className="text-xl font-semibold mb-4">The Freedom</h3>
              <p className="text-muted-foreground mb-6">Innovative closures and inclusive fits make dressing effortless, restoring dignity and autonomy to everyone.</p>
              <ul className="space-y-3 font-medium">
                <li className="flex items-center gap-3 text-primary"><CheckCircle2 className="w-5 h-5" /> Magnetic & Velcro Closures</li>
                <li className="flex items-center gap-3 text-primary"><CheckCircle2 className="w-5 h-5" /> Seated & Mobility-Friendly Fits</li>
                <li className="flex items-center gap-3 text-primary"><CheckCircle2 className="w-5 h-5" /> Empowering Independence</li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12">
            <Button variant="link" className="text-lg group">
              <Link href="/how-it-works">
                Why Adaptive Fashion? <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 3. SOLUTION SECTION */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet EaseWear</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Thoughtful innovations designed to make dressing a breeze.</p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            {[
              { icon: Magnet, title: "Magnetic Closures", desc: "Snap together instantly. No gripping required." },
              { icon: Shirt, title: "Hidden Velcro", desc: "Secure fastening concealed behind faux buttons." },
              { icon: Activity, title: "Easy-Wear Designs", desc: "Wide necklines and elastic waists for ease." },
              { icon: Users, title: "Mobility-Friendly", desc: "Fits designed for seated comfort and reach." }
            ].map((feature, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-background/80 backdrop-blur">
                  <CardContent className="pt-8 flex flex-col items-center text-center">
                    <div className="p-4 bg-primary/10 rounded-full mb-6">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12">
            <Button variant="default" className="text-base rounded-full px-8">
              <Link href="/how-it-works">Explore How It Works <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS (MOCK) */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Adaptive Clothing. Made for Everyday Life.</h2>
            <p className="text-lg text-muted-foreground">Shop our curated collection of inclusive fashion.</p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {/* Mock Products */}
            {[1, 2, 3, 4].map((i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card className="overflow-hidden group border-none shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[4/5] bg-muted relative overflow-hidden flex items-center justify-center">
                     <span className="text-muted-foreground text-sm">[PLACEHOLDER - Product Image]</span>
                     <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">Magnetic</Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Adaptive Product {i}</h3>
                    <p className="text-sm text-muted-foreground mb-4">Hidden magnetic closures</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold">₹1,299</span>
                      <Button size="sm" variant="outline"><Link href={`/product/${i}`}>View</Link></Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/shop">View All Products</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 5. SUSTAINABILITY & IMPACT */}
      <section className="py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16">
            <Badge variant="outline" className="text-primary-foreground border-primary-foreground/30 mb-6">Our Impact</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Circular Fashion at its Core</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">Upcycling garments to reduce waste while increasing accessibility.</p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-8 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="bg-primary-foreground/10 p-8 rounded-3xl">
              <Recycle className="w-12 h-12 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Environmental</h3>
              <p className="text-sm text-primary-foreground/80">Refurbishing existing garments saves water, reduces carbon footprint, and prevents textile waste.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-primary-foreground/10 p-8 rounded-3xl">
              <Heart className="w-12 h-12 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Social</h3>
              <p className="text-sm text-primary-foreground/80">Empowering individuals with disabilities and seniors to dress independently with dignity.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-primary-foreground/10 p-8 rounded-3xl">
              <TrendingUp className="w-12 h-12 mb-6 mx-auto" />
              <h3 className="text-xl font-semibold mb-3">Economic</h3>
              <p className="text-sm text-primary-foreground/80">Providing affordable adaptive wear options compared to expensive medical apparel.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 px-4 bg-background">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          className="max-w-4xl mx-auto bg-secondary/40 rounded-[3rem] p-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience Easier Dressing?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">Join the movement towards inclusive, sustainable, and empowering fashion.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 h-14">
              <Link href="/shop">SHOP EASEWEAR</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 bg-background">
              <Link href="/partners">PARTNER WITH US</Link>
            </Button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

// Simple X icon for the struggle list
function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
    </svg>
  );
}
