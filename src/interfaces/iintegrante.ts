import { RowDataPacket } from 'mysql2';

interface IIntegrante {
    nombre: string;
    apellido: string;
}

interface IIntegranteRow extends RowDataPacket, IIntegrante { }

export { IIntegrante, IIntegranteRow };