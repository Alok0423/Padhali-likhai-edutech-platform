import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  instructor: string;
  image: string;
}

export interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) => {
        set((state) => {
          const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
          if (existingItem) {
            return state;
          }
          return { items: [...state.items, item] };
        });
      },

      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price, 0);
      },

      getItemCount: () => {
        return get().items.length;
      },
    }),
    {
      name: 'cart-store',
    }
  )
);
