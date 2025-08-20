import SecondaryButton from "../common/button/Secondarybutton";
import PrimaryButton from "../common/button/PrimaryButton";

export default function LogoutConfirmationModal({
  onConfirm,
  onCancel,
  isLoading,
}) {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-crochetPrimary-50 rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold text-crochetText-700 mb-4">
          Confirm Logout
        </h3>
        <p className="text-crochetText-600 mb-6">
          Are you sure you want to log out of your account?
        </p>
        <div className="flex justify-end gap-4">
          <SecondaryButton onClick={onCancel} disabled={isLoading}>
            Cancel
          </SecondaryButton>
          <PrimaryButton onClick={onConfirm} disabled={isLoading}>
            {isLoading ? "Logging Out..." : "Log Out"}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
