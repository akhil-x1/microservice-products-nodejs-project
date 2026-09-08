import express from "express";
import { OrderController } from "./orderController";
import { OrderDataSource } from "./data-source";

const app = express();
app.use(express.json());

app.use(() => {
  console.log("Error handler");
});
app.use(() => {
  console.log("Logger");
});

const orderController = new OrderController();

app.get("/orders", orderController.getAllOrders.bind(orderController));
app.get("/orders/:id", orderController.getOrderById.bind(orderController));
app.post("/orders", orderController.createOrder.bind(orderController));
app.put("/orders/:id", orderController.updateOrderStatus.bind(orderController));
app.delete("orders/:id", orderController.deleteOrder.bind(orderController));

OrderDataSource.initialize()
  .then(() => {
    app.listen(3002, () => {
      console.log("Order service running on port 3002");
    });
  })
  .catch((error) => {
    console.log("Error", error);
  });
