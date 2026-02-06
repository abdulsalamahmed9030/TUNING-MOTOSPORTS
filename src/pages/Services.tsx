import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import dynoImage from "@/assets/dyno-tuning.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={dynoImage} alt="Dyno tuning" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-base/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl sm:text-5xl font-display font-black text-white mt-2 mb-4">Performance Services</h1>
          <p className="text-white/60 max-w-xl mx-auto font-body">Expert automotive performance services in Calgary. From tuning to full builds.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeInUp}>
                <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/20 hover:shadow-md transition-all">
                  <service.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-display font-bold text-lg mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-accent font-display font-bold text-sm">{service.startingPrice}</span>
                    <Link to="/book">
                      <Button size="sm" variant="outline" className="font-display text-xs">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
