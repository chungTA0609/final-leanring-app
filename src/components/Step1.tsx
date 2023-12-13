import { mdiArrowLeft, mdiTruckFast } from "@mdi/js";
import Icon from "@mdi/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Bill } from "../models/Bill";

const Step1 = (props: { submit: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Bill>();
  const Step1Submit: SubmitHandler<Bill> = async (data: Bill) => {
    try {
      props.submit();
      // await dispatch({ type: fetchDataStart.type, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        role="tabpanel"
        id="BillingInfo0"
        aria-labelledby="step-BillingInfo0"
        className="wizard-tab-container"
        aria-hidden="true"
      >
        <div>
          <h4 className="header-title">Billing Information</h4>{" "}
          <p className="sub-header">
            Fill the form below in order to send you the order's invoice.
          </p>
          <form onSubmit={handleSubmit(Step1Submit)}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    id="billing-first-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    id="billing-last-name"
                    className="form-control"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Email Address
                    <span className="text-danger">*</span>
                  </label>{" "}
                  <input
                    className={
                      errors.email ? "form-control is-invalid" : "form-control"
                    }
                    {...register("email", {
                      required: "Email is required",
                    })}
                    type="email"
                    placeholder="Enter your email"
                    id="billing-email-address"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>
              </div>{" "}
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Phone <span className="text-danger">*</span>
                  </label>{" "}
                  <input
                    className={
                      errors.phone ? "form-control is-invalid" : "form-control"
                    }
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    type="text"
                    placeholder="(xx) xxx xxxx xxx"
                    id="billing-phone"
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">
                      {errors.phone.message}
                    </div>
                  )}
                </div>
              </div>
            </div>{" "}
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label>Address</label>{" "}
                  <input
                    type="text"
                    placeholder="Enter full address"
                    id="billing-address"
                    className="form-control"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Town / City</label>{" "}
                  <input
                    type="text"
                    placeholder="Enter your city name"
                    id="billing-town-city"
                    className="form-control"
                  />
                </div>
              </div>{" "}
              <div className="col-md-4">
                <div className="form-group">
                  <label>State</label>{" "}
                  <input
                    type="text"
                    placeholder="Enter your state"
                    id="billing-state"
                    className="form-control"
                  />
                </div>
              </div>{" "}
              <div className="col-md-4">
                <div className="form-group">
                  <label>Zip Code</label>{" "}
                  <input
                    type="text"
                    placeholder="Enter your zip code"
                    id="billing-zip-postal"
                    className="form-control"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label>Country</label>{" "}
                </div>
              </div>
            </div>{" "}
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      id="customCheck2"
                      className="custom-control-input"
                    />{" "}
                    <label className="custom-control-label">
                      Ship to different address ?
                    </label>
                  </div>
                </div>{" "}
                <div className="form-group mt-3">
                  <label>Order Notes:</label>{" "}
                  <textarea
                    id="example-textarea"
                    rows={3}
                    placeholder="Write some note.."
                    className="form-control"
                  ></textarea>
                </div>
              </div>
            </div>
            <ul className="pager wizard list-inline mt-2">
              <li className="list-inline-item">
                <a href="/ecommerce/cart" className="btn btn-secondary">
                  <Icon path={mdiArrowLeft} size={1} /> Back to Shopping Cart
                </a>
              </li>{" "}
              <li className="next list-inline-item float-right">
                <button type="submit" className="btn btn-success float-right">
                  <Icon path={mdiTruckFast} size={1} /> Proceed to Shipping
                </button>
              </li>
            </ul>
          </form>
        </div>{" "}
      </div>{" "}
    </>
  );
};
export default Step1;
