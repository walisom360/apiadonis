'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ServicesSchema extends Schema {
	up() {
		this.create('services', (table) => {
			table.increments();
			table.string('name').notNullable();
			table.date('timer').notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('services');
	}
}

module.exports = ServicesSchema;
