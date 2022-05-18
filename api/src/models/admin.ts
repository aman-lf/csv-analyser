 import bookshelf from '../db';

const TABLE_NAME = 'admin';

const Admin = bookshelf.model('Admin', {
  tableName: TABLE_NAME,
});

export default Admin;
