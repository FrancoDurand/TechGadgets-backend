import { RowDataPacket } from 'mysql2';
import { IProducto } from './iproducto';

interface ICarrito {
    usuario_id: number;
    producto_id: number;
    cantidad: number;
}

interface ICarritoDetalle extends ICarrito, IProducto {
    subtotal: number;
}

interface ICarritoRow extends RowDataPacket, ICarrito { }
interface ICarritoDetalleRow extends RowDataPacket, ICarritoDetalle { }

export { ICarrito, ICarritoRow, ICarritoDetalle, ICarritoDetalleRow };