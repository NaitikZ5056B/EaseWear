import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <div className="container mx-auto px-4 py-24 flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md border-border shadow-md">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription>Join EaseWear for faster checkout and tracking.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <Input required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <Input required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="m@example.com" required />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input type="tel" placeholder="+91" required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input type="password" required />
            </div>

            <Button type="submit" className="w-full h-12 mt-2">Sign Up</Button>
          </form>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
