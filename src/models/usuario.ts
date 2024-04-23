import { IUsuario, IUsuarioRow } from '../interfaces/iusuario';
import { Database } from '../config/database';
import { ResultSetHeader } from 'mysql2';

class Usuario implements IUsuario {
    nombre: string;
    contraseña: string;

    constructor(usuario: IUsuario) {
        this.nombre = usuario.nombre || '';
        this.contraseña = usuario.contraseña || '';
    }

    public static async login(usuario: IUsuario): Promise<IUsuario> {
        try {
            const connection = await Database.connect();
            const query = 'SELECT id, nombre, contraseña FROM usuarios WHERE nombre = ? and contraseña = ?';
            const [rows] = await connection.query<IUsuarioRow[]>(query, [usuario.nombre, usuario.contraseña]);
            connection.release();
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    public static async register(usuario: IUsuario): Promise<boolean> {
        try {
            const connection = await Database.connect();
            const query = 'INSERT INTO usuarios(nombre, contraseña) VALUES (?,?)';
            const [rows] = await connection.query<ResultSetHeader>(query, [usuario.nombre, usuario.contraseña]);
            connection.release();
            return rows.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    }
}

export { Usuario } 