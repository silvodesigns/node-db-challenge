
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: "car",
          description : "2010 Honda Civic"
        },
        {
          name: "Computer",
          description : "2017 MacBook Pro"
        },
        {
          name: "Internet",
          description : "wifi"
        }
      
      ]);
    });
};
