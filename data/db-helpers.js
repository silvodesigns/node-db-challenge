const db = require('./db-config.js');

module.exports ={
    findAll,
    createPost
}

function findAll() {
    //find all projects
    return db('projects');

}

function createPost(project){
    return db('projects')
        .insert(project)
        
}