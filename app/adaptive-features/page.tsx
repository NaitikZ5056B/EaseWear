import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Magnet, Scissors, Activity, Minimize, CheckCircle2 } from "lucide-react";

export default function AdaptiveFeaturesPage() {
  const features = [
    {
      id: "magnetic-closures",
      title: "Magnetic Closures",
      icon: Magnet,
      description: "Replacing traditional buttons with hidden, secure magnets. Getting dressed should be effortless, not a test of dexterity. Our magnetic closures snap together instantly, removing the frustration of fine-motor fastening while preserving the polished look of a classic button-down shirt.",
      linkText: "Shop Magnetic Closure Styles",
      linkHref: "/shop?feature=magnetic"
    },
    {
      id: "hidden-velcro",
      title: "Hidden Velcro",
      icon: Minimize,
      description: "We use soft-touch, low-profile velcro cleverly concealed beneath false seams and plackets. It offers the quickest, simplest fastening method available without compromising the garment's fashion-forward aesthetic. It's adaptive fashion that simply looks like fashion.",
      linkText: "Shop Hidden Velcro Styles",
      linkHref: "/shop?feature=velcro"
    },
    {
      id: "one-hand-dressing",
      title: "One-Hand Dressing",
      icon: Activity,
      description: "Designed specifically to be donned and doffed using only one hand. We achieve this through wider necklines, strategic zipper placements with oversized ring pulls, and slip-on constructions. Independence in dressing, beautifully realized.",
      linkText: "Shop Easy-On Styles",
      linkHref: "/shop?feature=one-hand"
    },
    {
      id: "elastic-waistbands",
      title: "Elastic Waistbands",
      icon: CheckCircle2,
      description: "Say goodbye to rigid waistbands and difficult zippers. Our premium, flexible elastic waistbands provide all-day comfort and incredibly easy pull-on functionality, perfect for those with limited grip strength or mobility constraints.",
      linkText: "Shop Comfortable Bottoms",
      linkHref: "/shop?feature=elastic"
    },
    {
      id: "seated-friendly",
      title: "Seated-Friendly Design",
      icon: Scissors,
      description: "Traditional trousers are cut for standing, which can cause discomfort, bunching, and skin irritation for wheelchair users. Our seated-friendly cuts feature a higher back rise, a lower front rise, and completely flattened seams to ensure maximum comfort and a perfect drape while seated.",
      linkText: "Shop Seated-Friendly Styles",
      linkHref: "/shop?feature=seated"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 max-w-6xl">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Designed for Independence.</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We believe clothing should adapt to you. Explore the innovative design features that make EaseWear garments effortlessly accessible.
        </p>
      </div>

      <div className="space-y-24">
        {features.map((feature, index) => (
          <section key={feature.id} id={feature.id} className={`flex flex-col gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            
            <div className="w-full lg:w-1/2 aspect-square lg:aspect-[4/3] bg-secondary/30 rounded-3xl border flex items-center justify-center relative overflow-hidden group">
              <span className="text-muted-foreground font-medium text-sm">
                [PLACEHOLDER - {feature.title} Close-up Image]
              </span>
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl text-primary mb-2">
                <feature.icon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{feature.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              <div className="pt-4">
                <Button size="lg" variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5">
                  <Link href={feature.linkHref}>{feature.linkText}</Link>
                </Button>
              </div>
            </div>
            
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-32 bg-primary/5 border border-primary/10 rounded-[3rem] p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Need a specific customization?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Everyone's needs are unique. If our standard adaptive features don't perfectly meet your requirements, we offer bespoke modifications.
        </p>
        <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-sm">
          <Link href="/customization">Request Customization</Link>
        </Button>
      </div>
    </div>
  );
}
