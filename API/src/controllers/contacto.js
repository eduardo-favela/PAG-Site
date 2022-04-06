import { connect } from '../database'
import nodemailer from 'nodemailer'


export const getSelectInfo = async (req, res) => {

    let infoSelects = {}

    const db = await connect();

    const [productos] = await db.query('SELECT id_producto as id, producto as field FROM productos order by producto;');
    infoSelects.productos = [...productos];

    const [infoSolicitada] = await db.query('SELECT id_info_solicitada as id, tipo_info as field FROM info_solicitada order by tipo_info;')
    infoSelects.infosolicitada = [...infoSolicitada];

    const [sucursales] = await db.query('SELECT id_uen as id, nombre_uen as field FROM uens order by nombre_uen;');
    infoSelects.sucursales = [...sucursales];

    const [estados] = await db.query('SELECT idestados as id, estado as field FROM estados order by estado')
    infoSelects.estados = [...estados];
    res.json(infoSelects);
}

export const getUnidadesMedida = async (req, res) => {
    const db = await connect();
    const [unidadesMedida] = await db.query(`SELECT unidades_de_medida.id_unidad_de_medida AS id, unidad_medida AS field
    FROM producto_has_umedida
    INNER JOIN unidades_de_medida ON producto_has_umedida.phum_has_umedida=unidades_de_medida.id_unidad_de_medida
    WHERE phum_has_producto = ?;`,req.body.producto);
    res.json(unidadesMedida)
}

export const getCiudades = async (req, res) => {
    const db = await connect();

    const [ciudades] = await db.query(`SELECT id_ciudad as id, ciudad as field FROM ciudades WHERE estados_idestados = ? order by ciudad`, req.body.estadoid)
    res.json(ciudades);
}

export const guardarContacto = async (req, res) => {
    const db = await connect();
    const [result] = await db.query(`INSERT INTO contactos_web SET nombre=?, apellidos=?,
    telefono=?, email=?,direccion=?,comentarios=?,empresa=?,estados_idestados=?,ciudades_id_ciudad=?, 
    productos_id_producto=?,info_solicitada_id_info_solicitada=?,
    uens_id_uen=?, unidad_medida=?,cantidad=?;`,[req.body.nombre,req.body.apellidos,req.body.telefono,
    req.body.email,req.body.direccion,req.body.comentarios,req.body.empresa,req.body.estado,req.body.ciudad,req.body.productoSelected,
    req.body.infoSolicitada,req.body.sucursal,req.body.uMedida,req.body.cantidad])
    res.json(result);
}

