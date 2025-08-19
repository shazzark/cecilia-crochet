// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Navbar from "../components/navigations/Navbar";
import FeaturedProductsSection from "../components/sections/FeaturedProductsSection";
import HeroSection from "../components/sections/HeroSection";
import NewsletterSignup from "../components/sections/NewsletterSignup";
import ProcessGallerySection from "../components/sections/ProcessgallerySection";
import SeasonalSpotlight from "../components/sections/SeasonalSpotlight";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function HomePages() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <motion.div variants={itemVariants}>
        <HeroSection />
      </motion.div>
      <motion.div variants={itemVariants}>
        <FeaturedProductsSection />
      </motion.div>
      <motion.div variants={itemVariants}>
        <ProcessGallerySection />
      </motion.div>
      <motion.div variants={itemVariants}>
        <TestimonialsSection />
      </motion.div>
      <motion.div variants={itemVariants}>
        <NewsletterSignup />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SeasonalSpotlight />
      </motion.div>
    </motion.div>
  );
}

export default HomePages;
