import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/useAuh";
import { toast } from "react-hot-toast";
import LogoutConfirmationModal from "../components/Profilepage component/LogoutConfirmationModal";
import { ArrowLeftIcon, UserIcon } from "@heroicons/react/24/outline";
import MainContent from "../components/Profilepage component/MainContent";

function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    console.log("Logout initiated");
    setIsLoggingOut(true);
    try {
      await logout();
      console.log("Logout successful");
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(error.message || "Failed to log out");
      setIsLoggingOut(false);
      setShowLogoutModal(false);
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen  py-8">
      <div className="container mx-auto px-4">
        {/* Header with Back Button */}
        <div className="flex items-center mb-8">
          <button
            onClick={handleBackToHome}
            className="flex items-center text-crochetText-600 hover:text-crochetPrimary-700 transition-colors duration-200 group"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </button>
        </div>

        {/* Main Content */}
        <MainContent
          user={user}
          setShowLogoutModal={setShowLogoutModal}
          isLoggingOut={isLoggingOut}
        />

        {/* Logout Confirmation Modal */}
        {showLogoutModal && (
          <LogoutConfirmationModal
            onConfirm={handleLogout}
            onCancel={() => setShowLogoutModal(false)}
            isLoading={isLoggingOut}
          />
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
