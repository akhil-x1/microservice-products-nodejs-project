import express from "express";

const app = express();
app.use(express.json());

app.use(() => {
  console.log("Error handler");
});

app.use(() => {
  console.log("Logger");
});

app.get("/products", () => {});
app.get("/products/:id", () => {});
app.post("/products", () => {});
app.put("/products/:id", () => {});
app.delete("/products/:id", () => {});

app.listen(3003, () => {
  console.log("Product service is running on 3003");
});
