// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigations/Navbar";
import Footer from "../components/Footer";

function AppLayoutPages() {
  return (
    <div className="min-h-screen   flex flex-col items-center bg-crochetPrimary-100 style{{minHeight:'100vh'}} z-50">
      <div className="  flex-grow container mx-auto w-full">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 mx-auto"
        ></motion.main>
        <main className="px-4 mx-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayoutPages;
