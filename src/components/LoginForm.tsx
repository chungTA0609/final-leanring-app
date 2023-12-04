import { Link } from "react-router-dom";
import LogoDark from "../assets/images/logo-dark.png";
import LogoLight from "../assets/images/logo-light.png";
const LoginForm = () => {
  return (
    <>
      <div className="account-pages mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <div className="auth-logo">
                      <Link to="/" className="logo logo-dark text-center">
                        <span className="logo-lg">
                          <img src={LogoDark} height="22" />
                        </span>
                      </Link>

                      <Link to="/" className="logo logo-light text-center">
                        <span className="logo-lg">
                          <img src={LogoLight} height="22" />
                        </span>
                      </Link>
                    </div>
                    <p className="text-muted mb-4 mt-3">
                      Enter your email address and password to access admin
                      panel.
                    </p>
                  </div>

                  <form action="#">
                    <div className="form-group mb-3">
                      <label>Email address</label>
                      <input
                        className="form-control"
                        type="email"
                        id="emailaddress"
                        required
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label>Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                        <div
                          className="input-group-append"
                          data-password="false"
                        >
                          <div className="input-group-text">
                            <span className="password-eye"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="checkbox-signin"
                          checked
                        />
                        <label className="custom-control-label">
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className="form-group mb-0 text-center">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Log In
                      </button>
                    </div>
                  </form>

                  <div className="text-center">
                    <h5 className="mt-3 text-muted">Sign in with</h5>
                    <ul className="social-list list-inline mt-3 mb-0">
                      <li className="list-inline-item">
                        <a
                          href="javascript: void(0);"
                          className="social-list-item border-purple text-purple"
                        >
                          <i className="mdi mdi-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="javascript: void(0);"
                          className="social-list-item border-danger text-danger"
                        >
                          <i className="mdi mdi-google"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="javascript: void(0);"
                          className="social-list-item border-info text-info"
                        >
                          <i className="mdi mdi-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="javascript: void(0);"
                          className="social-list-item border-secondary text-secondary"
                        >
                          <i className="mdi mdi-github"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p>
                    <Link to="/auth/recoverpwd" className="text-muted ml-1">
                      Forgot your password?
                    </Link>
                  </p>
                  <p className="text-muted">
                    Don't have an account?
                    <Link
                      to="/auth/register"
                      className="text-primary font-weight-medium ml-1"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
