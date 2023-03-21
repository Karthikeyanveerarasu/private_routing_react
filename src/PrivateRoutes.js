import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = ({ islogin }) => {
  let auth = { token: true };
  return islogin ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoutes;
