// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import CategoryModal from "../CategoryModal";
import SvgToggleElement from "./SvgToggleElement";

function MainContent({ sidebarOpen, toggleSidebar, onSelectGender }) {
  const [sortBy, setSortBy] = useState(false);
  const toggleSortByBar = () => {
    setSortBy(!sortBy);
  };
  return (
    <motion.div
      animate={{ flex: sidebarOpen ? 1 : 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`${sidebarOpen ? "flex-1" : "w-full"}`}
    >
      {/* Filter Controls Row */}
      <div className="flex justify-between items-center mb-6 w-full">
        <div className="flex items-center min-w-[200px]">
          <button
            onClick={toggleSidebar}
            className="mr-3 p-1 hover:text-pink-500 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">Crochet Creations</h1>
          {/* <span className="ml-2 text-gray-600">(42)</span> */}
        </div>
        {/* {svg element}  toggle sort by */}
        <SvgToggleElement
          toggleSidebar={toggleSidebar}
          toggleSortByBar={toggleSortByBar}
          sidebarOpen={sidebarOpen}
          setSortBy={setSortBy}
          sortBy={sortBy}
          onSelectGender={onSelectGender}
        />
      </div>
    </motion.div>
  );
}

export default MainContent;
