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
    projects.createPost(req.body).then(project => {
        res.status(201);
        res.json(project);
    }).catch(() => {
        res.status(500);
        res.json({err: 'failed to post project'})
    })
})


module.exports = router;