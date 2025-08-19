// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function ProcessGallerySection() {
  const processSteps = [
    {
      id: 1,
      emoji: "🧶",
      name: "Yarn Selection",
      description: "Premium natural fibers chosen for each project",
    },
    {
      id: 2,
      emoji: "✏️",
      name: "Pattern Design",
      description: "Custom patterns drafted for perfect fit",
    },
    {
      id: 3,
      emoji: "🖐️",
      name: "Hand Stitching",
      description: "20+ hours of meticulous handwork",
    },
    {
      id: 4,
      emoji: "🔍",
      name: "Quality Check",
      description: "Every stitch inspected before shipping",
    },
  ];

  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="font-serif text-3xl text-center text-crochetText-900 mb-2"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Stitched with Care
        </motion.h2>
        <motion.p
          className="text-center text-crochetText-700 max-w-2xl mx-auto mb-12"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Each piece undergoes 20+ hours of handcrafting
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              <motion.div
                className="w-20 h-20 mx-auto bg-cream-100 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform"
                whileHover={{ rotate: 10, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-3xl">{step.emoji}</span>
              </motion.div>
              <h3 className="font-medium text-crochetText-900 mb-1">
                {step.name}
              </h3>
              <p className="text-sm text-crochetText-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessGallerySection;
