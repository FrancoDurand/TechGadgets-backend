import { RowDataPacket } from 'mysql2';

interface IProducto {
    id: number;
    nombre: string;
    categoria_id: number;
    precio: number;
    marca: string;
    ruta_img: string;
}

interface IProductoRow extends RowDataPacket, IProducto { }

export { IProducto, IProductoRow };