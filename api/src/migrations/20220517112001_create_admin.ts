import * as Knex from 'knex';

/**
 * Create table `admin`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('admin', (table: Knex.TableBuilder) => {
    table.increments();
    table.string('email').unique().notNullable()
    table.string('password').unique().notNullable()
    table
      .timestamp('created_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo(knex.raw('now()'));
  });
}

/**
 * Drop `admin`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex: Knex) {
  return knex.schema.dropTable('admin');
}
