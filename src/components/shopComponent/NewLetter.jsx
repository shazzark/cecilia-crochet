// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function NewsLetter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-12 text-center bg-pink-50 p-6 rounded-lg w-full"
    >
      <motion.h3
        className="text-xl font-semibold mb-2"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Join Our Crochet Circle
      </motion.h3>

      <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Get exclusive patterns, early access to new collections, and 10% off
        your first order!
      </motion.p>

      <motion.a
        href="#"
        className="text-pink-600 font-semibold hover:underline"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        www.yourcrochetshop <br />
        .com/ newsletter-signup
      </motion.a>
    </motion.div>
  );
}

export default NewsLetter;
