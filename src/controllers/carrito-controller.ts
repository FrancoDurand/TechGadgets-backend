import { Request, Response } from 'express';
import { Carrito } from '../models/carrito';
import { ICarrito } from '../interfaces/icarrito';

class CarritoController {
    public static async agregar(req: Request, res: Response): Promise<void> {
        try {
            const carrito: ICarrito = req.body;
            const resultado = await Carrito.agregar(carrito);

            res.json({ resultado: resultado });
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async eliminar(req: Request, res: Response): Promise<void> {
        try {
            const { usuario_id, producto_id } = req.body;
            const resultado = await Carrito.eliminar(usuario_id, producto_id);

            res.json({ resultado: resultado });
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async getCarrito(req: Request, res: Response): Promise<void> {
        try {
            const { usuario_id } = req.body;
            const resultado = await Carrito.getCarrito(usuario_id);

            res.json(resultado);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async comprar(req: Request, res: Response): Promise<void> {
        try {
            const { usuario_id } = req.body;
            const resultado = await Carrito.comprar(usuario_id);

            res.json({ resultado: resultado });
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }
}

export default CarritoController;