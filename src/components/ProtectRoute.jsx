import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ProtectRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!token) {
    setTimeout(() => {
      navigate("/signin");
    }, 2000);
    return <div>No Access</div>;
  } else return children;
};
export default ProtectRoute;
