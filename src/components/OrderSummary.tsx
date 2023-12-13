import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const OrderSummary = () => {
  const { cartProduct, subtotal } = useSelector(
    (state: RootState) => state.cart
  );
  const listFilms = useSelector((state: RootState) => state.film.films);

  return (
    <>
      <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h4 className="header-title mb-3">Order Summary</h4>

            <div className="table-responsive">
              <table className="table table-centered table-nowrap mb-0">
                <tbody>
                  {cartProduct.map((item) => (
                    <OrderItem
                      cartFilm={item}
                      film={listFilms.find((e) => e.id === item.product!.id)!}
                    />
                  ))}
                  <tr className="text-right">
                    <td colSpan={2}>
                      <h6 className="m-0">Sub Total:</h6>
                    </td>
                    <td className="text-right">$ {subtotal.toFixed(2)}</td>
                  </tr>
                  <tr className="text-right">
                    <td colSpan={2}>
                      <h6 className="m-0">Shipping:</h6>
                    </td>
                    <td className="text-right">FREE</td>
                  </tr>
                  <tr className="text-right">
                    <td colSpan={2}>
                      <h5 className="m-0">Total:</h5>
                    </td>
                    <td className="text-right font-weight-semibold">
                      $ {subtotal.toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderSummary;
