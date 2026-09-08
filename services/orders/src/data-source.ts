import { DataSource } from "typeorm";
import { OrderEntity } from "./orderModel";

export const OrderDataSource = new DataSource({
  type: "postgres",
  host: "postgres",
  port: 5432,
  username: "my_username",
  password: "my_password",
  database: "orders_db",
  entities: [OrderEntity],
  synchronize: true,
  dropSchema: false,
});

OrderDataSource.initialize()
  .then(() => {
    console.log("Connected to postgres sql for order service");
  })
  .catch(() => {
    console.log("Error during data source initialization!");
  });
