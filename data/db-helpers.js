const db = require('./db-config.js');

module.exports ={
    findAll,
    findById,
    createPost,
    resourcesAll,
    createResource,
    addTask
}

function findAll() {
    //find all projects
    return db('projects');

}

function findById(id){
     return db('projects')
            .where('id', id)
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
        .insert(resource);
}

function addTask(task) {
    return db('tasks')
         .insert(task)

}