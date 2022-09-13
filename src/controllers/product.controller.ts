import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    
    const ProductCreated = await this.productService.create(product);
    res.status(StatusCodes.CREATED).json(ProductCreated);
  };
}
