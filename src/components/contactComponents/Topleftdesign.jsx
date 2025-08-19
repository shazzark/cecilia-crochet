// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function Topleftdesign({ itemVariants }) {
  return (
    <motion.div className="mb-12 flex items-center" variants={itemVariants}>
      <span className="text-crochetPrimary-500 text-2xl mr-2">/</span>
      <h2 className="text-crochetText-700 text-xl font-medium">CONTACT US</h2>
    </motion.div>
  );
}

export default Topleftdesign;
