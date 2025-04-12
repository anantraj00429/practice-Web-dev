import "./style.css";
import "./product.css";
import products from "./api/products.json";
import manyproduct from "./api/manyproduct.json";
import { showProductContainer } from "./homeProductCards";
import { showProductContain } from "./manyProduct";
// const express = require("express");
// const main = express();
import express from "express";
import mongoose from "mongoose";

//
const MONGO_URL = "mongodb://127.0.0.1:27017/test";
async function app() {
  await mongoose.connect(MONGO_URL);
}

const main = express();

// const MONGO_URL = "mongodb://127.0.0.1:27017/test";
// async function app() {
//   await mongoose.connect(MONGO_URL);
// }

console.log(products);
console.log(manyproduct);

showProductContainer(products);
showProductContain(manyproduct);
