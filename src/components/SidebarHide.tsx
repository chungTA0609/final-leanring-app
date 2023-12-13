import { Link } from "react-router-dom";
import LogoImage from "../assets/images/logo-sm.png";
import Icon from "@mdi/react";
import { mdiViewDashboard } from "@mdi/js";

const SidebarHide = () => {
  return (
    <>
      <div className="left-side-menu">
        <div className="logo-box">
          <Link to="/" className="logo logo-light text-center">
            <span className="logo-sm">
              <img src={LogoImage} height="24" />
            </span>{" "}
            <span className="logo-lg">
              <img src={LogoImage} height="24" />
            </span>
          </Link>
        </div>
        <div data-simplebar="" className="h-100">
          <div className="simplebar-wrapper" style={{ margin: "0px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer"></div>
            </div>
            <div className="simplebar-mask">
              <div
                className="simplebar-offset"
                style={{ right: "0px", bottom: "0px" }}
              >
                <div
                  className="simplebar-content-wrapper"
                  role="region"
                  aria-label="scrollable content"
                  style={{ height: "100%", overflow: "hidden" }}
                >
                  <div className="simplebar-content" style={{ padding: "0px" }}>
                    <div id="sidebar-menu" className="">
                      <ul id="side-menu" className="list-unstyled">
                        <li className="menu-title">Navigation</li>{" "}
                        <li>
                          <Link to="product" className="has-dropdown">
                            <Icon path={mdiViewDashboard} size={1} />
                            <span>List Film</span>{" "}
                          </Link>{" "}
                        </li>{" "}
                      </ul>
                    </div>{" "}
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "70px", height: "1150px" }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                width: "0px",
                display: "none",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: "0px",
                transform: "translate3d(0px, 0px, 0px)",
                display: "none",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SidebarHide;
