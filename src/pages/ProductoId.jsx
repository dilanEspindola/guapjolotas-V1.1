import { useState } from "react";
import { Carrito } from "../context/CarritoContext";
import { useParams, useNavigate } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import Loading from "../components/Loading";
import { IconsHome } from "../styles/homeStyles/home";
import { SingleProductDiv } from "../styles/singleProduct/singleProduct.css.js";
import "../styles/singleProduct/singleProduct.css";

export const ProductoId = () => {
  const { productoId } = useParams();
  const { datos } = useDataContext();

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [disable, setDisable] = useState(false);
  const { carrito, setCarrito } = Carrito();

  const navigate = useNavigate();
  const getProduct = datos.find((product) => product._id === productoId);

  if (!getProduct) return null;
  let precio = getProduct.precio
    .replace("$", "")
    .replace(" ", "")
    .replace("mxn", "");

  let precioToNumber;
  precioToNumber = Number(precio);

  const add = () => {
    setCount((prev) => prev + 1);
    setPrice((count + 1) * precioToNumber);
    setDisable(false);
  };

  const minus = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      setPrice(price - precioToNumber);

      carrito.find((cart) =>
        cart.id === getProduct._id
          ? {
              ...cart,
              total: (cart.total -= precioToNumber),
              cantidad: (cart.cantidad -= 1),
            }
          : null
      );
      setDisable(true);
    }
    if (count === 2) {
      setPrice(precioToNumber);
    }
  };

  const addCart = ({ ...data }) => {
    if (count === 0) {
      return setDisable(true);
    }

    setCarrito([
      ...carrito,
      {
        id: data.id,
        nombre: data.nombre,
        imagen: data.imagen,
        total: data.total,
        cantidad: count,
      },
    ]);
  };

  if (!getProduct) return <Loading />;

  return (
    <SingleProductDiv>
      <IconsHome>
        <span onClick={() => navigate(-1)}>
          <i className="fa-solid fa-chevron-left back"></i>
        </span>
        <span onClick={() => navigate("/carrito")}>
          {carrito.length > 0 ? (
            <span className="icon-cart-active">
              <i className="fa-solid fa-cart-shopping icon-cart-page-product"></i>
            </span>
          ) : (
            <i className="fa-solid fa-cart-shopping icon-cart-page-product"></i>
          )}
        </span>
      </IconsHome>

      <div className="desc-producto">
        <img src={getProduct.imagen} alt={getProduct.nombre} />
        <h1>{getProduct.nombre}</h1>
        <p>{getProduct.precio}</p>
        <div className="añadir">
          <span className="minus" onClick={minus}>
            <i className="fa-solid fa-minus"></i>
          </span>
          <p>{count}</p>
          <span className="plus" onClick={add}>
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>

        <div className="sabor">
          {getProduct.sabor
            ? getProduct.sabor.map((sabor, index) => (
                <div key={index + 1} className="img-sabor">
                  <img src={sabor} alt="" />
                </div>
              ))
            : null}
        </div>
        <div className="combo">
          {getProduct.bebidas ? (
            <div>
              <h1 className="bebidas-titulo-combo">Bebidas</h1>
              <p className="txt-combo">
                Selecciona la bebida que mas te guste y disfruta de tu desayuno
              </p>
              <div className="img-bebida">
                {getProduct.bebidas.map((bebida) => {
                  return (
                    <div key={bebida._id} className="bebida">
                      <img src={bebida.imagen} alt="" />
                      <div className="titulo-txt-combo">
                        <h2 className="nombre nombre-bebida-combo">
                          {bebida.nombre}
                        </h2>
                        <p className="precio precio-bebida-combo">
                          {bebida.precio}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <button
        className="agregar-carrito"
        disabled={disable}
        onClick={() =>
          addCart({
            id: getProduct._id,
            nombre: getProduct.nombre,
            imagen: getProduct.imagen,
            total: count * precioToNumber,
          })
        }
      >
        Agregar al carrito <span>$ {price}</span>
      </button>
    </SingleProductDiv>
  );
};
