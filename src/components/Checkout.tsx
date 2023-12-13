import StepCheckout from "./StepCheckout";
import OrderSummary from "./OrderSummary";

const Checkout = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">Checkout</h4>{" "}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <StepCheckout></StepCheckout>
                </div>
                <OrderSummary></OrderSummary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
