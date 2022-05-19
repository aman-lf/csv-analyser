import Boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import Admin from '../models/admin';

export interface IAdmin {
  email: string;
  password: string;
}

/**
 * Create new admin.
 *
 * @param   {Object}  admin
 * @returns {Promise}
 */
export function createAdmin(admin: IAdmin) {
  const hashedPassword = bcrypt.hashSync(admin.password, 10);

  return new Admin({
    email: admin.email,
    password: hashedPassword,
  }).save();
}

/**
 * Check email exists.
 *
 * @param   {String}  email
 * @returns {Promise}
 */
export function checkEmail(email: string) {
  return new Admin()
    .where('email', email)
    .count()
    .then((count) => {
      if (count === 0) return true;
      throw Boom.conflict('Admin already exists');
    })
    .catch(err => {
      throw err
    });
}

/**
 * Login a email.
 *
 * @param   {Object}  admin
 * @returns {Promise}
 */
export function loginAdmin(admin: IAdmin) {
  const SECRET = process.env.SECRET || 'SECRET';
  return new Admin()
    .where('email', admin.email)
    .fetch()
    .then((model) => {
      return bcrypt.compare(admin.password, model.get('password')).then((isMatch: boolean) => {
        if (isMatch) {
          const payload = {
            id: model.get('id'),
            email: model.get('email'),
            name: model.get('name'),
          };

          return { token: jwt.sign(payload, SECRET, { expiresIn: 60 * 5 }) };
        }
        throw Boom.unauthorized('Email or password is incorrect');
      });
    })
    .catch(Admin.NotFoundError, () => {
      throw Boom.unauthorized('User not found');
    });
}
