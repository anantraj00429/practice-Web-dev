// export const updateCartValue = (cartValue, cartProducts) => {
//   if (!cartValue) {
//     console.error("Cart value element not found.");
//     return;
//   }
//   cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping">${cartProducts.length}</i>`;
// };

// const cartValue = document.querySelector("#cartValue");

// export const updateCartValue = (cartProducts) => {
//   return (cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`);
// };

export const updateCartValue = (cartProducts) => {
  const cartValue = document.querySelector("#cartValue");
  if (cartValue) {
    cartValue.innerHTML = ` <i class="fa-solid fa-cart-shopping"> ${cartProducts.length} </i>`;
  }
};