export const enviarCorreo = async (req, res) => {

    const db = await connect();
    const[result] = await db.query(`SELECT CONCAT(nombre,' ',apellidos) AS nombre, contactos_web.telefono, contactos_web.email, 
    contactos_web.direccion, comentarios, empresa, estado, ciudad, producto, tipo_info,
    nombre_uen, cantidad, unidades_de_medida.unidad_medida
    FROM contactos_web
    INNER JOIN estados ON contactos_web.estados_idestados=estados.idestados
    INNER JOIN ciudades ON contactos_web.ciudades_id_ciudad=ciudades.id_ciudad
    INNER JOIN productos ON contactos_web.productos_id_producto=productos.id_producto
    INNER JOIN info_solicitada ON contactos_web.info_solicitada_id_info_solicitada=info_solicitada.id_info_solicitada
    INNER JOIN uens ON contactos_web.uens_id_uen=uens.id_uen
    INNER JOIN unidades_de_medida ON contactos_web.unidad_medida=unidades_de_medida.id_unidad_de_medida
    WHERE id_contacto = ?;`,req.body.contactId)

    if(result){

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "mail.alfagamma.com.mx",
            port: 3535,
            secure: false, // use TLS
            auth: {
                user: "coord.softweb@alfagamma.com.mx",
                pass: "USCedu0902#",
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false,
            },
        });

        let mailDetails = {
            from: 'coord.softweb@alfagamma.com.mx',
            to: ['eduardo-favela@outlook.com','r.elizondo@alfagamma.com.mx'],
            subject: 'Reporte de servicio',
            html: `
        <head>
            <style>
            table, td, div, h1, p {font-family: "Montserrat", sans-serif;}
            </style>
        </head>
        <body style="margin:0;padding:0;">
            <table role="presentation"
            style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff; ">
            <tr>
                <td align="center" style="padding:0;">
                <table role="presentation"
                    style="width:500px;border-collapse:collapse;border:1px solid
                    #cccccc;border-spacing:0;text-align:left;">
                    <tr>
                    <td align="center" style="padding:40px 0 30px 0;border-bottom:
                        solid;border-bottom-width:0.5px;">
                        <img src="cid:PAG_Logo"
                        style="height:auto;display:block;width:450px" />
                    </td>
                    </tr>
                    <tr>
                    <td style="padding:36px 30px 42px 30px;">
                        <table role="presentation"
                        style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                        <tr>
                            <td style="color:#153643;">
                            <h1 style="text-align:center;font-size:24px;font-weight:bolder;">Formulario desde página web</h1>
                            <hr>
                            </td>
                        </tr>
                        <tr style="align-content: center;">
                            <td style="padding:0;">
                            <table role="presentation">
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px; 
                                color: #153643;border-right-width: thin;">
                                    Información solicitada
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].tipo_info}
                                </td>
                                </tr>
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px;border-right-color: black;
                                    border-right-width: thin;">
                                    Producto
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].producto}
                                </td>
                                </tr>
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px;
                                color:#153643; border-right-width: thin;">
                                    Cantidad aproximada
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].cantidad} ${result[0].unidad_medida}
                                </td>
                                </tr>
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px;border-right-color: black;
                                    border-right-width: thin;">
                                    Nombre
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].nombre}
                                </td>
                                </tr>
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px;
                                color:#153643; border-right-width: thin;">
                                    Teléfono
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].telefono}
                                </td>
                                </tr>
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px;border-right-color: black;
                                    border-right-width: thin;">
                                    Empresa
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].empresa}
                                </td>
                                </tr>
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px;
                                color:#153643; border-right-width: thin;">
                                    Correo
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].email}
                                </td>
                                </tr>
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px;border-right-color: black;
                                    border-right-width: thin;">
                                    Ciudad
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].ciudad}, ${result[0].estado}
                                </td>
                                </tr>
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px;
                                color:#153643; border-right-width: thin;">
                                    Sucursal
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].nombre_uen}
                                </td>
                                </tr>
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px;border-right-color: black;
                                    border-right-width: thin;">
                                    Dirección
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].direccion}
                                </td>
                                </tr>
                                <tr>
                                <th style="text-align: initial; width: 260px;padding: 5px;color:#153643;
                                border-right-width: thin;">
                                    Comentarios
                                </th>
                                <td style="padding: 5px;">
                                    ${result[0].comentarios}
                                </td>
                                </tr>
                            </table>
                            </td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px;border-bottom: solid;border-bottom-color: #d13138;border-top: solid;border-top-color: #d13138;text-align: center; border-top-width: 3px;border-bottom-width: 3px;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                            <tbody><tr>
                                <td style="padding:0;width:50%;text-align: center;" align="left">
                                <p style="margin:0;font-size:14px;line-height:16px;font-family:'Montserrat',sans-serif;">
                                    Poliestireno Alfa Gamma, 2022<br><a target="_blank" href="https://alfagamma.com.mx/" style="text-decoration:underline;">Visitar
                                        página</a>
                                    </p>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            </table>
            </body>`,
            attachments: [{
                filename: 'PAG.png',
                path: `${__dirname}/../assets/PAG.png`,
                cid: `PAG_Logo`
            }]
        }

        // send mail with defined transport object
        let info = await transporter.sendMail(mailDetails, function (err, data) {
            if (err) {
                console.log('Error Occurs', err);
                res.json(false)
            } else {
                console.log('Email sent successfully from ', mailDetails.to);
                res.json(true)
            }
        });
    }
}