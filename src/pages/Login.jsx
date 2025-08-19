// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../servicies/supabase";
import { useState } from "react";
import LoginForm from "../components/LoginComponent/LoginForm";
import LoginYarnBall from "../components/LoginComponent/LoginYarnBall";
import FooterSignup from "../components/LoginComponent/FooterSignup";
import HeaderSection from "../components/LoginComponent/HeaderSection";
import toast from "react-hot-toast";
import { useAuth } from "../Context/useAuh"; // Import the custom hook for auth context

function Login() {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth(); // Use the function from AuthProvider
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle(); // Use the function from context
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError(error.message);
      toast.error("Google sign-in failed");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const toastId = toast.loading("Signing in...");

    try {
      const { data, error: signInError } =
        await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

      if (signInError) {
        throw signInError;
      }
      console.log(data);
      // Successful login
      toast.success("Signed in successfully!", { id: toastId });
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error(err.message, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Main container with gradient background */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-crochetPrimary-100 to-crochetSecondary-200 p-4">
        {/* Animated container with fade-in effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Card container with border and shadow */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-crochetAccent-300">
            {/* Header section with decorative yarn stripe */}
            <HeaderSection />

            {/* Form section */}
            <LoginForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              error={error}
              loading={loading}
              handleGoogleSignIn={handleGoogleSignIn}
            />

            {/* Footer with sign up link */}
            <FooterSignup />

            {/* Decorative yarn ball at bottom */}
            <LoginYarnBall />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
