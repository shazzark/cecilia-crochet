// src/api/testimonials.js
export const testimonialsData = [
  {
    id: 1,
    quote:
      "The crochet blanket is my favorite purchase this year! The quality is amazing and it's so cozy.",
    name: "Emily R.",
    location: "Seattle, WA",
    rating: 5,
    date: "2023-10-15",
    featured: true,
    avatar: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    id: 2,
    quote:
      "Custom order came out perfect! The communication throughout the process was excellent.",
    name: "David K.",
    location: "Chicago, IL",
    rating: 5,
    date: "2023-11-02",
    featured: true,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    quote:
      "The baby booties I ordered are absolutely adorable! They were the hit of the baby shower. Will definitely order again when my sister has her baby.",
    name: "Sophia M.",
    location: "Boston, MA",
    rating: 5,
    date: "2023-09-28",
    featured: true,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    quote:
      "I've purchased several crochet items from this shop and they never disappoint. The stitches are so even and tight - true craftsmanship!",
    name: "James L.",
    location: "Austin, TX",
    rating: 5,
    date: "2023-11-15",
    featured: true,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 5,
    quote:
      "The crochet market bag is both beautiful and functional. It holds all my groceries securely and gets compliments every time I use it!",
    name: "Aisha B.",
    location: "Brooklyn, NY",
    rating: 5,
    date: "2023-10-30",
    featured: true,
    avatar: "https://randomuser.me/api/portraits/women/82.jpg",
  },
];

export const fetchTestimonials = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // In a real app, you would fetch from your backend:
  // const response = await fetch('https://your-api.com/testimonials');
  // return await response.json();

  return testimonialsData.filter((t) => t.featured);
};
