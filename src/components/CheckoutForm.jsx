import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from "sweetalert2";
import { Carrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

export const CheckoutForm = ({ precioTotal }) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { carrito } = Carrito();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      const { id } = paymentMethod;

      const { data } = await axios.post(
        "https://backend-appguajolotas.herokuapp.com/checkout",
        {
          id,
          amount: precioTotal,
        }
      );
      if (data.confirmacion) {
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Pago realizado",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          carrito.splice(0, carrito.length);
          navigate("/carrito");
        });
      }
    }
  };

  return (
    <form action="" className="formulario-pago" onSubmit={handleSubmit}>
      <label htmlFor="">
        <span>Total a pagar:</span> ${precioTotal} mxn
      </label>
      <CardElement />
      <button>Pagar</button>
      {loading && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading /> <p>Realizando pago...</p>
        </div>
      )}
    </form>
  );
};
