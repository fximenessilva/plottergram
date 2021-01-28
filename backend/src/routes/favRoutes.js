const express = require('express');

const favController = require('../controllers/favController');
const favsController = require('../controllers/favsController');

function favRouter(Fav) {
  const router = express.Router();
  const fav = favController(Fav);
  const favs = favsController(Fav);

  router.route('/')
    .get(favs.getMethod);

  router.route('/:favId')
    .get(fav.getMethod)
    .delete(fav.deleteMethod)
    .post(fav.postMethod)
    .put(fav.putMethod);

  return router;
}

module.exports = favRouter;
