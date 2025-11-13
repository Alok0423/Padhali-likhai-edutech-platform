'use client';

import { useCartStore } from '@/store/cartStore';
import { ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartWidget() {
  const { items, removeFromCart, getTotalPrice, getItemCount } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Cart Icon */}
      <div className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <ShoppingCart size={24} className="text-gray-700" />
        {getItemCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {getItemCount()}
          </span>
        )}
      </div>

      {/* Cart Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Your Cart</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>

              {items.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
                      >
                        <div className="flex-1">
                          <p className="font-semibold text-sm">{item.title}</p>
                          <p className="text-xs text-gray-600">{item.instructor}</p>
                          <p className="text-sm font-bold text-blue-600">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 p-1 hover:bg-red-100 rounded transition"
                        >
                          <X size={18} className="text-red-600" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t mt-4 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold">Total:</span>
                      <span className="text-xl font-bold text-blue-600">
                        ${getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                    <Link
                      href="/checkout"
                      onClick={() => setIsOpen(false)}
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg text-center transition"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
