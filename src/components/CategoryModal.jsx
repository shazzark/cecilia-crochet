// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function CategoryModal({ onclose, onSelectGender }) {
  const handleGenderSelect = (gender) => {
    onSelectGender(gender);
    onclose();
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="absolute top-full mt-2 w-48 bg-crochetPrimary-100 rounded-md shadow-lg z-50"
      >
        <div className="py-1" onClick={onclose}>
          <motion.button
            whileHover={{ backgroundColor: "#fdf2f8" }}
            className="w-full text-left px-4 py-2 text-gray-700 hover:text-pink-600"
            onClick={() => handleGenderSelect("women")}
          >
            Women
          </motion.button>

          <motion.button
            whileHover={{ backgroundColor: "#fdf2f8" }}
            className="w-full text-left px-4 py-2 text-gray-700 hover:text-pink-600"
            onClick={() => handleGenderSelect("men")}
          >
            Men
          </motion.button>

          <motion.button
            whileHover={{ backgroundColor: "#fdf2f8" }}
            className="w-full text-left px-4 py-2 text-gray-700 hover:text-pink-600"
            onClick={() => handleGenderSelect("unisex")}
          >
            Unisex
          </motion.button>

          <motion.button
            whileHover={{ backgroundColor: "#fdf2f8" }}
            className="w-full text-left px-4 py-2 text-gray-700 hover:text-pink-600"
            onClick={() => handleGenderSelect("children")}
          >
            Children
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
