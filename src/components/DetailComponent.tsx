import { Film } from "../models/Film";
import Icon from "@mdi/react";
import { mdiCart, mdiCircleMedium } from "@mdi/js";
import { Link } from "react-router-dom";
import RatingComponent from "./RatingComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { CartProduct } from "../models/CartProduct";
import {
  updateCart,
  updateSubtotal,
  updateTotalItem,
} from "../app/feature/cart/cartSlice";
import calculateSubtotal from "../helpers/helpers";
const DetailComponent = ({ detail }: { detail: Film | null }) => {
  const { cartProduct } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
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
  const addToCart = () => {
    const productQuantity = cartProduct.find(
      (e: CartProduct) => e.product!.id == detail!.id
    );
    let newProductQuantity;
    if (productQuantity) {
      newProductQuantity = updateObject(cartProduct, detail!.id, {
        quantity: productQuantity?.quantity + 1,
      });
    } else {
      const newProductCart: CartProduct = { product: detail, quantity: 1 };
      newProductQuantity = [...cartProduct];
      newProductQuantity.push(newProductCart);
    }

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
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <h4 className="header-title">
                      {detail ? detail.title : ""}
                    </h4>
                    <p className="sub-header font-13">
                      Trailer{" "}
                      <Link to={detail ? detail.homepage : ""}>Home page</Link>
                    </p>

                    <div className="embed-responsive embed-responsive-4by3">
                      <iframe
                        className="embed-responsive-item"
                        src="https://www.youtube.com/embed/PrUxWZiQfy4?ecver=1"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div>
                  <div>
                    <a href="#" className="text-primary">
                      {detail
                        ? detail.genres.map((obj) => obj["name"]).join(", ")
                        : ""}
                    </a>
                  </div>
                  <h4 className="mb-1">
                    {detail ? detail.original_title : ""}
                  </h4>

                  <RatingComponent
                    rating={detail ? detail.vote_average / 2 : 0}
                  />

                  <div className="mt-3">
                    <h4>
                      Price :<b>$ {detail ? detail.price : 0}</b>
                    </h4>
                  </div>
                  <hr />

                  <div>
                    <p>{detail ? detail.overview : ""}</p>

                    <div className="mt-3">
                      <h5 className="font-size-14">Specification :</h5>
                      <div className="row">
                        <div className="col-md-12">
                          <ul className="list-unstyled product-desc-list">
                            <li>
                              <Icon
                                path={mdiCircleMedium}
                                size={1}
                                className="mr-1 align-middle"
                              />
                              Company:{" "}
                              {detail
                                ? detail.production_companies
                                    .map((obj) => obj["name"])
                                    .join(", ")
                                : ""}
                            </li>
                            <li>
                              <Icon
                                path={mdiCircleMedium}
                                size={1}
                                className="mr-1 align-middle"
                              />
                              Country:{" "}
                              {detail
                                ? detail.production_countries
                                    .map((obj) => obj["name"])
                                    .join(", ")
                                : ""}
                            </li>
                            <li>
                              <Icon
                                path={mdiCircleMedium}
                                size={1}
                                className="mr-1 align-middle"
                              />
                              Language:{" "}
                              {detail
                                ? detail.spoken_languages
                                    .map((obj) => obj["english_name"])
                                    .join(", ")
                                : ""}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        <button
                          onClick={addToCart}
                          type="button"
                          className="btn btn-success waves-effect waves-light"
                        >
                          <span className="btn-label">
                            <Icon path={mdiCart} size={1} />
                          </span>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailComponent;
