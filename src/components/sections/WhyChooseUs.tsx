import { motion } from "framer-motion";
import { Shield, Headphones, DollarSign, Award, MapPin, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority with fully insured trips and 24/7 support",
  },
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "We match any competitor's price and offer exclusive deals",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is available round the clock for assistance",
  },
  {
    icon: Award,
    title: "Expert Guides",
    description: "Professional and certified local guides for authentic experiences",
  },
  {
    icon: MapPin,
    title: "500+ Destinations",
    description: "Explore the world with our extensive network of destinations",
  },
  {
    icon: Clock,
    title: "Flexible Booking",
    description: "Easy cancellation and modification policies for peace of mind",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Make Your Travel Dreams Come True
          </h2>
          <p className="text-muted-foreground text-lg">
            With over 15 years of experience, we've helped thousands of travelers create unforgettable memories
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
