require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/server-status", (req, res) => {
    res.status(200).json({ message: "Server is up and running!" });
  });

  
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}!`));