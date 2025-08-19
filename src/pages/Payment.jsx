import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const handlePayment = () => {
    // Process payment logic here
    alert("Payment processed successfully!");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.map((item, index) => (
            <div key={index} className="border-b py-4 flex justify-between">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.size}, {item.color} × {item.quantity}
                  </p>
                </div>
              </div>
              <div className="font-medium">{item.price}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span>${(parseFloat(calculateTotal()) + 5).toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md font-medium hover:bg-indigo-700 transition"
          >
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
