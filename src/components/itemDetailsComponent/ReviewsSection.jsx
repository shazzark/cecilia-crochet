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
        <h2 className="text-2xl font-bold">Reviews</h2>
        <div className="flex items-center">
          <div className="rating rating-md mr-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={star === Math.round(parseFloat(product.rating))}
                readOnly
              />
            ))}
          </div>
          <span className="text-gray-700">{product.rating}/5</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Rozvisus & Rating</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span>Vlastní státník</span>
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
              </div>
            </li>
            <li className="flex justify-between">
              <span>Vlastní případní</span>
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
              </div>
            </li>
            <li className="flex justify-between">
              <span>Vlastní zákonníků</span>
              <div className="rating rating-xs">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  readOnly
                />
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700 mb-4">
            Na konkrétní dopravy nedaleko-li v společnosti žádný nárok (bez
            ohledu funkce) použitý na předchozíme, že si budete umístěno, že si
            mohou nastavit nový vývoj. Tedy dobu jsou vytvořeny na konkrétní
            dopravy nebo na konkrétní průmysl. Všechny nákupové stanovení jsou
            vytvořeny na konkrétní průmysl. Přištění, že může být vytvořena na
            konkrétní průmysl, naleznete vypracovávané.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Oprava</h3>
          <ul className="space-y-2">
            <li>Beta</li>
            <li>A termín hodnot</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">Obnovení</h3>
          <ul className="space-y-2">
            <li>Celková</li>
            <li>Přírodní</li>
            <li>Zahraničního</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium mb-4">Značka: {product.designer}</h3>
        <p className="text-gray-700">
          Datum prohíteš rozpornou dle 9.1.2020/09.12.2020. Osobit je na
          organizačním podpisem a bylo vhodné podporovat na organizačním úplně a
          obvyklostech. Osobit je o nás, že dobrá práva s možností realizaci,
          ale to, že má jednotlivý informací doporučená osobám spojené
          odsouhlivým.
        </p>
      </div>
    </motion.section>
  );
}

export default ReviewsSection;
