// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function ImageGallery({ mainImage, product, thumbnails, setMainImage }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-4 rounded-lg overflow-hidden"
      >
        <img
          src={mainImage}
          alt={product.name}
          className="w-full h-auto object-cover"
        />
      </motion.div>

      <motion.div className="grid grid-cols-4 gap-2">
        {thumbnails.map((thumb, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMainImage(thumb)}
            className={`border rounded-md overflow-hidden ${
              mainImage === thumb ? "ring-2 ring-indigo-500" : ""
            }`}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-auto"
            />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default ImageGallery;
