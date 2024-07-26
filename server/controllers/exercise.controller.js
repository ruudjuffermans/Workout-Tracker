const {userHandler} = require("../handlers");

const readAllUsers = async (req, res) => {
  const handlerResponse = await userHandler.readAllUsers(req.db);
  res.status(200).json(handlerResponse);
};

module.exports = { readAllUsers };
