import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "../common/button/PrimaryButton";

function PasswordSettingsForm({
  handlePasswordUpdate,
  passwordData,
  setPasswordData,
  isLoading,
  setShowCurrentPassword,
  setShowNewPassword,
  showCurrentPassword,
  showNewPassword,
}) {
  return (
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
            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
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
        <PrimaryButton type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Password"}
        </PrimaryButton>
      </div>
    </form>
  );
}

export default PasswordSettingsForm;
