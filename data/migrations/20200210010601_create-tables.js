
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
        tbl.integer('project_id')
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

    .createTable('projects_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')

        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
        tbl.primary(['project_id', 'resource_id'])
    })
  
};

exports.down = function(knex) {
    //remember to drop tables in reverser order
    return knex.schema  
        .dropTableIfExists('projects_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
  
};
