// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

export default function Buttons({ buyNow, addToCart, cartCount }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
      className="flex flex-col sm:flex-row gap-3 mb-8"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={buyNow}
        className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-md font-medium"
      >
        Buy Now
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={addToCart}
        className="flex-1 bg-white text-indigo-600 py-3 px-6 rounded-md font-medium border border-indigo-600 flex items-center justify-center gap-2"
      >
        <FaShoppingCart />
        Add to Cart
        {cartCount > 0 && (
          <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </motion.button>
    </motion.div>
  );
}
