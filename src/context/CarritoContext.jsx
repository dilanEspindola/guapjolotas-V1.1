import { createContext, useContext, useState } from "react";

const context = createContext();

export const Carrito = () => useContext(context);

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <context.Provider value={{ carrito, setCarrito }}>
      {children}
    </context.Provider>
  );
};
