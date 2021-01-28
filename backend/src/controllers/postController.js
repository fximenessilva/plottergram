function postController(Post) {
  function getMethod(req, res) {
    const { postId } = req.params;
    Post.findById(postId, (errorFindPost, post) => (
      errorFindPost ? res.send(errorFindPost) : res.json(post)));
  }

  function deleteMethod(req, res) {
    const { postId } = req.params;
    Post.findByIdAndRemove(postId, (errorDeletePost, post) => (
      errorDeletePost ? res.send(errorDeletePost) : res.send(post)
    ));
  }

  function postMethod(req, res) {
    const { postId } = req.params;
    Post.findByIdAndUpdate(postId, (errorUpdatePost, post) => (
      errorUpdatePost ? res.send(errorUpdatePost) : res.send(post)
    ));
  }

  function putMethod(req, res) {
    const { postId } = req.params;

    Post.create(postId, (errorCreatePost, post) => (
      errorCreatePost ? res.send(errorCreatePost) : res.send(post)
    ));
  }

  return {
    getMethod, deleteMethod, postMethod, putMethod,
  };
}

module.exports = postController;
