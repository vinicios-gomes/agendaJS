const express = require("express");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
// const io = require("socker.io")(server);

mongoose.connect("mongodb://localhost:27017/nodedev", {
  useNewUrlParser: true
});

// app.use((req, res, next) => {
//   req.io = io;
//   next();
// });

app.use(cors());

app.use(express.json());

app.use(require("./routes"));

server.listen(3333, () => {
  console.log("Server Running on port 3333");
});
