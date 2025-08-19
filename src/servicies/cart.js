import { supabase } from "./supabaseClient";

export const addToCart = async (userId, productData) => {
  const { data, error } = await supabase.from("cart_items").insert([
    {
      user_id: userId,
      product_id: productData.productId,
      color: productData.color,
      size: productData.size,
      quantity: productData.quantity,
      price: productData.price,
      image_url: productData.image,
    },
  ]);

  if (error) throw error;
  return data;
};

export const getCartItems = async (userId) => {
  const { data, error } = await supabase
    .from("cart_items")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;
  return data;
};
