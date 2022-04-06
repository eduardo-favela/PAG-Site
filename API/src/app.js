import express from 'express';
import cors from 'cors'
import morgan from 'morgan'

import contactoRoutes from './routes/contacto'
import ubicacionRoutes from './routes/ubicacion'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/contacto',contactoRoutes);
app.use('/api/ubicacion',ubicacionRoutes);

export default app