import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is adaptive clothing?",
      answer: "Adaptive clothing is specially designed apparel that makes dressing easier for people with physical disabilities, seniors, and those with limited mobility. It replaces difficult fasteners (like small buttons or zippers) with easier alternatives (like magnets or velcro) and adjusts the cut of the garment (like seated-friendly trousers) to provide maximum comfort and independence."
    },
    {
      question: "Who is EaseWear designed for?",
      answer: "EaseWear is designed for anyone who finds conventional dressing challenging. This includes seniors, wheelchair users, stroke survivors, people with Parkinson's, Arthritis, ALS, or anyone with limited dexterity or mobility. We also cater to caregivers who assist with dressing."
    },
    {
      question: "What type of physical disabilities can the clothing help with?",
      answer: "Our clothing helps individuals dealing with fine-motor skill limitations (Arthritis, Parkinson's), mobility restrictions (wheelchair users, paralysis), post-surgery recovery, and upper/lower limb differences. Features like one-hand dressing and magnetic closures are universally beneficial."
    },
    {
      question: "Are EaseWear garments refurbished?",
      answer: "Yes, a significant portion of our collection is upcycled. We source high-quality surplus and pre-loved garments and professionally refurbish them by integrating our proprietary adaptive features. This allows us to offer sustainable, circular fashion without compromising on style or accessibility."
    },
    {
      question: "Will refurbished garments look exactly identical?",
      answer: "While we maintain strict quality standards, upcycled garments are inherently unique. There may be minor variations in fabric shade or pattern placement compared to the original manufactured batch. We believe these unique touches add character to our sustainable pieces."
    },
    {
      question: "What adaptive features are available?",
      answer: "Our standard features include hidden magnetic closures, concealed velcro, easy-pull zippers, elasticated waistbands, and seated-friendly cuts (higher back rise). We focus on making these features practically invisible from the outside."
    },
    {
      question: "Can I request customization?",
      answer: "Absolutely. If our standard features don't perfectly meet your needs, you can submit a request through our Customization page, and our tailors will work to create a bespoke solution for you."
    },
    {
      question: "How do I select my size?",
      answer: "We recommend reviewing our detailed Size Guide available on every product page. Because adaptive clothing often features adjusted cuts (like higher back rises for seated users), it's important to measure according to our specific guidelines rather than relying solely on conventional brand sizing."
    },
    {
      question: "How do I wash EaseWear products?",
      answer: "Always ensure all magnetic closures and velcro are completely closed before washing to prevent snagging. We recommend a gentle machine wash in cold water with like colors. Avoid ironing directly over the magnets or velcro."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 14-day hassle-free return policy. If the garment doesn't fit or the adaptive features don't meet your needs, you can return the unworn item (with tags attached) for a full refund or exchange."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery within India takes 5-7 business days. Customization requests generally add 3-5 days to the processing time."
    },
    {
      question: "Do you accept bulk orders?",
      answer: "Yes, we accept B2B and bulk orders. Please visit our B2B / Bulk Orders page to submit a pricing enquiry."
    },
    {
      question: "Do you work with hospitals and NGOs?",
      answer: "We actively partner with healthcare institutions, rehab centers, and NGOs to provide accessible clothing to those who need it most. We offer special institutional rates."
    },
    {
      question: "How can I become a partner?",
      answer: "If you represent an organization interested in collaborating, please visit our Partner With Us page and fill out the partnership enquiry form. Our team will get back to you promptly."
    },
    {
      question: "How can I contact EaseWear?",
      answer: "You can reach us via the Contact form on our website, email us at Easewear.pvt@gma8l.com, or use the WhatsApp chat button available in the bottom corner of your screen."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about our adaptive fashion, sustainability practices, and ordering process.
        </p>
      </div>

      <div className="bg-secondary/20 border rounded-3xl p-6 md:p-10 mb-16">
        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border px-2">
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 pr-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center bg-primary/5 border border-primary/10 rounded-[2rem] p-10">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full text-primary mb-6">
          <MessageSquare className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Can't find the answer you're looking for? Our support team is here to help you with any specific queries you might have.
        </p>
        <Button size="lg" className="rounded-full px-8 h-12">
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>
    </div>
  );
}
