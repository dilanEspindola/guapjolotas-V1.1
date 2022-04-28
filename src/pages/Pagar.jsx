import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carrito } from "../context/CarritoContext";
import { HeaderPagar, VistaPagar } from "../styles/pagar/pagar.css.js";
import { CheckoutForm } from "../components/CheckoutForm";
import "../styles/checkoutForm/checkoutForm.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KLBXvBIyqlWCJdrmWfOIduIIallknvqaaJhX7WzlXPyYdYDvfkYenbw24tLH2QT4qJNRFkqFJ71Vi7b3dAxh5ko009g990ZNV"
);

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
      <Elements stripe={stripePromise}>
        <CheckoutForm precioTotal={total} />
      </Elements>
    </VistaPagar>
  );
};
