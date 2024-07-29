export const homeQuantityToggle = (event, id, stock) => {
	const currentCardElement = document.querySelector(`#pcard${id}`);

	// Check if currentCardElement is null
	if (!currentCardElement) {
		console.error(`Element with ID #pcard${id} not found.`);
		return;
	}

	const productQuantity =
		currentCardElement.querySelector(".productQuantity");

	console.log(currentCardElement);
	console.log(productQuantity);
	// Check if productQuantity is null
	// if (!productQuantity) {
	//   console.error("Product quantity element not found.");
	//   return;
	// }

	let quantity =
		parseInt(productQuantity?.getAttribute("data-quantity")) || 1;

	if (event.target.className === "cartIncrement") {
		if (quantity < stock) {
			quantity += 1;
		} else if (quantity === stock) {
			quantity = stock;
		}
	}

	if (event.target.className === "cartDecrement") {
		if (quantity > 1) {
			quantity -= 1;
		}
	}

	productQuantity.innerText = quantity;
	console.log(quantity);
	productQuantity.setAttribute("data-quantity", quantity.toString());
	return quantity;
};
