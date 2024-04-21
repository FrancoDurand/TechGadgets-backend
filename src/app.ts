import express from 'express';
import cors from 'cors';
import path from 'path';
import { integranteRouter } from './routes/integrante-router';
import { productoRouter } from './routes/producto-router';
import { carritoRouter } from './routes/carrito-router';
import { usuarioRouter } from './routes/usuario-router';
import { categoriaRouter } from './routes/categoria-router';

const PORT = 3000;
const app = express();

app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, '../src/public')));

app.use(integranteRouter);
app.use(usuarioRouter);
app.use(categoriaRouter)
app.use(productoRouter);
app.use(carritoRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});