// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchTestimonials } from "../../servicies/testimonial";
import { TestimonialCard } from "./TestimonialCard";
import { TestimonialForm } from "./TestimonialForm";
import { TestimonialSkeleton } from "./TestimonialSkeleton";
import { TestimonialError } from "./TestimonialError";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (err) {
        setError("Failed to load testimonials");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadTestimonials();
  }, []);

  if (loading) return <TestimonialSkeleton />;
  if (error) return <TestimonialError error={error} />;
  if (!testimonials.length) return <NoTestimonials />;

  return (
    <motion.section
      className="py-16 bg-crochetPrimary-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-serif text-3xl text-center text-crochetText-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Loved by Craft Lovers
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        <TestimonialForm
          onNewTestimonial={(newTestimonial) =>
            setTestimonials((prev) => [newTestimonial, ...prev])
          }
        />
      </div>
    </motion.section>
  );
}

function NoTestimonials() {
  return (
    <motion.div
      className="py-16 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      No testimonials available
    </motion.div>
  );
}
