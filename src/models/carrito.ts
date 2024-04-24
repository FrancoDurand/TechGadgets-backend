import { ICarrito, ICarritoDetalle, ICarritoDetalleRow } from '../interfaces/icarrito';
import { Database } from '../config/database';
import { ResultSetHeader } from 'mysql2';

class Carrito implements ICarrito {
    usuario_id: number;
    producto_id: number;
    cantidad: number;

    constructor(carrito: ICarrito) {
        this.usuario_id = carrito.usuario_id || 0;
        this.producto_id = carrito.producto_id || 0;
        this.cantidad = carrito.cantidad || 0;
    }

    public static async agregar(carrito: ICarrito): Promise<boolean> {
        try {
            const connection = await Database.connect();
            const query = 'INSERT INTO carrito(usuario_id, producto_id, cantidad) VALUES (?,?,?)';
            const [rows] = await connection.query<ResultSetHeader>(query, [carrito.usuario_id, carrito.producto_id, carrito.cantidad]);
            connection.release();
            return rows.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    }

    public static async eliminar(usuario_id: number, producto_id: number): Promise<boolean> {
        try {
            const connection = await Database.connect();
            const query = 'DELETE FROM carrito WHERE usuario_id = ? AND producto_id = ?';
            const [rows] = await connection.query<ResultSetHeader>(query, [usuario_id, producto_id]);
            connection.release();
            return rows.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    }

    public static async getCarrito(usuario_id: number): Promise<ICarritoDetalle[]> {
        try {
            const connection = await Database.connect();
            const query = 'SELECT p.id, p.nombre, p.marca, p.precio, c.cantidad, (p.precio * c.cantidad) AS subtotal, p.ruta_img FROM carrito c JOIN productos p ON c.producto_id = p.id WHERE c.usuario_id = ?';
            const [rows] = await connection.query<ICarritoDetalleRow[]>(query, [usuario_id]);
            connection.release();
            return rows;
        } catch (error) {
            throw error;
        }
    }

    public static async comprar(usuario_id: number): Promise<boolean> {
        try {
            const connection = await Database.connect();
            const query = 'DELETE FROM carrito WHERE usuario_id = ?';
            const [rows] = await connection.query<ResultSetHeader>(query, [usuario_id]);
            connection.release();
            return rows.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    }
}

export { Carrito }