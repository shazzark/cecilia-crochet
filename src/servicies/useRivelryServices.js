export async function getRavelryService() {
  const username = import.meta.env.VITE_RAVELRY_USERNAME;
  const password = import.meta.env.VITE_RAVELRY_PASSWORD;

  //  All categories we want to fetch
  const categories = {
    men: "fit=male",
    women: "fit=female",
    unisex: "fit=unisex",
    adultMen: "fit=male&age=adult",
    adultWomen: "fit=female&age=adult",
    olderChildren: "fit=older-children",
    youngerChildren: "fit=younger-children",
    baby: "fit=baby",
    toddler: "fit=toddler",
  };

  //  Helper function to fetch one category
  async function fetchPatterns(filter) {
    const url = `https://api.ravelry.com/patterns/search.json?craft=crochet&availability=free&photo=yes&${filter}`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.patterns.map((pattern) => ({
      id: pattern.id,
      name: pattern.name,
      image: pattern.first_photo?.medium_url || null,
      description: pattern.description || "No description available",
      url: `https://www.ravelry.com/patterns/library/${pattern.id}`,
    }));
  }

  try {
    //  Fetch all categories in parallel
    const results = await Promise.all(
      Object.entries(categories).map(async ([key, filter]) => {
        return [key, await fetchPatterns(filter)];
      })
    );

    // 🔹 Convert array back to object
    return Object.fromEntries(results);
  } catch (e) {
    console.error(e.message);
    return { error: e.message };
  }
}
