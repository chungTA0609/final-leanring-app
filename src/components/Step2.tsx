import { useState } from "react";

const Step2 = () => {
  const [savedAddress, setSavedAddress] = useState(1);
  const [shippingMethod, setShippingMethod] = useState(1);
  return (
    <>
      <div
        role="tabpanel"
        id="ShippingInfo2"
        aria-labelledby="step-ShippingInfo2"
        className="wizard-tab-container"
      >
        <div>
          <h4 className="header-title">Saved Address</h4>{" "}
          <p className="sub-header">
            Fill the form below in order to send you the order's invoice.
          </p>{" "}
          <div className="row">
            <div className="col-md-6">
              <div
                className="border p-3 rounded mb-3 mb-md-0"
                onClick={() => setSavedAddress(1)}
              >
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    className="custom-control-input"
                    value={1}
                    checked={savedAddress === 1}
                  />{" "}
                  <label className="custom-control-label font-16">Home</label>
                </div>{" "}
                <div className="float-right">
                  <a href="#">
                    <i className="mdi mdi-square-edit-outline text-muted font-20"></i>
                  </a>
                </div>{" "}
                <h5 className="mt-3">Brent Rowe</h5>{" "}
                <p className="mb-1">
                  <span className="font-weight-semibold mr-2">Address:</span>
                  3559 Roosevelt Wilson Lane San Bernardino, CA 92405
                </p>{" "}
                <p className="mb-1">
                  <span className="font-weight-semibold mr-2">Phone:</span>
                  (123) 456-7890
                </p>{" "}
                <p className="mb-0">
                  <span className="font-weight-semibold mr-2">Mobile:</span>
                  (+01) 12345 67890
                </p>
              </div>
            </div>{" "}
            <div className="col-md-6">
              <div
                className="border p-3 rounded mb-3 mb-md-0"
                onClick={() => setSavedAddress(2)}
              >
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    className="custom-control-input"
                    value={2}
                    checked={savedAddress === 2}
                  />{" "}
                  <label className="custom-control-label font-16">Office</label>
                </div>{" "}
                <div className="float-right">
                  <a href="#">
                    <i className="mdi mdi-square-edit-outline text-muted font-20"></i>
                  </a>
                </div>{" "}
                <h5 className="mt-3">Brent Rowe</h5>{" "}
                <p className="mb-1">
                  <span className="font-weight-semibold mr-2">Address:</span>
                  3559 Roosevelt Wilson Lane San Bernardino, CA 92405
                </p>{" "}
                <p className="mb-1">
                  <span className="font-weight-semibold mr-2">Phone:</span>
                  (123) 456-7890
                </p>{" "}
                <p className="mb-0">
                  <span className="font-weight-semibold mr-2">Mobile:</span>
                  (+01) 12345 67890
                </p>
              </div>
            </div>
          </div>{" "}
          <h4 className="header-title mt-4">Shipping Method</h4>{" "}
          <p className="text-muted mb-3">
            Fill the form below in order to send you the order's invoice.
          </p>{" "}
          <div className="row">
            <div className="col-md-12">
              <div
                className="border p-3 rounded mb-3"
                onClick={() => setShippingMethod(1)}
              >
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="shippingMethodRadio1"
                    name="shippingOptions"
                    className="custom-control-input"
                    value={1}
                    checked={shippingMethod === 1}
                  />{" "}
                  <label className="custom-control-label font-16">
                    Standard Delivery - FREE
                  </label>
                </div>{" "}
                <p className="mb-0 pl-3 pt-1">
                  Estimated 5-7 days shipping (Duties and tax may be due upon
                  delivery)
                </p>
              </div>{" "}
              <div
                className="border p-3 rounded"
                onClick={() => setShippingMethod(2)}
              >
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="shippingMethodRadio2"
                    name="shippingOptions"
                    className="custom-control-input"
                    value={2}
                    checked={shippingMethod === 2}
                  />{" "}
                  <label className="custom-control-label font-16">
                    Fast Delivery - $25
                  </label>
                </div>{" "}
                <p className="mb-0 pl-3 pt-1">
                  Estimated 1-2 days shipping (Duties and tax may be due upon
                  delivery)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default Step2;
