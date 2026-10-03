import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get in Touch</h1>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h2 className="text-2xl font-bold mb-6">We'd love to hear from you.</h2>
          <p className="text-muted-foreground mb-8">
            Whether you have a question about our products, need assistance with sizing, or want to discuss a partnership, our team is here to help.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-sm text-muted-foreground">Easewear.pvt@gma8l.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-sm text-muted-foreground">+91 8974498177</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">+91 8974498177</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Headquarters</h3>
                <p className="text-sm text-muted-foreground">
                  Sunbeam Sucity<br />
                  India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondary/30 p-8 rounded-3xl border">
          <h2 className="text-xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <Input required className="bg-background h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <Input required className="bg-background h-12" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input required type="email" className="bg-background h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea required className="bg-background min-h-[120px]" />
            </div>
            <Button type="submit" className="w-full h-12 text-base">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
