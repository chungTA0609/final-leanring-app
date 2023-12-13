import { CartProduct } from "../models/CartProduct";

const calculateSubtotal = (arrObj: Array<CartProduct>) => {
  const initialValue = 0;
  const subtotal = arrObj.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.quantity * currentValue.product!.price,
    initialValue
  );
  return subtotal;
};
export default calculateSubtotal;
