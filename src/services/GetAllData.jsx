import axios from "axios";
import { productosURL } from "../utils/urls";

export const GetAllData = async () => {
  const { data } = await axios.get(productosURL);
  const nuevosDatos = [];
  data.forEach((data) => {
    if (data.guajolotas) {
      data.guajolotas.map((guajolota) => nuevosDatos.push(guajolota));
    }
    if (data.bebidas) {
      data.bebidas.map((bebida) => nuevosDatos.push(bebida));
    }
    if (data.tamales) {
      data.tamales.map((tamal) => nuevosDatos.push(tamal));
    }
  });

  return nuevosDatos;
};
