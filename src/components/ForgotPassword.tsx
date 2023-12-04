import { Link } from "react-router-dom";
import LogoDark from "../assets/images/logo-dark.png";
import LogoLight from "../assets/images/logo-light.png";
const ForgotPassword = () => {
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
                      Enter your email address and we'll send you an email with
                      instructions to reset your password.
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

                    <div className="form-group mb-0 text-center">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p className="text-muted">
                    Back to
                    <Link
                      to="/auth/login"
                      className="text-primary font-weight-medium ml-1"
                    >
                      Log in
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
export default ForgotPassword;
