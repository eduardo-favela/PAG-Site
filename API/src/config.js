import {config as dotenv} from 'dotenv';
dotenv();

export const config = {
    host: process.env.DB_HOST || '200.100.100.50',
    user:process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || '12345',
    database: process.env.DB_DATABASE || 'pag_system'
}