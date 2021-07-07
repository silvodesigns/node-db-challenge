const knex = require('knex');

const config = require('../knexfile.js');
//select the development object from knexs
const db = knex(config.development);

//export the db so we can use elsewhere
module.exports = db;