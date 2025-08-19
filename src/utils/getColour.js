export function getColorHex(colorName) {
  const colors = {
    Beige: "#F5F5DC",
    Cream: "#FFFDD0",
    Taupe: "#483C32",
  };
  return colors[colorName] || "#CCCCCC";
}
