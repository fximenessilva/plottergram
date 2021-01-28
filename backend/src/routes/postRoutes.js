const express = require('express');

const postController = require('../controllers/postController');
const postsController = require('../controllers/postsController');

function postRouter(Post) {
  const router = express.Router();
  const post = postController(Post);
  const posts = postsController(Post);

  router.route('/')
    .get(posts.getMethod);

  router.route('/:postId')
    .get(post.getMethod)
    .delete(post.deleteMethod)
    .post(post.postMethod)
    .put(post.putMethod);

  return router;
}

module.exports = postRouter;
