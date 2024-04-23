import { Request, Response } from 'express';
import { Usuario } from '../models/usuario';
import { IUsuario } from '../interfaces/iusuario';

class UsuarioController {
    public static async login(req: Request, res: Response): Promise<void> {
        try {
            const usuario: IUsuario = req.body;
            const resultado = await Usuario.login(usuario);

            if (resultado)
                res.status(200).json(resultado);
            else
                res.status(401).json({ resultado: resultado, message: 'Credenciales invalidas' });
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }

    public static async register(req: Request, res: Response): Promise<void> {
        try {
            const usuario: IUsuario = req.body;
            const resultado = await Usuario.register(usuario);

            if (resultado)
                res.status(201).json({ resultado: resultado });
            else
                res.status(400).json({ resultado: resultado, message: 'El registro no fue exitoso' });
        }
        catch (e) {
            res.status(500).json({ message: 'Internal server error', error: e });
        }
    }
}

export default UsuarioController;