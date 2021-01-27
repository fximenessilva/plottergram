function usersController(Users) {
  function getMethod(req, res) {
    const query = {};
    Users.find(query, (errorFindUsers, users) => (
      errorFindUsers ? res.send(errorFindUsers) : res.send(users)
    ));
  }
  return {
    getMethod,
  };
}

module.exports = usersController;
