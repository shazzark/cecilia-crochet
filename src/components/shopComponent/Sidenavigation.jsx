// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

function Sidenavigation({ sidebarOpen, handleItemClick }) {
  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.div
          key="sidebar"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-64 pr-8"
        >
          <h1 className="text-2xl font-bold mb-6">Crochet Creations</h1>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Crochet Types</h2>
            <ul className="space-y-2 pl-2">
              {[
                "Amigurumi",
                "Blankets",
                "Clothing",
                "Accessories",
                "Home Decor",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-pink-500 cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Filter By</h2>
            <ul className="space-y-2 pl-2">
              {[
                "Yarn Weight",
                "Skill Level",
                "Price Range",
                "Color",
                "Collections",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-pink-500 cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">Special</h2>
            <ul className="space-y-2 pl-2">
              {["Seasonal", "Custom Orders", "Sale Items", "Patterns"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-pink-500 cursor-pointer"
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Sidenavigation;
