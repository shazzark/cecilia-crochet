function PasswordInputField({ formData, handleChange }) {
  return (
    <div className="mb-4">
      <label
        htmlFor="password"
        className="block text-sm font-medium text-crochetPrimary-700 mb-1"
      >
        Password
      </label>
      <div className="relative">
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetAccent-400 focus:border-transparent"
          placeholder="••••••••"
          required
          minLength={6}
        />
        {/* Lock icon */}
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PasswordInputField;
