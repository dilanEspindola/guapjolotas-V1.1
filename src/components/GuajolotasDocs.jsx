import { useEffect, useState } from "react";
import { GetData } from "../services/GetData";
import { productosURL } from "../utils/urls";
import Loading from "./Loading";
import { Cards } from "./Cards";

export const GuajolotasDocs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <Cards producto={guajolota} key={guajolota._id} />
        ))
      )}
    </div>
  );
};
