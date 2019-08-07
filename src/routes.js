const express = require("express");

const routes = express.Router();

const ContatoController = require("./controllers/ContatoController");

routes.post("/contato", ContatoController.store);
routes.get("/contato", ContatoController.index);
routes.post("/solicita", ContatoController.show);
routes.put("/contato/:id", ContatoController.update);
routes.delete("/contato/:id", ContatoController.delete);

module.exports = routes;
