import { useState } from "react";
import { motion } from "framer-motion";

export default function Payment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="w-full mb-[200px]"
    >
      <motion.div 
        initial={{ scale: 0.9 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }} 
        className="w-full bg-white rounded-lg shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left Section - Shipping Address */}
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Address</h2>
          <form className="space-y-4">
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-2 border rounded-md" required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded-md" required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 border rounded-md" required />
            <input type="text" name="city" placeholder="City" onChange={handleChange} className="w-full p-2 border rounded-md" required />
            <input type="text" name="zip" placeholder="ZIP Code" onChange={handleChange} className="w-full p-2 border rounded-md" required />
            <input type="text" name="country" placeholder="Country" onChange={handleChange} className="w-full p-2 border rounded-md" required />
          </form>
        </motion.div>
        
        {/* Right Section - Order Summary */}
        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
          <div className="space-y-4 border-b pb-4">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>$120.00</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between text-gray-900 font-semibold">
              <span>Total</span>
              <span>$130.00</span>
            </div>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            className="mt-6 w-full bg-indigo-600 text-white p-3 rounded-md font-semibold shadow-md hover:bg-indigo-500"
          >
            Proceed to Payment
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}