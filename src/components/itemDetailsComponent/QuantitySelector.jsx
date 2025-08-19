// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function Quantityselector({ quantity, setQuantity }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.65 }}
      className="mb-6"
    >
      <h3 className="text-sm font-medium mb-2">Quantity</h3>
      <div className="flex items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-3 py-1 border border-gray-300 rounded-l-md bg-gray-100"
        >
          -
        </motion.button>
        <span className="px-4 py-1 border-t border-b border-gray-300 bg-white">
          {quantity}
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setQuantity(quantity + 1)}
          className="px-3 py-1 border border-gray-300 rounded-r-md bg-gray-100"
        >
          +
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Quantityselector;
