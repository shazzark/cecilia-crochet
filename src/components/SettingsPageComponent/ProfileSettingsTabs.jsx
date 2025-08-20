import { PhotoIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "../common/button/PrimaryButton";

function ProfileSettingsTabs({
  user,
  profileData,
  setProfileData,
  handleProfileUpdate,
  isLoading,
}) {
  return (
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
            <PrimaryButton type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileSettingsTabs;
