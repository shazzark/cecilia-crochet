import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/useAuh";
import { toast } from "react-hot-toast";
import SecondaryButton from "../components/common/button/Secondarybutton";
import Primarybutton from "../components/common/button/PrimaryButton";
import {
  ArrowLeftIcon,
  Cog6ToothIcon,
  UserIcon,
  EnvelopeIcon,
  BellIcon,
  ShieldCheckIcon,
  EyeIcon,
  EyeSlashIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

function SettingsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Form states
  const [profileData, setProfileData] = useState({
    fullName: user?.user_metadata?.full_name || "",
    username: user?.user_metadata?.username || "",
    bio: user?.user_metadata?.bio || "",
  });

  const [emailData, setEmailData] = useState({
    email: user?.email || "",
    currentPassword: "",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    marketingEmails: false,
    projectUpdates: true,
  });

  const handleBackToProfile = () => {
    navigate("/profile");
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Profile updated successfully! 🎉");
      setProfileData({
        fullName: profileData.fullName,
        username: profileData.username,
        bio: profileData.bio,
      });
    }, 1500);
  };

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    if (!emailData.currentPassword) {
      toast.error("Please enter your current password");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Email verification sent! 📧");
      setEmailData({ ...emailData, currentPassword: "" });
    }, 1500);
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    if (passwordData.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password updated successfully! 🔒");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    }, 1500);
  };

  const handleNotificationUpdate = () => {
    toast.success("Notification settings saved! 🔔");
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: UserIcon },
    { id: "email", label: "Email", icon: EnvelopeIcon },
    { id: "password", label: "Password", icon: ShieldCheckIcon },
    { id: "notifications", label: "Notifications", icon: BellIcon },
  ];

  return (
    <div className="min-h-screen bg-crochetPrimary-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handleBackToProfile}
            className="flex items-center text-crochetText-600 hover:text-crochetPrimary-700 transition-all duration-200 group"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Profile
          </button>
          <h1 className="text-3xl font-bold text-crochetText-800 flex items-center">
            <Cog6ToothIcon className="h-8 w-8 mr-3 text-crochetPrimary-600" />
            Settings
          </h1>
          <div className="w-20"></div> {/* Spacer for balance */}
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-crochetPrimary-100">
          {/* Tab Navigation */}
          <div className="border-b border-crochetPrimary-200">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 border-b-2 font-medium text-sm transition-all duration-200 ${
                      activeTab === tab.id
                        ? "border-crochetPrimary-500 text-crochetPrimary-600 bg-crochetPrimary-50"
                        : "border-transparent text-crochetText-600 hover:text-crochetPrimary-700 hover:bg-crochetPrimary-25"
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {/* Profile Settings */}
            {activeTab === "profile" && (
              <div className="animate-fadeIn">
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-crochetPrimary-200 to-crochetAccent-100 flex items-center justify-center overflow-hidden shadow-lg border-4 border-white mr-6">
                      {user?.user_metadata?.avatar_url ? (
                        <img
                          src={user.user_metadata.avatar_url}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-3xl font-semibold text-crochetText-700">
                          {user?.email?.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-crochetText-800">
                        Profile Photo
                      </h3>
                      <p className="text-crochetText-600 mb-4">
                        JPG, GIF or PNG. Max size of 5MB.
                      </p>
                      <button className="flex items-center text-crochetPrimary-600 hover:text-crochetPrimary-700 transition-colors duration-200">
                        <PhotoIcon className="h-4 w-4 mr-2" />
                        Change photo
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-crochetText-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profileData.fullName}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            fullName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetPrimary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-crochetText-700 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        value={profileData.username}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            username: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetPrimary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Choose a username"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-crochetText-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        value={profileData.bio}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            bio: e.target.value,
                          })
                        }
                        rows={4}
                        className="w-full px-4 py-3 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetPrimary-500 focus:border-transparent transition-all duration-200"
                        placeholder="Tell us about yourself..."
                      />
                    </div>

                    <div className="flex justify-end">
                      <Primarybutton type="submit" disabled={isLoading}>
                        {isLoading ? "Saving..." : "Save Changes"}
                      </Primarybutton>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Email Settings */}
            {activeTab === "email" && (
              <div className="animate-fadeIn max-w-2xl mx-auto">
                <div className="bg-crochetPrimary-50 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-crochetText-800 mb-2">
                    Current Email
                  </h3>
                  <p className="text-crochetText-600">{user?.email}</p>
                </div>

                <form onSubmit={handleEmailUpdate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-crochetText-700 mb-2">
                      New Email Address
                    </label>
                    <input
                      type="email"
                      value={emailData.email}
                      onChange={(e) =>
                        setEmailData({ ...emailData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetPrimary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter new email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-crochetText-700 mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        value={emailData.currentPassword}
                        onChange={(e) =>
                          setEmailData({
                            ...emailData,
                            currentPassword: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetPrimary-500 focus:border-transparent transition-all duration-200 pr-12"
                        placeholder="Enter your current password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-crochetText-400 hover:text-crochetText-600 transition-colors duration-200"
                      >
                        {showCurrentPassword ? (
                          <EyeSlashIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Primarybutton type="submit" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Update Email"}
                    </Primarybutton>
                  </div>
                </form>
              </div>
            )}

            {/* Password Settings */}
            {activeTab === "password" && (
              <div className="animate-fadeIn max-w-2xl mx-auto">
                <form onSubmit={handlePasswordUpdate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-crochetText-700 mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        value={passwordData.currentPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            currentPassword: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetPrimary-500 focus:border-transparent transition-all duration-200 pr-12"
                        placeholder="Enter current password"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-crochetText-400 hover:text-crochetText-600 transition-colors duration-200"
                      >
                        {showCurrentPassword ? (
                          <EyeSlashIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-crochetText-700 mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        value={passwordData.newPassword}
                        onChange={(e) =>
                          setPasswordData({
                            ...passwordData,
                            newPassword: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetPrimary-500 focus:border-transparent transition-all duration-200 pr-12"
                        placeholder="Enter new password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-crochetText-400 hover:text-crochetText-600 transition-colors duration-200"
                      >
                        {showNewPassword ? (
                          <EyeSlashIcon className="h-5 w-5" />
                        ) : (
                          <EyeIcon className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-crochetText-700 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) =>
                        setPasswordData({
                          ...passwordData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetPrimary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Primarybutton type="submit" disabled={isLoading}>
                      {isLoading ? "Updating..." : "Update Password"}
                    </Primarybutton>
                  </div>
                </form>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === "notifications" && (
              <div className="animate-fadeIn max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border border-crochetPrimary-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div>
                      <h4 className="font-medium text-crochetText-800">
                        Email Notifications
                      </h4>
                      <p className="text-sm text-crochetText-600">
                        Receive emails about your account activity
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.emailNotifications}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            emailNotifications: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-crochetPrimary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crochetPrimary-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-crochetPrimary-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div>
                      <h4 className="font-medium text-crochetText-800">
                        Push Notifications
                      </h4>
                      <p className="text-sm text-crochetText-600">
                        Get notified about new patterns and updates
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.pushNotifications}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            pushNotifications: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-crochetPrimary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crochetPrimary-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-crochetPrimary-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div>
                      <h4 className="font-medium text-crochetText-800">
                        Marketing Emails
                      </h4>
                      <p className="text-sm text-crochetText-600">
                        Receive offers and promotional content
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.marketingEmails}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            marketingEmails: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-crochetPrimary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crochetPrimary-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-crochetPrimary-200 rounded-lg hover:shadow-md transition-shadow duration-200">
                    <div>
                      <h4 className="font-medium text-crochetText-800">
                        Project Updates
                      </h4>
                      <p className="text-sm text-crochetText-600">
                        Get notified about your saved projects
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationSettings.projectUpdates}
                        onChange={(e) =>
                          setNotificationSettings({
                            ...notificationSettings,
                            projectUpdates: e.target.checked,
                          })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-crochetPrimary-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-crochetPrimary-500"></div>
                    </label>
                  </div>

                  <div className="flex justify-end pt-6">
                    <Primarybutton onClick={handleNotificationUpdate}>
                      Save Notification Settings
                    </Primarybutton>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add custom animations to tailwind config */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default SettingsPage;
