// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { StarIcon } from "../common/StartIcon";

export function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      className="bg-cream-50 p-6 rounded-lg border border-cream-200 hover:shadow-lg transition-all"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center mb-4">
        {testimonial.avatar && (
          <motion.img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/150";
            }}
            whileHover={{ rotate: 5, scale: 1.05 }}
          />
        )}
        <div>
          <p className="font-serif text-crochetPrimary-600 font-medium">
            {testimonial.name}
          </p>
          {testimonial.location && (
            <p className="text-sm text-crochetText-500">
              {testimonial.location}
            </p>
          )}
        </div>
      </div>
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <StarIcon filled={i < testimonial.rating} />
          </motion.div>
        ))}
      </div>
      <blockquote className="italic text-crochetText-700 mb-4">
        "{testimonial.quote}"
      </blockquote>
      <div className="text-sm text-crochetText-500">
        {new Date(testimonial.date).toLocaleDateString()}
      </div>
    </motion.div>
  );
}
