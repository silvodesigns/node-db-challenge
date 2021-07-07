
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          name: "research offline applications",
          description: " do some diggin into offline first apps",
          project_id: 1
        },

        {
          name: "research responsive web site",
          description: " do some diggin into responsive apps",
          project_id: 2
        }

       
      ]);
    });
};
