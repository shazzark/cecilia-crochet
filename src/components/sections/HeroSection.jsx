// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import PrimaryButton from "../common/button/PrimaryButton";
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative bg-cream-100 py-20 md:py-32 overflow-hidden h-screen w-full">
      {/* Main content container */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center max-w-4xl relative z-10">
        {/* Headline section */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-crochetText-900 font-bold leading-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Woven with Love, Crafted for Comfort
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-crochetPrimary-500 mx-auto mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-crochetText-700 mb-10 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Discover timeless crochet pieces made by hand, inspired by tradition
          and stitched with soul. From cozy wearables to charming home accents —
          every thread tells a story.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PrimaryButton className="px-8 py-4 text-lg">
            <NavLink to="/shop">Shop Now</NavLink>
          </PrimaryButton>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      {/* Top left circle (existing) */}
      <motion.div
        className="absolute -top-10 -left-10 w-48 h-48 bg-crochetSecondary-400 rounded-full opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 1, type: "spring" }}
      />

      {/* Bottom right circle (new matching element) */}
      <motion.div
        className="absolute -bottom-10 -right-10 w-48 h-48 bg-crochetSecondary-400 rounded-full opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 1, type: "spring" }}
      />

      {/* Additional decorative elements */}
      {/* Diagonal yarn-like line top right */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-1 bg-crochetPrimary-300 opacity-20 transform rotate-45"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      />

      {/* Small decorative circles */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-crochetPrimary-200 rounded-full opacity-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
      />

      <motion.div
        className="absolute top-1/3 right-1/3 w-12 h-12 bg-crochetSecondary-300 rounded-full opacity-15"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.7, type: "spring" }}
      />

      {/* Subtle grid pattern in background */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1a679 1px, transparent 1px),
            linear-gradient(to bottom, #d1a679 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
    </section>
  );
}

export default HeroSection;
