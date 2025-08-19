function Headersection() {
  return (
    <div className="bg-crochetAccent-200 p-6 relative">
      {/* Decorative yarn-like stripe at top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-crochetAccent-400 via-crochetAccent-300 to-crochetAccent-500"></div>

      {/* Title with knitting needle icon */}
      <div className="flex justify-center items-center space-x-2 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-crochetPrimary-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <h1 className="text-3xl font-bold text-center text-crochetPrimary-800 font-serif">
          Join Our Stitch Circle
        </h1>
      </div>
      <p className="text-center text-crochetPrimary-600">
        Create your account and start your yarn journey
      </p>
    </div>
  );
}

export default Headersection;
