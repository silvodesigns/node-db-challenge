const express = require('express');

const projects = require('../data/db-helpers');

const router = express.Router();

router.get('/', (req, res) => {
   projects.resourcesAll().then( resource => {
       res.json(resource)
   }).catch(err => {
       res.status(500).json({err: 'failed to get projects'})
   })
})

router.post('/', (req, res) => {
    projects.createResource(req.body).then(resource => {
        res.status(201);
        res.json(resource);
    }).catch(() => {
        res.status(500);
        res.json({err: 'failed to post resource'})
    })
})


module.exports = router;