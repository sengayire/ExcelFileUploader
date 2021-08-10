import { Router } from 'express';
import * as controller from './upload.controller';

const router = Router();

router.post('/', controller.uploadFile);

export default router;
