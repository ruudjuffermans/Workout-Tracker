const exerciseRouter = require("./exercise.router");
const userRouter = require("./user.router");
const workoutRouter = require("./workout.router");

function router(app) {
  userRouter(app);
  exerciseRouter(app);
  workoutRouter(app);
}

module.exports = router;
