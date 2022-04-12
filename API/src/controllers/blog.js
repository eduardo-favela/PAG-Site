import { connect } from '../database'
import fs from 'fs'

export const getPosts = async (req, res) => {
    const db = await connect();

    let [posts] = await db.query(`SELECT id_post, titulo, CONCAT(SUBSTRING(contenido, 1, 100), '...') AS contenido,
    imagen, fecha FROM posts ORDER BY fecha DESC;`);

    posts.forEach(post => {
        let imagesPath = require('path').join(`${__dirname}/../assets/posts-img/${post.imagen}`)
        let bitmap = fs.readFileSync(imagesPath, 'base64');
        post.imagen = bitmap
    });

    res.json(posts);
}

export const getPost = async (req, res) => {
    const db = await connect();

    let [post] = await db.query(`SELECT id_post, titulo, contenido, imagen, fecha 
    FROM posts
    WHERE id_post = ?
    ORDER BY fecha DESC;`, req.body.id);

    let imagesPath = require('path').join(`${__dirname}/../assets/posts-img/${post[0].imagen}`)
    let bitmap = fs.readFileSync(imagesPath, 'base64');

    post[0].imagen = bitmap

    res.json(post[0]);
}

export const getPostImage = async (req, res) => {
    let imagesPath = require('path').join(`${__dirname}/../assets/posts-img/${req.body.image}`)
    // read binary data
    let bitmap = fs.readFileSync(imagesPath, 'base64');

    res.json({ imagen: bitmap })
}