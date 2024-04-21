import { IProducto, IProductoRow } from '../interfaces/iproducto';
import { Database } from '../config/database';

class Producto implements IProducto {
    id: number;
    nombre: string;
    categoria_id: number;
    precio: number;
    marca: string;
    ruta_img: string;

    constructor(producto: IProducto) {
        this.id = producto.id || 0;
        this.nombre = producto.nombre || '';
        this.categoria_id = producto.categoria_id || 0;
        this.precio = producto.precio || 0;
        this.marca = producto.marca || '';
        this.ruta_img = producto.ruta_img || '';
    }

    public static async getProductos(): Promise<Producto[]> {
        try {
            const connection = await Database.connect();
            const query = 'SELECT * FROM productos';
            const [rows] = await connection.query<IProductoRow[]>(query);
            connection.release();
            return rows;
        } catch (error) {
            throw error;
        }
    }

    public static async getProductosId(id: number): Promise<Producto> {
        try {
            const connection = await Database.connect();
            const query = 'SELECT * FROM productos WHERE id = ?';
            const [rows] = await connection.query<IProductoRow[]>(query, [id]);
            connection.release();
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    public static async getProductosCategoria(categoria_id: number): Promise<Producto[]> {
        try {
            const connection = await Database.connect();
            const query = 'SELECT * FROM productos WHERE categoria_id = ?';
            const [rows] = await connection.query<IProductoRow[]>(query, [categoria_id]);
            connection.release();
            return rows;
        } catch (error) {
            throw error;
        }
    }
}

export { Producto }