import { Request, Response } from "express";
import { OrderService } from "./orderService";

export class OrderController {
  private orderService = new OrderService();

  async createOrder(req: Request, res: Response) {
    try {
      const newOrder = this.orderService.createOrder(req.body);
      if (!newOrder) {
        return res.status(500).json({ message: "Failed to create an order!" });
      }
      return res.status(200).json({ message: "Created order succesfully!" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to create order!" });
    }
  }

  async updateOrderStatus(req: Request, res: Response) {
    try {
      const order = await this.orderService.updateOrderStatus(
        req.params.id,
        req.body.status,
      );
      if (!order) {
        return res
          .status(204)
          .json({ message: "Failed to update Order status!" });
      }
      return res
        .status(200)
        .json({ message: "Succesfully updated order status!" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Failed to update Order status!" });
    }
  }

  async deleteOrder(req: Request, res: Response) {
    try {
      const success = await this.orderService.deleteOrder(req.params.id);
      if (!success) {
        return res.status(204).json({
          message: "Order not found!",
        });
      }
      return res.status(200).json({ message: "Succesfully deleted order!" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to delete order!" });
    }
  }

  async getOrderById(req: Request, res: Response) {
    try {
      const order = await this.orderService.getOrderById(req.params.id);
      if (!order) {
        return res.status(204).json({ message: "Order not found!" });
      }
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch order!" });
    }
  }

  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await this.orderService.getAllOrders();
      if (!orders) {
        return res.status(200).json({ message: "No orders found!" });
      }
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch all orders!" });
    }
  }
}
