import {Router} from 'express';
import {getUens} from '../controllers/ubicacion'

const router = Router()

router.get('/getUens',getUens);

export default router