import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-24 flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md border-border shadow-md">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>Sign in to your EaseWear account</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email"><Mail className="w-4 h-4 mr-2" /> Email</TabsTrigger>
              <TabsTrigger value="phone"><Smartphone className="w-4 h-4 mr-2" /> Phone</TabsTrigger>
            </TabsList>
            
            <TabsContent value="email">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="m@example.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-medium">Password</label>
                    <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                  </div>
                  <Input type="password" required />
                </div>
                <Button type="submit" className="w-full h-12">Sign In</Button>
              </form>
            </TabsContent>
            
            <TabsContent value="phone">
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <div className="flex">
                    <span className="flex items-center justify-center bg-muted px-3 border border-r-0 rounded-l-md text-muted-foreground text-sm">+91</span>
                    <Input type="tel" placeholder="9876543210" required className="rounded-l-none" />
                  </div>
                </div>
                <Button type="submit" className="w-full h-12">Send OTP</Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary font-medium hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
