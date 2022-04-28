import { useState, useEffect } from "react";
import { GetData } from "../services/GetData";
import { productosURL } from "../utils/urls";
import { useNavegador } from "../hooks/useNavegador";
import Loading from "./Loading";

export const BebidasDoc = () => {
  const [bebidas, setBebidas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleNavigateDynamicRoute } = useNavegador();
  const collectionName = "bebidas";

  useEffect(() => {
    GetData(productosURL, collectionName)
      .then((data) => setBebidas(data))
      .catch((error) => setError(error.message));
    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="gualotas">
      {error && (
        <div className="loading">
          <h2>{error}</h2>
        </div>
      )}
      {!bebidas ? (
        <Loading />
      ) : (
        bebidas.map((bebida) => (
          <div
            key={bebida._id}
            className="single-guajolota"
            onClick={() => handleNavigateDynamicRoute(bebida._id)}
          >
            <img src={bebida.imagen} alt={bebida.nombre} />
            <div className="txt-precio-guajolota">
              <h2 className="nombre">{bebida.nombre}</h2>
              <p className="precio">{bebida.precio}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
