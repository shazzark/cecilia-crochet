// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FeaturedProduct from "../components/shopComponent/FeaturedProduct";
import NewsLetter from "../components/shopComponent/NewLetter";
import MainContent from "../components/shopComponent/MainContent";
import Sidenavigation from "../components/shopComponent/Sidenavigation";

function ShopPages() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [sortBy, setSortBy] = useState(false);

  const handleItemClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender((prevGender) => (prevGender === gender ? null : gender)); // Toggle gender selection
  };

  const toggleSortByBar = () => {
    setSortBy(!sortBy);
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Side Navigation with animation */}
      <Sidenavigation
        sidebarOpen={sidebarOpen}
        handleItemClick={handleItemClick}
      />

      {/* Main Content  */}
      <motion.div
        animate={{ flex: sidebarOpen ? 1 : 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`${sidebarOpen ? "flex-1" : "w-full"}`}
      >
        {/* Filter Controls Row */}
        <MainContent
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          onSelectGender={handleGenderSelect}
          sortBy={sortBy}
          toggleSortByBar={toggleSortByBar}
        />

        <hr className="my-4" />

        {/* Featured Products */}
        <FeaturedProduct
          selectedCategory={selectedCategory}
          selectedGender={selectedGender}
        />

        {/* Newsletter Section */}
        <NewsLetter />
      </motion.div>
    </div>
  );
}

export default ShopPages;
