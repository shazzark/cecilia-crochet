// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function AboutPages() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Top left "/ ABOUT US" */}
      <motion.div className="mb-12 flex items-center" variants={itemVariants}>
        <span className="text-crochetPrimary-500 text-2xl mr-2">/</span>
        <h2 className="text-crochetText-700 text-xl font-medium">ABOUT US</h2>
        <span className="ml-4 text-crochetText-500">01</span>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Hero section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold text-crochetText-800 mb-6">
              CECILIA CROCHET
            </h1>
            <p className="text-xl text-crochetText-600 mb-8">
              We didn't set out to just sell yarn and hooks.
            </p>
            <p className="text-lg text-crochetText-600 leading-relaxed">
              We are a team of passionate fiber artists, designers, and craft
              lovers dedicated to bringing the joy of crochet to everyone.
              Founded with a mission to create beautiful, handmade items while
              preserving traditional techniques, Cecilia Crochet was born out of
              a love for the craft and a desire to share it with the world.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <img
              src="https://images.unsplash.com/photo-1611095973763-414019e72400?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Crochet art"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </motion.div>
        </div>

        {/* Features section */}
        <motion.div className="mb-24" variants={itemVariants}>
          <h2 className="text-2xl font-bold text-crochetText-800 mb-8">
            OUR CRAFT
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "HANDMADE",
                description: "Each piece crafted with care",
              },
              {
                title: "PREMIUM YARN",
                description: "Only the finest materials",
              },
              {
                title: "TIMELESS DESIGNS",
                description: "Classic meets modern",
              },
              { title: "SUSTAINABLE", description: "Eco-friendly practices" },
              { title: "QUALITY GUARANTEE", description: "Built to last" },
              { title: "CUSTOM ORDERS", description: "Personalized creations" },
              { title: "PATTERN LIBRARY", description: "Free resources" },
              { title: "WORKSHOPS", description: "Learn from experts" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-crochetPrimary-50 rounded-lg"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-bold text-crochetText-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-crochetText-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission section */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={itemVariants}
        >
          <p className="text-lg md:text-xl text-crochetText-600 leading-relaxed">
            We are a community of yarn enthusiasts, stitch innovators, and
            pattern creators who believe in the therapeutic power of crochet.
            Founded with a mission to spread creativity and mindfulness through
            fiber arts, Cecilia Crochet was born out of countless hours of
            hooking yarn into beautiful, functional art.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default AboutPages;
