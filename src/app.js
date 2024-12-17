import express from 'express';
import config from './config';

import clientesRoutes from './routes/clientes.routes';

const app = express();

// Configuraciones
app.set('port', config.port || 3000)

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(clientesRoutes)



export default app;