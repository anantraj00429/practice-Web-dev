import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = () => {
  let cartProducts = localStorage.getItem("cartProductLS");
  if (!cartProducts) {
    return [];
  }
  cartProducts = JSON.parse(cartProducts);
  // console.log("cartValue:", cartValue);
  //update the cart button value
  updateCartValue(cartProducts);
  // getCartProductFromLS(cartValue);

  return cartProducts;
};
