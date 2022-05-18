import { Router, Request, Response } from 'express';

import adminRoutes from './routes/adminRoutes'

const router = Router();

router.use("/admin", adminRoutes);

export default router
