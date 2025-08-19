export async function searchCrochetPhotos(query, perPage = 12) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      `crochet ${query}`
    )}&per_page=${perPage}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`
  );
  return response.json();
}

export async function searchCrochetPhotoById(id) {
  const response = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=${
      import.meta.env.VITE_UNSPLASH_KEY
    }`
  );
  return response.json();
}
