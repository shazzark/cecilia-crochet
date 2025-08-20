// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { fetchCrochetCollections } from "../../servicies/unsplashService";
import PrimaryButton from "../common/button/PrimaryButton";
// import PrimaryButton from "../common/button/Primarybutton";

function FeaturedProductsSection() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCollections = async () => {
      const data = await fetchCrochetCollections();
      setCollections(data);
      setLoading(false);
    };

    loadCollections();
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <motion.section
      className="py-16 bg-crochetPrimary-100 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-serif text-3xl text-center text-crochetText-900 mb-12"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Signature Collections
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
            >
              <CollectionCard collection={collection} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Loading Skeleton with Framer Motion
function LoadingSkeleton() {
  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="font-serif text-3xl text-center text-crochetText-900 mb-12 h-10 w-1/3 mx-auto bg-cream-200 rounded"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-cream-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                className="w-full h-64 bg-cream-100"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.1,
                }}
              />
              <div className="p-6">
                <motion.div
                  className="h-6 w-3/4 bg-cream-200 mb-4"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: i * 0.15,
                  }}
                />
                <motion.div
                  className="h-10 w-full bg-cream-200"
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: i * 0.2,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

// Collection Card with interactive animations
function CollectionCard({ collection, index }) {
  return (
    <motion.div
      className="border border-cream-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <motion.img
        src={collection.image}
        alt={collection.alt}
        className="w-full h-64 object-cover"
        loading="lazy"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
      />
      <div className="p-6">
        <motion.h3
          className="font-serif text-xl text-crochetText-900 mb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
        >
          {collection.name}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
        >
          <PrimaryButton
            className="w-full mt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Collection
          </PrimaryButton>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FeaturedProductsSection;
