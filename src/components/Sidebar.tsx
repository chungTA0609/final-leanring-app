import { Link } from "react-router-dom";
import LogoImage from "../assets/images/logo-light.png";
import Icon from "@mdi/react";
import { mdiViewDashboard } from "@mdi/js";
const Sidebar = () => {
  return (
    <div className="left-side-menu">
      <div className="logo-box">
        <Link to="/" className="logo logo-dark text-center">
          <span className="logo-sm">
            <img src={LogoImage} height="24" />
            <span className="logo-lg-text-light">Minton</span>
          </span>
          <span className="logo-lg">
            <img src={LogoImage} height="20" />
            <span className="logo-lg-text-light">M</span>
          </span>
        </Link>

        <Link to="/" className="logo logo-light text-center">
          <span className="logo-sm">
            <img src={LogoImage} height="24" />
          </span>
          <span className="logo-lg">
            <img src={LogoImage} height="20" />
          </span>
        </Link>
      </div>

      <div className="h-100">
        <div className="user-box text-center">
          <img
            src="~/assets/images/users/avatar-1.jpg"
            alt="user-img"
            title="Mat Helme"
            className="rounded-circle avatar-md"
          />
          <div className="dropdown">
            <a
              className="text-reset dropdown-toggle h5 mt-2 mb-1 d-block"
              data-toggle="dropdown"
            >
              Nik Patel
            </a>
            <div className="dropdown-menu user-pro-dropdown">
              <a className="dropdown-item notify-item">
                <i className="fe-user mr-1"></i>
                <span>My Account</span>
              </a>

              <a className="dropdown-item notify-item">
                <i className="fe-settings mr-1"></i>
                <span>Settings</span>
              </a>

              <a className="dropdown-item notify-item">
                <i className="fe-lock mr-1"></i>
                <span>Lock Screen</span>
              </a>

              <a className="dropdown-item notify-item">
                <i className="fe-log-out mr-1"></i>
                <span>Logout</span>
              </a>
            </div>
          </div>
          <p className="text-reset">Admin Head</p>
        </div>

        <div id="sidebar-menu">
          <ul className="list-unstyled" id="side-menu">
            <li className="menu-title">kk</li>
            <li>
              <Link to="product" className="side-nav-link-ref">
                <Icon path={mdiViewDashboard} size={1} />
                <span>List Film</span>
              </Link>
              <div className="collapse" id="sidebarTasks">
                <ul className="sub-menu nav-second-level" aria-expanded="false">
                  <li>
                    <Link to="subitem.link" className="side-nav-link-ref">
                      kaka
                    </Link>
                    <a className="side-nav-link-a-ref has-arrow">
                      kaka
                      <span className="menu-arrow"></span>
                    </a>

                    <div className="collapse">
                      <ul className="sub-menu" aria-expanded="false">
                        <li>
                          <Link to="/kaka" className="side-nav-link-ref">
                            kekee
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};
export default Sidebar;
