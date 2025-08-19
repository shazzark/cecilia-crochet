// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Primarybutton from "../common/button/PrimaryButton";
import { useState } from "react";
import toast from "react-hot-toast";
import { supabase } from "../../servicies/supabase";
import { useAuth } from "../../Context/useAuh";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!user) {
      toast.error("Please sign in to subscribe to our newsletter");
      setLoading(false);
      return;
    }

    if (!email) {
      toast.error("Please enter your email address");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("newsletter_subscriptions").insert({
        email,
        user_id: user.id,
        subscribed_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast.success(
        "Thanks for subscribing! Check your email for confirmation."
      );
      setEmail("");
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error(error.message || "Failed to subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="py-16 bg-crochetPrimary-100"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <motion.h2
          className="font-serif text-3xl text-crochetText-900 mb-4"
          whileHover={{ scale: 1.02 }}
        >
          Join Our Stitch Circle
        </motion.h2>
        <motion.p
          className="text-crochetText-700 mb-8"
          whileHover={{ scale: 1.01 }}
        >
          Get 15% off your first order + exclusive patterns
        </motion.p>

        {!user ? (
          <div className="text-center">
            <motion.p
              className="text-crochetText-700 mb-4 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Sign in to subscribe to our newsletter
            </motion.p>
            <motion.button
              onClick={() => (window.location.href = "/login")}
              className="bg-crochetPrimary-500 text-white px-6 py-3 rounded-lg hover:bg-crochetPrimary-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In to Subscribe
            </motion.button>
          </div>
        ) : (
          <>
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-cream-300"
                whileFocus={{ scale: 1.02, borderColor: "#d1a679" }}
                disabled={loading}
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Primarybutton
                  type="submit"
                  className="px-6 py-3"
                  disabled={loading}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </Primarybutton>
              </motion.div>
            </motion.form>
            <motion.p
              className="text-crochetText-700 mt-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              You're signed in as {user.email}
            </motion.p>
          </>
        )}
      </div>
    </motion.section>
  );
}
