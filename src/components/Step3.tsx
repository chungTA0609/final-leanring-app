import { mdiCash, mdiCashSync, mdiCreditCard } from "@mdi/js";
import Icon from "@mdi/react";
import { useState } from "react";

const Step3 = () => {
  const [paymentMethod, setPaymentMethod] = useState(1);
  const setValueRadio = (value: number) => {
    setPaymentMethod(value);
  };
  return (
    <>
      <div
        role="tabpanel"
        id="PaymentInfo4"
        aria-hidden="true"
        aria-labelledby="step-PaymentInfo4"
        className="wizard-tab-container"
      >
        <div>
          <h4 className="header-title">Payment Selection</h4>{" "}
          <p className="sub-header">
            Fill the form below in order to send you the order's invoice.
          </p>{" "}
          <div
            className="border p-3 mb-3 rounded"
            onClick={() => setValueRadio(1)}
          >
            <div className="float-right">
              <Icon
                path={mdiCashSync}
                size={1}
                className="fab fa-cc-paypal font-24 text-primary"
              />
            </div>{" "}
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="BillingOptRadio2"
                name="billingOptions"
                className="custom-control-input"
                value={1}
                checked={paymentMethod === 1}
              />{" "}
              <label className="custom-control-label font-16">
                Pay with Paypal
              </label>
            </div>{" "}
            <p className="mb-0 pl-3 pt-1">
              You will be redirected to PayPal website to complete your purchase
              securely.
            </p>
          </div>{" "}
          <div
            className="border p-3 mb-3 rounded"
            onClick={() => setValueRadio(2)}
          >
            <div className="float-right">
              <Icon
                path={mdiCreditCard}
                size={1}
                className="far fa-credit-card font-24 text-primary"
              />
            </div>{" "}
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="BillingOptRadio1"
                name="billingOptions"
                className="custom-control-input"
                value={2}
                checked={paymentMethod === 2}
              />{" "}
              <label className="custom-control-label font-16">
                Credit / Debit Card
              </label>
            </div>{" "}
            <p className="mb-0 pl-3 pt-1">
              Safe money transfer using your bank account. We support
              Mastercard, Visa, Discover and Stripe.
            </p>{" "}
            <div className="row mt-4">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Card Number</label>{" "}
                  <input
                    type="text"
                    id="card-number"
                    data-toggle="input-mask"
                    data-mask-format="0000 0000 0000 0000"
                    placeholder="4242 4242 4242 4242"
                    className="form-control"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Name on card</label>{" "}
                  <input
                    type="text"
                    id="card-name-on"
                    placeholder="Master Name"
                    className="form-control"
                  />
                </div>
              </div>{" "}
              <div className="col-md-3">
                <div className="form-group">
                  <label>Expiry date</label>{" "}
                  <input
                    type="text"
                    id="card-expiry-date"
                    data-toggle="input-mask"
                    data-mask-format="00/00"
                    placeholder="MM/YY"
                    className="form-control"
                  />
                </div>
              </div>{" "}
              <div className="col-md-3">
                <div className="form-group">
                  <label>CVV code</label>{" "}
                  <input
                    type="text"
                    id="card-cvv"
                    data-toggle="input-mask"
                    data-mask-format="000"
                    placeholder="012"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          <div
            className="border p-3 mb-3 rounded"
            onClick={() => setValueRadio(3)}
          >
            <div className="float-right">
              <Icon
                path={mdiCash}
                size={1}
                className="fas fa-money-bill-alt font-24 text-primary F"
              />
            </div>{" "}
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="BillingOptRadio4"
                name="billingOptions"
                className="custom-control-input"
                value={3}
                checked={paymentMethod === 3}
              />{" "}
              <label className="custom-control-label font-16">
                Cash on Delivery
              </label>
            </div>{" "}
            <p className="mb-0 pl-3 pt-1">
              Pay with cash when your order is delivered.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Step3;
