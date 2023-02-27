import {config as dotenv} from 'dotenv';
dotenv();

export const config = {
    host: process.env.DB_HOST || 'alfagamma.com.mx',
    user:process.env.DB_USER || 'sistemas_coord-web',
    password: process.env.DB_PASS || 'p4gW3b!@',
    database: process.env.DB_DATABASE || 'pag_system'
}