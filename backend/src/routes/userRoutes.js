const express = require('express');

const userController = require('../controllers/userController');
const usersController = require('../controllers/usersController');

function userRoutes(user) {
  const userRouter = express.Router();
  const userData = userController(user);
  const usersData = usersController(user);

  userRouter.route('/')
    .get(usersData.getMethod)
    .put(userData.putMethod);

  userRouter.route('/:userId')
    .get(userData.getMethod);

  return userRouter;
}

module.exports = userRoutes;
