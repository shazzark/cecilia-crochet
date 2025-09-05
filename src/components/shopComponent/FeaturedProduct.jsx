// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { products as fallbackProducts } from "../../servicies/product";
import { searchCrochetPhotos } from "../../utils/upsplash";
import { mergeProductsWithOverrides } from "../../utils/mergeProduct";

function FeaturedProduct({ selectedCategory, selectedGender }) {
  const [products, setProducts] = useState(fallbackProducts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const queryMap = {
          Amigurumi: "amigurumi",
          Blankets: "blanket",
          Clothing: "clothing",
          Accessories: "accessories",
          "Home Decor": "home decor",
          Seasonal: "seasonal",
          "Custom Orders": "custom",
          "Sale Items": "",
          Patterns: "pattern",
        };

        let query = queryMap[selectedCategory] || "crochet";

        if (selectedGender) {
          query = `${selectedGender} ${query}`;
        }

        const data = await searchCrochetPhotos(query);
        const mergedProducts = await mergeProductsWithOverrides(data);

        const unsplashProducts = mergedProducts.map((product, index) => ({
          id: product.id || index + 1,
          name: product.name,
          category: selectedCategory || "Crochet",
          image: product.image,
          description: product.description,
          price: product.price,
          tag: product.tag,
          designer: "Designer Name",
          originalPrice: Math.round(
            (parseFloat(product.price.replace("R ", "")) || 100) * 1.5
          ),
          rating: (Math.random() * 0.5 + 4.5).toFixed(1),
          reviews: Math.floor(Math.random() * 100) + 50,
          colors: ["Beige", "Cream", "Taupe"],
          sizes: ["S", "M", "L", "XL"],
          images: Array(3).fill(product.image),
        }));

        setProducts(unsplashProducts);
      } catch (error) {
        console.error("Error fetching from Unsplash:", error);

        let filteredProducts = fallbackProducts.map((product) => ({
          ...product,
          designer: "Designer Name",
          originalPrice: Math.round(
            parseFloat(product.price.replace("R ", "")) * 1.5
          ),
          rating: (Math.random() * 0.5 + 4.5).toFixed(1),
          reviews: Math.floor(Math.random() * 100) + 50,
          colors: ["Beige", "Cream", "Taupe"],
          sizes: ["S", "M", "L", "XL"],
          images: Array(3).fill(product.image),
        }));

        if (selectedCategory) {
          filteredProducts = filteredProducts.filter(
            (p) => p.category === selectedCategory
          );
        }

        if (selectedGender) {
          filteredProducts = filteredProducts.filter(
            (p) =>
              p.name.toLowerCase().includes(selectedGender) ||
              p.description.toLowerCase().includes(selectedGender)
          );
        }

        setProducts(filteredProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectedGender]);

  if (loading) {
    return <div className="text-center py-8">Loading crochet items...</div>;
  }

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <NavLink to={`/itemdetails/${product.id}`} state={{ product }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg -mt-4 -mx-4 mb-4"
              />
            </NavLink>
            <div className="bg-pink-100 text-center py-2 mb-4 rounded">
              <span className="font-bold">{product.tag}</span>
            </div>
            <NavLink to={`/itemdetails/${product.id}`} state={{ product }}>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            </NavLink>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="font-bold text-lg">{product.price}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default FeaturedProduct;
