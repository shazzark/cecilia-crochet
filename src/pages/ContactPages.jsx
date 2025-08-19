// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import HeaderSection from "../components/contactComponents/HeaderSection";
import toast from "react-hot-toast";
import { supabase } from "../servicies/supabase";
import ContactForm from "../components/contactComponents/ContactForm";
import Topleftdesign from "../components/contactComponents/Topleftdesign";
import { useAuth } from "../Context/useAuh";

function ContactPages() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.user_metadata?.full_name || "",
    email: user?.email || "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please sign in to send a message", {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          user_id: user.id, // ADDED USER_ID
        },
      ]);

      if (error) {
        throw error;
      }

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
      });

      setFormData({
        name: user.user_metadata?.full_name || "",
        email: user.email || "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error.message);
      toast.error(`Failed to send message: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-crochetPrimary-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <Topleftdesign itemVariants={itemVariants} />
        <HeaderSection itemVariants={itemVariants} />
        <motion.div
          className="w-full h-px bg-crochetText-300 my-12"
          variants={itemVariants}
        />

        {!user ? (
          <motion.div className="text-center py-12" variants={itemVariants}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-crochetPrimary-200">
              <h3 className="text-2xl font-semibold text-crochetText-800 mb-4">
                Sign In to Contact Us
              </h3>
              <p className="text-crochetText-600 mb-6">
                Please sign in to your account to send us a message.
              </p>
              <motion.button
                onClick={() => (window.location.href = "/login")}
                className="bg-crochetPrimary-500 text-white px-8 py-3 rounded-lg hover:bg-crochetPrimary-600 transition font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign In
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            itemVariants={itemVariants}
            user={user}
          />
        )}
      </div>
    </motion.div>
  );
}

export default ContactPages;
