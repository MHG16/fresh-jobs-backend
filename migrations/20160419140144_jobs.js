
exports.up = function(knex, Promise) {
  
return knex.schema.createTable('jobs', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('title').notNull();
		t.text('description').notNull();
		t.integer('minSalary').unsigned().notNull();
		t.integer('maxSalary').unsigned().notNull();
		t.integer('companyId').unsigned().notNull();
		t.integer('userId').unsigned().notNull();
	
	});



};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('jobs');
};
