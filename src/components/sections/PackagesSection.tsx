import { motion } from "framer-motion";
import { Star, Clock, Users, MapPin, ArrowRight, Plane, Hotel, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import maldivesImg from "@/assets/destination-maldives.jpg";
import dubaiImg from "@/assets/destination-dubai.jpg";
import switzerlandImg from "@/assets/destination-switzerland.jpg";
import greeceImg from "@/assets/destination-greece.jpg";

const packages = [
  {
    id: 1,
    title: "Maldives Paradise Escape",
    image: maldivesImg,
    duration: "5 Days / 4 Nights",
    location: "Maldives",
    rating: 4.9,
    reviews: 128,
    price: 2499,
    originalPrice: 2999,
    featured: true,
    includes: ["flight", "hotel", "activities"],
  },
  {
    id: 2,
    title: "Dubai City & Desert Adventure",
    image: dubaiImg,
    duration: "6 Days / 5 Nights",
    location: "UAE",
    rating: 4.8,
    reviews: 96,
    price: 1899,
    originalPrice: 2299,
    featured: false,
    includes: ["flight", "hotel", "activities"],
  },
  {
    id: 3,
    title: "Swiss Alps Explorer",
    image: switzerlandImg,
    duration: "7 Days / 6 Nights",
    location: "Switzerland",
    rating: 4.9,
    reviews: 87,
    price: 3299,
    originalPrice: 3899,
    featured: true,
    includes: ["flight", "hotel", "activities"],
  },
  {
    id: 4,
    title: "Greek Island Hopping",
    image: greeceImg,
    duration: "8 Days / 7 Nights",
    location: "Greece",
    rating: 4.7,
    reviews: 112,
    price: 2199,
    originalPrice: 2599,
    featured: false,
    includes: ["flight", "hotel", "activities"],
  },
];

const includeIcons: Record<string, typeof Plane> = {
  flight: Plane,
  hotel: Hotel,
  activities: Camera,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 lg:py-28 bg-secondary/50">
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
            Best Selling Packages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Our Tour Packages
          </h2>
          <p className="text-muted-foreground text-lg">
            Carefully curated packages with the best deals, accommodations, and experiences
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.id} variants={itemVariants}>
              <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-medium transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {pkg.featured && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      Best Seller
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>

                <CardContent className="p-5">
                  {/* Location */}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>

                  {/* Duration & Reviews */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{pkg.reviews} reviews</span>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="flex items-center gap-3 mb-4">
                    {pkg.includes.map((item) => {
                      const Icon = includeIcons[item];
                      return (
                        <div
                          key={item}
                          className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"
                          title={item}
                        >
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                      );
                    })}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-sm text-muted-foreground line-through">
                        ${pkg.originalPrice}
                      </span>
                      <div className="font-display text-xl font-bold text-primary">
                        ${pkg.price}
                        <span className="text-sm font-normal text-muted-foreground">/person</span>
                      </div>
                    </div>
                    <Button variant="ocean" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
            View All Packages
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
