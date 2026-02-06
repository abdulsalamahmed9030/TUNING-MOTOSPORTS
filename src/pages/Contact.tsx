import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div>
      <section className="bg-dark-base text-dark-base-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-black mb-2">Contact Us</h1>
          <p className="text-dark-base-foreground/60 font-body">We'd love to hear from you. Reach out anytime.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-display font-black text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "403-993-6742", href: "tel:403-993-6742" },
                  { icon: Mail, label: "Email", value: "general@tuningfactory.ca", href: "mailto:general@tuningfactory.ca" },
                  { icon: MapPin, label: "Location", value: "Calgary, Alberta, Canada", href: undefined },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 9AM–6PM | Sat: 10AM–4PM", href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm text-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-muted rounded-lg h-48 flex items-center justify-center">
                <span className="text-muted-foreground text-sm font-body">Map — Calgary, AB</span>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-20">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-display font-black text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground font-body mb-6">We'll get back to you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="font-display font-semibold">Send Another</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-display font-black text-foreground mb-2">Send a Message</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="font-display font-semibold text-sm">Name</Label>
                      <Input required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-display font-semibold text-sm">Email</Label>
                      <Input type="email" required placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="font-display font-semibold text-sm">Subject</Label>
                    <Input required placeholder="What's this about?" />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-display font-semibold text-sm">Message</Label>
                    <Textarea rows={5} required placeholder="Tell us more..." />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
