import { NavLink, useNavigate } from "react-router-dom";
import { Buscador } from "./Buscador";
import { IconsHome, HomeDiv } from "../styles/homeStyles/home";
import { Carrito } from "../context/CarritoContext";
import "../styles/homeStyles/home.css";
import "../index.css";

export const Home = () => {
  const navigate = useNavigate();
  const { carrito } = Carrito();

  return (
    <>
      <HomeDiv className="home">
        <IconsHome>
          <img
            src="https://res.cloudinary.com/dp9zv16le/image/upload/v1650407651/sprint2/logo_axarkq.png"
            alt="logo"
          />
          <span onClick={() => navigate("/carrito")}>
            {carrito.length > 0 ? (
              <span className="icon-cart-active">
                <i className="fa-solid fa-cart-shopping icon-cart"></i>
              </span>
            ) : (
              <i className="fa-solid fa-cart-shopping icon-cart"></i>
            )}
          </span>
        </IconsHome>
        <h1>Nada como una Guajolota para empezar el día</h1>
        <Buscador />
        <div className="links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            Guajolotas
          </NavLink>
          <NavLink
            to="/bebidas"
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            Bebidas
          </NavLink>
          <NavLink
            to="/tamales"
            className={({ isActive }) => (isActive ? "active" : "no-active")}
          >
            Tamales
          </NavLink>
        </div>
      </HomeDiv>
    </>
  );
};
