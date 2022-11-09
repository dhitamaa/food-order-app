import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/layouts/Sidebar";

const AdminPage = () => {
  const getUserLogged = localStorage.getItem("userLogged");

  return (
    <div className="d-flex flex-nowrap">
      <Sidebar />
      <div
        className="p-4"
        style={{ width: "calc(100% - 280px)", backgroundColor: "#f7f8fc" }}
      >
        {getUserLogged ? <Outlet /> : <Navigate to="/login" />}
      </div>
    </div>
  );
};

export default AdminPage;
