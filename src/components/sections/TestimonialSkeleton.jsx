// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
export function TestimonialSkeleton() {
  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="h-10 w-1/3 mx-auto bg-cream-200 rounded mb-12"
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-cream-50 p-6 rounded-lg border border-cream-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <motion.div
                    key={j}
                    className="w-5 h-5 bg-cream-200 rounded-full mr-1"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: j * 0.1,
                    }}
                  />
                ))}
              </div>
              <div className="space-y-2">
                {[...Array(3)].map((_, k) => (
                  <motion.div
                    key={k}
                    className={`h-4 bg-cream-200 rounded ${
                      k === 1 ? "w-5/6" : k === 2 ? "w-2/3" : ""
                    }`}
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      delay: k * 0.1,
                    }}
                  />
                ))}
              </div>
              <div className="mt-4">
                <motion.div
                  className="h-4 bg-cream-300 rounded w-1/2"
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    delay: 0.3,
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
