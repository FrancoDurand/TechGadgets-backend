import { RowDataPacket } from 'mysql2';

interface ICategoria {
    id: number;
    nombre: string;
    ruta_img: string;
    descripcion: string;
}

interface ICategoriaRow extends RowDataPacket, ICategoria { }

export { ICategoria, ICategoriaRow };