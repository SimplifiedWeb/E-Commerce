import { Navigate } from "react-router-dom";
import { getAuth } from "../authContext/AuthContext";

// eslint-disable-next-line react/prop-types
const Protected_Auth_Route = ({ children }) => {
  const { currentUser } = getAuth();

  // return currentUser ? children : <Navigate to="/login" />;
  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Protected_Auth_Route;
