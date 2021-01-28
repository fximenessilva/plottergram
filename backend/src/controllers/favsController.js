function favsController(Favs) {
  function getMethod(req, res) {
    const query = {};
    Favs.find(query, (errorFindFavs, favs) => (
      errorFindFavs ? res.send(errorFindFavs) : res.send(favs)
    ));
  }
  return {
    getMethod,
  };
}

module.exports = favsController;
