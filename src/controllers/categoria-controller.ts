import { Request, Response } from 'express';
import { Categoria } from '../models/categoria';

class CategoriaController {
    public static async getCategorias(req: Request, res: Response): Promise<void> {
        try {
            const resultado = await Categoria.getCategorias();
            res.json(resultado);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async getCategoria(req: Request, res: Response): Promise<void> {
        try {
            const categoria: Categoria = req.body;
            const resultado = await Categoria.getCategoria(categoria);
            res.json(resultado);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }
}

export default CategoriaController;