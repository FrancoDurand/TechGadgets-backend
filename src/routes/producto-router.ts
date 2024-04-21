import { Router } from 'express';
import ProductoController from '../controllers/producto-controller';

const productoRouter = Router();

productoRouter.get('/productos', ProductoController.getProductos);
productoRouter.post('/productos/categoria', ProductoController.getProductosCategoria);
productoRouter.post('/productos/id', ProductoController.getProductosId);

export { productoRouter }
