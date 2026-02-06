import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "What types of vehicles do you work on?",
    a: "We specialize in European and Japanese performance vehicles, but we work on all makes and models. From BMWs and Audis to Subarus and Nismos — if it has an engine, we can make it faster.",
  },
  {
    q: "Do I need an appointment for services?",
    a: "Yes, we recommend booking in advance to ensure we can dedicate the proper time and resources to your vehicle. You can book online or call us at 403-993-6742.",
  },
  {
    q: "How long does a dyno tune take?",
    a: "A typical ECU tune session takes 2-4 hours, depending on the vehicle and modifications. Custom tunes for built engines or turbo setups may require a full day.",
  },
  {
    q: "Do you offer warranties on parts and services?",
    a: "Yes! All parts come with a minimum 1-year manufacturer warranty. Our labor is backed by a 12-month / 20,000 km warranty on all installations.",
  },
  {
    q: "Can I supply my own parts for installation?",
    a: "We can install customer-supplied parts, but we cannot offer our labor warranty on parts we didn't supply. We recommend purchasing through us for full coverage.",
  },
  {
    q: "Do you ship parts across Canada?",
    a: "Absolutely. We offer free shipping on orders over $500 within Canada. Most orders ship within 1-2 business days.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Visa, Mastercard, Interac, e-Transfer, and cash. Financing options are available for services over $2,000.",
  },
  {
    q: "Can you help me plan a full build?",
    a: "That's what we do best. Book a consultation and we'll help you plan the perfect build for your goals and budget — whether it's a street car, track toy, or show car.",
  },
];

const FAQ = () => {
  return (
    <div>
      <section className="bg-dark-base text-dark-base-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-display font-black mb-2">Frequently Asked Questions</h1>
          <p className="text-dark-base-foreground/60 font-body">Everything you need to know about our services and products.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-display font-bold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-8 bg-surface rounded-xl">
            <h3 className="font-display font-bold text-lg text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground text-sm font-body mb-4">We're here to help. Reach out and we'll get back to you ASAP.</p>
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground font-display font-semibold">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
