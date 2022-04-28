import { useNavigate } from "react-router-dom";
import "../index.css";
import "../styles/buscador/buscador.css";

export const Buscador = () => {
  const navigate = useNavigate();

  return (
    <div className="buscar" onClick={() => navigate("/buscador")}>
      <form action="">
        <span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <input
          type="search"
          placeholder="Sabor de Guajolota, bebida..."
          className="buscador"
        />
      </form>
    </div>
  );
};
