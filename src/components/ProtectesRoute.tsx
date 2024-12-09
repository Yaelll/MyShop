import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { FCP } from "../@types";

const ProtectesRoute: FCP = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectesRoute;
