const { exerciseController } = require("../controllers");

function exerciseRouter(app) {
  app.get("/exercise/:id", exerciseController.getExerciseById);
  app.get("/exercise", exerciseController.getAllExercises);
  app.post("/exercise", exerciseController.createExercise);
  app.put("/exercise/:id", exerciseController.updateExercise);
}

module.exports = exerciseRouter;
