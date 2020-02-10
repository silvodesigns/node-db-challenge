
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 255);
        tbl.boolean('done').notNullable().defaultTo(false);

    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description',255)
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')

    })

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 255);
    })
  
};

exports.down = function(knex) {
  
};
