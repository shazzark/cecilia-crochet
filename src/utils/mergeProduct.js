// utils/mergeProducts.js

import { supabase } from "../servicies/supabase";

export async function mergeProductsWithOverrides(unsplashData) {
  try {
    // Fetch overrides from Supabase
    const { data: overrides, error } = await supabase
      .from("product_overrides")
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
      return unsplashData.results; // Return original if error
    }

    // Merge the data
    return unsplashData.results.map((photo, index) => {
      const override = overrides?.find((o) => o.unsplash_id === photo.id);

      return {
        id: photo.id,
        name: override?.custom_name || photo.alt_description || "Crochet Item",
        image: override?.custom_image_url || photo.urls?.regular,
        price: override?.custom_price
          ? `₦ ${override.custom_price}`
          : `₦ ${Math.floor(Math.random() * 1000) + 100}.95`,
        description: photo.description || "Beautiful crochet item",
        tag: ["Just In", "Best Seller", "On Sale"][index % 3],
        designer: "Designer Name",
        originalPrice: Math.round(
          (override?.custom_price || Math.floor(Math.random() * 1000) + 100) *
            1.5
        ),
        rating: (Math.random() * 0.5 + 4.5).toFixed(1),
        reviews: Math.floor(Math.random() * 100) + 50,
        colors: ["Beige", "Cream", "Taupe"],
        sizes: ["S", "M", "L", "XL"],
        images: Array(3).fill(
          override?.custom_image_url || photo.urls?.regular
        ),
      };
    });
  } catch (error) {
    console.error("Merge error:", error);
    return unsplashData.results;
  }
}
