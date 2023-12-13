import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import SidebarHide from "../components/SidebarHide";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const AuthLayout = () => {
  const { showMenu } = useSelector((state: RootState) => state.menu);
  const sidebar = showMenu ? <Sidebar></Sidebar> : <SidebarHide></SidebarHide>;
  return (
    <>
      {sidebar}
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
