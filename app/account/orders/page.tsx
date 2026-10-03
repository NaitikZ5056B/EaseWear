import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function OrdersPage() {
  const orders = [
    { id: "ORD-982347", date: "Oct 12, 2026", status: "Processing", amount: 3698, items: 3 },
    { id: "ORD-123456", date: "Sep 05, 2026", status: "Delivered", amount: 1499, items: 1 }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-2xl p-6 bg-background flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-bold">{order.id}</span>
                <Badge variant={order.status === "Delivered" ? "secondary" : "default"}>{order.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Placed on {order.date} • {order.items} item(s) • ₹{order.amount}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Link href={`/track-order?orderId=${order.id}`}>Track</Link>
              </Button>
              <Button variant="secondary" size="sm">View Details</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
