import { Request, Response } from 'express';
import { Producto } from '../models/producto';

class ProductoController {
    public static async getProductos(req: Request, res: Response): Promise<void> {
        try {
            const productos = await Producto.getProductos();
            res.json(productos);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async getProductosId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.body;
            const productos = await Producto.getProductosId(id);
            res.json(productos);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async getProductosCategoria(req: Request, res: Response): Promise<void> {
        try {
            const { categoria_id } = req.body;
            const productos = await Producto.getProductosCategoria(categoria_id);
            res.json(productos);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }
}

export default ProductoController;