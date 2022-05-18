import { Router } from 'express';

import * as adminController from '../controllers/admin';
import { adminValidator, checkAdminExists } from '../validators/adminValidator';

const router = Router();
/**
 * POST /admin/signup
 */
router.post('/signup', adminValidator, checkAdminExists, adminController.create);

/**
 * POST /admin/signin
 */
router.post('/signin', adminValidator, adminController.login);

export default router;
