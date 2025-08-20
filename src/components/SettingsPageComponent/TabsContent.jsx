import EmailSettingsForm from "./EmailSettingsForm";
import PasswordSettingsForm from "./PasswordSettingsForm";
import NotificationTabs from "./NotificationTabs";
import ProfileSettingsTabs from "./ProfileSettingsTabs";

function TabsContent({
  activeTab,
  user,
  profileData,
  setProfileData,
  handleProfileUpdate,
  isLoading,
  emailData,
  handleEmailUpdate,
  setEmailData,
  showCurrentPassword,
  handlePasswordUpdate,
  setShowCurrentPassword,
  setPasswordData,
  passwordData,
  showNewPassword,
  setShowNewPassword,
  setNotificationSettings,
  notificationSettings,

  handleNotificationUpdate,
}) {
  return (
    <div className="p-8">
      {/* Profile Settings */}
      {activeTab === "profile" && (
        <div className="animate-fadeIn max-w-2xl mx-auto">
          <ProfileSettingsTabs
            user={user}
            profileData={profileData}
            setProfileData={setProfileData}
            handleProfileUpdate={handleProfileUpdate}
            isLoading={isLoading}
          />
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

          <EmailSettingsForm
            emailData={emailData}
            setEmailData={setEmailData}
            handleEmailUpdate={handleEmailUpdate}
            isLoading={isLoading}
            showCurrentPassword={showCurrentPassword}
            setShowCurrentPassword={setShowCurrentPassword}
          />
        </div>
      )}

      {/* Password Settings */}
      {activeTab === "password" && (
        <div className="animate-fadeIn max-w-2xl mx-auto">
          <PasswordSettingsForm
            handlePasswordUpdate={handlePasswordUpdate}
            passwordData={passwordData}
            setPasswordData={setPasswordData}
            isLoading={isLoading}
            setShowCurrentPassword={setShowCurrentPassword}
            setShowNewPassword={setShowNewPassword}
            showCurrentPassword={showCurrentPassword}
            showNewPassword={showNewPassword}
          />
        </div>
      )}

      {/* Notification Settings */}
      {activeTab === "notifications" && (
        <div className="animate-fadeIn max-w-2xl mx-auto">
          <NotificationTabs
            notificationSettings={notificationSettings}
            setNotificationSettings={setNotificationSettings}
            handleNotificationUpdate={handleNotificationUpdate}
          />
        </div>
      )}
    </div>
  );
}

export default TabsContent;
