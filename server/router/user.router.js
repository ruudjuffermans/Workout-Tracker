const { userController } = require("../controllers");

function userRouter(app) {
  app.get("/user/:id", userController.getUserById);
  app.get("/user", userController.getAllUsers);
  app.post("/user", userController.createUser);
  app.put("/user/:id", userController.updateUser);
}

module.exports = userRouter;
