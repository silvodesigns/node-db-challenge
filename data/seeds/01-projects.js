
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { 
          name: "Build an offline application",
          description: "an application to help you read offline"

        },
        { 
          name: "Rebuild a website",
          description: "redesign a website and make it responsive"

        }
      
      ]);
    });
};
