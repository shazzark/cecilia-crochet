import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../brand/Logo";
import SecondaryButton from "../common/button/Secondarybutton";
import { useAuth } from "../../Context/useAuh";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="top-0 flex-grow">
      <div className="container flex items-center justify-between py-4 mb-[60px] gap-5">
        <NavLink to="/" className="flex items-center gap-2">
          <Logo />
        </NavLink>

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
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-2">
            <span
              className={`block h-0.5 w-6 bg-current transition-all ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-current ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-current transition-all ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full left-0 bg-black bg-opacity-30 z-50 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container px-4 py-6">
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
                  className="flex items-center gap-2"
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
                  <NavLink to="/login" onClick={() => setIsOpen(false)}>
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
      </div>
    </header>
  );
}

export default Navbar;
