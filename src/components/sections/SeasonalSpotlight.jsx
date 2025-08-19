// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Primarybutton from "../common/button/PrimaryButton";
import { fetchCrochetCollections } from "../../servicies/unsplashService";

export default function SeasonalSpotlight() {
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    async function loadImage() {
      const collections = await fetchCrochetCollections();

      setCollection(collections[2]);
    }
    loadImage();
  }, []);

  if (!collection) {
    return null;
  }
  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={collection.image}
              alt={collection.alt}
              className="rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl text-crochetText-900 mb-4">
              {collection.name}
            </h2>
            <p className="text-crochetText-700 mb-6">
              Lightweight crochet pieces perfect for warm weather
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Primarybutton className="px-8 py-3">
                Shop Seasonal Picks
              </Primarybutton>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
