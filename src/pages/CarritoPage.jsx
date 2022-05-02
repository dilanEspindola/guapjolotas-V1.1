import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carrito } from "../context/CarritoContext";
import {
  DivCarrito,
  HeaderCarrito,
  ContenidoTotal,
} from "../styles/carrito/carrito.css.js";
import "../styles/carrito/carrito.css";

export const CarritoPage = () => {
  const { carrito, setCarrito } = Carrito();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  const eliminarElemento = (element) => {
    const deleteFromState = carrito.filter((p, index) => index !== element);
    setCarrito(deleteFromState);
  };

  useEffect(() => {
    if (carrito.length > 0) {
      const getTotal = carrito
        .map((producto) => producto.total)
        .reduce((acum, current) => acum + current);
      setTotal(getTotal);
    }
  }, [carrito]);

  return (
    <DivCarrito className="vista-carrito">
      <HeaderCarrito className="header-carrito">
        <span onClick={() => navigate("/")}>
          <i className="fa-solid fa-chevron-left back"></i>
        </span>
        <p>Carrito</p>
      </HeaderCarrito>
      {carrito.length < 1 ? (
        <h1 className="no-productos">No hay productos</h1>
      ) : (
        <div className="lista-productos">
          {carrito.map((product, index) => (
            <div className="single-product product-content" key={index + 1}>
              <div className="content-img-desc">
                <img src={product.imagen} alt="" />
                <div className="txt-precio-product">
                  <h1 className="nombre nombre-en-cart">{product.nombre}</h1>
                  <p className="precio">$ {product.total} mxn</p>
                  <p className="cantidad">x{product.cantidad}</p>
                </div>
              </div>
              <span>
                <i
                  className="fa-solid fa-xmark delete"
                  onClick={() => eliminarElemento(index)}
                ></i>
              </span>
            </div>
          ))}
        </div>
      )}

      {carrito.length < 1 ? null : (
        <>
          <ContenidoTotal className="contenido-total">
            <p>Total</p>
            <span>{total === 0 ? null : `$ ${total} mxn`}</span>
          </ContenidoTotal>
          <button className="btn-pagar" onClick={() => navigate("/pagar")}>
            pagar
          </button>
        </>
      )}
    </DivCarrito>
  );
};
