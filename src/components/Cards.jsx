import { useNavegador } from "../hooks/useNavegador";
import "../styles/cards/card.css";

export const Cards = ({ producto }) => {
  const { handleNavigateDynamicRoute } = useNavegador();

  return (
    <div className="products">
      {producto.nombre.includes("guajolota") ? (
        <div
          key={producto._id}
          className="single-product"
          onClick={() => handleNavigateDynamicRoute(producto._id)}
        >
          <img src={producto.imagen} alt={producto.nombre} />
          <div className="txt-precio-product">
            <h2 className="nombre">
              {producto.nombre.replace("guajolota", "").replace("de ", "")}
            </h2>
            <p className="precio">{producto.precio}</p>
          </div>
        </div>
      ) : (
        <div
          key={producto._id}
          className="single-product"
          onClick={() => handleNavigateDynamicRoute(producto._id)}
        >
          <img src={producto.imagen} alt={producto.nombre} />
          <div className="txt-precio-product">
            <h2 className="nombre">{producto.nombre}</h2>
            <p className="precio">{producto.precio}</p>
          </div>
        </div>
      )}
    </div>
  );
};
