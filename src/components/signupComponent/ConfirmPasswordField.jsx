function ConfirmPasswordField({ formData, handleChange }) {
  return (
    <div className="mb-6">
      <label
        htmlFor="confirmPassword"
        className="block text-sm font-medium text-crochetPrimary-700 mb-1"
      >
        Confirm Password
      </label>
      <div className="relative">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetAccent-400 focus:border-transparent"
          placeholder="••••••••"
          required
        />
        {/* Checkmark icon */}
        <div className="absolute right-3 top-2.5 text-crochetPrimary-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPasswordField;
