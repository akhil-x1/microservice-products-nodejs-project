import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar" })
  userId!: string;

  @Column("simple-array")
  productIds!: string[];

  @Column("decimal")
  total!: number;

  @Column({ type: "varchar" })
  status!: string;
}
