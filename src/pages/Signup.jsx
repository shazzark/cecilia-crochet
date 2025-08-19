// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../servicies/supabase";
import { useState } from "react";
import SignupForm from "../components/signupComponent/signupForm";
import Headersection from "../components/signupComponent/Headersection";
import CrochectHookButon from "../components/signupComponent/CrochectHookButon";
import FooterloginLink from "../components/signupComponent/FooterloginLink";
import { useAuth } from "../Context/useAuh"; // Import the custom hook for auth context
function Signup() {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth(); // Use the function from AuthProvider
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle(); // Use the function from context
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError(error.message);
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

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
          },
        },
      });
      console.log(data);

      if (signUpError) {
        throw signUpError;
      }

      setSuccess(true);
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
            <Headersection />

            {/* Form section */}
            <div className="px-8 pt-6">
              <SignupForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                success={success}
                error={error}
                loading={loading}
                handleGoogleSignIn={handleGoogleSignIn}
              />
            </div>

            {/* Footer with login link */}
            <FooterloginLink />

            {/* Decorative crochet hook at bottom */}
            <CrochectHookButon />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Signup;
