import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ChevronRight, Gauge, Shield, Wrench } from "lucide-react";
import { products } from "@/data/products";
import { services } from "@/data/services";
import heroImage from "@/assets/hero-car.jpg";
import workshopImage from "@/assets/workshop.jpg";
import dynoImage from "@/assets/dyno-tuning.jpg";
import productBrakes from "@/assets/product-brakes.jpg";
import productExhaust from "@/assets/product-exhaust.jpg";
import productSuspension from "@/assets/product-suspension.jpg";
import productTurbo from "@/assets/product-turbo.jpg";

const productImages: Record<string, string> = {
  "product-brakes": productBrakes,
  "product-exhaust": productExhaust,
  "product-suspension": productSuspension,
  "product-turbo": productTurbo,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const Index = () => {
  const featuredProducts = products.slice(0, 4);
  const featuredServices = services.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Performance car on track" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-base/90 via-dark-base/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-wider">
                Calgary's Performance Specialists
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-6"
            >
              Unleash Your
              <br />
              <span className="text-accent">Full Potential</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-white/70 mb-8 max-w-lg font-body">
              Premium performance parts and expert tuning services. From bolt-ons to full builds — we make power you can feel.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold text-base px-8">
                  Shop Parts <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/book">
                <Button size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/10 font-display font-bold text-base px-8">
                  Book a Service
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Cars Tuned" },
              { value: "15+", label: "Years Experience" },
              { value: "100%", label: "Satisfaction Rate" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-black text-2xl sm:text-3xl">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-end justify-between mb-12">
              <div>
                <span className="text-accent font-display font-semibold text-sm uppercase tracking-wider">Shop</span>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground mt-2">
                  Featured Parts
                </h2>
              </div>
              <Link to="/shop" className="hidden sm:flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <Link to={`/product/${product.id}`} className="group block">
                    <div className="relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/20 hover:shadow-lg transition-all">
                      {product.badge && (
                        <span className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs font-display font-bold px-2.5 py-1 rounded">
                          {product.badge}
                        </span>
                      )}
                      <div className="aspect-square bg-muted p-6 flex items-center justify-center overflow-hidden">
                        <img
                          src={productImages[product.image]}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">{product.category}</p>
                        <h3 className="font-display font-bold text-sm text-foreground mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-border"}`} />
                          ))}
                          <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-display font-bold text-foreground">${product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toLocaleString()}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="sm:hidden mt-8 text-center">
              <Link to="/shop">
                <Button variant="outline" className="font-display font-semibold">
                  View All Parts <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services preview */}
      <section className="dark-section section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-3xl sm:text-4xl font-display font-black mt-2">
                Expert Performance Services
              </h2>
              <p className="text-dark-base-foreground/60 mt-3 max-w-xl mx-auto font-body">
                From ECU tuning to full custom builds — our certified technicians deliver results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <motion.div key={service.id} variants={fadeInUp}>
                  <div className="bg-dark-base-foreground/5 border border-dark-base-foreground/10 rounded-lg p-6 hover:border-accent/30 transition-all group">
                    <service.icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-display font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-dark-base-foreground/60 mb-4 font-body leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent font-display font-semibold text-sm">{service.startingPrice}</span>
                      <Link to="/book" className="text-sm text-dark-base-foreground/40 hover:text-accent transition-colors">
                        Book Now →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-10">
              <Link to="/services">
               <Button
  size="lg"
  variant="outline"
  className="border-white/30 text-black hover:bg-white/10 font-display font-semibold"
>
  View All Services <ChevronRight className="ml-1 w-4 h-4" />
</Button>

              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Workshop CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={workshopImage} alt="Workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-primary-foreground mb-6">
              Ready to Make Power?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto font-body">
              Book your dyno session or service appointment today. Our team is ready to take your car to the next level.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link to="/book">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-display font-bold text-base px-8">
                  Book a Service
                </Button>
              </Link>
              <a href="tel:403-993-6742">
                <Button
  size="lg"
  variant="outline"
  className="border-primary-foreground/30 text-black hover:bg-black/5 font-display font-bold text-base px-8"
>
  Call Us
</Button>

              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-wider">Why TuningFactory</span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground mt-2">
                The TF Difference
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Gauge, title: "Dyno-Proven Results", desc: "Every tune is validated on our in-house Dynapack dyno. No guesswork — just real, measurable gains." },
                { icon: Shield, title: "Quality Guaranteed", desc: "We stand behind every part we sell and every service we perform. Your satisfaction is our priority." },
                { icon: Wrench, title: "Expert Technicians", desc: "Our team has 15+ years of experience working on everything from daily drivers to full race builds." },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeInUp} className="text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground mt-2">
                What Our Customers Say
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Marcus R.", car: "2019 BMW M3", text: "TuningFactory got me 85 extra wheel horsepower with their Stage 2 tune. The car feels completely different — and it's still perfectly streetable." },
                { name: "Sarah L.", car: "2021 Audi RS3", text: "Had my coilovers and big brake kit installed here. The attention to detail is unreal. Best shop in Calgary, hands down." },
                { name: "Jake T.", car: "2020 Subaru WRX STI", text: "Full turbo-back exhaust and a pro tune — the car makes real power now. The team really knows what they're doing." },
              ].map((t) => (
                <motion.div key={t.name} variants={fadeInUp} className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-display font-bold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.car}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
