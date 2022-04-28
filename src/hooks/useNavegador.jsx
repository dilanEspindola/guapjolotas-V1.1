import { useNavigate } from "react-router-dom";
export const useNavegador = () => {
  const navigate = useNavigate();

  const handleNavigateDynamicRoute = (id) => {
    navigate("/" + id);
  };

  return { handleNavigateDynamicRoute };
};
