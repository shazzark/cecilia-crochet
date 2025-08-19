import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/useAuh";
import { toast } from "react-hot-toast";
import SecondaryButton from "../components/common/button/Secondarybutton";
import Primarybutton from "../components/common/button/PrimaryButton";
import LogoutConfirmationModal from "../components/Profilepage component/LogoutConfirmationModal";
import { ArrowLeftIcon, UserIcon } from "@heroicons/react/24/outline";

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
    <div className="min-h-screen bg-crochetPrimary-50 py-8">
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
        <div className="max-w-4xl mx-auto">
          {/* Profile Header Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-crochetPrimary-100">
            <h1 className="text-4xl font-bold text-crochetText-800 mb-2 flex items-center">
              <UserIcon className="h-8 w-8 mr-3 text-crochetPrimary-600" />
              Your Profile
            </h1>
            <p className="text-crochetText-600">
              Manage your account settings and preferences
            </p>
          </div>

          {/* Profile Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-crochetPrimary-100">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-crochetPrimary-200 to-crochetAccent-100 flex items-center justify-center overflow-hidden shadow-xl border-4 border-white">
                  {user?.user_metadata?.avatar_url ? (
                    <img
                      src={user.user_metadata.avatar_url}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl font-semibold text-crochetText-700">
                      {user?.email?.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-crochetPrimary-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                  Active
                </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <h2 className="text-3xl font-bold text-crochetText-800 mb-2">
                  {user?.user_metadata?.full_name || "Crochet Enthusiast"}
                </h2>
                <p className="text-crochetText-600 text-lg mb-4">
                  {user?.email}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <span className="bg-crochetPrimary-100 text-crochetPrimary-800 px-3 py-1 rounded-full text-sm">
                    Member
                  </span>
                  <span className="bg-crochetAccent-100 text-crochetAccent-800 px-3 py-1 rounded-full text-sm">
                    Premium
                  </span>
                </div>
              </div>
            </div>

            {/* Profile Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {/* Account Details Card */}
              <div className="bg-crochetPrimary-50 p-6 rounded-xl border border-crochetPrimary-200 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-crochetPrimary-500 rounded-lg flex items-center justify-center mr-3">
                    <UserIcon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-crochetText-800">
                    Account Details
                  </h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-crochetText-500">Member since</p>
                    <p className="text-crochetText-700 font-medium">
                      {new Date(user?.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-crochetText-500">Last login</p>
                    <p className="text-crochetText-700 font-medium">
                      {new Date(user?.last_sign_in_at).toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Activity Card */}
              <div className="bg-crochetAccent-50 p-6 rounded-xl border border-crochetAccent-200 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-crochetAccent-500 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-crochetText-800">
                    Your Activity
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-crochetPrimary-600">
                      12
                    </p>
                    <p className="text-sm text-crochetText-600">
                      Patterns saved
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-crochetPrimary-600">
                      5
                    </p>
                    <p className="text-sm text-crochetText-600">
                      Projects completed
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-crochetPrimary-600">
                      3
                    </p>
                    <p className="text-sm text-crochetText-600">
                      Wishlist items
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-crochetPrimary-600">
                      8
                    </p>
                    <p className="text-sm text-crochetText-600">Following</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t border-crochetPrimary-200">
              <NavLink to="/settings">
                <SecondaryButton className="flex items-center">
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  Edit Profile
                </SecondaryButton>
              </NavLink>
              <Primarybutton
                onClick={() => setShowLogoutModal(true)}
                disabled={isLoggingOut}
                className="flex items-center"
              >
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                {isLoggingOut ? "Logging Out..." : "Log Out"}
              </Primarybutton>
            </div>
          </div>
        </div>

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
