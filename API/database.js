import {config} from './config'

import mysql from 'mysql2/promise'

import "core-js/stable";
import "regenerator-runtime/runtime";

export const connect = async()=>{
    return await mysql.createConnection(config)
}