import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { userRoutes } from '../modules/user/user.route';
import { ProductRoutes } from '../modules/products/product.routes';
import { OrderRoutes } from '../modules/order/order.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/admin',
    route: userRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;