// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { products as fallbackProducts } from "../../servicies/product";
import { searchCrochetPhotos } from "../../utils/upsplash";

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

        const unsplashProducts = data.results.map((photo, index) => ({
          id: photo.id || index + 1,
          name:
            photo.alt_description ||
            `Crochet ${selectedGender ? selectedGender + " " : ""}${
              selectedCategory || "Item"
            }`.trim(),
          category: selectedCategory || "Crochet",
          image: photo.urls?.regular || "https://via.placeholder.com/300",
          description:
            photo.description ||
            `Beautiful ${selectedGender || ""} crochet ${
              selectedCategory || "item"
            }`.trim(),
          price: `R ${Math.floor(Math.random() * 1000) + 100}.95`,
          tag: ["Just In", "Best Seller", "On Sale"][index % 3],
          // Add additional fields needed for ItemdetailsPage
          designer: "Designer Name", // You can make this dynamic if available
          originalPrice: Math.round(
            (Math.floor(Math.random() * 1000) + 100) * 1.5
          ), // 50% more than price
          rating: (Math.random() * 0.5 + 4.5).toFixed(1), // Random rating 4.5-5.0
          reviews: Math.floor(Math.random() * 100) + 50, // Random reviews 50-150
          colors: ["Beige", "Cream", "Taupe"], // Default colors
          sizes: ["S", "M", "L", "XL"], // Default sizes
          images: Array(3).fill(photo.urls?.regular), // Use same image for all slots
        }));

        setProducts(unsplashProducts);
      } catch (error) {
        console.error("Error fetching from Unsplash:", error);

        let filteredProducts = fallbackProducts.map((product) => ({
          ...product,
          // Enhance fallback products with same additional fields
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
            <NavLink
              to={`/itemdetails/${product.id}`}
              state={{ product }} // Pass the full product data
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg -mt-4 -mx-4 mb-4"
              />
            </NavLink>
            <div className="bg-pink-100 text-center py-2 mb-4 rounded">
              <span className="font-bold">{product.tag}</span>
            </div>
            <NavLink
              to={`/itemdetails/${product.id}`}
              state={{ product }} // Pass the same data for name link
            >
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
