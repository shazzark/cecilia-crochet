import { UserIcon } from "@heroicons/react/24/outline";
import SecondaryButton from "../common/button/Secondarybutton";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../common/button/PrimaryButton";
import ProfilePageHeader from "./ProfilePageHeader";
import ProfileContentHeader from "./ProfileContentHeader";
import ActivityCard from "./ActivityCard";

function MainContent({ user, setShowLogoutModal, isLoggingOut }) {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header Card */}
      <ProfilePageHeader user={user} />

      {/* Profile Content */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-crochetPrimary-100">
        {/* Profile Header */}
        <ProfileContentHeader user={user} />

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
          <ActivityCard />
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
          <PrimaryButton
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
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
