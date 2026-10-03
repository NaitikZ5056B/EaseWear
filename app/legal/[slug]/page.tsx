import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

// In Next.js 15, params is a Promise in Server Components
export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const validPages: Record<string, string> = {
    "privacy-policy": "Privacy Policy",
    "terms-and-conditions": "Terms & Conditions",
    "shipping-policy": "Shipping Policy",
    "return-and-refund-policy": "Return & Refund Policy",
    "cancellation-policy": "Cancellation Policy",
    "cookie-policy": "Cookie Policy",
    "accessibility": "Accessibility Statement",
    "disclaimer": "Disclaimer"
  };

  const title = validPages[slug];

  if (!title) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="mb-12">
        <Badge variant="destructive" className="mb-4 text-sm px-3 py-1">
          [DRAFT — requires legal review before publishing]
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
        <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="prose prose-slate max-w-none text-foreground/80 space-y-6">
        <p>
          This is a placeholder for the {title}. This document outlines the policies and procedures of EaseWear Pvt. Ltd. regarding this subject. 
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
        <p>
          [Placeholder content. This section will contain the introduction and scope of the policy. Please replace this with the legally reviewed text before the site goes live.]
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. General Provisions</h2>
        <p>
          [Placeholder content. Detailed terms and conditions will be stated here. It is critical that this is reviewed by a legal professional to ensure compliance with local and international laws.]
        </p>
        
        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Contact Information</h2>
        <p>
          If you have any questions about this {title}, please contact us at <strong>legal@easewear.in</strong>.
        </p>
      </div>
    </div>
  );
}
