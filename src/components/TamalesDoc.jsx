import { useState, useEffect } from "react";
import { GetData } from "../services/GetData";
import { productosURL } from "../utils/urls";
import Loading from "./Loading";
import { Cards } from "./Cards";

export const TamalesDoc = () => {
  const [tamales, setTamales] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetData(productosURL, "tamales")
      .then((data) => setTamales(data))
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
      {!tamales ? (
        <Loading />
      ) : (
        tamales.map((tamal) => <Cards producto={tamal} key={tamal._id} />)
      )}
    </div>
  );
};
