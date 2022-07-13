import express from 'express';
import cors from 'cors'
import morgan from 'morgan'
import './database'
import "core-js/stable";
import "regenerator-runtime/runtime";

const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey  = fs.readFileSync(`${__dirname}/pvtky.pem`, 'utf8');
const certificate = fs.readFileSync(`${__dirname}/certificado.crt`, 'utf8');

const credentials = {key: privateKey, cert: certificate};

import contactoRoutes from './routes/contacto'
import ubicacionRoutes from './routes/ubicacion'
import blogRoutes from './routes/blog'

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/contacto', contactoRoutes);
app.use('/api/ubicacion',  ubicacionRoutes);
app.use('/api/blog', blogRoutes);



const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

httpServer.listen(3000);
httpsServer.listen(3650);

console.log('server on port 3000')
console.log('server https on port 3650');

/* app.listen(3000)
*/

/* var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
var certificate = fs.readFileSync('sslcert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express(); */

// your express configuration here

/* var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443); */