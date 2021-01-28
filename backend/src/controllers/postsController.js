function postsController(Posts) {
  function getMethod(req, res) {
    const query = {};
    Posts.find(query, (errorFindPosts, posts) => (
      errorFindPosts ? res.send(errorFindPosts) : res.send(posts)
    ));
  }
  return {
    getMethod,
  };
}

module.exports = postsController;
