import { Recycle, Droplets, Leaf } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Sustainability at EaseWear</h1>
      <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
        Accessible fashion shouldn't cost the Earth. We are committed to a circular fashion model that upcycles existing garments into adaptive masterpieces.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="bg-primary/5 p-8 rounded-3xl text-center border border-primary/10">
          <Recycle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Zero Textile Waste</h3>
          <p className="text-muted-foreground text-sm">By utilizing surplus and pre-loved garments, we keep perfectly good textiles out of landfills.</p>
        </div>
        <div className="bg-primary/5 p-8 rounded-3xl text-center border border-primary/10">
          <Droplets className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Water Conservation</h3>
          <p className="text-muted-foreground text-sm">Producing a new cotton shirt takes 2,700 liters of water. Upcycling takes virtually none.</p>
        </div>
        <div className="bg-primary/5 p-8 rounded-3xl text-center border border-primary/10">
          <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Lower Carbon Footprint</h3>
          <p className="text-muted-foreground text-sm">Our localized refurbishment process dramatically reduces the emissions associated with traditional manufacturing.</p>
        </div>
      </div>

      <div className="bg-secondary/20 p-8 md:p-12 rounded-[3rem] border border-border">
        <h2 className="text-3xl font-bold mb-12 text-center">The EaseWear Upcycling Process</h2>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
            <span className="text-primary font-bold text-lg mb-2 block">1. Sourcing</span>
            <p className="text-sm text-muted-foreground">We partner with brands and individuals to rescue high-quality surplus and unworn garments.</p>
          </div>
          <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
            <span className="text-primary font-bold text-lg mb-2 block">2. Inspection & Cleaning</span>
            <p className="text-sm text-muted-foreground">Every garment undergoes strict quality control and eco-friendly cleaning.</p>
          </div>
          <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
            <span className="text-primary font-bold text-lg mb-2 block">3. Adaptive Modification</span>
            <p className="text-sm text-muted-foreground">Our skilled tailors deconstruct and integrate magnetic closures, velcro, and adjust fits.</p>
          </div>
          <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50">
            <span className="text-primary font-bold text-lg mb-2 block">4. Final Quality Check</span>
            <p className="text-sm text-muted-foreground">Ensuring the adaptive features work flawlessly and the garment looks brand new.</p>
          </div>
          <div className="bg-background p-6 rounded-2xl shadow-sm border border-border/50 md:col-span-2">
            <span className="text-primary font-bold text-lg mb-2 block">5. Ready for You</span>
            <p className="text-sm text-muted-foreground">The upcycled garment is added to our catalog, ready to provide style and independence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
