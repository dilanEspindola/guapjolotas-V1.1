import { Navigate } from "react-router-dom";

export const LoginRegisterProtegidos = ({ children }) => {
  if (localStorage.getItem("sesion")) return <Navigate to="/" />;

  return <div>{children}</div>;
};
