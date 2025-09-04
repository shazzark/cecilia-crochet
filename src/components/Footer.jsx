// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Logo from "./brand/Logo";
import { NavLink } from "react-router-dom";
// import Logo from "../brand/Logo";

function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
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
    <motion.footer
      className="bg-crochetPrimary-100 text-crochetText-700 py-12 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <motion.div variants={itemVariants}>
            <div className="mb-4">
              <Logo />
            </div>
            <address className="not-italic">
              {/* <p>Brains and hammers estate galadimwa</p> */}
              {/* <p>
                Brains and hammers estate <br /> galadimwa Abuja
              </p> */}
              {/* <p className="mt-2">(+234)8132421252</p> */}
            </address>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 p">
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-crochetAccent-500 transition-colors"
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <a
                  href="mailto:hello@ceciliacrochet.com"
                  className="hover:text-crochetAccent-500 transition-colors"
                >
                  okonkwocecilia67 <br />
                  @gmail.com
                </a>
              </li>
              <li className="mt-4">
                <address>
                  Brains and hammers
                  <br />
                  estate galadimwa Abuja
                  <br />
                  (+234)813 242 1252
                </address>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-crochetAccent-500 transition-colors"
                >
                  About Cecilia Crochet
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="hover:text-crochetAccent-500 transition-colors"
                >
                  Crochet Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/workshops"
                  className="hover:text-crochetAccent-500 transition-colors"
                >
                  Workshops
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/patterns"
                  className="hover:text-crochetAccent-500 transition-colors"
                >
                  Free Patterns
                </NavLink>
              </li>
            </ul>
          </motion.div>

          {/* For Crafters */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">For Crafters</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/tutorials"
                  className="hover:text-crochetAccent-500 transition-colors"
                >
                  Video Tutorials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/materials"
                  className="hover:text-crochetAccent-500 transition-colors"
                >
                  Materials Guide
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stitches"
                  className="hover:text-crochetAccent-500 transition-colors"
                >
                  Stitch Library
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/community"
                  className="hover:text-crochetAccent-500 transition-colors"
                >
                  Community
                </NavLink>
              </li>
            </ul>
          </motion.div>

          {/* Account */}
          {/* <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Account</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/register"
                    className="hover:text-crochetAccent-500 transition-colors"
                  >
                    Create Account
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="hover:text-crochetAccent-500 transition-colors"
                  >
                    Sign In
                  </NavLink>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-crochetAccent-500 transition-colors"
                  >
                    iOS App
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-crochetAccent-500 transition-colors"
                  >
                    Android App
                  </a>
                </li>
              </ul>
            </div>
          </motion.div> */}
        </div>

        {/* Divider */}
        <motion.div
          className="my-8 border-t border-crochetText-300"
          variants={itemVariants}
        />

        {/* Copyright */}
        <motion.div className="text-center" variants={itemVariants}>
          <p>
            © {new Date().getFullYear()} Cecilia Crochet. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
