import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { services } from "@/data/services";
import { CalendarDays, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const BookService = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Booking request submitted! We'll be in touch shortly.");
  };

  if (submitted) {
    return (
      <div className="section-padding">
        <div className="max-w-lg mx-auto text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <h1 className="text-3xl font-display font-black text-foreground mb-2">Booking Submitted!</h1>
            <p className="text-muted-foreground font-body mb-6">We've received your service request. Our team will contact you within 24 hours to confirm your appointment.</p>
            <Button onClick={() => setSubmitted(false)} className="bg-primary text-primary-foreground font-display font-semibold">Book Another Service</Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-dark-base text-dark-base-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <CalendarDays className="w-8 h-8 text-accent" />
            <h1 className="text-4xl font-display font-black">Book a Service</h1>
          </div>
          <p className="text-dark-base-foreground/60 font-body">Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="font-display font-semibold text-sm">First Name</Label>
                <Input id="firstName" required placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="font-display font-semibold text-sm">Last Name</Label>
                <Input id="lastName" required placeholder="Doe" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-display font-semibold text-sm">Email</Label>
                <Input id="email" type="email" required placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-display font-semibold text-sm">Phone</Label>
                <Input id="phone" type="tel" required placeholder="403-555-0123" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="vehicle" className="font-display font-semibold text-sm">Vehicle (Year, Make, Model)</Label>
                <Input id="vehicle" required placeholder="2021 BMW M3" />
              </div>
              <div className="space-y-2">
                <Label className="font-display font-semibold text-sm">Service Needed</Label>
                <Select required>
                  <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.id} value={s.id}>{s.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="details" className="font-display font-semibold text-sm">Additional Details</Label>
              <Textarea id="details" rows={4} placeholder="Tell us about your build, modifications, or specific goals..." />
            </div>
            <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold text-base">
              Submit Booking Request
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BookService;
