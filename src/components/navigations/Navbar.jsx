// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../brand/Logo";
import SecondaryButton from "../common/button/Secondarybutton";
import { useAuth } from "../../Context/useAuh";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized above md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      className="top-0 w-full sticky z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        {isScrolled ? (
          // Compact header when scrolled
          <motion.div
            key="compact-header"
            className="bg-crochetPrimary-100/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto max-w-[1800px] flex items-center justify-between py-3 gap-4 px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <NavLink to="/" className="flex items-center gap-2">
                  <Logo />
                </NavLink>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-4 gap-3">
                  <li className="font-family-inter text-lg text-crochetText-700">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="font-family-inter text-lg text-crochetText-700">
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li className="font-family-inter text-lg text-crochetText-700">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="font-family-inter text-lg text-crochetText-700">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </nav>

              <div className="hidden md:block">
                <div className="flex items-center gap-6">
                  {user ? (
                    <div className="flex items-center gap-4">
                      <NavLink to="/profile">
                        {user.user_metadata?.avatar_url ? (
                          <img
                            src={user.user_metadata.avatar_url}
                            alt="Profile"
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-crochetAccent-300 flex items-center justify-center text-sm font-medium">
                            {user.email?.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </NavLink>
                    </div>
                  ) : (
                    <>
                      <NavLink to="/login">
                        <SecondaryButton children="Login" />
                      </NavLink>
                      <NavLink to="/signup">Sign Up</NavLink>
                    </>
                  )}
                </div>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="md:hidden bg-crochetPrimary-100/95 backdrop-blur-md border-t border-gray-200/50"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 py-4">
                    <ul className="flex flex-col space-y-6">
                      <li className="font-family-inter text-lg text-crochetText-700 px-4 py-2">
                        <NavLink to="/" onClick={() => setIsOpen(false)}>
                          Home
                        </NavLink>
                      </li>
                      <li className="font-family-inter text-lg text-crochetText-700 px-4 py-2">
                        <NavLink to="/shop" onClick={() => setIsOpen(false)}>
                          Shop
                        </NavLink>
                      </li>
                      <li className="font-family-inter text-lg text-crochetText-700 px-4 py-2">
                        <NavLink to="/about" onClick={() => setIsOpen(false)}>
                          About
                        </NavLink>
                      </li>
                      <li className="font-family-inter text-lg text-crochetText-700 px-4 py-2">
                        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                          Contact
                        </NavLink>
                      </li>
                      <li>
                        {user ? (
                          <NavLink
                            to="/profile"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 py-2"
                          >
                            {user.user_metadata?.avatar_url ? (
                              <img
                                src={user.user_metadata.avatar_url}
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-crochetAccent-300 flex items-center justify-center text-sm font-medium">
                                {user.email?.charAt(0).toUpperCase()}
                              </div>
                            )}
                            <span>Profile</span>
                          </NavLink>
                        ) : (
                          <>
                            <NavLink
                              to="/login"
                              onClick={() => setIsOpen(false)}
                            >
                              <SecondaryButton children="Login" />
                            </NavLink>
                            <NavLink
                              to="/signup"
                              onClick={() => setIsOpen(false)}
                              className="block mt-4"
                            >
                              Sign Up
                            </NavLink>
                          </>
                        )}
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          // Regular header at top of page
          <motion.div
            key="regular-header"
            className="bg-crochetPrimary-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto max-w-[1800px] flex items-center justify-between py-4 gap-4 px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <NavLink to="/" className="flex items-center gap-2">
                  <Logo />
                </NavLink>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-4 gap-3">
                  <li className="font-family-inter text-lg text-crochetText-700">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="font-family-inter text-lg text-crochetText-700">
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li className="font-family-inter text-lg text-crochetText-700">
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li className="font-family-inter text-lg text-crochetText-700">
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </nav>

              <div className="hidden md:block">
                <div className="flex items-center gap-6">
                  {user ? (
                    <div className="flex items-center gap-4">
                      <NavLink to="/profile">
                        {user.user_metadata?.avatar_url ? (
                          <img
                            src={user.user_metadata.avatar_url}
                            alt="Profile"
                            className="w-8 h-8 rounded-full"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-crochetAccent-300 flex items-center justify-center text-sm font-medium">
                            {user.email?.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </NavLink>
                    </div>
                  ) : (
                    <>
                      <NavLink to="/login">
                        <SecondaryButton children="Login" />
                      </NavLink>
                      <NavLink to="/signup">Sign Up</NavLink>
                    </>
                  )}
                </div>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="md:hidden bg-crochetPrimary-100/95 backdrop-blur-md border-t border-gray-200/50"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-4 py-4">
                    <ul className="flex flex-col space-y-6">
                      <li className="font-family-inter text-lg text-crochetText-700 px-4 py-2">
                        <NavLink to="/" onClick={() => setIsOpen(false)}>
                          Home
                        </NavLink>
                      </li>
                      <li className="font-family-inter text-lg text-crochetText-700 px-4 py-2">
                        <NavLink to="/shop" onClick={() => setIsOpen(false)}>
                          Shop
                        </NavLink>
                      </li>
                      <li className="font-family-inter text-lg text-crochetText-700 px-4 py-2">
                        <NavLink to="/about" onClick={() => setIsOpen(false)}>
                          About
                        </NavLink>
                      </li>
                      <li className="font-family-inter text-lg text-crochetText-700 px-4 py-2">
                        <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                          Contact
                        </NavLink>
                      </li>
                      <li>
                        {user ? (
                          <NavLink
                            to="/profile"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 py-2"
                          >
                            {user.user_metadata?.avatar_url ? (
                              <img
                                src={user.user_metadata.avatar_url}
                                alt="Profile"
                                className="w-8 h-8 rounded-full"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-crochetAccent-300 flex items-center justify-center text-sm font-medium">
                                {user.email?.charAt(0).toUpperCase()}
                              </div>
                            )}
                            <span>Profile</span>
                          </NavLink>
                        ) : (
                          <>
                            <NavLink
                              to="/login"
                              onClick={() => setIsOpen(false)}
                            >
                              <SecondaryButton children="Login" />
                            </NavLink>
                            <NavLink
                              to="/signup"
                              onClick={() => setIsOpen(false)}
                              className="block mt-4"
                            >
                              Sign Up
                            </NavLink>
                          </>
                        )}
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
