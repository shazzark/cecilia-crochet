// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function ContactForm({
  formData,
  handleChange,
  handleSubmit,
  isSubmitting,
  itemVariants,
}) {
  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl"
      variants={itemVariants}
    >
      <motion.div className="mb-8" variants={itemVariants}>
        <label htmlFor="name" className="block text-crochetText-700 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border-b-2 border-crochetText-400 py-2 focus:border-crochetPrimary-500 focus:outline-none"
          required
        />
      </motion.div>

      <motion.div className="mb-8" variants={itemVariants}>
        <label htmlFor="email" className="block text-crochetText-700 mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border-b-2 border-crochetText-400 py-2 focus:border-crochetPrimary-500 focus:outline-none"
          required
        />
      </motion.div>

      <motion.div className="mb-12" variants={itemVariants}>
        <label htmlFor="message" className="block text-crochetText-700 mb-2">
          Share your crochet thoughts
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full bg-transparent border-b-2 border-crochetText-400 py-2 focus:border-crochetPrimary-500 focus:outline-none resize-none"
          required
        />
      </motion.div>

      <motion.button
        type="submit"
        className="px-8 py-3 bg-crochetPrimary-500 text-white font-medium rounded-full hover:bg-crochetPrimary-600 transition-colors disabled:opacity-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={itemVariants}
        disabled={isSubmitting}
      >
        {isSubmitting ? "SENDING..." : "SEND YOUR MESSAGE"}
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;
