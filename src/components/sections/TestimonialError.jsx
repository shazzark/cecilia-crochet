// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export function TestimonialError({ error }) {
  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="bg-red-50 text-red-600 p-4 rounded-lg inline-block"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          {error} - Showing example testimonials
        </motion.div>
      </div>
    </motion.section>
  );
}
