import express from "express";
import { ProductController } from "./productController";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.use(() => {
  console.log("Error handler");
});

app.use(() => {
  console.log("Logger");
});

const productController = new ProductController();

app.get("/products", productController.getAllProducts.bind(productController));

app.get(
  "/products/:id",
  productController.getProductById.bind(productController),
);

app.post("/products", productController.createProduct.bind(productController));

app.put(
  "/products/:id",
  productController.updateProduct.bind(productController),
);

app.delete(
  "/products/:id",
  productController.deleteProduct.bind(productController),
);

// mongoose
//   .connect("")
//   .then(() => {})
//   .catch(() => {});

app.listen(3003, () => {
  console.log("Product service is running on 3003");
});
