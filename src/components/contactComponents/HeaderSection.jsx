// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function HeaderSection({ itemVariants }) {
  return (
    <div>
      <motion.div className="mb-16" variants={itemVariants}>
        <h1 className="text-5xl md:text-6xl font-bold text-crochetText-800 mb-4">
          Let's <span className="text-crochetPrimary-500">Connect</span>
        </h1>
        <p className="text-xl text-crochetText-600 max-w-2xl">
          We'd love to hear about your crochet projects, answer pattern
          questions, or discuss custom orders. Drop us a message below!
        </p>
      </motion.div>
    </div>
  );
}

export default HeaderSection;
