const express = require('express');

const projectsRoutes = require('./projects/projectsRoute');

const server= express();

server.use(express.json());
server.use('/projects', projectsRoutes);


server.get('/', (req, res) => {
    res.send('Hello from server api')
})

server.listen(4000, () => {
    console.log("API is now up and running")
})