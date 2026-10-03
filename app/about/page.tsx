export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About EaseWear</h1>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-muted-foreground mb-4">
          EaseWear was born out of a simple observation: conventional clothing is designed for a very narrow definition of ability. We saw firsthand how the simple act of getting dressed could be a daily struggle for seniors, people with disabilities, and those with limited mobility.
        </p>
        <p className="text-muted-foreground">
          We decided that clothing should adapt to people, not the other way around. By combining innovative closures like hidden magnets with stylish, upcycled materials, we set out to create a fashion brand that is truly inclusive.
        </p>
      </section>

      <section className="mb-16 grid md:grid-cols-2 gap-8">
        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
          <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
          <p className="text-muted-foreground">
            To empower individuals with disabilities, seniors, and anyone with limited mobility through accessible, adaptive, and sustainable fashion that restores independence and dignity.
          </p>
        </div>
        <div className="bg-secondary/30 p-8 rounded-3xl border">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground">
            A world where fashion is universally accessible, where adaptive clothing is indistinguishable from mainstream fashion, and where sustainability is at the core of every garment produced.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Our Core Values</h2>
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <h3 className="font-bold text-lg mb-2">Inclusivity First</h3>
            <p className="text-sm text-muted-foreground">Designing with, not just for, the community we serve.</p>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg mb-2">Uncompromised Style</h3>
            <p className="text-sm text-muted-foreground">Adaptive clothing shouldn't look medical. We prioritize fashion.</p>
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg mb-2">Sustainable Impact</h3>
            <p className="text-sm text-muted-foreground">Upcycling and circular practices to protect our planet.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
