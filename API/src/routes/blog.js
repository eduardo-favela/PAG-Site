import {Router} from 'express';
import {getPosts} from '../controllers/blog'
import {getPost} from '../controllers/blog'
import {getPostImage} from '../controllers/blog'

const router = Router()

router.get('/getPosts',getPosts);
router.post('/getPost',getPost);
router.post('/getPostImage',getPostImage);

export default router