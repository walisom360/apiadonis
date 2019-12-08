'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CompanyLocationSchema extends Schema {
	up() {
		this.create('company_locations', (table) => {
			table.increments();
			table.string('location').notNullable();
			table.integer('company_id').unsigned().references('id').inTable('companies').notNullable();
			table.timestamps();
		});
	}

	down() {
		this.drop('company_locations');
	}
}

module.exports = CompanyLocationSchema;
