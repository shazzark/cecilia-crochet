import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "../common/button/PrimaryButton";

function EmailSettingsForm({
  emailData,
  setEmailData,
  handleEmailUpdate,
  isLoading,
  showCurrentPassword,
  setShowCurrentPassword,
}) {
  return (
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

      <div className="flex justify-end">
        <PrimaryButton type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Update Email"}
        </PrimaryButton>
      </div>
    </form>
  );
}

export default EmailSettingsForm;
