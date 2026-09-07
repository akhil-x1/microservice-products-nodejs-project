import express from "express";

const app = express();
app.use(express.json());

app.use(() => {
  console.log("Error handler");
});
app.use(() => {
  console.log("Logger");
});

app.get("/orders", () => {});
app.get("/orders/:id", () => {});
app.post("/orders", () => {});
app.put("/orders/:id", () => {});
app.delete("orders/:id", () => {});

app.listen(3002, () => {
  console.log("Order service running on port 3002");
});
