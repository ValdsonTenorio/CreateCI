exports.up = function(knex) {
  return knex.schema.createTable('products', function(table) {
    table.increments('id').primary();
    table.string('name', 255).notNullable();
    table.decimal('price').notNullable();
    table.integer('quantity').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('products');
};