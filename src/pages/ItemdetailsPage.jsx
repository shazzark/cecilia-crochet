// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import ReviewsSection from "../components/itemDetailsComponent/ReviewsSection";
import ProductDetails from "../components/itemDetailsComponent/ProductDetails";

import SizeSelection from "../components/itemDetailsComponent/SizeSelection";
import Breadcrumbs from "../components/itemDetailsComponent/Breadcrumbs";
import ImageGallery from "../components/itemDetailsComponent/ImageGallery";
import Buttons from "../components/itemDetailsComponent/Buttons";
import ColorSelection from "../components/itemDetailsComponent/ColorSelection";
import { supabase } from "../servicies/supabase";
import Quantityselector from "../components/itemDetailsComponent/QuantitySelector";

function ItemdetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Get user session on component mount
    const getSession = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) setUserId(user.id);
    };
    getSession();

    // Load cart count from Supabase
    const fetchCartCount = async () => {
      if (userId) {
        const { data, error } = await supabase
          .from("cart")
          .select("quantity")
          .eq("user_id", userId);

        if (!error) {
          const count = data.reduce((total, item) => total + item.quantity, 0);
          setCartCount(count);
        }
      }
    };
    fetchCartCount();
  }, [userId]);

  const product = state?.product || {
    id: "default",
    name: "Cozy Winter Blanket",
    description: "Handmade with 100% organic cotton yarn...",
    price: "$89.99",
    images: [
      "/crochet-main.jpg",
      "/crochet-thumb1.jpg",
      "/crochet-thumb2.jpg",
      "/crochet-thumb3.jpg",
      "/crochet-thumb4.jpg",
    ],
    colors: ["Cream", "Beige", "Light Blue", "Dusty Pink"],
    sizes: ["Small", "Medium", "Large"],
    designer: "LiveBar Eleganza",
    rating: "4.8",
    reviews: 128,
  };

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const thumbnails = product.images.slice(1, 5);
  const colors = product.colors;
  const sizes = product.sizes;

  const addToCart = async () => {
    if (!userId) {
      toast.error("Please sign in to add items to cart");
      navigate("/login");
      return;
    }

    const cartItem = {
      user_id: userId,
      product_id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      image: product.images[0],
      created_at: new Date().toISOString(),
    };

    try {
      // Check if item already exists in cart
      const { data: existingItems, error: fetchError } = await supabase
        .from("cart")
        .select("*")
        .eq("user_id", userId)
        .eq("product_id", product.id)
        .eq("color", selectedColor)
        .eq("size", selectedSize);

      if (fetchError) throw fetchError;

      if (existingItems.length > 0) {
        // Update quantity if item exists
        const { error: updateError } = await supabase
          .from("cart")
          .update({ quantity: existingItems[0].quantity + quantity })
          .eq("id", existingItems[0].id);

        if (updateError) throw updateError;
      } else {
        // Insert new item
        const { error: insertError } = await supabase
          .from("cart")
          .insert([cartItem]);

        if (insertError) throw insertError;
      }

      // Update cart count
      const { data: updatedCart, error: countError } = await supabase
        .from("cart")
        .select("quantity")
        .eq("user_id", userId);

      if (countError) throw countError;

      setCartCount(
        updatedCart.reduce((total, item) => total + item.quantity, 0)
      );

      toast.success(
        `${product.name} (${selectedSize}, ${selectedColor}) x${quantity} added to cart!`
      );
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error("Failed to add item to cart");
    }
  };

  const buyNow = async () => {
    await addToCart();
    navigate("/payment");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs product={product} navigate={navigate} />

      <div className="grid md:grid-cols-2 gap-12">
        <ImageGallery
          mainImage={mainImage}
          product={product}
          thumbnails={thumbnails}
          setMainImage={setMainImage}
        />

        <div>
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-2"
          >
            {product.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-700 mb-6"
          >
            {product.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
          >
            <span className="text-2xl font-bold">{product.price}</span>
          </motion.div>

          <ColorSelection
            colors={colors}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />

          <SizeSelection
            sizes={sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />

          <Quantityselector quantity={quantity} setQuantity={setQuantity} />

          <Buttons
            buyNow={buyNow}
            addToCart={addToCart}
            cartCount={cartCount}
          />

          <ProductDetails />
        </div>
      </div>

      <ReviewsSection product={product} />
    </div>
  );
}

export default ItemdetailsPage;
