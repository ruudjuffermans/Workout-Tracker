const {userHandler} = require("../handlers");

const getAllUsers = async (req, res) => {
  const handlerResponse = await userHandler.getAllUsers(req.db);
  res.status(200).json(handlerResponse);
};

module.exports = { getAllUsers };
