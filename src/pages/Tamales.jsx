import { Home } from "../components/Home";
import { TamalesDoc } from "../components/TamalesDoc";
import { LogOut } from "../components/LogOut";
import "../styles/loading.css";
import "../styles/guajolota/guajolotas.css";

export const Tamales = () => {
  return (
    <>
      <Home />
      <TamalesDoc />
      <LogOut />
    </>
  );
};
