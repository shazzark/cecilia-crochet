// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function SizeSelection({ sizes, selectedSize, setSelectedSize }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="mb-6"
    >
      <h3 className="text-sm font-medium mb-2">Size</h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <motion.button
            key={size}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSize(size)}
            className={`px-4 py-2 border rounded-md text-sm ${
              selectedSize === size
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {size}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default SizeSelection;
