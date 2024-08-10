const {workoutHandler} = require("../handlers");

const getAllWorkouts = async (req, res) => {
  const handlerResponse = await workoutHandler.getAllWorkouts(req.db);
  res.status(200).json(handlerResponse);
};

const getWorkoutById = async (req, res) => {
  const { id } = req.params;
  const handlerResponse = await workoutHandler.getWorkoutById(req.db, id)
  res.status(200).json(handlerResponse);
}

const createWorkout = async (req, res) => {
  const { name, description } = req.body;
  const handlerResponse = await workoutHandler.createWorkout(req.db, name, description)
  res.status(201).json(handlerResponse);
}

const updateWorkout = async (res, req) =>  {
  const { id } = req.params;
  const { name, description } = req.body;
  const handlerResponse = await workoutHandler.updateWorkout(req.db, id, name, description);
  res.status(200).json(handlerResponse);
}

module.exports = { getAllWorkouts, getWorkoutById, createWorkout, updateWorkout };
