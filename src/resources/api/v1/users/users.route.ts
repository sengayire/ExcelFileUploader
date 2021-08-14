import { Router } from 'express';
import * as controller from './users.controller';

const router = Router();

router.get('/', controller.users);
router.post('/', controller.saveUsers);

export default router;
