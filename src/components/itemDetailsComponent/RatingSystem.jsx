// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

export const RatingSystem = ({ initialRating, reviewCount, productId }) => {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [averageRating, setAverageRating] = useState(initialRating);
  const [totalRatings, setTotalRatings] = useState(reviewCount);

  const handleRating = async (selectedRating) => {
    if (ratingSubmitted) return;
    setUserRating(selectedRating);

    try {
      // Send rating to your backend
      const response = await fetch("/api/ratings", {
        method: "POST",
        body: JSON.stringify({
          productId,
          rating: selectedRating,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      setAverageRating(data.newAverage);
      setTotalRatings(data.newCount);
      setRatingSubmitted(true);
    } catch (error) {
      console.error("Rating submission failed:", error);
    }
  };

  return (
    <div className="flex items-center mb-4">
      <div className="flex text-yellow-400 mr-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRating(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="focus:outline-none"
          >
            <svg
              className={`w-5 h-5 ${
                star <= (hoverRating || userRating || Math.floor(averageRating))
                  ? "fill-current"
                  : "fill-none stroke-current"
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        ))}
      </div>
      <span className="text-gray-600 text-sm">
        {averageRating.toFixed(1)} ({totalRatings} reviews)
        {ratingSubmitted && (
          <span className="ml-2 text-green-600">✓ You rated this</span>
        )}
      </span>
    </div>
  );
};
