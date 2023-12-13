import { Link } from "react-router-dom";
import { Film } from "../models/Film";
import Icon from "@mdi/react";
import { mdiTrashCan } from "@mdi/js";
import { CartProduct } from "../models/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCart,
  updateSubtotal,
  updateTotalItem,
} from "../app/feature/cart/cartSlice";
import calculateSubtotal from "../helpers/helpers";
import { RootState } from "../app/store";

const CartItem = ({
  film,
  cartFilm,
}: {
  film: Film;
  cartFilm: CartProduct;
}) => {
  const dispatch = useDispatch();
  const { cartProduct } = useSelector((state: RootState) => state.cart);
  const updateObject = (
    array: Array<CartProduct>,
    idToUpdate: number,
    updatedProperties: object
  ) => {
    return array.map((obj: CartProduct) => {
      // Check if the object has the specified id
      if (obj.product!.id == idToUpdate) {
        // If yes, update the object with new properties
        return { ...obj, ...updatedProperties };
      } else {
        // If not, keep the object as is
        return obj;
      }
    });
  };
  const updateCartItem = (type: string) => {
    const newProductQuantity = updateObject(cartProduct, film!.id, {
      quantity:
        type === "+"
          ? cartFilm?.quantity + 1
          : type === "-"
          ? cartFilm?.quantity - 1
          : 0,
    });

    const subtotal = calculateSubtotal(newProductQuantity);
    const initialValue = 0;
    const totalCount = newProductQuantity.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      initialValue
    );
    dispatch(updateSubtotal(subtotal));
    dispatch(updateTotalItem(totalCount));
    dispatch(updateCart(newProductQuantity));
  };
  return (
    <tr>
      <td>
        <img
          src={film.poster_path}
          alt="product-img"
          title="product-img"
          className="avatar-lg"
        />
      </td>{" "}
      <td>
        <h5 className="mt-0 mb-1 text-truncate">
          <Link to={`/product/${film.id}`} className="text-body">
            {film.original_title}
          </Link>
        </h5>{" "}
      </td>{" "}
      <td>$ {film.price}</td>{" "}
      <td>
        <div className="product-cart-touchspin">
          <div className="vnis">
            <button
              onClick={() => updateCartItem("-")}
              className="vnis__button"
            >
              -
            </button>{" "}
            <input
              type="text"
              className="vnis__input"
              value={cartFilm.quantity}
            />{" "}
            <button
              onClick={() => updateCartItem("+")}
              className="vnis__button"
            >
              +
            </button>
          </div>
        </div>
      </td>{" "}
      <td>$ {film.price}</td>{" "}
      <td>
        <a
          className="action-icon text-danger"
          onClick={() => updateCartItem("0")}
        >
          <Icon path={mdiTrashCan} size={1} />
        </a>
      </td>
    </tr>
  );
};
export default CartItem;
