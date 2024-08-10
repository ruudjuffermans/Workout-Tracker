const {exerciseHandler} = require("../handlers");

const getAllExercises = async (req, res) => {
  const handlerResponse = await exerciseHandler.getAllExercises(req.db);
  res.status(200).json(handlerResponse);
};

const getExerciseById = async (req, res) => {
  const { id } = req.params;
  const handlerResponse = await exerciseHandler.getExerciseById(req.db, id)
  res.status(200).json(handlerResponse);
}

const createExercise = async (req, res) => {
  const { name, type, description } = req.body;
  const handlerResponse = await exerciseHandler.createExercise(req.db, name, type, description)
  res.status(201).json(handlerResponse);
}

const updateExercise = async (res, req) =>  {
  const { id } = req.params;
  const { name, type, description } = req.body;
  const handlerResponse = await exerciseHandler.updateExercise(req.db, id, name, type, description);
  res.status(200).json(handlerResponse);
}

module.exports = { getAllExercises, getExerciseById, createExercise, updateExercise };
