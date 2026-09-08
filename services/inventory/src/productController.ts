import { Request, Response } from "express";
import { ProductService } from "./productService";

export class ProductController {
  private productService = new ProductService();

  async createProduct(req: Request, res: Response) {
    try {
      const product = await this.productService.createProduct(req.body);
      if (!product) {
        return res.status(204).json({ message: "Error creating the order!" });
      }
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ message: "Error retrieving products!" });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const product = await this.productService.updateProduct(
        req.params.id,
        req.body,
      );
      if (!product) {
        return res.status(500).json({ message: "Product not found! " });
      }
      return res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: "Error updating product!" });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const success = await this.productService.deleteProduct(req.params.id);
      if (!success) {
        return res.status(204).json({ message: "Product not found!" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Error deleting product!" });
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const product = await this.productService.getProductById(req.params.id);
      if (!product) {
        return res.status(500).json({ message: "Product not found!" });
      }
      return res.status(204).json(product);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching product!" });
    }
  }

  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await this.productService.getAllProducts();
      if (!products) {
        return res.status(500).json({ message: "Products not found!" });
      }
      return res.status(204).json(products);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching products!" });
    }
  }
}
