import { OrderDataSource } from "./data-source";
import { OrderEntity } from "./orderModel";

export class OrderService {
  private orderRepository = OrderDataSource.getRepository(OrderEntity);

  async createOrder(order: Partial<OrderEntity>) {
    try {
      const newOrder = this.orderRepository.create(order);
      this.orderRepository.save(newOrder);
      return newOrder;
    } catch (error) {
      return null;
    }
  }
  async updateOrderStatus(id: string, status: string) {
    try {
      const order = await this.orderRepository.findOneBy({ id: id });
      if (order) {
        order.status = status;
        await this.orderRepository.save(order);
      }
      return order;
    } catch (error) {
      return null;
    }
  }
  async deleteOrder(id: string) {
    try {
      const result = await this.orderRepository.delete(id);
      return result.affected !== 0;
    } catch (error) {
      return false;
    }
  }
  async getOrderById(id: string) {
    try {
      return await this.orderRepository.findOneBy({ id: id });
    } catch (error) {
      return null;
    }
  }
  async getAllOrders() {
    try {
      return await this.orderRepository.find();
    } catch (error) {
      return null;
    }
  }
}
