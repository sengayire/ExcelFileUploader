import { Router } from 'express';

import verifyToken from '../../../../middleware/verifyToken';
import * as controller from './users.controller';

const router = Router();

router.get('/', verifyToken, controller.users);
router.post('/', verifyToken, controller.saveUsers);

export default router;
