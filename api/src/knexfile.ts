require('dotenv').config({ path: __dirname + '/../.env' });

// Default configuration for database connection
let connection = {
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  charset: 'utf8',
};

interface config {
  connection: Object,
  client: string|undefined,
  migrations: Object,
  seeds: Object

}

/**
 * Database configuration.
 */
const knexConfig: config = {
  connection,
  client: process.env.DB_CLIENT,
  migrations: {
    tableName: 'migrations',
    directory: './migrations',
    stub: './stubs/migration.stub'
  },
  seeds: {
    directory: './seeds',
    stub: './stubs/seed.stub'
  }
};

export default knexConfig
