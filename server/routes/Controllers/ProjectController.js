// Project controller
const express = require('express');

const ProjectRouter = express.Router();

const bodyParser = require('body-parser');

ProjectRouter.use(bodyParser.urlencoded({
  extended: true,
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
  Project.findById(request.params.id, (err, project) => {
    if (err) {
      result.status(400).send(err);
    } else {
      result.status(200).send(project);
    }
  });
});

// Post Project
ProjectRouter.post('/', (request, result) => {
  Project.create({
      projectName: request.body.projectName,
      users: request.body.users,
      hoursSpent: request.body.hoursSpent,
    },
    (err, project) => {
      if (err) {
        result.status(400).json({
          project: null,
          succes: false,
        });
      } else {
        result.status(200).json({
          project,
          succes: true,
        });
      }
    });
});

module.exports = ProjectRouter;
