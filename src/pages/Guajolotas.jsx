import { Home } from "../components/Home";
import { GuajolotasDocs } from "../components/GuajolotasDocs";
import "../styles/loading.css";
import { LogOut } from "../components/LogOut";

export const Guajolotas = () => {
  return (
    <>
      <Home />
      <GuajolotasDocs />
      <LogOut />
    </>
  );
};
