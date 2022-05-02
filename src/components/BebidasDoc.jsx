import { useState, useEffect } from "react";
import { GetData } from "../services/GetData";
import { productosURL } from "../utils/urls";
import Loading from "./Loading";
import { Cards } from "./Cards";

export const BebidasDoc = () => {
  const [bebidas, setBebidas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        bebidas.map((bebida) => <Cards producto={bebida} key={bebida._id} />)
      )}
    </div>
  );
};
