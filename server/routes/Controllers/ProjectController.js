// Project controller
const express = require('express');
const ProjectRouter = express.Router();
const bodyParser = require('body-parser');
ProjectRouter.use(bodyParser.urlencoded({
  extended: true
}));
ProjectRouter.use(bodyParser.json());
const Project = require('../DatabaseModels/project.js');


// GetAll Projects
ProjectRouter.get('/', (request, result) => {
  Project.find({}, (err, res) => {
    if (err) {
      result.status(400).send(err);
    } else {
      result.status(200).send(res);
    }
  });
});

// GetById Project:id
ProjectRouter.get('/:id', (request, result) => {
  Project.findById(id, (err, prjct) => {
    if (err) {
      result.status(400).send(err);
    } else {
      result.status(200).send(prjct);
    }
  });
});

// Post Project
ProjectRouter.post('/', (request, result) => {
  Project.create({
      projectName: request.body.projectName,
      users: request.body.users,
      hoursSpent: request.body.hoursSpent
    }),
    (err, project) => {
      if (err) {
        result.status(400).json({
          project: null,
          succes: false
        });
      } else {
        result.status(200).json({
          project: project,
          succes: true,
        });
      }
    };
});

module.exports = ProjectRouter;
