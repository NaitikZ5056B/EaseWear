export default function HowItWorksPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">How It Works</h1>
      
      <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
        We transform the dressing experience through a simple, four-step process designed for maximum independence.
      </p>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
        {[
          {
            step: "01",
            title: "Choose Your Style",
            desc: "Browse our collection of upcycled, fashion-forward pieces. Select the styles that match your taste without worrying about restrictive fits."
          },
          {
            step: "02",
            title: "Select Adaptive Features",
            desc: "Filter by the adaptive features you need: magnetic closures for limited grip, elastic waistbands, or seated-friendly cuts."
          },
          {
            step: "03",
            title: "Effortless Dressing",
            desc: "Our hidden magnets snap together effortlessly. Zippers have easy-pull loops. Getting dressed is no longer a struggle, it's a breeze."
          },
          {
            step: "04",
            title: "Experience Independence",
            desc: "Enjoy your day with the confidence of looking great and the dignity of dressing yourself. Clothing that works for you."
          }
        ].map((item, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-primary text-primary-foreground font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              {item.step}
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-secondary/30 border border-border shadow-sm">
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
