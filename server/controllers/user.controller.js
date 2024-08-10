const {userHandler} = require("../handlers");

const getAllUsers = async (req, res) => {
  const handlerResponse = await userHandler.getAllUsers(req.db);
  res.status(200).json(handlerResponse);
};

const getUserById = async (req, res) => {
  const handlerResponse = await userHandler.getUserById(req.db, req.body.id);
  res.status(200).json(handlerResponse);
};

const createUser = async (res, req) => {
  const { first_name, last_name, email, password } = req.body;
  const handlerResponse = await userHandler.createUser(req.db, first_name, last_name, email, password);
  res.status(201).json(handlerResponse);
}

const updateUser = async (res, req) =>  {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body
  const handlerResponse = await userHandler.updateUser(req.db, id, first_name, last_name, email, password);
  res.status(200).json(handlerResponse);
}

module.exports = { getAllUsers, getUserById, createUser, updateUser };
