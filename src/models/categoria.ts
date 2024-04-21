import { ICategoria, ICategoriaRow } from '../interfaces/icategoria';
import { Database } from '../config/database';

class Categoria implements ICategoria {
    id: number;
    nombre: string;
    ruta_img: string;
    descripcion: string;

    constructor(categoria: ICategoria) {
        this.id = categoria.id || 0;
        this.nombre = categoria.nombre || '';
        this.ruta_img = categoria.ruta_img || '';
        this.descripcion = categoria.descripcion || '';
    }

    public static async getCategorias(): Promise<Categoria[]> {
        try {
            const connection = await Database.connect();
            const query = 'SELECT * FROM categorias';
            const [rows] = await connection.query<ICategoriaRow[]>(query);
            connection.release();
            return rows;
        } catch (error) {
            throw error;
        }
    }

    public static async getCategoria(categoria: ICategoria): Promise<Categoria> {
        try {
            const connection = await Database.connect();
            const query = 'SELECT * FROM categorias WHERE nombre = ?';
            const [rows] = await connection.query<ICategoriaRow[]>(query, [categoria.nombre]);
            connection.release();
            return rows[0];
        } catch (error) {
            throw error;
        }
    }
}

export { Categoria } 