const express = require('express');

const projectsRoutes = require('./projects/projectsRoute');
const resourcesRoutes = require('./resources/resourcesRoutes');


const server= express();

server.use(express.json());

//different routes in my server
server.use('/projects', projectsRoutes);
server.use('/resources', resourcesRoutes);



server.get('/', (req, res) => {
    res.send('Hello from server api')
})

server.listen(4000, () => {
    console.log("API is now up and running")
})