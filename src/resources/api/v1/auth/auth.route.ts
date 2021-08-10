import { Router } from 'express';
import * as controller from './auth.controller';

const router = Router();

router.post('/', controller.login);

export default router;
