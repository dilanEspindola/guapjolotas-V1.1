import axios from "axios";

export const GetData = async (url, nameCollection) => {
  const { data } = await axios.get(url + nameCollection);
  return data;
};
