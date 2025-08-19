import { Link } from "react-router-dom";
import NameInputField from "./NameInputField"; // Assuming you have a separate component for the name input field
import ConfirmPasswordField from "./ConfirmPasswordField";
import PasswordInputField from "./PasswordInputField";
import GoogleButton from "./GoogleButton";
import EmailInputField from "./EmailInputField";
import SignupButton from "./SignupButton";
function signupForm({
  formData,
  handleChange,
  handleSubmit,
  success,
  error,
  loading,
  handleGoogleSignIn,
}) {
  return (
    <form onSubmit={handleSubmit} className="p-8">
      {success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p>Sign up successful! Redirecting to login...</p>
        </div>
      ) : (
        <>
          {/* Name input field */}
          <NameInputField formData={formData} handleChange={handleChange} />

          {/* Email input field */}
          <EmailInputField formData={formData} handleChange={handleChange} />

          {/* Password input field */}
          <PasswordInputField formData={formData} handleChange={handleChange} />

          {/* Confirm Password input field */}
          <ConfirmPasswordField
            formData={formData}
            handleChange={handleChange}
          />

          {/* Terms checkbox */}
          <div className="flex items-center mb-6">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-crochetAccent-500 focus:ring-crochetAccent-400 border-gray-300 rounded"
              required
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm text-crochetPrimary-600"
            >
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-crochetAccent-500 hover:underline"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="text-crochetAccent-500 hover:underline"
              >
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>{error}</p>
            </div>
          )}

          {/* Sign up button */}
          <SignupButton loading={loading} />
        </>
      )}

      {/* Google sign up button */}
      <GoogleButton handleGoogleSignIn={handleGoogleSignIn} />
    </form>
  );
}

export default signupForm;
