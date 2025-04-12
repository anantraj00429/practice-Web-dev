const manyProduct = document.querySelector("#productContain");
const manyTemplate = document.querySelector("#manyTemplate");

export const showProductContain = (manyproduct) => {
  if (!manyproduct || manyproduct.length === 0) {
    return false;
  }

  manyproduct.forEach((curProd) => {
    const { categorys, id, image, name, about } = curProd;

    const productsClone = document.importNode(manyTemplate.content, true);
    const cardContainers = productsClone.querySelector(".card");

    // Creating the link wrapper
    const linkWrapper = document.createElement("a");
    linkWrapper.href = `productDetails${id}.html`;
    linkWrapper.className = "product-link";

    // Move the card inside the link
    linkWrapper.appendChild(cardContainers);

    // Setting attributes and content inside the card
    cardContainers.id = `card${id}`;
    cardContainers.querySelector(".categorys").textContent = categorys;
    cardContainers.querySelector(".productNames").textContent = name;
    cardContainers.querySelector(".productImages").src = image;
    cardContainers.querySelector(".productImages").alt = name;
    cardContainers.querySelector(".aboutProduct").textContent = about;

    // Appending the link-wrapped card to the container
    manyProduct.appendChild(linkWrapper);
  });
};
// dev-0v7wusde8rxryw73.us.auth0.com
// // LJ3nVRgFLAWFttqh0ypIea4ET0Ih3z0F

// const manyProduct = document.querySelector("#productContain");
// const manyTemplate = document.querySelector("#manyTemplate");

// export const showProductContain = (manyproduct) => {
//   if (!manyproduct || manyproduct.length === 0) {
//     return false;
//   }

//   // document.getElementById("card1").innerHTML = "<p>This is a .</p>";
//   // cardContainers.innerHTML = `<a href="firstProduct.html" class="card" id="card1"></a>`;

//   manyproduct.forEach((curProd) => {
//     const { categorys, id, image, name, about } = curProd;

//     const productsClone = document.importNode(manyTemplate.content, true);
//     const cardContainers = productsClone.querySelector(".card"); // Selecting the card container
//     cardContainers.innerHTML = `<a href="firstProduct.html" class="card" id="card1"></a>`;
//     // Setting attributes and content
//     cardContainers.id = `card${id}`;
//     productsClone.querySelector(".categorys").textContent = categorys;
//     productsClone.querySelector(".productNames").textContent = name;
//     productsClone.querySelector(".productImages").src = image;
//     productsClone.querySelector(".productImages").alt = name;
//     productsClone.querySelector(".aboutProduct").textContent = about;

//     // Appending the product clone to the container
//     manyProduct.appendChild(productsClone);
//   });
// };
