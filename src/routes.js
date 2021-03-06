const express = require("express");

const routes = express.Router();

const ContatoController = require("./controllers/ContatoController");
const PesquisaController = require("./controllers/PesquisaController");

routes.post("/contato", ContatoController.store);
routes.get("/contato", ContatoController.index);
routes.get("/contato/:id", ContatoController.show);
routes.put("/contato/:id", ContatoController.update);
routes.delete("/contato/:id", ContatoController.delete);
routes.post("/pesquisa/:id", PesquisaController.show);

module.exports = routes;
