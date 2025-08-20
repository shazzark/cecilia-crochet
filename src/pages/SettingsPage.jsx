import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/useAuh";
import { toast } from "react-hot-toast";
import {
  UserIcon,
  EnvelopeIcon,
  BellIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import TabsContent from "../components/SettingsPageComponent/TabsContent";
import HeaderSettings from "../components/SettingsPageComponent/HeaderSettings";
import TabsNavigation from "../components/SettingsPageComponent/TabsNavigation";

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
        <HeaderSettings handleBackToProfile={handleBackToProfile} />

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-crochetPrimary-100">
          {/* Tab Navigation */}
          <TabsNavigation
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {/* Tab Content */}
          <TabsContent
            activeTab={activeTab}
            user={user}
            profileData={profileData}
            setProfileData={setProfileData}
            handleProfileUpdate={handleProfileUpdate}
            isLoading={isLoading}
            emailData={emailData}
            handleEmailUpdate={handleEmailUpdate}
            setEmailData={setEmailData}
            showCurrentPassword={showCurrentPassword}
            handlePasswordUpdate={handlePasswordUpdate}
            setShowCurrentPassword={setShowCurrentPassword}
            setPasswordData={setPasswordData}
            passwordData={passwordData}
            showNewPassword={showNewPassword}
            setShowNewPassword={setShowNewPassword}
            setNotificationSettings={setNotificationSettings}
            notificationSettings={notificationSettings}
            handleNotificationUpdate={handleNotificationUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
