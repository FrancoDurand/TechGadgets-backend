import { Request, Response } from 'express';
import { Database } from '../config/database';

class IntegranteController {
    public static async getIntegrantes(req: Request, res: Response): Promise<void> {
        try {
            const database = Database.getInstance();
            const integrantes = await database.getIntegrantes();
            res.json(integrantes);
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }
}

export default IntegranteController;