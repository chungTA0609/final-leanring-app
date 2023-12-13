import { Link } from "react-router-dom";
import LogoDark from "../assets/images/logo-dark.png";
import LogoLight from "../assets/images/logo-light.png";
import { LoginData } from "../models/LoginData";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchDataStart } from "../app/feature/account/accountSlice";
import { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiEyeClosed,
  mdiEyeOutline,
  mdiFacebook,
  mdiGithub,
  mdiGoogle,
  mdiTwitter,
} from "@mdi/js";
const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const LoginSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      await dispatch({ type: fetchDataStart.type, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  const [showPasss, setShowPass] = useState(false);
  const [rememberLogin, setRememberLogin] = useState(false);
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

                  <form onSubmit={handleSubmit(LoginSubmit)}>
                    <div className="form-group mb-3">
                      <label>Email address </label>
                      <input
                        className={
                          errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        {...register("email", {
                          required: "Email is required",
                        })}
                        type="email"
                        id="emailaddress"
                        placeholder="Enter your email"
                      />

                      {errors.email && (
                        <div className="invalid-feedback">
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    <div className="form-group mb-3">
                      <label>Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type={showPasss ? "text" : "password"}
                          id="password"
                          {...register("password", {
                            required: "Password is required",
                          })}
                          className={
                            errors.email
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          placeholder="Enter your password"
                        />
                        <div
                          className="input-group-append"
                          data-password="false"
                        >
                          <div
                            className="input-group-text"
                            onClick={() => setShowPass(!showPasss)}
                          >
                            {showPasss ? (
                              <Icon path={mdiEyeOutline} size={1} />
                            ) : (
                              <Icon path={mdiEyeClosed} size={1} />
                            )}
                          </div>
                        </div>
                        {errors.password && (
                          <div className="invalid-feedback">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="form-group mb-3">
                      <div className="custom-control custom-checkbox">
                        <input
                          onChange={() => {
                            setRememberLogin(!rememberLogin);
                          }}
                          type="checkbox"
                          className="custom-control-input"
                          id="checkbox-signin"
                          checked={rememberLogin}
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
                          href="#"
                          className="social-list-item border-purple text-purple"
                        >
                          <Icon path={mdiFacebook} size={1} />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="social-list-item border-danger text-danger"
                        >
                          <Icon path={mdiGoogle} size={1} />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="social-list-item border-info text-info"
                        >
                          <Icon path={mdiTwitter} size={1} />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href="#"
                          className="social-list-item border-secondary text-secondary"
                        >
                          <Icon path={mdiGithub} size={1} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p>
                    <Link to="forgot-password" className="text-muted ml-1">
                      Forgot your password?
                    </Link>
                  </p>
                  <p className="text-muted">
                    Don't have an account?
                    <Link
                      to="register"
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
