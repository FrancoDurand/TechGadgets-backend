import { Router } from 'express';
import IntegranteController from '../controllers/integrante-controller';

const integranteRouter = Router();

integranteRouter.get('/integrantes', IntegranteController.getIntegrantes);

export { integranteRouter }
