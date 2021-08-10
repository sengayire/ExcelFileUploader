import { Router } from 'express';
import auth from './auth/auth.route';
import upload from './upload/upload.route';
import { multerUpload } from '../../../middleware/multer';

const router = Router();

router.use('/auth', auth);
router.use('/upload', multerUpload.single('file'), upload);

export default router;
