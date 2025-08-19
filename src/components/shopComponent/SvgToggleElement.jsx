import { useState, useEffect } from "react";
import CategoryModal from "../CategoryModal";

function SvgToggleElement({
  toggleSidebar,
  toggleSortByBar,
  sidebarOpen,
  sortBy,
  onSelectGender,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex-1 flex justify-end items-center space-x-6 ml-4">
      {!isMobile ? (
        // Desktop view - show buttons normally
        <div className="flex items-center space-x-6">
          <button
            className="flex items-center hover:text-pink-500"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? (
              <span className="text-sm">Hide Filters</span>
            ) : (
              <span className="text-sm">Show Filters</span>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </button>

          {sortBy && (
            <div className="relative">
              <CategoryModal
                onclose={toggleSortByBar}
                onSelectGender={onSelectGender}
              />
            </div>
          )}
          <button
            onClick={toggleSortByBar}
            className="flex items-center hover:text-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
              />
            </svg>
            <span className="text-sm">Sort By</span>
          </button>
        </div>
      ) : (
        //  show three dots
        <div className="relative">
          <button
            className="flex items-center hover:text-pink-500 p-2"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                onClick={() => {
                  toggleSidebar();
                  setShowDropdown(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  />
                </svg>
                {sidebarOpen ? "hide Filters" : "show Filters"}
              </button>

              <button
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                onClick={() => {
                  toggleSortByBar();
                  setShowDropdown(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                  />
                </svg>
                Sort By
              </button>
            </div>
          )}

          {sortBy && (
            <div className="relative">
              <CategoryModal
                onclose={toggleSortByBar}
                onSelectGender={onSelectGender}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SvgToggleElement;
