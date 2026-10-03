import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, ShieldCheck } from "lucide-react";

export default function AccountDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6">Welcome to your Dashboard</h1>
      
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl">
          <Package className="w-8 h-8 text-primary mb-4" />
          <h3 className="font-bold text-lg mb-2">Track Recent Order</h3>
          <p className="text-sm text-muted-foreground mb-4">Your order ORD-982347 is currently processing.</p>
          <Button variant="outline" size="sm">
            <Link href="/track-order?orderId=ORD-982347">Track Order</Link>
          </Button>
        </div>
        
        <div className="bg-secondary/30 border p-6 rounded-2xl">
          <ShieldCheck className="w-8 h-8 text-foreground mb-4" />
          <h3 className="font-bold text-lg mb-2">Request Customization</h3>
          <p className="text-sm text-muted-foreground mb-4">Need specific adaptive features? We can tailor our products to your needs.</p>
          <Button variant="outline" size="sm">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
