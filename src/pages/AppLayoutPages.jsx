// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigations/Navbar";
import Footer from "../components/Footer";

function AppLayoutPages() {
  return (
    <div className="min-h-screen w-full max-w-9xl mx-auto  flex flex-col items-center bg-crochetPrimary-100 style{{minHeight:'100vh'}} z-50">
      <div className="w-full sticky top-0 z-50" style={{ overflowX: "hidden" }}>
        <Navbar />
      </div>
      <div className="  flex-grow container mx-auto w-full">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4 mx-auto"
        ></motion.main>
        <main className="px-4 mx-auto max-w-7xl w-full ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayoutPages;
