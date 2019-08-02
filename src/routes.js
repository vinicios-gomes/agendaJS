const express = require("express");

const routes = express.Router();

const ContatoController = require("./controllers/ContatoController");

routes.post("/contato", ContatoController.createContato);
routes.get("/contato", ContatoController.listContato);
routes.get("/contato/:id", ContatoController.showContato);
routes.put("/contato/:id", ContatoController.atualizaContato);
routes.delete("/contato/:id", ContatoController.deletaContato);
// routes.get("/contato", (req, res) => {});

module.exports = routes;
