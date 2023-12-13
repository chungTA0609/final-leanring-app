import { Link } from "react-router-dom";
import LogoImage from "../assets/images/logo-light.png";
import Icon from "@mdi/react";
import { mdiCartArrowRight, mdiLogin, mdiMagnify, mdiMenu } from "@mdi/js";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setShowMenu } from "../app/feature/menu/menuSlice";
import { CartProduct } from "../models/CartProduct";
const Topbar = () => {
  const { showMenu } = useSelector((state: RootState) => state.menu);
  const { cartProduct } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const horizonalmenu = () => {};
  const toggleMenu = () => {
    document.body.setAttribute(
      "data-sidebar-size",
      showMenu ? "condensed" : ""
    );

    dispatch(setShowMenu(!showMenu));
  };

  return (
    <>
      <div className="navbar-custom">
        <div className="container-fluid">
          <ul className="list-unstyled topnav-menu float-right mb-0">
            <li className="d-none d-lg-block">
              <form className="app-search">
                <div className="app-search-box">
                  <div className="input-group">
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search..."
                      id="top-search"
                    />
                    <div className="input-group-append">
                      <button className="btn" type="submit">
                        <Link to={"product"}>
                          <i className="fe-search">
                            <Icon path={mdiMagnify} size={0.75} />
                          </i>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </li>

            <li className="dropdown d-inline-block d-lg-none">
              <Link
                to={"product"}
                className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="fe-search noti-icon"></i>
                <Icon path={mdiMagnify} size={1} />
              </Link>
              <div className="dropdown-menu dropdown-lg dropdown-menu-right p-0">
                <form className="p-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="navbar.search.text"
                    aria-label="Recipient's username"
                  />
                </form>
              </div>
            </li>
            <li className="dropdown d-inline-block d-lg-none">
              <Link
                to={"cart"}
                className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i className="fe-search noti-icon"></i>
                <Icon path={mdiCartArrowRight} size={1} />
                <span className="badge badge-danger rounded-circle noti-icon-badge">
                  {cartProduct.reduce(
                    (accumulator, currentItem: CartProduct) => {
                      return accumulator + currentItem.quantity;
                    },
                    0
                  )}
                </span>
              </Link>
              <div className="dropdown-menu dropdown-lg dropdown-menu-right p-0">
                <form className="p-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="navbar.search.text"
                    aria-label="Recipient's username"
                  />
                </form>
              </div>
            </li>

            <li className="dropdown d-none d-lg-inline-block">
              <Link
                to={"cart"}
                className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
              >
                <Icon path={mdiCartArrowRight} size={1} />
                <span className="badge badge-danger rounded-circle noti-icon-badge">
                  {cartProduct.reduce(
                    (accumulator, currentItem: CartProduct) => {
                      return accumulator + currentItem.quantity;
                    },
                    0
                  )}
                </span>
              </Link>
            </li>

            <li className="dropdown notification-list">
              <Link
                to={"login"}
                className="nav-link right-bar-toggle toggle-right"
              >
                <Icon path={mdiLogin} size={1} />
              </Link>
            </li>
          </ul>

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

          <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
            <li>
              <button
                className="button-menu-mobile waves-effect waves-light"
                onClick={toggleMenu}
              >
                <Icon path={mdiMenu} size={1} />
              </button>
            </li>

            <li>
              {/* Mobile menu toggle (Horizontal Layout) */}
              <a
                className="navbar-toggle nav-link"
                data-toggle="collapse"
                onClick={horizonalmenu}
                data-target="#topnav-menu-content"
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
              {/* End mobile menu toggle */}
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};
export default Topbar;
