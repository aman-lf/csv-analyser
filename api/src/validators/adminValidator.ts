import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

import validate from '../utils/validate';
import * as adminService from '../services/adminService';

// Validation schema
const schema = Joi.object({
  email: Joi.string().label('Email').max(90).email().required(),
  password: Joi.string().label('Password').max(90).required(),
});

/**
 * Validate create/update admin request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function adminValidator(req: Request, res: Response, next: NextFunction) {
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate admins existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function checkAdminExists(req: Request, res: Response, next: NextFunction) {
  return adminService
    .checkEmail(req.body.email)
    .then(() => next())
    .catch((err) => next(err));
}

export { adminValidator, checkAdminExists };
