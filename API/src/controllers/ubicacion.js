import { connect } from '../database'

export const getUens = async (req, res) => {
    const db = await connect();

    let [uens] = await db.query(`SELECT id_uen, nombre_uen, direccion, telefono,
    email, longitud, latitud, estado, ciudad, tipos_uen
    FROM uens
    INNER JOIN estados ON uens.estados_idestados=estados.idestados
    INNER JOIN ciudades ON uens.ciudades_id_ciudad=ciudades.id_ciudad;`);
    res.json(uens);
}

export const getWppNumber = async (req, res) => {
    const db = await connect();

    let [uen] = await db.query(`SELECT nombre_uen, num_wpp as telefono FROM ciudades_has_uens
    INNER JOIN ciudades on ciudades_has_uens.ciudad = ciudades.id_ciudad
    INNER JOIN estados on ciudades.estados_idestados = estados.idestados
    INNER JOIN uens on ciudades_has_uens.uen = uens.id_uen
    WHERE estado like '%${req.body.estado}%' and ciudades.ciudad like '%${req.body.ciudad}%';`);

    if (uen.length === 0) {
        [uen] = await db.query(`SELECT nombre_uen, num_wpp as telefono FROM estados_has_uens
        INNER JOIN estados on estados_has_uens.estados_has_uens_estado = estados.idestados
        INNER JOIN uens on estados_has_uens.estados_has_uens_uens = uens.id_uen WHERE estado like '%${req.body.estado}%';`);
        if (uen.length === 0) {
            res.json([{ nombre_uen: 'LAGUNA', telefono: '8711319784' }])
        }
    }
    else {
        res.json(uen);
    }
}