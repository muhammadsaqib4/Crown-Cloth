import { createContext, useState } from "react";

export const CartContext = createContext({
  CurrentCart: null,
  setCurrentCart: null,
});

export const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ Cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
