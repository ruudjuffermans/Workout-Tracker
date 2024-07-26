const { exerciseController } = require("../controllers");

function exerciseRouter(app) {
    app.get(
        "/exercise",
        exerciseController.readAllExercise
    )
}

module.exports = exerciseRouter