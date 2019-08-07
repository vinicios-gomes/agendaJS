const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
mongoose.set("useFindAndModify", false);
const cors = require("cors");

const app = express();

const server = require("http").Server(app);

mongoose.connect("mongodb://localhost:27017/nodedev", {
  useNewUrlParser: true
});

app.use(cors());

app.use(express.json());

app.use(routes);

server.listen(3333, () => {
  console.log("Server Running on port 3333");
});
