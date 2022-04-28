import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carrito } from "../context/CarritoContext";
import { HeaderPagar, VistaPagar } from "../styles/pagar/pagar.css.js";

export const Pagar = () => {
  const { carrito } = Carrito();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (carrito.length > 0) {
      const getTotal = carrito
        .map((producto) => producto.total)
        .reduce((acum, current) => acum + current);
      setTotal(getTotal);
    }
  }, [carrito]);

  return (
    <VistaPagar>
      <HeaderPagar>
        <span onClick={() => navigate(-1)}>
          <i className="fa-solid fa-chevron-left back"></i>
        </span>
        <p>Pagar</p>
      </HeaderPagar>
    </VistaPagar>
  );
};
