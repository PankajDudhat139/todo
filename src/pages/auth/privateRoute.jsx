import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";
import Navbar from "../navBar"; // Make sure this path is correct

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default PrivateRoute;
