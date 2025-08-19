// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { supabase } from "../../servicies/supabase";
import { StarIcon } from "../common/StartIcon";
import { useAuth } from "../../Context/useAuh";

export function TestimonialForm({ onNewTestimonial }) {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    quote: "",
    rating: 0,
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.user_metadata?.full_name || user.email || "",
      }));
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please log in to submit a testimonial", {
        position: "top-center",
        duration: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const avatar = `https://randomuser.me/api/portraits/${
        Math.random() > 0.5 ? "men" : "women"
      }/${Math.floor(Math.random() * 100)}.jpg`;

      const { data, error } = await supabase
        .from("testimonials")
        .insert([
          {
            name: formData.name,
            quote: formData.quote,
            rating: formData.rating,
            location: formData.location,
            date: new Date().toISOString(),
            featured: true,
            avatar,
            user_id: user.id, // ADDED USER_ID
          },
        ])
        .select();

      if (error) throw error;

      if (onNewTestimonial) {
        onNewTestimonial(data[0]);
      }

      toast.success("Thank you for your testimonial!", {
        position: "top-center",
        duration: 4000,
      });

      setFormData({
        name: user.user_metadata?.full_name || user.email || "",
        quote: "",
        rating: 5,
        location: "",
      });
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      toast.error("Failed to submit testimonial. Please try again.", {
        position: "top-center",
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="mt-12 max-w-2xl mx-auto bg-cream-100 p-6 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="font-serif text-xl text-center mb-4"
        whileHover={{ scale: 1.02 }}
      >
        Share Your Experience
      </motion.h3>

      {!user ? (
        <div className="text-center py-8">
          <p className="text-crochetText-600 mb-4">
            Please log in to share your testimonial
          </p>
          <motion.button
            onClick={() => (window.location.href = "/login")}
            className="bg-crochetPrimary-500 text-white px-6 py-2 rounded hover:bg-crochetPrimary-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log In
          </motion.button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label className="block text-sm font-medium text-crochetText-700 mb-1">
              Your Name
            </label>
            <motion.input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 rounded border border-cream-300"
              required
              disabled={isSubmitting}
              whileFocus={{ scale: 1.01, borderColor: "#d1a679" }}
            />
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label className="block text-sm font-medium text-crochetText-700 mb-1">
              Your Testimonial
            </label>
            <motion.textarea
              value={formData.quote}
              onChange={(e) =>
                setFormData({ ...formData, quote: e.target.value })
              }
              className="w-full px-4 py-2 rounded border border-cream-300"
              rows="3"
              required
              disabled={isSubmitting}
              whileFocus={{ scale: 1.01, borderColor: "#d1a679" }}
            />
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label className="block text-sm font-medium text-crochetText-700 mb-1">
              Your Location (Optional)
            </label>
            <motion.input
              type="text"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="w-full px-4 py-2 rounded border border-cream-300"
              disabled={isSubmitting}
              whileFocus={{ scale: 1.01, borderColor: "#d1a679" }}
            />
          </motion.div>

          <div>
            <label className="block text-sm font-medium text-crochetText-700 mb-1">
              Rating
            </label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="focus:outline-none"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <StarIcon filled={star <= formData.rating} />
                </motion.button>
              ))}
            </div>
          </div>

          <motion.button
            type="submit"
            className="bg-crochetPrimary-500 text-white px-6 py-2 rounded hover:bg-crochetPrimary-600 transition disabled:opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </motion.button>
        </form>
      )}
    </motion.div>
  );
}
