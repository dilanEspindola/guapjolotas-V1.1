import { useEffect, useState } from "react";
import { GetData } from "../services/GetData";
import { productosURL } from "../utils/urls";
import Loading from "./Loading";
import { useNavegador } from "../hooks/useNavegador";

export const GuajolotasDocs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleNavigateDynamicRoute } = useNavegador();

  const nameCollection = "guajolotas";

  useEffect(() => {
    GetData(productosURL, nameCollection)
      .then((datos) => setData(datos))
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
      {!data ? (
        <Loading />
      ) : (
        data.map((guajolota) => (
          <div
            key={guajolota._id}
            className="single-guajolota"
            onClick={() => handleNavigateDynamicRoute(guajolota._id)}
          >
            <img src={guajolota.imagen} alt={guajolota.nombre} />
            <div className="txt-precio-guajolota">
              <h2 className="nombre">{guajolota.nombre}</h2>
              <p className="precio">{guajolota.precio}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
