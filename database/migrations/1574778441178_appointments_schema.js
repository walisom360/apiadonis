'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AppointmentsSchema extends Schema {
	up() {
		this.create('appointments', (table) => {
			table.increments();
			table.integer('user_id').unsigned().references('id').inTable('users').notNullable();
			table.integer('epilator_id').unsigned().references('id').inTable('users').notNullable();
			table.date('date').notNullable();

			table.timestamps();
		});
	}

	down() {
		this.drop('appointments');
	}
}

module.exports = AppointmentsSchema;
