import { Home } from "../components/Home";
import { BebidasDoc } from "../components/BebidasDoc";
import { LogOut } from "../components/LogOut";
import "../styles/loading.css";
import "../styles/guajolota/guajolotas.css";

export const Bebidas = () => {
  return (
    <>
      <Home />
      <BebidasDoc />
      <LogOut />
    </>
  );
};
