import express from "express";
import { ProductController } from "./productController";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("Please provide MONGO_URI in the environment variables");
}

const app = express();
app.use(express.json());

app.use(errorHandler);

app.use(logger);

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

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Mongo db connected >>>>");
  })
  .catch(() => {
    console.log("Failed to connect mongo db!");
  });

app.listen(3003, () => {
  console.log("Product service is running on 3003");
});
