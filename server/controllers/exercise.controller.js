const {exerciseHandler} = require("../handlers");

const readAllExercises = async (req, res) => {
  const handlerResponse = await exerciseHandler.readAllExercises(req.db);
  res.status(200).json(handlerResponse);
};

module.exports = { readAllExercises };
