import { useState } from "react";
import { Link, parsePath } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import Loading from "../components/Loading";
import { useNavegador } from "../hooks/useNavegador";

import "../styles/buscador/buscador.css";

export const Buscador = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const { handleNavigateDynamicRoute } = useNavegador();
  const { datos } = useDataContext();

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const result = datos.filter((p) => p.nombre.includes(search.toLowerCase()));

  return (
    <div className="vista-buscador">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          placeholder="sabor de ..."
          onChange={handleSearch}
        />
        <Link to="/" className="cancelar">
          cancelar
        </Link>
      </form>

      <div className="resultado-buscador">
        {search === "" ? (
          <div className="logo-txt-busqueda">
            <i className="fa-solid fa-magnifying-glass"></i>
            <p className="busqueda-txt txt-buscador">Realiza una búsqueda</p>
          </div>
        ) : result.length === 0 ? (
          <p className="no-resultados txt-buscador">No hay resultados</p>
        ) : (
          result.map((product) => (
            <div
              key={product._id}
              className="single-guajolota"
              onClick={() => handleNavigateDynamicRoute(product._id)}
            >
              <img src={product.imagen} alt="" />
              <div className="txt-precio-guajolota">
                <h1 className="nombre">{product.nombre}</h1>
                <p className="precio">{product.precio}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
