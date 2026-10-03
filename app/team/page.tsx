import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function TeamPage() {
  const team = [
    { name: "Armaan Kumar Choudhary", role: "Co-Founder", bio: "[PLACEHOLDER - confirm with EaseWear team]" },
    { name: "Shaurya Singh", role: "Co-Founder", bio: "[PLACEHOLDER - confirm with EaseWear team]" },
    { name: "Shivansh Srivastava", role: "Co-Founder", bio: "[PLACEHOLDER - confirm with EaseWear team]" },
    { name: "Swetika Kumari Soni", role: "Co-Founder", bio: "[PLACEHOLDER - confirm with EaseWear team]" },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The passionate individuals behind EaseWear's mission to make fashion accessible for everyone.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <Card key={member.name} className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 text-center">
              <div className="w-48 h-48 mx-auto bg-muted rounded-full mb-6 flex items-center justify-center overflow-hidden border">
                <span className="text-xs text-muted-foreground text-center px-4">
                  [PLACEHOLDER - Photo]
                </span>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {member.bio}
              </p>
              <Link href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors text-muted-foreground">
                <Briefcase className="w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
