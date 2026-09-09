import { DataSource } from "typeorm";
import { OrderEntity } from "./orderModel";

export const OrderDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "akhilxavierpaul",
  password: "my_password",
  database: "my_app_db",
  entities: [OrderEntity],
  synchronize: true,
  dropSchema: false,
});
