import {Router} from 'express';
import {getUens} from '../controllers/ubicacion'
import {getWppNumber} from '../controllers/ubicacion'

const router = Router()

router.get('/getUens',getUens);
router.post('/getWppNumber',getWppNumber);

export default router