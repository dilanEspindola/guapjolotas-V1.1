import { useNavigate } from "react-router-dom";
import "../styles/logout.css";

export const LogOut = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("sesion");
    localStorage.removeItem("usuario");
    window.location.reload(true);
  };

  return (
    <div className="logout-container">
      <span className="logout" onClick={logOut}>
        <i className="fa-solid fa-arrow-right-from-bracket logout-icon"></i>
      </span>
    </div>
  );
};
