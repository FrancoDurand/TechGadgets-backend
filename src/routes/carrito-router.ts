import { Router } from 'express';
import CarritoController from '../controllers/carrito-controller';

const carritoRouter = Router();

carritoRouter.post('/carrito/agregar', CarritoController.agregar);
carritoRouter.delete('/carrito/eliminar', CarritoController.eliminar);
carritoRouter.post('/carrito', CarritoController.getCarrito);
carritoRouter.delete('/carrito/comprar', CarritoController.comprar);

export { carritoRouter }
