import { RowDataPacket } from 'mysql2';

interface IUsuario {
    nombre: string;
    contraseña: string;
}

interface IUsuarioRow extends RowDataPacket, IUsuario { }

export { IUsuario, IUsuarioRow };