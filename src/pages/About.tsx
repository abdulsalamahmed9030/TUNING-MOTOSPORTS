import { motion } from "framer-motion";
import workshopImage from "@/assets/workshop.jpg";
import dynoImage from "@/assets/dyno-tuning.jpg";
import suspensionImage from "@/assets/services-suspension.jpg";
import { Gauge, Users, Award, Wrench } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={workshopImage} alt="Workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-base/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-display font-black text-white mt-2 mb-4">Built by Enthusiasts,<br />For Enthusiasts</h1>
          <p className="text-white/60 max-w-xl mx-auto font-body">Calgary's trusted name in automotive performance since 2009.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-display font-black text-foreground mt-2 mb-4">Passion Meets Precision</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                TuningFactory was born from a simple idea: Calgary deserves a world-class performance shop. What started as a passion project in a small garage has grown into one of Western Canada's most respected automotive performance facilities.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                Our team of certified technicians brings over 15 years of combined experience in everything from daily-driver ECU tunes to full race-car builds. We invest in the latest equipment — including our in-house Dynapack dyno — because we believe every car deserves precision tuning backed by real data.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                Whether you're chasing lap times or just want your daily to feel alive, we're here to make it happen. No shortcuts. No compromises. Just pure performance.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="grid grid-cols-2 gap-4">
                <img src={dynoImage} alt="Dyno tuning session" className="rounded-lg w-full h-48 object-cover" />
                <img src={suspensionImage} alt="Suspension install" className="rounded-lg w-full h-48 object-cover mt-8" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-black text-foreground">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gauge, title: "Performance First", desc: "Every decision is driven by measurable performance gains." },
              { icon: Users, title: "Customer Trust", desc: "Transparent pricing, honest advice, and no upselling." },
              { icon: Award, title: "Quality Parts", desc: "We only stock and install parts we'd use on our own cars." },
              { icon: Wrench, title: "Expert Craft", desc: "Meticulous attention to detail in every installation and tune." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
