import { connect } from '../database'

export const getUens = async (req, res) => {
    const db = await connect();

    let [uens] = await db.query(`SELECT id_uen, nombre_uen, direccion, telefono,
    email, longitud, latitud, estado, ciudad, tipos_uen
    FROM uens
    INNER JOIN ciudades ON uens.ciudades_id_ciudad=ciudades.id_ciudad
    INNER JOIN estados ON ciudades.estados_idestados=estados.idestados;`);
    res.json(uens);
}

export const getUensSelect = async (req, res) => {
    const db = await connect();

    let [uens] = await db.query(`SELECT id_uen, CONCAT(nombre_uen,' - (', ciudad,', ', estado,')') as uen
    FROM uens
    INNER JOIN ciudades ON uens.ciudades_id_ciudad=ciudades.id_ciudad
    INNER JOIN estados ON ciudades.estados_idestados=estados.idestados;`);
    res.json(uens);
}

export const getWppNumber = async (req, res) => {
    const db = await connect();

    let [uen] = await db.query(`SELECT num_wpp as number FROM uens
    WHERE id_uen = ?;`, req.body.uen);

    res.json(uen);
}