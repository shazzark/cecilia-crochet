function NameInputField({ formData, handleChange }) {
  return (
    <div className="mb-4">
      <label
        htmlFor="name"
        className="block text-sm font-medium text-crochetPrimary-700 mb-1"
      >
        Full Name
      </label>
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-crochetPrimary-300 rounded-lg focus:ring-2 focus:ring-crochetAccent-400 focus:border-transparent"
          placeholder="Emma Yarnlove"
          required
        />
        {/* User icon */}
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NameInputField;
