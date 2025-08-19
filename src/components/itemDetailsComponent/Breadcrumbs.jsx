// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function Breadcrumbs({ product, navigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center text-sm mb-8"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 mr-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>
      <span className="mx-2 text-gray-400">&gt;&gt;</span>
      <a href="#" className="text-gray-600 mr-2">
        Catalogue
      </a>
      <span className="mx-2 text-gray-400">&gt;&gt;</span>
      <span className="text-gray-900">{product.name}</span>
    </motion.div>
  );
}

export default Breadcrumbs;
