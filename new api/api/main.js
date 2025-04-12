import "./style.css";
import "./product.css";
import products from "./api/products.json";
import manyproduct from "./api/manyproduct.json";
import { showProductContainer } from "./homeProductCards";
import { showProductContain } from "./manyProduct";

console.log(products);
console.log(manyproduct);

showProductContainer(products);
showProductContain(manyproduct);
