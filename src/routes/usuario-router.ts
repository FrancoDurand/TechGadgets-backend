import { Router } from 'express';
import UsuarioController from '../controllers/usuario-controller';

const usuarioRouter = Router();

usuarioRouter.post('/usuarios/inicio-sesion', UsuarioController.login);
usuarioRouter.post('/usuarios/registrar', UsuarioController.register);

export { usuarioRouter }
