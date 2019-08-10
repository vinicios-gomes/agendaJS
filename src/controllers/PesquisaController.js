const Contato = require("../models/Contato");

class PesquisaController {
  async show(req, res) {
    const { nome } = req.body;

    const contato = await Contato.findOne({ nome });

    return res.json(contato);
  }
}

module.exports = new PesquisaController();
