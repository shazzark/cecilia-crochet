function ActivityCard() {
  return (
    <div className="bg-crochetAccent-50 p-6 rounded-xl border border-crochetAccent-200 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-crochetAccent-500 rounded-lg flex items-center justify-center mr-3">
          <svg
            className="h-5 w-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-crochetText-800">
          Your Activity
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-crochetPrimary-600">12</p>
          <p className="text-sm text-crochetText-600">Patterns saved</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-crochetPrimary-600">5</p>
          <p className="text-sm text-crochetText-600">Projects completed</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-crochetPrimary-600">3</p>
          <p className="text-sm text-crochetText-600">Wishlist items</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-crochetPrimary-600">8</p>
          <p className="text-sm text-crochetText-600">Following</p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;
