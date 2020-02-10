const express = require('express');

const projects = require('../data/db-helpers');

const router = express.Router();

router.post('/', (req, res) => {
    const {project_id } = req.body;

    if(!project_id){
        res.status(500)
        res.json({err: 'id of an existing project must be provided'})
    }

   projects.findById(project_id).then(() =>{

    projects.addTask(req.body).then(task => {
        res.status(200)
        res.json(task)
    }).catch(() => {
        res.status(500);
        res.json({err: 'failed to post resource'})
    })
       
    }).catch(()=>{ res.status(500); res.json({err: 'the project id provided does not exist'})})
   

    
})


module.exports = router;