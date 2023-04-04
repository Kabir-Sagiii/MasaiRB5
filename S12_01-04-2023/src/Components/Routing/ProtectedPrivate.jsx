import { useContext } from "react";
import { AuthContext } from "../Context-API-2/CustomProvider";
import { Navigate } from "react-router-dom";

function ProtectedPrivate({ children }) {
  const { isadmin } = useContext(AuthContext);
  if (isadmin) {
    return children;
  } else {
    return <Navigate to="/error" />;
  }
}

export default ProtectedPrivate;
