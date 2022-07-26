import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

  const { active } = useSelector((state) => state.subscription);

  return active ? children : <Navigate to="/subscription" />;
};
