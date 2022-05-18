import { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';

import * as adminService from '../services/adminService';

/**
 * Create a new admin.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req: Request, res: Response, next: NextFunction) {
  adminService
    .createAdmin(req.body)
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(err));
}

/**
 * Login a admin.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req: Request, res: Response, next: NextFunction) {
  adminService
    .loginAdmin(req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}
