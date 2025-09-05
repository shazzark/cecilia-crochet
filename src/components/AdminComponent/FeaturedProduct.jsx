// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { products as fallbackProducts } from "../../servicies/product";
import { supabase } from "../../servicies/supabase";
import { searchCrochetPhotos } from "../../utils/upsplash";
import { mergeProductsWithOverrides } from "../../utils/mergeProduct";

function FeaturedProduct({
  selectedCategory,
  selectedGender,
  isAdmin = false,
}) {
  const [products, setProducts] = useState(fallbackProducts);
  const [loading, setLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editForm, setEditForm] = useState({
    custom_name: "",
    custom_price: "",
    custom_image_url: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (file) => {
    setUploading(true);
    try {
      const fileName = `products/${Date.now()}_${file.name}`;

      const { data, error } = await supabase.storage
        .from("product-images")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) throw error;

      const {
        data: { publicUrl },
      } = supabase.storage.from("product-images").getPublicUrl(data.path);

      return publicUrl;
    } catch (error) {
      console.error("Upload error:", error);
      return null;
    } finally {
      setUploading(false);
    }
  };

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

  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setEditForm({
      custom_name: product.name,
      custom_price: product.price.replace("R ", ""),
      custom_image_url: product.image,
      description: product.description,
    });
  };

  const handleSave = async (productId) => {
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
    if (selectedGender) query = `${selectedGender} ${query}`;

    try {
      let imageUrl = editForm.custom_image_url;

      if (imageFile) {
        imageUrl = await handleImageUpload(imageFile);
        if (!imageUrl) return;
      }

      const { error } = await supabase.from("product_overrides").upsert(
        {
          unsplash_id: productId,
          custom_name: editForm.custom_name,
          custom_price: parseFloat(editForm.custom_price),
          custom_image_url: imageUrl,
        },
        {
          onConflict: "unsplash_id", // Tell Supabase which column has the unique constraint
        }
      );
      if (error) throw error;

      const data = await searchCrochetPhotos(query);
      const mergedProducts = await mergeProductsWithOverrides(data);
      setProducts(mergedProducts);
      setEditingProduct(null);
      setImageFile(null);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
  };

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
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow relative"
          >
            {/* EDIT BUTTON - Only show in admin mode */}
            {isAdmin && (
              <button
                onClick={() => handleEdit(product)}
                className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-md text-sm"
              >
                Edit
              </button>
            )}

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

            {editingProduct === product.id ? (
              // EDIT FORM
              <div className="space-y-2">
                <input
                  type="text"
                  value={editForm.custom_name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, custom_name: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Product Name"
                />
                <input
                  type="number"
                  value={editForm.custom_price}
                  onChange={(e) =>
                    setEditForm({ ...editForm, custom_price: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Price"
                />

                {/* images upload images */}

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                  className="w-full p-2 border rounded"
                  disabled={uploading}
                />
                {uploading && <p>Uploading image...</p>}
                <input
                  type="text"
                  value={editForm.custom_image_url}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      custom_image_url: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Image URL"
                />
                <textarea
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({ ...editForm, description: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Description"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSave(product.id)}
                    className="bg-green-500 text-white p-2 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-500 text-white p-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // PRODUCT DISPLAY
              <>
                <NavLink to={`/itemdetails/${product.id}`} state={{ product }}>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                </NavLink>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="font-bold text-lg">{product.price}</p>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default FeaturedProduct;
