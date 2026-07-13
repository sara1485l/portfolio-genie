import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div
        className="container-fluid py-4"
        style={{
          background: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;