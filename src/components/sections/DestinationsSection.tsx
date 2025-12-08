import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import greeceImg from "@/assets/destination-greece.jpg";
import baliImg from "@/assets/destination-bali.jpg";
import dubaiImg from "@/assets/destination-dubai.jpg";
import switzerlandImg from "@/assets/destination-switzerland.jpg";
import maldivesImg from "@/assets/destination-maldives.jpg";
import parisImg from "@/assets/destination-paris.jpg";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: greeceImg,
    packages: 25,
    featured: true,
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: baliImg,
    packages: 32,
    featured: false,
  },
  {
    id: 3,
    name: "Dubai, UAE",
    image: dubaiImg,
    packages: 28,
    featured: false,
  },
  {
    id: 4,
    name: "Swiss Alps",
    image: switzerlandImg,
    packages: 18,
    featured: true,
  },
  {
    id: 5,
    name: "Maldives",
    image: maldivesImg,
    packages: 22,
    featured: false,
  },
  {
    id: 6,
    name: "Paris, France",
    image: parisImg,
    packages: 30,
    featured: false,
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

export const DestinationsSection = () => {
  return (
    <section id="destinations" className="py-20 lg:py-28 bg-background">
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
            Top Destinations
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Popular Destinations
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover the world's most breathtaking locations handpicked by our travel experts
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                destination.featured && index < 2 ? "md:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative ${destination.featured && index < 2 ? "h-[400px] lg:h-full" : "h-[300px]"}`}>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-card" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm">
                    {destination.packages} Tour Packages
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="hero" size="lg">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Destinations
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
