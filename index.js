const express = require('express');

const server= express();

server.get('/', (req, res) => {
    res.send('Hello from server api')
})

server.get('/projects', (req, res) => {
    //retrieves all projects
    res.send('Hello from projects api')
})

server.post('/projects', (req, res) => {
    //adds a project
    res.send('Hello from projects api')
})

server.get('/resources', (req, res) => {
    //retrieves all resources
    res.send('Hello from projects api')
})

server.post('/resources', (req, res) => {
    //adds a resource
    res.send('Hello from projects api')
})
server.get('/tasks', (req, res) => {
    //retrieves tasks
    res.send('Hello from projects api')
})

server.post('/tasks', (req, res) => {
    //adds a task
    res.send('Hello from projects api')
})




server.listen(4000, () => {
    console.log("API is now up and running")
})