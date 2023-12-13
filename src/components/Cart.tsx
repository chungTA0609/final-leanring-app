import { Link } from "react-router-dom";
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiCartPlus } from "@mdi/js";
import PageHeader from "./PageHeader";

const Cart = () => {
  const { cartProduct, subtotal } = useSelector(
    (state: RootState) => state.cart
  );
  const listFilms = useSelector((state: RootState) => state.film.films);
  return (
    <>
      <PageHeader />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-8">
                  <div>
                    <div className="table-responsive">
                      <table className="table table-centered mb-0 table-nowrap">
                        <thead className="thead-light">
                          <tr>
                            <th style={{ width: "80px" }}>Product</th>
                            <th>Product Desc</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th colSpan={2}>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartProduct.map((item) => (
                            <CartItem
                              cartFilm={item}
                              film={
                                listFilms.find(
                                  (e) => e.id === item.product!.id
                                )!
                              }
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-3">
                      <label>Add a Note:</label>
                      <textarea
                        className="form-control"
                        id="example-textarea"
                        rows={3}
                        placeholder="Write some note.."
                      ></textarea>
                    </div>

                    <div className="row mt-4">
                      <div className="col-sm-6">
                        <Link
                          to="/product"
                          className="btn text-muted d-none d-sm-inline-block btn-link font-weight-semibold"
                        >
                          <Icon path={mdiArrowLeft} size={1} /> Continue
                          Shopping
                        </Link>
                      </div>

                      <div className="col-sm-6">
                        <div className="text-sm-right">
                          <Link to="/checkout" className="btn btn-danger">
                            <Icon path={mdiCartPlus} size={1} /> Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="border p-3 mt-4 mt-lg-0 rounded">
                    <h4 className="header-title mb-3">Order Summary</h4>

                    <div className="table-responsive">
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>Grand Total :</td>
                            <td>$ {subtotal}</td>
                          </tr>
                          <tr>
                            <td>Discount :</td>
                            {/* <td>-$ {}</td> */}
                          </tr>
                          <tr>
                            <td>Shipping Charge :</td>
                            {/* <td>$ 24</td> */}
                          </tr>
                          <tr>
                            <td>Estimated Tax :</td>
                            {/* <td>$ 18.22</td> */}
                          </tr>
                          <tr>
                            <th>Total :</th>
                            <th>$ {subtotal}</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* <div className="alert alert-warning mt-3" role="alert">
                    Use coupon code <strong>MNTF25</strong> and get 25% discount
                    !
                  </div> */}

                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control form-control-light"
                      placeholder="Coupon code"
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-light" type="button">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
