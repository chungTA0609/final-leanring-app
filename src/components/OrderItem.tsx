import { Link } from "react-router-dom";
import { Film } from "../models/Film";
import { CartProduct } from "../models/CartProduct";

const OrderItem = ({
  film,
  cartFilm,
}: {
  film: Film;
  cartFilm: CartProduct;
}) => {
  return (
    <>
      <tr>
        <td>
          <img
            src={film.poster_path}
            alt="product-img"
            title="product-img"
            className="rounded"
            height="48"
          />
        </td>

        <td>
          <Link
            to="/ecommerce/product-detail/1"
            className="text-body font-weight-semibold"
          >
            {film.title}
          </Link>
          <small className="d-block">
            {cartFilm.quantity} x $ {film.price}
          </small>
        </td>
        <td className="text-right">
          $ {(cartFilm.quantity * film.price).toFixed(2)}
        </td>
      </tr>
    </>
  );
};
export default OrderItem;
