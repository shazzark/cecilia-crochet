// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
function ReviewsSection({ product }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="mt-16 border-t pt-8"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-crochetText-900">
          Customer Reviews
        </h2>
        <div className="flex items-center">
          <div className="rating rating-md mr-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-crochetPrimary-500"
                defaultChecked={star === Math.round(parseFloat(product.rating))}
                readOnly
              />
            ))}
          </div>
          <span className="text-crochetText-700 font-medium">
            {product.rating}/5
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-crochetPrimary-50 p-6 rounded-lg border border-crochetPrimary-200">
          <h3 className="text-lg font-medium mb-4 text-crochetText-800">
            Rating Breakdown
          </h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span className="text-crochetText-700">Ease of Use</span>
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  defaultChecked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-crochetText-700">Pattern Quality</span>
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  defaultChecked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-crochetText-700">Finished Result</span>
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  defaultChecked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-crochetPrimary-500"
                  readOnly
                />
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-crochetPrimary-50 p-6 rounded-lg border border-crochetPrimary-200">
          <h3 className="text-lg font-medium mb-4 text-crochetText-800">
            What Customers Say
          </h3>
          <p className="text-crochetText-700 mb-4 italic">
            "This pattern was absolutely delightful to work with! The
            instructions were clear and easy to follow, even for someone
            relatively new to crochet. The finished piece looks exactly like the
            photos and has become my favorite homemade item."
          </p>
          <p className="text-crochetText-600 text-sm">
            - Sarah M., Beginner Crocheter
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-crochetPrimary-50 p-6 rounded-lg border border-crochetPrimary-200">
          <h3 className="text-lg font-medium mb-4 text-crochetText-800">
            Pattern Details
          </h3>
          <ul className="space-y-2 text-crochetText-700">
            <li>• Skill Level: Intermediate</li>
            <li>• Time Required: 8-12 hours</li>
            <li>• Yardage: 400-500g worsted weight</li>
            <li>• Hook Size: 5mm recommended</li>
          </ul>
        </div>

        <div className="bg-crochetPrimary-50 p-6 rounded-lg border border-crochetPrimary-200">
          <h3 className="text-lg font-medium mb-4 text-crochetText-800">
            Materials Used
          </h3>
          <ul className="space-y-2 text-crochetText-700">
            <li>• 100% Cotton Yarn</li>
            <li>• Eco-friendly fibers</li>
            <li>• Hypoallergenic materials</li>
            <li>• Machine washable</li>
          </ul>
        </div>
      </div>

      <div className="bg-crochetPrimary-50 p-6 rounded-lg border border-crochetPrimary-200">
        <h3 className="text-lg font-medium mb-4 text-crochetText-800">
          Designer: {product.designer}
        </h3>
        <p className="text-crochetText-700">
          Each pattern is carefully crafted with love and attention to detail.
          Our designs focus on creating timeless pieces that blend traditional
          techniques with modern aesthetics. All patterns include step-by-step
          instructions, detailed photos, and support for any questions you might
          have along your crochet journey.
        </p>
      </div>
    </motion.section>
  );
}

export default ReviewsSection;
