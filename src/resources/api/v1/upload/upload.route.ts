import { Router } from 'express';

import verifyToken from '../../../../middleware/verifyToken';
import * as controller from './upload.controller';

const router = Router();

router.post('/', verifyToken, controller.uploadFile);

export default router;
