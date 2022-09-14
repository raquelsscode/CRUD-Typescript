import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import ProductController from '../controllers/product.controller';
import UserController from '../controllers/user.controller';

const router = Router();

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();

router.post('/products', productController.create);
router.get('/products', productController.getAll);
router.post('/users', userController.create);
router.get('/orders', orderController.getAll);

export default router;