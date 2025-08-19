// src/services/unsplash.js
export async function fetchCrochetCollections() {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=handmade+crochet+collection&per_page=3&orientation=landscape&client_id=${
        import.meta.env.VITE_UNSPLASH_KEY
      }`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    const data = await response.json();
    return data.results.map((photo, index) => ({
      id: photo.id,
      name: getCollectionName(index),
      image: photo.urls.regular,
      alt: photo.alt_description || getCollectionName(index),
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return getFallbackCollections();
  }
}

function getCollectionName(index) {
  const names = ["Cozy Wearables", "Home Accents", "Seasonal Specials"];
  return names[index] || "Crochet Collection";
}

function getFallbackCollections() {
  return [
    {
      id: "cozy-wearables",
      name: "Cozy Wearables",
      image:
        "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600",
      alt: "Crochet wearables collection",
    },
    {
      id: "home-accents",
      name: "Home Accents",
      image:
        "https://images.unsplash.com/photo-1573641287744-9fd0d51efd14?w=600",
      alt: "Crochet home decor collection",
    },
    {
      id: "seasonal-specials",
      name: "Seasonal Specials",
      image:
        "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?w=600",
      alt: "Seasonal crochet collection",
    },
  ];
}
