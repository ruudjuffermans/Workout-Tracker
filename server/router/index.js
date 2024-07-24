const userRouter = require("./user.router");

function router(app) {
  userRouter(app);
}

module.exports = router;
