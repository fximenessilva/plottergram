/* eslint-disable consistent-return */
function userController(user) {
  function getMethod(req, res) {
    const { userId } = req.params;
    console.log(req.params);
    user.findById(userId, (errorFindUser, userData) => (
      errorFindUser ? res.send(errorFindUser) : res.send(userData)
    ));
  }

  function putMethod({ body }, res) {
    const { email } = body.user;
    console.log(email);

    user.findOne({ email }, (errorPutUser, userFound) => {
      if (userFound) {
        return res.json(userFound);
      }

      const newUser = {
        name: body.user.name,
        email: body.user.email,
      };
      user.create(newUser, (createUserError, createdUser) => {
        if (createUserError) {
          return res.send('error creating user');
        }
        return res.json(createdUser);
      });
    });
  }
  return { getMethod, putMethod };
}

module.exports = userController;
