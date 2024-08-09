const { userController } = require("../controllers");

function userRouter(app) {
        app.get("/user",
        userController.getAllUsers
    )
}

module.exports = userRouter