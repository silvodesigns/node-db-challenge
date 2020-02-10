const db = require('./db-config.js');

module.exports ={
    findAll,
    createPost,
    resourcesAll,
    createResource
}

function findAll() {
    //find all projects
    return db('projects');

}

function createPost(project){
    return db('projects')
        .insert(project)
        
}

function resourcesAll(){
    //find all resources
    return db('resources');
}

function createResource(resource){
    return db('resources')
        .insert(resource)
}