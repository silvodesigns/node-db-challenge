const db = require('./db-config.js');

module.exports ={
    findAll,
}

function findAll() {
    //find all projects
    return db('projects');

}