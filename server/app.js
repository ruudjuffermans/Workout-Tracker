require("dotenv").config();
const express = require("express");
const router = require("./router");
const setupDb = require("./middlewares/setupDb");
const serverError = require("./middlewares/serverError");
const notFound = require("./middlewares/notFound");

const app = express();
const PORT = process.env.PORT || 3002;

app.get("/server-status", (req, res) => {
  res.status(200).json({ message: "Server is up and running!" });
});

app.use(setupDb);

router(app)

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}!`));

app.use(serverError);