import { Navigate, Outlet } from "react-router-dom";
import { useAppData } from "../context/AppContext";
import Loading from "./Loading";

const ProtectedRoutes = () => {
  const { isAuth, loading } = useAppData();
  if (loading) return <Loading />;

  if (!isAuth) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;