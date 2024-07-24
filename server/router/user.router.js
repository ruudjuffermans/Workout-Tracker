const { userController } = require("../controllers");
const asyncHandler = require("../middlewares/asyncHandler")

function userRouter(app) {
        app.get("/user",
        userController.readAllUsers
    )
}

module.exports = userRouter