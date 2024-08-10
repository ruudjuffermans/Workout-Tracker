const { workoutController } = require("../controllers");

function workoutRouter(app) {
  app.get("/workout/:id", workoutController.getWorkoutById);
  app.get("/workout", workoutController.getAllWorkouts);
  app.post("/workout", workoutController.createWorkout);
  app.put("/workout/:id", workoutController.updateWorkout);
}

module.exports = workoutRouter;
