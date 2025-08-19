function EmailInputField({ formData, handleChange }) {
  return (
    <div className="mb-4">
      <label
        htmlFor="email"
        className="block text-sm font-medium text-crochetPrimary-700 mb-1"
      >
        Email Address
      </label>
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetAccent-400 focus:border-transparent"
          placeholder="yarnlover@example.com"
          required
        />
        {/* Email icon */}
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
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default EmailInputField;
