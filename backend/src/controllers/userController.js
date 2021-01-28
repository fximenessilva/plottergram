/* eslint-disable consistent-return */
function userController(user) {
  function getMethod(req, res) {
    const { userId } = req.params;
    const getCallback = (errorFindUser, userData) => (
      errorFindUser ? res.send(errorFindUser) : res.send(userData));
    user.findById(userId)
      .populate('post', 'favs')
      .exec(getCallback);
  }

  function putMethod({ body }, res) {
    const { email } = body.user;

    user.findOne({ email }, (errorPutUser, userFound) => {
      if (userFound) {
        return res.json(userFound);
      }
      const newUser = {
        name: body.user.name,
        email: body.user.email,
      };
      const putCallback = (createUserError, createdUser) => (
        createUserError ? res.send(createUserError) : res.json(createdUser));
      user.create(newUser)
        .populate('post', 'favs')
        .exec(putCallback);
    });
  }
  return { getMethod, putMethod };
}

module.exports = userController;
