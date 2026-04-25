'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from Local Storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('gainlab_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart from local storage', e);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save to Local Storage whenever cartItems change
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('gainlab_cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  const addToCart = (product, flavor = null) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedFlavor === flavor);
      if (existing) {
        return prev.map(item =>
          (item.id === product.id && item.selectedFlavor === flavor) ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, selectedFlavor: flavor, qty: 1 }];
    });
  };

  const removeFromCart = (id, flavor = null) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedFlavor === flavor)));
  };

  const updateQty = (id, flavor = null, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        (item.id === id && item.selectedFlavor === flavor) ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.priceNum * item.qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
