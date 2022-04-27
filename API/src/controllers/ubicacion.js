import {connect} from '../database'

export const getUens = async (req, res)=>{
    const db = await connect();

    let [uens] = await db.query(`SELECT id_uen, nombre_uen, direccion, telefono,
    email, longitud, latitud, estado, ciudad, tipos_uen
    FROM uens
    INNER JOIN estados ON uens.estados_idestados=estados.idestados
    INNER JOIN ciudades ON uens.ciudades_id_ciudad=ciudades.id_ciudad;`);
    res.json(uens);
}