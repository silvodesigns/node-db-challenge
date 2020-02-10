const express = require('express');

const server= express();

server.get('/', (req, res) => {
    res.send('Hello from server api')
})


server.listen(4000, () => {
    console.log("API is now up and running")
})