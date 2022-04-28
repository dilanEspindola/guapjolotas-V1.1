import { useState, useEffect, createContext, useContext } from "react";
import { GetAllData } from "../services/GetAllData";

export const context = createContext();

export const useDataContext = () => useContext(context);

export const DataProvider = ({ children }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    GetAllData()
      .then((data) => setDatos(data))
      .catch((error) => console.log(error));
  }, []);

  return <context.Provider value={{ datos }}>{children}</context.Provider>;
};
