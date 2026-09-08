import mongoose, { Document, Schema } from "mongoose";

export interface Product extends Document {
  name: string;
  description?: string;
  price: number;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const ProductModel = mongoose.model<Product>("Product", ProductSchema);
export { ProductModel };
