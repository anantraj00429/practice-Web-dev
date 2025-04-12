const manyProduct = document.querySelector("#productContain");
const manyTemplate = document.querySelector("#manyTemplate");

export const showProductContain = (manyproduct) => {
  if (!manyproduct || manyproduct.length === 0) {
    return false;
  }

  manyproduct.forEach((curProd) => {
    const { categorys, id, image, name, about } = curProd;

    const productsClone = document.importNode(manyTemplate.content, true);
    const cardContainers = productsClone.querySelector(".card"); // Selecting the card container

    // Setting attributes and content
    cardContainers.id = `card${id}`;
    productsClone.querySelector(".categorys").textContent = categorys;
    productsClone.querySelector(".productNames").textContent = name;
    productsClone.querySelector(".productImages").src = image;
    productsClone.querySelector(".productImages").alt = name;
    productsClone.querySelector(".aboutProduct").textContent = about;

    // Creating and appending link
    const link = document.createElement("a");
    link.href = `productDetails.html?id=${id}`; // Assuming productDetails.html is your product detail page
    // link.textContent = "View Details"; // Text for the link, you can change it as per your requirement
    cardContainers.appendChild(link);

    // Appending the product clone to the container
    manyProduct.appendChild(productsClone);

    cardContainers.addEventListener("click", () => {
      window.location.href = link.href;
    });
  });
};
