const express = require('express');

const projects = require('../data/db-helpers');

const router = express.Router();

router.get('/', (req, res) => {
   projects.findAll().then( projects => {
       res.json(projects)
   }).catch(err => {
       res.status(500).json({err: 'failed to get projects'})
   })
})

router.post('/', (req, res) => {
    res.status(200).send("Hello from POST  Projects EndPoint")
})


module.exports = router;