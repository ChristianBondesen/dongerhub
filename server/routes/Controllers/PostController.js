// UserController.js
const express = require('express');

const PostRouter = express.Router();

const bodyParser = require('body-parser');

const Post = require('../DatabaseModels/post.js');

PostRouter.use(bodyParser.urlencoded({
  extended: true
}));
PostRouter.use(bodyParser.json());

PostRouter.get('/', (req, result) => {
  Post.find({}, (err, res) => {
    if (err) {
      result.status(400).send(err);
    }
    result.status(200).send(res);
  });
});

PostRouter.post('/', (req, result) => {
  Post.create({
      post: req.body.post,
      author: req.body.author,
    },
    (err, user) => {
      if (err) {
        result.status(400).json({
          user: null,
          succes: false,
        });
      }
      result.json({
        user,
        succes: true,
      });
    }
  );
});

module.exports = PostRouter;
