function favController(Fav) {
  function getMethod(req, res) {
    const { favId } = req.params;

    Fav.findById(favId, (errorFindFav, fav) => (
      errorFindFav ? res.send(errorFindFav) : res.send(fav)
    ));
  }

  function deleteMethod(req, res) {
    const { favId } = req.params;

    Fav.findByIdAndRemove(favId, (errorDeleteFav, fav) => (
      errorDeleteFav ? res.send(errorDeleteFav) : res.send(fav)
    ));
  }

  function postMethod(req, res) {
    const { favId } = req.params;

    Fav.findByIdAndUpdate(favId, (errorUpdateFav, fav) => (
      errorUpdateFav ? res.send(errorUpdateFav) : res.send(fav)
    ));
  }

  function putMethod(req, res) {
    const { favId } = req.params;

    Fav.create(favId, (errorCreateFav, fav) => (
      errorCreateFav ? res.send(errorCreateFav) : res.send(fav)
    ));
  }

  return {
    getMethod, deleteMethod, putMethod, postMethod,
  };
}

module.exports = favController;
