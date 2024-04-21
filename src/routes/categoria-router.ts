import { Router } from 'express';
import CategoriaController from '../controllers/categoria-controller';

const categoriaRouter = Router();

categoriaRouter.get('/categorias', CategoriaController.getCategorias);
categoriaRouter.post('/categorias/nombre', CategoriaController.getCategoria);

export { categoriaRouter }
