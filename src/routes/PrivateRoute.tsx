import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}


const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuth();

  if (!user) {
    // redireciona para login se não estiver logado
    return <Navigate to="/login" />;

  }

  return children;
};

export default PrivateRoute;
