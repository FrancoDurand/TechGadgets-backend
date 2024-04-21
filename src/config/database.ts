import mysql, { Pool, PoolConnection } from 'mysql2/promise';
import fs from 'fs';
import dotenv from 'dotenv';
import { IIntegranteRow } from '../interfaces/iintegrante';

dotenv.config();

class Database {
    private static instance: Database;
    private static pool: Pool;

    static getInstance(): Database {
        if (!Database.instance)
            Database.instance = new Database();

        return Database.instance;
    }

    static async connect(): Promise<PoolConnection> {
        if (!Database.pool) {
            try {
                const sslOptions = {
                    ca: fs.readFileSync(process.env.DB_SSL_FILE_PATH || ''), // Ruta del archivo .pem
                };

                Database.pool = mysql.createPool({
                    host: process.env.DB_HOST || 'localhost',
                    user: process.env.DB_USER || 'root',
                    password: process.env.DB_PASSWORD || 'root',
                    database: process.env.DB_NAME || 'test',
                    connectionLimit: 2, // Número máximo de conexiones en el pool
                    ssl: sslOptions
                });
            }
            catch (e) {
                throw e;
            }
        }

        return Database.pool.getConnection();
    }

    public async getIntegrantes(): Promise<IIntegranteRow[]> {
        try {
            const connection = await Database.connect();
            const query = 'SELECT nombre, apellido FROM integrantes';

            const [rows] = await connection.query<IIntegranteRow[]>(query);
            connection.release();

            return rows;
        }
        catch (e) {
            throw e;
        }
    }

}

export { Database };