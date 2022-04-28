import { Navigate } from "react-router-dom";

export const RutasProtegidas = ({ children }) => {
  if (!localStorage.getItem("sesion")) return <Navigate to="/login" />;

  return <div>{children}</div>;
};
