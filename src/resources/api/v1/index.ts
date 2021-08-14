import { Router } from 'express';
import auth from './auth/auth.route';
import upload from './upload/upload.route';
import users from './users/users.route';

import { multerUpload } from '../../../middleware/multer';

const router = Router();

router.use('/auth', auth);
router.use('/upload', multerUpload.single('file'), upload);
router.use('/users', users);

export default router;
