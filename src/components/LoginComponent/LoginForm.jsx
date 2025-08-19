import { Link } from "react-router-dom";

function LoginForm({
  formData,
  handleChange,
  handleSubmit,
  error,
  loading,
  handleGoogleSignIn,
}) {
  return (
    <form onSubmit={handleSubmit} className="p-8">
      {/* Error message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      {/* Email input field */}
      <div className="mb-6">
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

      {/* Password input field */}
      <div className="mb-6">
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

      {/* Remember me and Forgot password */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-crochetAccent-500 focus:ring-crochetAccent-400 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-crochetPrimary-600"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <Link
            to="/forgot-password"
            className="font-medium text-crochetAccent-500 hover:text-crochetAccent-600"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      {/* Sign in button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-crochetPrimary-500 hover:bg-crochetSecondary-600 text-black font-bold py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center mb-4 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Signing in...
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Sign In
          </>
        )}
      </button>

      {/* Google sign in button */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full bg-white border border-crochetPrimary-300 hover:bg-gray-50 text-crochetPrimary-700 font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
      >
        <svg
          className="w-5 h-5 mr-2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
            fill="#EA4335"
          />
        </svg>
        Sign in with Google
      </button>
    </form>
  );
}

export default LoginForm;
