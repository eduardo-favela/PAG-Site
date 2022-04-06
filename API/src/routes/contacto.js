import {Router} from 'express';
import {getSelectInfo} from '../controllers/contacto'
import {getCiudades} from '../controllers/contacto'
import {enviarCorreo} from '../controllers/contacto'
import {guardarContacto} from '../controllers/contacto'
import {getUnidadesMedida} from '../controllers/contacto'

const router = Router()

router.get('/getSelectInfo',getSelectInfo);

router.post('/getCiudades',getCiudades);

router.post('/enviarCorreo',enviarCorreo);

router.post('/guardarContacto',guardarContacto);

router.post('/getUnidadesMedida',getUnidadesMedida);

export default router