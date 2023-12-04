import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AuthLayout = () => {
  return (
    <>
      <Sidebar></Sidebar>

      <div className="content-page">
        <div className="content">
          <Topbar />

          <div className="container-fluid">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* <Rightbar /> */}
    </>
  );
};
export default AuthLayout;
